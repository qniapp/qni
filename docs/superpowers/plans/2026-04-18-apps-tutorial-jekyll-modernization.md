# apps/tutorial Jekyll modernization Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `apps/tutorial` を Jekyll 3.10 系から Jekyll 4.4 系へ保守的に更新し、Node/esbuild/tailwind の asset build を正本のまま維持しつつ、tutorial-only の drift / stale cleanup を最小限で回収する。

**Architecture:** まず dedicated worktree 上で tutorial lane の baseline を固定し、Jekyll / lockfile を 4.4 系へ更新する。その後、Jekyll 4 で露出した plugin / layout / config 差分だけを最小修正し、`README` の `yarn` drift と tutorial layout の明確な stale 記述だけを同じ lane で整理する。最後に `apps/tutorial` と生成 `html/` に差分を閉じたまま、Pages 前提・Linux lockfile・実用互換の spot check を通してから review / integration / GitHub Actions 確認まで行う。

**Tech Stack:** Jekyll 4.4.x, Ruby 4.0.2, Bundler 4.0.10, pnpm 10.33.0, Node.js 20.20.2, esbuild, Tailwind CSS, Liquid custom plugins, GitHub Pages Actions

---

## File Structure

### Files likely to change

Primary scope:

- `apps/tutorial/Gemfile`: tutorial の Jekyll target を 4.4 系へ明示する
- `apps/tutorial/Gemfile.lock`: Jekyll 4.4 系と現行 Bundler 解決結果を反映する
- `apps/tutorial/README.md`: `yarn` → `pnpm` など tutorial build drift を修正する
- `apps/tutorial/_layouts/default.html`: 重複タグや Jekyll 4 化で露出した最小の stale runtime/bootstrap 記述を整理する
- `apps/tutorial/_layouts/page.html`: Jekyll 4 互換のため必要な場合だけ触る
- `apps/tutorial/_plugins/*.rb`: Jekyll 4 互換のため必要な plugin だけ最小修正する
- `apps/tutorial/_config.yml` (必要な場合のみ新規作成): Jekyll 4 の default excludes / source discovery 差分が実害を出した場合だけ、最小設定を追加する

Generated artifacts:

- `html/**`: tutorial build の regenerated Pages output

### Files to inspect/reference only

- `apps/tutorial/package.json`
- `apps/tutorial/.gitignore`
- `.github/workflows/pages.yml`
- `scripts/check-pages-config.mjs`
- `scripts/check-local-build-env.mjs`
- `docs/superpowers/specs/2026-04-18-apps-tutorial-jekyll-modernization-design.md`
- `apps/www/docs/Gemfile`
- `apps/www/docs/Gemfile.lock`

### Scope guard

実装中に source diff として変更してよい範囲は原則:

- `apps/tutorial/**`
- `html/**`

のみとする。`apps/www/docs/**`、`scripts/check-pages-config.mjs`、`docs/tech-stack.md` など non-tutorial files は今回の lane では変更しない。

---

### Task 1: dedicated worktree と baseline を固定する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-18-apps-tutorial-jekyll-modernization-design.md`
- Reference: `apps/tutorial/package.json`
- Reference: `.github/workflows/pages.yml`
- Reference: `scripts/check-pages-config.mjs`

- [ ] **Step 1: dedicated worktree を作成する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git worktree add .worktrees/tutorial-jekyll-modernization -b feat/tutorial-jekyll-modernization origin/main
```

Expected: `origin/main` を基点に `.worktrees/tutorial-jekyll-modernization` が作成され、branch `feat/tutorial-jekyll-modernization` で分離して作業できる。

- [ ] **Step 2: worktree で toolchain を有効化する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
mise trust . >/dev/null 2>&1 || true
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; ruby -v && pnpm -v'
```

Expected: Ruby 4.0.2 と pnpm 10.33.0 が使える。

- [ ] **Step 3: clean worktree に依存を入れる**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm install --frozen-lockfile'
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization/apps/tutorial
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: new worktree でも root pnpm deps と `apps/tutorial` bundle が揃う。

- [ ] **Step 4: current tutorial stack を観測する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -rbundler -e "lock = Bundler::LockfileParser.new(Bundler.read_file(\"apps/tutorial/Gemfile.lock\")); %w[jekyll jekyll-sass-converter sass liquid].each{|n| s = lock.specs.find{|x| x.name == n}; puts [n, s&.version].join(\": \")}"'
rg -n "yarn build|yarn build:site|yarn start" apps/tutorial/README.md
```

Expected: `jekyll 3.10.0` / `jekyll-sass-converter 1.5.2` / `sass 3.7.4` と README の `yarn` drift を確認できる。

- [ ] **Step 5: baseline build を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build'
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization/apps/tutorial
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec jekyll build -d /tmp/qni-tutorial-site-baseline'
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build:site'
node scripts/check-pages-config.mjs
```

Expected: PASS。current main の tutorial lane が working baseline であることを確認する。

- [ ] **Step 6: baseline task は commit しない**

観測だけなので commit しない。

### Task 2: tutorial の Jekyll / lockfile を 4.4 系へ更新する

