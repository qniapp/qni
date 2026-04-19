# apps/www/docs Jekyll 4.4.1 + config drift cleanup Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `apps/www/docs` を Jekyll `4.4.1` と現行の `qniapp/qni` / `https://qniapp.github.io/qni` metadata に揃え、`pnpm --dir apps/www build:docs` で repo 側から安全に消せる warning を保守的に減らす。

**Architecture:** current local `main` を基点に dedicated worktree を作り、まず baseline build と drift / warning をログで固定する。その後 `apps/www/docs/Gemfile` / `Gemfile.lock` / `_config.yml` だけを中心に更新し、Jekyll line と generated asset URL を現行公開先へ寄せる。最後に `faraday-retry` を最小追加して docs build の warning を静かにし、`apps/www/docs/**` に閉じた diff と reviewer 承認を確認してから `main` に統合する。

**Tech Stack:** Jekyll 4.4.1, Ruby 4.0.2, Bundler 4.0.10, Node.js 20.20.2, pnpm 10.33.0, GitHub Pages metadata plugin, GitHub Actions

---

## File Structure

### Files likely to change

- `apps/www/docs/Gemfile`: Jekyll を `~> 4.4` に pin し、`faraday-retry` を追加する
- `apps/www/docs/Gemfile.lock`: Jekyll / plugin / transitive gem を current line に更新する
- `apps/www/docs/_config.yml`: `repository` と `baseurl` を現行公開先へ揃える

### Files to inspect/reference only

- `docs/superpowers/specs/2026-04-19-apps-www-docs-jekyll-modernization-design.md`
- `apps/www/package.json`
- `apps/www/docs/_layouts/default.html`
- `apps/www/docs/_plugins/ruby_4_compat.rb`
- `apps/www/docs/.gitignore`
- `.github/workflows/ci.yml`
- `.github/workflows/pages.yml`

### Scope guard

今回の implementation diff で変更してよい path は原則として次のみ。

- `apps/www/docs/Gemfile`
- `apps/www/docs/Gemfile.lock`
- `apps/www/docs/_config.yml`
- `apps/www/docs/_plugins/ruby_4_compat.rb`（Jekyll 4.4.1 で不要と安全に証明できた場合のみ。未証明なら変更しない）

今回の lane では変更しない。

- `apps/www/**` の docs 以外
- `apps/tutorial/**`
- `html/**`
- repo-level workflow / script files
- docs layout / navigation / CDN / page content

`apps/www/docs/_site/**` は generated output であり、手編集も commit も行わない。

---

### Task 1: dedicated worktree と baseline を固定する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-19-apps-www-docs-jekyll-modernization-design.md`
- Reference: `apps/www/package.json`
- Reference: `apps/www/docs/Gemfile`
- Reference: `apps/www/docs/Gemfile.lock`
- Reference: `apps/www/docs/_config.yml`
- Reference: `apps/www/docs/_plugins/ruby_4_compat.rb`

- [ ] **Step 1: current local `main` から dedicated worktree を作成する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git switch main
git status --short --branch
git worktree add -b feat/www-docs-jekyll-modernization .worktrees/www-docs-jekyll-modernization main
```

Expected: current local `main`（spec / plan docs の local commit を含んでいてよい）を明示的な base にして `.worktrees/www-docs-jekyll-modernization` が作成される。

- [ ] **Step 2: worktree で toolchain と依存を揃える**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization
mise trust . >/dev/null 2>&1 || true
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm install --frozen-lockfile'
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization/apps/www/docs
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: worktree 上でも root pnpm deps と `apps/www/docs` の Ruby deps が current main と同条件で揃う。

- [ ] **Step 3: baseline docs build を実行して drift / warning をログで固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'set -o pipefail; pnpm build:docs 2>&1 | tee /tmp/qni-www-docs-baseline.log'
```

Expected: build 自体は PASS し、現状の drift / warning を含む baseline log が `/tmp/qni-www-docs-baseline.log` に残る。

- [ ] **Step 4: current unwanted state を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization
rg -n 'jekyll \(4\.2\.0\)' apps/www/docs/Gemfile.lock
ruby -e 'require "yaml"; c = YAML.load_file("apps/www/docs/_config.yml"); abort("unexpected repository") unless c["repository"] == "yasuhito/qni"; abort("unexpected baseurl") unless c["baseurl"] == "https://yasuhito.github.io/qni"; puts "baseline config OK"'
if ! grep -RFn 'https://yasuhito.github.io/qni' apps/www/docs/_site >/tmp/qni-www-docs-baseline-old-url.txt; then
  echo 'expected old docs URL in baseline generated output'
  exit 1
fi
head -n 5 /tmp/qni-www-docs-baseline-old-url.txt
rg -n 'To use retry middleware with Faraday v2\.0\+, install faraday-retry gem|Logger not initialized properly|Stevenson#initialize: does not call super probably' /tmp/qni-www-docs-baseline.log
```

Expected: current main が Jekyll `4.2.0`、old metadata、old absolute URL、faraday / Logger / Stevenson warning を持っていることが確認できる。

- [ ] **Step 5: baseline task は commit しない**

この task は観測のみ。commit しない。

### Task 2: Jekyll 4.4.1 と metadata drift correction を実装する

**Files:**

- Modify: `apps/www/docs/Gemfile`
- Modify: `apps/www/docs/Gemfile.lock`
- Modify: `apps/www/docs/_config.yml`
- Reference: `apps/www/docs/_plugins/ruby_4_compat.rb`

- [ ] **Step 1: RED を file content で固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization
rg -n 'gem .jekyll.' apps/www/docs/Gemfile
rg -n 'jekyll \(4\.2\.0\)' apps/www/docs/Gemfile.lock
ruby -e 'require "yaml"; c = YAML.load_file("apps/www/docs/_config.yml"); abort("unexpected repository") unless c["repository"] == "yasuhito/qni"; abort("unexpected baseurl") unless c["baseurl"] == "https://yasuhito.github.io/qni"; puts "RED config OK"'
```

Expected: unpinned Jekyll / old lock / old metadata が見つかる。

- [ ] **Step 2: `apps/www/docs/Gemfile` の Jekyll line を `~> 4.4` に pin する**

最終形の該当部分:

```ruby
# frozen_string_literal: true

source 'https://rubygems.org'

gem 'jekyll', '~> 4.4'

group :jekyll_plugins do
  gem 'jekyll-github-metadata'
  gem 'jekyll-gzip'
end

gem 'logger'
gem 'csv'
gem 'base64'
gem 'bigdecimal'

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
```

この step では `faraday-retry` はまだ追加しない。warning cleanup は Task 3 で分離する。

- [ ] **Step 3: `_config.yml` の metadata を current public values に揃える**

最終形:

```yml
title: Qni

exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - api

repository: qniapp/qni
baseurl: 'https://qniapp.github.io/qni'

plugins:
  - 'jekyll-github-metadata'
  - 'jekyll-gzip'
```

他の key は今回追加しない。

- [ ] **Step 4: docs gem stack を更新する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization/apps/www/docs
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle update jekyll jekyll-github-metadata jekyll-gzip'
```

Expected: `Gemfile.lock` が更新され、少なくとも Jekyll `4.4.1` が lock される。

- [ ] **Step 5: upgrade 後 build を実行して generated URL と warning 状態を再評価する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'set -o pipefail; pnpm build:docs 2>&1 | tee /tmp/qni-www-docs-upgrade.log'
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization
rg -n 'jekyll \(4\.4\.1\)' apps/www/docs/Gemfile.lock
ruby -e 'require "yaml"; c = YAML.load_file("apps/www/docs/_config.yml"); abort("bad repository") unless c["repository"] == "qniapp/qni"; abort("bad baseurl") unless c["baseurl"] == "https://qniapp.github.io/qni"; puts "config OK"'
if grep -RFn 'https://yasuhito.github.io/qni' apps/www/docs/_site; then
  echo 'unexpected old docs URL remains in generated output'
  exit 1
fi
if ! grep -RFn 'https://qniapp.github.io/qni' apps/www/docs/_site >/tmp/qni-www-docs-upgrade-new-url.txt; then
  echo 'expected current docs URL in generated output after upgrade'
  exit 1
fi
head -n 5 /tmp/qni-www-docs-upgrade-new-url.txt
rg -n 'Logger not initialized properly|Stevenson#initialize: does not call super probably' /tmp/qni-www-docs-upgrade.log || true
```