**Files:**

- Modify: `apps/tutorial/Gemfile`
- Modify: `apps/tutorial/Gemfile.lock`

- [ ] **Step 1: `apps/tutorial/Gemfile` の Jekyll target を 4.4 系へ明示する**

`apps/tutorial/Gemfile` の `gem 'jekyll'` を `~> 4.4` に更新する。その他の gem はこの時点では増やさず、upgrade に必要なものだけ lockfile 解決に委ねる。

- [ ] **Step 2: Bundler で tutorial lockfile を更新する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization/apps/tutorial
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle update jekyll'
```

Expected: `Gemfile.lock` が Jekyll 4.4 系に更新される。

- [ ] **Step 3: lockfile の主要 version と platform を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -rbundler -e "lock = Bundler::LockfileParser.new(Bundler.read_file(\"apps/tutorial/Gemfile.lock\")); %w[jekyll jekyll-sass-converter sass-embedded sassc sass].each{|n| s = lock.specs.find{|x| x.name == n}; puts [n, s&.version].join(\": \")}; puts \"platforms=\" + lock.platforms.map(&:to_s).sort.join(\",\")"'
```

Expected: `jekyll 4.4.x` と `jekyll-sass-converter 3.1.x` が見える。Linux platform が不足していたら次 step で追加する判断材料になる。

- [ ] **Step 4: 必要なら Linux platform を lockfile に追加する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization/apps/tutorial
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle lock --add-platform x86_64-linux'
```

Expected: Pages CI 向け Linux platform が lockfile に保持される。すでに含まれている場合は差分なしでよい。

- [ ] **Step 5: Linux platform を lockfile に必須条件として確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -rbundler -e "lock = Bundler::LockfileParser.new(Bundler.read_file(\"apps/tutorial/Gemfile.lock\")); exit(lock.platforms.map(&:to_s).include?(\"x86_64-linux\") ? 0 : 1)"'
```

Expected: PASS。`x86_64-linux` platform が lockfile に含まれない場合はここで FAIL させる。

- [ ] **Step 6: Jekyll stack update を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
git add apps/tutorial/Gemfile apps/tutorial/Gemfile.lock
git commit -m "build: upgrade tutorial jekyll stack"
```

### Task 3: Jekyll 4 互換差分を tutorial 内だけで最小修正する

**Files:**

- Modify if needed: `apps/tutorial/_plugins/*.rb`
- Modify if needed: `apps/tutorial/_layouts/default.html`
- Modify if needed: `apps/tutorial/_layouts/page.html`
- Create if needed: `apps/tutorial/_config.yml`

- [ ] **Step 1: upgraded Jekyll build を実行して failure surface を固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization/apps/tutorial
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec jekyll build -d /tmp/qni-tutorial-site-upgrade-red'
```

Expected: PASS ならそのまま次へ。FAIL なら failing plugin / layout / config assumption を 1 つずつ記録する。

- [ ] **Step 2: plugin / layout の root cause を 1 つずつ最小修正する**

対象候補:

- `apps/tutorial/_plugins/mini_qni_filter.rb`
- `apps/tutorial/_plugins/qubit_circle_filter.rb`
- `apps/tutorial/_plugins/qpu_operation_tag.rb`
- `apps/tutorial/_layouts/default.html`
- `apps/tutorial/_layouts/page.html`

方針:

- Jekyll 4 で壊れた箇所だけを直す
- tag/filter の全面置換はしない
- CDN/provider の入れ替えはしない

- [ ] **Step 3: default excludes / source discovery 差分が実害なら最小 `_config.yml` を追加する**

必要な場合のみ `apps/tutorial/_config.yml` を作り、最小限の `exclude` だけを定義する。候補は:

```yml
exclude:
  - node_modules/
  - .sass-cache/
  - vendor/
```

この file は **実害が証明された場合だけ** 作る。build が通るなら作らない。

- [ ] **Step 4: Jekyll build を再実行し、serve smoke は必要時だけ行う**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization/apps/tutorial
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec jekyll build -d /tmp/qni-tutorial-site-upgrade-green'
```

Expected: PASS。

補足:

- `jekyll serve` の smoke は、build は通るが local runtime/path 挙動の regress を疑う場合だけ追加で行う
- その場合も `--skip-initial-build` は使わず、別コマンドとして扱う

- [ ] **Step 5: Jekyll 4 compatibility fix を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
git add apps/tutorial/_plugins apps/tutorial/_layouts
if test -f apps/tutorial/_config.yml; then git add apps/tutorial/_config.yml; fi
if git diff --cached --quiet; then
  echo 'No Jekyll 4 compatibility diff to commit'
else
  git commit -m "build: fix tutorial jekyll 4 compatibility"
fi
```

互換修正が不要で diff 0 の場合でも、この形なら停止しない。

### Task 4: tutorial-only drift と最小 stale layout cleanup を入れる

**Files:**

- Modify: `apps/tutorial/README.md`
- Modify: `apps/tutorial/_layouts/default.html`

- [ ] **Step 1: tutorial README を pnpm 前提へ更新する**

`apps/tutorial/README.md` の `yarn build` / `yarn build:site` / `yarn start` を `pnpm` ベースに更新し、`html/` 出力の現状説明に合わせる。

- [ ] **Step 2: default layout の明確な stale 記述だけを整理する**

最低限、`apps/tutorial/_layouts/default.html` の次を対象にする。

- 重複している `<title>` の整理
- upgrade/検証で意味が無いと判明した最小の stale bootstrap/runtime 記述の整理

非対象:

- `MathJax` / `Orbit` / `Stimulus CDN` の provider 置換
- asset loading 方針の変更
- runtime dependency の包括的 redesign

- [ ] **Step 3: tutorial asset build と Jekyll build を再確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build && cd apps/tutorial && ruby -S bundle exec jekyll build -d /tmp/qni-tutorial-site-cleanup'
```

Expected: PASS。

- [ ] **Step 4: drift/cleanup diff を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
git add apps/tutorial/README.md apps/tutorial/_layouts/default.html
git commit -m "docs: refresh tutorial build and layout drift"
```

### Task 5: `html/` を再生成し、実用互換を spot check する

**Files:**

- Regenerate: `html/**`
- Reference: representative generated pages under `html/`

- [ ] **Step 1: tutorial Pages output を再生成する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build:site'
```

Expected: PASS。`html/**` が更新される。

- [ ] **Step 2: representative pages の存在と主要要素を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
test -f html/index.html
rg -q "application\.js" html/index.html
rg -q "application\.css" html/index.html
test -f html/qubit.html
rg -q "qubit-circle" html/qubit.html
test -f html/teleportation_circuit.html
rg -q "quantum-circuit" html/teleportation_circuit.html
```

Expected: 代表ページが存在し、主要 asset/markup/導線が gating check として確認できる。

- [ ] **Step 3: generated output の差分を実用互換観点で spot check する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
diff -u /tmp/qni-tutorial-site-baseline/index.html html/index.html || true
diff -u /tmp/qni-tutorial-site-baseline/qubit.html html/qubit.html || true
diff -u /tmp/qni-tutorial-site-baseline/teleportation_circuit.html html/teleportation_circuit.html || true
```

Expected: 差分があっても、意味のある regress（ページ欠落、主要導線消失、主要 embed 崩壊）が無いことを確認する。

- [ ] **Step 4: generated output commit を作る**

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
git add html
git commit -m "build: regenerate tutorial pages"
```

### Task 6: focused verification・review・integration・GitHub Actions 確認を完了する

**Files:**

- Verify only

- [ ] **Step 1: repo guard と scope guard を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
node scripts/check-pages-config.mjs
node scripts/check-local-build-env.mjs
git diff --check
DISALLOWED=$(git diff --name-only origin/main...HEAD | rg -v '^(apps/tutorial/|html/)' || true)
test -z "$DISALLOWED"
! git diff --name-only origin/main...HEAD | rg '^apps/www/docs/'
```

Expected:

- config checks PASS
- `git diff --check` PASS
- `apps/tutorial/**` と `html/**` 以外の path diff が無い
- `apps/www/docs/**` diff が無い

- [ ] **Step 2: focused tutorial verification を最終実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build && pnpm --dir apps/tutorial build:site'
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization/apps/tutorial
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec jekyll build -d /tmp/qni-tutorial-site-final'
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -rbundler -e "lock = Bundler::LockfileParser.new(Bundler.read_file(\"apps/tutorial/Gemfile.lock\")); exit(lock.platforms.map(&:to_s).include?(\"x86_64-linux\") ? 0 : 1)"'
```

Expected: PASS。tutorial build path・Pages path・`x86_64-linux` lock が成立する。

補足:

- root `pnpm run build/lint/typecheck/test:ci/size` は、今回の変更が `apps/tutorial/** + html/**` に閉じている限り **必須ではない**
- 実装中に scope が広がった場合や reviewer が broader regression risk を指摘した場合のみ、追加 safety net として実行する

- [ ] **Step 3: reviewer を実行する**

Review context:

- Spec: `docs/superpowers/specs/2026-04-18-apps-tutorial-jekyll-modernization-design.md`
- Plan: `docs/superpowers/plans/2026-04-18-apps-tutorial-jekyll-modernization.md`
- Base SHA: worktree branch base
- Head SHA: current HEAD
- Focus: Jekyll 4 lockfile correctness, plugin/layout compatibility, scope staying under `apps/tutorial/**` + `html/**`, Pages safety, README drift cleanup boundaries

- [ ] **Step 4: integration 候補として worktree branch を整え、main 反映は最後の判断に回す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-jekyll-modernization
git status --short --branch
```

Expected: clean。review 済み・検証済みの branch として提示できる。

- [ ] **Step 5: merge/push が許可された段階で main 反映と fresh GitHub Actions 確認を行う**

確認対象:

- CI
- Deploy Pages
- CodeQL

Expected: all green。Pages build が Linux 上で tutorial bundle/build を通し、deploy artifact `html/` を publish できる。