Expected: Jekyll `4.4.1` と current metadata が反映され、generated `_site/**` から old URL が消える。Logger / Stevenson warning はこの task の時点では消えていても残っていてもよく、Task 3 で approved な low-risk fix の範囲だけ再評価する。`faraday-retry` warning はこの task の時点では残っていてよい。

- [ ] **Step 6: Jekyll + metadata correction を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization
git add apps/www/docs/Gemfile apps/www/docs/Gemfile.lock apps/www/docs/_config.yml
git commit -m "build: upgrade www docs jekyll"
```

### Task 3: `faraday-retry` を最小追加して docs build warning を静かにする

**Files:**

- Modify: `apps/www/docs/Gemfile`
- Modify: `apps/www/docs/Gemfile.lock`

- [ ] **Step 1: RED を build log で固定する**

Run:

```bash
rg -n 'To use retry middleware with Faraday v2\.0\+, install faraday-retry gem' /tmp/qni-www-docs-upgrade.log
rg -n 'Logger not initialized properly|Stevenson#initialize: does not call super probably' /tmp/qni-www-docs-upgrade.log || true
```

Expected: `faraday-retry` warning が見つかる。Logger / Stevenson warning がまだ残っていればここで観測できるが、追加の修正は approved な low-risk docs-local fix を超えない範囲に限定する。

- [ ] **Step 2: `apps/www/docs/Gemfile` に `faraday-retry` を追加する**

追加位置は top-level gems の並びに寄せる。最終形の該当部分:

```ruby
gem 'logger'
gem 'csv'
gem 'base64'
gem 'bigdecimal'
gem 'faraday-retry'
```

他の unrelated gem は増やさない。

- [ ] **Step 3: lockfile を更新する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization/apps/www/docs
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: `Gemfile.lock` に `faraday-retry` が追加される。

- [ ] **Step 4: final docs build を実行し、allowed / disallowed warning を判定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'set -o pipefail; pnpm build:docs 2>&1 | tee /tmp/qni-www-docs-final.log'
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization
if rg -n 'To use retry middleware with Faraday v2\.0\+, install faraday-retry gem' /tmp/qni-www-docs-final.log; then
  echo 'unexpected faraday warning remains after adding faraday-retry'
  exit 1
fi
if rg -n 'Logger not initialized properly|Stevenson#initialize: does not call super probably' /tmp/qni-www-docs-final.log; then
  echo 'Logger/Stevenson warning still remains after the approved low-risk fixes; stop here and surface rather than broadening scope'
  exit 1
fi
rg -n 'GitHub Metadata: No GitHub API authentication could be found' /tmp/qni-www-docs-final.log || true
```

Expected: `faraday-retry` warning は消える。Logger / Stevenson warning も消えていれば lane を続行できる。もし Logger / Stevenson warning がまだ残る場合は、approved な low-risk fix の範囲を超えるので、そこで停止して scope を広げずに人へ戻す。`GitHub Metadata` API-auth warning は出てもよく、lane failure にしない。

- [ ] **Step 5: warning cleanup を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization
git add apps/www/docs/Gemfile apps/www/docs/Gemfile.lock
git commit -m "build: quiet www docs build warnings"
```

### Task 4: final verification・review・integration・cleanup を完了する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-19-apps-www-docs-jekyll-modernization-design.md`
- Reference: `docs/superpowers/plans/2026-04-19-apps-www-docs-jekyll-modernization.md`

- [ ] **Step 1: final docs verification を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'set -o pipefail; pnpm build:docs 2>&1 | tee /tmp/qni-www-docs-verify.log'
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization/apps/www/docs
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc "ruby -S bundle exec ruby -e 'require \"yaml\"; c = YAML.load_file(\"_config.yml\"); abort(\"bad repository\") unless c[\"repository\"] == \"qniapp/qni\"; abort(\"bad baseurl\") unless c[\"baseurl\"] == \"https://qniapp.github.io/qni\"; puts \"config OK\"'"
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization
if grep -RFn 'https://yasuhito.github.io/qni' apps/www/docs/_site; then
  echo 'unexpected old docs URL remains during final verification'
  exit 1
fi
if ! grep -RFn 'https://qniapp.github.io/qni' apps/www/docs/_site >/tmp/qni-www-docs-verify-new-url.txt; then
  echo 'expected current docs URL in generated output during final verification'
  exit 1
fi
head -n 5 /tmp/qni-www-docs-verify-new-url.txt
git diff --check
```

Expected: build は green、config values は正しく、generated docs から old URL は消え、diff quality も clean。

- [ ] **Step 2: branch diff が docs-only に閉じていることを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-jekyll-modernization
python - <<'PY'
import subprocess, sys
allowed = {
  'apps/www/docs/Gemfile',
  'apps/www/docs/Gemfile.lock',
  'apps/www/docs/_config.yml',
  'apps/www/docs/_plugins/ruby_4_compat.rb',
}
changed = set(filter(None, subprocess.check_output(['git', 'diff', '--name-only', 'main...HEAD'], text=True).splitlines()))
extra = sorted(changed - allowed)
if extra:
    print('Unexpected changed files:')
    for path in extra:
        print(path)
    sys.exit(1)
print('Diff scope OK')
PY
```

Expected: diff は `apps/www/docs/**` に閉じる。`ruby_4_compat.rb` を触っていなければ allowed set 内の 3 files のみになる。

- [ ] **Step 3: reviewer subagent で final plan/spec compliance を確認する**

Review context に含めるもの:

- spec path: `docs/superpowers/specs/2026-04-19-apps-www-docs-jekyll-modernization-design.md`
- plan path: `docs/superpowers/plans/2026-04-19-apps-www-docs-jekyll-modernization.md`
- final implementation diff
- explicit scope:
  - Jekyll `4.4.1`
  - `repository=qniapp/qni`
  - `baseurl=https://qniapp.github.io/qni`
  - low-risk warning cleanup only for `faraday-retry` and Logger / Stevenson warnings
  - `GitHub Metadata` API-auth warning is out of scope
  - no broader `apps/www` runtime / workflow / tutorial expansion

Expected: APPROVED。Issues Found の場合は worktree 内で修正し、Step 1-2 verification を再実行してから reviewer をやり直す。

- [ ] **Step 4: local `main` へ fast-forward merge する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git switch main
git status --short
git merge --ff-only feat/www-docs-jekyll-modernization
```

Expected: local `main` へ fast-forward merge される。

- [ ] **Step 5: canonical path で docs build を再確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'set -o pipefail; pnpm build:docs 2>&1 | tee /tmp/qni-www-docs-canonical.log'
cd /home/yasuhito/Work/qni
if rg -n 'To use retry middleware with Faraday v2\.0\+, install faraday-retry gem|Logger not initialized properly|Stevenson#initialize: does not call super probably' /tmp/qni-www-docs-canonical.log; then
  echo 'unexpected docs warnings remain on canonical main'
  exit 1
fi
git diff --check
```

Expected: canonical path でも docs build は green で、disallowed warnings は残らない。

- [ ] **Step 6: `origin/main` へ push し、GitHub Actions を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
git push origin main
HEAD_SHA=$(git rev-parse HEAD)
for workflow in "CI" "Deploy Pages" "CodeQL"; do
  run_id=$(gh run list --limit 20 --json databaseId,workflowName,headSha --branch main --jq ".[] | select(.headSha == \"${HEAD_SHA}\" and .workflowName == \"${workflow}\") | .databaseId" | head -n 1)
  test -n "$run_id"
  gh run watch "$run_id" --exit-status
done
```

Expected: 対象 headSha の `CI`, `Deploy Pages`, `CodeQL` を待機し、すべて success で完了する。

- [ ] **Step 7: worktree / branch を cleanup する**

Run:

```bash
cd /home/yasuhito/Work/qni
git worktree remove .worktrees/www-docs-jekyll-modernization
git branch -d feat/www-docs-jekyll-modernization
git rev-list --left-right --count origin/main...HEAD
```

Expected: worktree と branch が削除され、`origin/main...HEAD` は `0	0` になる。
