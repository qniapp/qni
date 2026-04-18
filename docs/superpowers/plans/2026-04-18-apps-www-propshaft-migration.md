# apps/www Propshaft migration Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `apps/www` の asset pipeline を Sprockets から Propshaft へ保守的に置き換え、pnpm + jsbundling/cssbundling を正本のまま維持しつつ、public root の `manifest.json` / `serviceworker.js` / icon 配信を壊さない状態で着地させる。

**Architecture:** まず dedicated worktree 上で current working path を固定し、Propshaft migration の desired end-state を guard と focused Rails test で先に赤にする。その後、`sprockets-rails` / `manifest.js` / `assets.rb` を外して `propshaft.rb` に集約し、`app/assets/stylesheets` と `app/assets/javascripts` を excluded paths にすることで raw bundler input の露出を防ぐ。最後に production precompile / local production smoke / repo-level verification / reviewer / GitHub Actions まで通してから main へ統合する。

**Tech Stack:** Rails 7.2, Propshaft, Ruby 4.0.2, Node.js 20.20.2, pnpm 10.33.0, jsbundling-rails, cssbundling-rails, esbuild, Tailwind CSS, PostgreSQL, GitHub Actions

---

## File Structure

### Files likely to change

- `apps/www/Gemfile`: `sprockets-rails` を外し `propshaft` を導入する
- `apps/www/Gemfile.lock`: Propshaft 移行後の gem 解決を反映する
- `apps/www/config/application.rb`: `require 'sprockets/railtie'` を外す
- `apps/www/config/initializers/assets.rb`: Sprockets-era precompile list を削除する
- `apps/www/config/initializers/propshaft.rb`: Propshaft 専用設定と `excluded_paths` を追加する
- `apps/www/app/assets/config/manifest.js`: 削除する
- `apps/www/package.json`: lint target から削除済み `app/assets/config/*.js` を外す
- `apps/www/test/integration/propshaft_config_test.rb`: migration の desired state を固定する focused test を追加する
- `scripts/check-local-build-env.mjs`: final Propshaft state を guard する
- `docs/tech-stack.md`: `apps/www` の asset pipeline 説明を current state に更新する

### Files to inspect/reference

- `apps/www/app/views/layouts/application.html.erb`
- `apps/www/config/environments/production.rb`
- `apps/www/config/initializers/assets_cache_headers.rb`
- `apps/www/public/manifest.json`
- `apps/www/public/serviceworker.js`
- `apps/www/public/icon-192.png`
- `apps/www/public/icon-512.png`
- `apps/www/app/assets/javascripts/manifest.json`
- `apps/www/app/assets/javascripts/serviceworker.js`
- `apps/www/app/assets/javascripts/serviceworker-companion.js`
- `apps/www/app/assets/stylesheets/application.tailwind.css`
- `docs/superpowers/specs/2026-04-18-apps-www-propshaft-migration-design.md`

### Scope guard

この lane で source diff として変更してよい範囲は原則:

- `apps/www/**`
- `scripts/check-local-build-env.mjs`
- `docs/tech-stack.md`

のみとする。`apps/tutorial/**`、`apps/www/docs/**`、workflow file、Pages config などは今回の lane では変更しない。

---

### Task 1: dedicated worktree と baseline を固定する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-18-apps-www-propshaft-migration-design.md`
- Reference: `apps/www/Gemfile`
- Reference: `apps/www/package.json`
- Reference: `apps/www/config/application.rb`
- Reference: `apps/www/config/initializers/assets.rb`
- Reference: `apps/www/app/assets/config/manifest.js`

- [ ] **Step 1: dedicated worktree を作成する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git worktree add -b feat/www-propshaft-migration .worktrees/www-propshaft-migration origin/main
```

Expected: `.worktrees/www-propshaft-migration` が `origin/main` 基点で作成され、Propshaft lane を current main から分離して進められる。

- [ ] **Step 2: worktree で toolchain と依存を揃える**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
mise trust . >/dev/null 2>&1 || true
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm install --frozen-lockfile'
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: worktree でも root pnpm deps と `apps/www` bundle が current main と同条件で揃う。

- [ ] **Step 3: current Sprockets state を観測する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
rg -n "sprockets-rails|propshaft" apps/www/Gemfile apps/www/Gemfile.lock
rg -n "sprockets/railtie" apps/www/config/application.rb
ls apps/www/app/assets/config/manifest.js apps/www/config/initializers/assets.rb
node scripts/check-local-build-env.mjs
```

Expected: `sprockets-rails` / `sprockets/railtie` / `manifest.js` / `assets.rb` が current main に存在し、local checker が current state では通ることを確認できる。

- [ ] **Step 4: current apps/www lane の working baseline を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'pnpm lint && pnpm build && ruby -S bundle exec rails test'
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'SECRET_KEY_BASE=dummy AWS_ACCESS_KEY_ID=dummy AWS_SECRET_ACCESS_KEY=dummy AWS_REGION=us-east-1 RAILS_ENV=production ruby -S bundle exec rails assets:precompile && ruby -S bundle exec rails assets:clobber'
```

Expected: PASS。Propshaft 変更前でも `pnpm lint` / `pnpm build` / `rails test` / production precompile が current main では成立することを固定する。

- [ ] **Step 5: baseline task は commit しない**

この task は観測のみ。commit しない。

### Task 2: desired end-state を failing test と guard で固定する

**Files:**

- Create: `apps/www/test/integration/propshaft_config_test.rb`
- Modify: `scripts/check-local-build-env.mjs`
- Reference: `apps/www/app/views/layouts/application.html.erb`
- Reference: `apps/www/public/manifest.json`
- Reference: `apps/www/public/serviceworker.js`

- [ ] **Step 1: focused Rails test を追加する**

`apps/www/test/integration/propshaft_config_test.rb` を作成し、少なくとも次を確認する。

- `Rails.root.join('app/assets/config/manifest.js')` が存在しないこと
- `Rails.application.config.assets.excluded_paths` が利用可能で、`app/assets/stylesheets` と `app/assets/javascripts` を含むこと
- `get '/'` で layout が引き続き `application.css` / `application.js` と root path の `/manifest.json` を参照していること

- [ ] **Step 2: local checker に final Propshaft shape の assertion を足す**

`scripts/check-local-build-env.mjs` に次の assertion を追加する。

- `apps/www/Gemfile` に `gem 'propshaft'` がある
- `apps/www/Gemfile` に `sprockets-rails` が無い
- `apps/www/config/application.rb` に `require 'sprockets/railtie'` が無い
- `apps/www/app/assets/config/manifest.js` が存在しない
- `apps/www/config/initializers/assets.rb` が存在しない
- `apps/www/config/initializers/propshaft.rb` が存在し、`app/assets/stylesheets` と `app/assets/javascripts` を excluded path に入れている
- `apps/www/package.json` の lint script が `app/assets/config/*.js` を参照しない

- [ ] **Step 3: focused test と checker を実行して RED を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/integration/propshaft_config_test.rb'
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
node scripts/check-local-build-env.mjs
```

Expected: FAIL。今はまだ `manifest.js` と `assets.rb` が存在し、Propshaft initializer も lint script 修正も無いので赤になる。

- [ ] **Step 4: failing guard/test 追加だけを commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
git add apps/www/test/integration/propshaft_config_test.rb scripts/check-local-build-env.mjs
git commit -m "test: add www propshaft migration guard"
```

### Task 3: Sprockets を Propshaft へ置き換える

**Files:**

- Modify: `apps/www/Gemfile`
- Modify: `apps/www/Gemfile.lock`
- Modify: `apps/www/config/application.rb`
- Delete: `apps/www/config/initializers/assets.rb`
- Create: `apps/www/config/initializers/propshaft.rb`
- Delete: `apps/www/app/assets/config/manifest.js`
- Modify: `apps/www/package.json`

- [ ] **Step 1: Gemfile と application.rb を Propshaft 前提へ切り替える**

変更内容:

- `apps/www/Gemfile` で `gem 'sprockets-rails'` を `gem 'propshaft'` へ置換する
- `apps/www/config/application.rb` から `require 'sprockets/railtie'` を削除する

- [ ] **Step 2: Sprockets-era file を外し、Propshaft initializer を追加する**

変更内容:

- `apps/www/config/initializers/assets.rb` を削除する
- `apps/www/app/assets/config/manifest.js` を削除する
- `apps/www/config/initializers/propshaft.rb` を新規作成し、少なくとも次を設定する
  - `Rails.root.join('app/assets/stylesheets')`
  - `Rails.root.join('app/assets/javascripts')`
    を `config.assets.excluded_paths` に追加する

`app/assets/builds` は除外しない。`application.css` / `application.js` と、必要なら compiled `serviceworker.js` は digest 対象に残す。

- [ ] **Step 3: package lint fallout を直す**

`apps/www/package.json` の lint script から、削除済み `app/assets/config/*.js` target を外す。`app/assets/javascripts/serviceworker.js` の lint は維持する。

- [ ] **Step 4: bundle install と lingering Sprockets dependency check を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
! rg -n "sprockets|sprockets-rails" Gemfile.lock
```

Expected: `bundle install` は PASS。`! rg` は PASS し、lockfile に `sprockets` / `sprockets-rails` が残らない。

- [ ] **Step 5: focused RED set を GREEN へ戻す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/integration/propshaft_config_test.rb && pnpm lint'
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
node scripts/check-local-build-env.mjs
```

Expected: PASS。

- [ ] **Step 6: core Propshaft swap を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
git add apps/www/Gemfile apps/www/Gemfile.lock apps/www/config/application.rb apps/www/config/initializers/propshaft.rb apps/www/package.json apps/www/test/integration/propshaft_config_test.rb scripts/check-local-build-env.mjs
git add -u apps/www/config/initializers/assets.rb apps/www/app/assets/config/manifest.js
git commit -m "build: switch www asset pipeline to propshaft"
```

### Task 4: excluded_paths と production delivery を focused に詰める

**Files:**

- Modify if needed: `apps/www/config/initializers/propshaft.rb`
- Reference: `apps/www/public/manifest.json`
- Reference: `apps/www/public/serviceworker.js`
- Reference: `apps/www/config/environments/production.rb`
- Reference: `apps/www/config/initializers/assets_cache_headers.rb`

- [ ] **Step 1: build / precompile / test の focused path を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'pnpm build && ruby -S bundle exec rails test && SECRET_KEY_BASE=dummy AWS_ACCESS_KEY_ID=dummy AWS_SECRET_ACCESS_KEY=dummy AWS_REGION=us-east-1 RAILS_ENV=production ruby -S bundle exec rails assets:precompile'
```

Expected: PASS。もし asset missing や excluded path 過不足で FAIL したら、`apps/www/config/initializers/propshaft.rb` だけを最小修正する。

- [ ] **Step 2: `public/assets` に raw input leak が無いことを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration/apps/www
ruby -rjson -rdigest -e '
manifest = JSON.parse(File.read("public/assets/.manifest.json"))
excluded_inputs = {
  "app/assets/stylesheets" => Dir.glob("app/assets/stylesheets/**/*", File::FNM_DOTMATCH),
  "app/assets/javascripts" => Dir.glob("app/assets/javascripts/**/*", File::FNM_DOTMATCH),
}.flat_map do |root, paths|
  paths.select { |path| File.file?(path) }.map { |path| path.delete_prefix("#{root}/") }
end.uniq
allowed_name_collisions = ["serviceworker.js"]
leaked = excluded_inputs.reject { |logical_path| allowed_name_collisions.include?(logical_path) || !manifest.key?(logical_path) }
abort("Raw bundler input leaked into Propshaft manifest: #{leaked.join(", ")}") unless leaked.empty?
serviceworker_asset = manifest.fetch("serviceworker.js")
serviceworker_digested = File.binread(File.join("public/assets", serviceworker_asset))
serviceworker_build = File.binread("app/assets/builds/serviceworker.js")
abort("Propshaft serviceworker.js does not resolve to app/assets/builds/serviceworker.js") unless Digest::SHA256.hexdigest(serviceworker_digested) == Digest::SHA256.hexdigest(serviceworker_build)
'
```

Expected: PASS。

注意:

- `app/assets/builds/application.css` / `application.js` の digested output は存在してよい
- `app/assets/builds/serviceworker.js` の digested output も、現行 build が生成する compiled output としては許容する
- reject したいのは `app/assets/stylesheets/**` と `app/assets/javascripts/**` の **raw input** が `public/assets` に漏れるケースだけ

- [ ] **Step 3: local production server で root public asset と asset host を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration/apps/www
rm -f tmp/pids/server.pid /tmp/qni-www-propshaft.pid /tmp/qni-www-propshaft.log
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc '
cleanup() {
  if [ -f /tmp/qni-www-propshaft.pid ]; then
    kill "$(cat /tmp/qni-www-propshaft.pid)" >/dev/null 2>&1 || true
    rm -f /tmp/qni-www-propshaft.pid
  fi
}
trap cleanup EXIT
SECRET_KEY_BASE=dummy AWS_ACCESS_KEY_ID=dummy AWS_SECRET_ACCESS_KEY=dummy AWS_REGION=us-east-1 RAILS_ENV=production RAILS_SERVE_STATIC_FILES=1 ruby -S bundle exec rails server -b 127.0.0.1 -p 3001 > /tmp/qni-www-propshaft.log 2>&1 & echo $! > /tmp/qni-www-propshaft.pid
for i in $(seq 1 30); do curl -fsS -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/ >/dev/null && break; sleep 1; done
test "$(curl -sS -o /dev/null -w '%{http_code}' -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/)" = "200"
test "$(curl -sS -o /dev/null -w '%{http_code}' -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/manifest.json)" = "200"
test "$(curl -sS -o /dev/null -w '%{http_code}' -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/serviceworker.js)" = "200"
test "$(curl -sS -o /dev/null -w '%{http_code}' -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/favicon.ico)" = "200"
test "$(curl -sS -o /dev/null -w '%{http_code}' -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/icon.svg)" = "200"
test "$(curl -sS -o /dev/null -w '%{http_code}' -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/icon-192.png)" = "200"
test "$(curl -sS -o /dev/null -w '%{http_code}' -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/icon-512.png)" = "200"
test "$(curl -sS -o /dev/null -w '%{http_code}' -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/apple-touch-icon.png)" = "200"
curl -fsS -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/ | rg 'd3s7gfd15xwlq4.cloudfront.net/.*/application'
'
```

Expected:

- `config.force_ssl = true` に邪魔されず、HTTPS-forwarded request として root page が 200
- `/manifest.json` と `/serviceworker.js` が 200
- favicon / icon root endpoint もすべて 200
- root page HTML に asset host 付き `application` asset reference が残っている

- [ ] **Step 4: static resolver を片付けて dev/test に戻す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails assets:clobber'
```

Expected: PASS。Propshaft の static resolver 状態を掃除して、以後の dev/test を source 直読みに戻す。

- [ ] **Step 5: minimal follow-up fix があれば commit する**

`propshaft.rb` の excluded path 調整など、Task 3 以後に必要になった最小修正だけを commit する。

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
git add apps/www/config/initializers/propshaft.rb
git commit -m "fix: tighten www propshaft excluded paths"
```

差分が無ければ commit しない。

### Task 5: docs を final state に揃え、scope を確認する

**Files:**

- Modify: `docs/tech-stack.md`
- Reference: `docs/superpowers/specs/2026-04-18-apps-www-propshaft-migration-design.md`

- [ ] **Step 1: `docs/tech-stack.md` の `apps/www` 記述を current state へ更新する**

最低限、次を反映する。

- asset pipeline は `Propshaft`
- JS/CSS build 正本は引き続き `pnpm` + `jsbundling-rails` + `cssbundling-rails`
- Sprockets-era manifest / precompile list は削除済み
- `serviceworker.js` / `manifest.json` / icon 群は root `public/` 配信のまま今回維持したこと
- bundling override の説明は残さない

- [ ] **Step 2: diff scope を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
git diff --name-only origin/main...HEAD | sort
```

Expected: 差分が `apps/www/**`, `scripts/check-local-build-env.mjs`, `docs/tech-stack.md` に閉じている。

- [ ] **Step 3: docs update を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
git add docs/tech-stack.md
git commit -m "docs: record www propshaft asset pipeline"
```

### Task 6: full verification と reviewer gate を通す

**Files:**

- Modify: reviewer 指摘で必要になった file のみ
- Reference: `docs/superpowers/specs/2026-04-18-apps-www-propshaft-migration-design.md`
- Reference: this plan file

- [ ] **Step 1: repo-level verification を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
node scripts/check-local-build-env.mjs
node scripts/check-pages-config.mjs
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm build && pnpm lint && pnpm typecheck && pnpm test:ci && pnpm size'
```

Expected: PASS。

- [ ] **Step 2: apps/www の full verification を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres PUPPETEER_CACHE_DIR=$HOME/.cache/puppeteer pnpm test'
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'SECRET_KEY_BASE=dummy AWS_ACCESS_KEY_ID=dummy AWS_SECRET_ACCESS_KEY=dummy AWS_REGION=us-east-1 RAILS_ENV=production ruby -S bundle exec rails assets:precompile && ruby -S bundle exec rails assets:clobber'
```

Expected: PASS。system test と production precompile の両方が緑。

- [ ] **Step 3: diff hygiene を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
git diff --check
git status --short
```

Expected: `git diff --check` は clean。`git status --short` は intended files だけ。

- [ ] **Step 4: focused reviewer を依頼する**

Reviewer に次を重点確認させる。

- Propshaft migration が spec の conservative scope に収まっているか
- excluded paths が raw input 漏洩と asset missing の両面で妥当か
- `public/manifest.json` / `public/serviceworker.js` root path の回帰がないか
- `apps/www/package.json` lint fallout を残していないか
- docs/tech-stack が final state と整合するか

- [ ] **Step 5: reviewer 指摘を直し、影響範囲だけ再検証する**

指摘があれば必要最小限で修正し、affected command だけでなく `node scripts/check-local-build-env.mjs` と `git diff --check` は必ず再実行する。

- [ ] **Step 6: review-driven fix を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
git add <exact files>
git commit -m "fix: address www propshaft review feedback"
```

差分が無ければ commit しない。

### Task 7: main へ統合し、GitHub Actions を確認する

**Files:**

- Modify: none beyond validated diff

- [ ] **Step 1: worktree branch を最新 main に rebase する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
cd /home/yasuhito/Work/qni/.worktrees/www-propshaft-migration
git rebase origin/main
```

Expected: clean rebase。conflict が出たら scope を壊さないように解消し、affected verification を再実行する。

- [ ] **Step 2: canonical main へ fast-forward merge する**

Run:

```bash
cd /home/yasuhito/Work/qni
git switch main
git status --short
git merge --ff-only feat/www-propshaft-migration
```

Expected: `git status --short` は空で、`main` から `--ff-only` merge が PASS。merge commit は作らない。

- [ ] **Step 3: canonical tree で pre-push 相当を最後に再確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
node scripts/check-local-build-env.mjs
node scripts/check-pages-config.mjs
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm test'
git diff --check
```

Expected: PASS。

- [ ] **Step 4: origin/main へ push する**

Run:

```bash
cd /home/yasuhito/Work/qni
git push origin main
```

Expected: PASS。local pre-push hook も通る。

- [ ] **Step 5: GitHub Actions を監視する**

Run:

```bash
cd /home/yasuhito/Work/qni
gh run list --branch main --limit 5
```

Expected: この push に対応する `CI`, `Deploy Pages`, `CodeQL` run が見える。各 run が `success` になるまで監視する。

- [ ] **Step 6: worktree と branch を cleanup する**

Run:

```bash
cd /home/yasuhito/Work/qni
git worktree remove .worktrees/www-propshaft-migration
git branch -d feat/www-propshaft-migration
```

Expected: worktree と local branch cleanup 完了。canonical repo は `main == origin/main`、working tree clean。

---

## Notes for the implementing agent

- `public/manifest.json` と `public/serviceworker.js` の **配信 path 自体は変えない**。今回の目的は Sprockets を Propshaft に置き換えることであり、public root asset strategy を再設計することではない。
- `apps/www/app/assets/javascripts/manifest.json` は current repo に残っているが、今回の lane では **source leak を防ぐ対象**として扱う。root path の source of truth を変更したくなっても、別 lane に切り出す。
- `public/assets` を見たときに compiled output と raw input を混同しないこと。reject したいのは `app/assets/stylesheets/**` と `app/assets/javascripts/**` の source file 露出であり、`app/assets/builds/**` の digest output までは自動的に bad としない。
- production precompile の後は `rails assets:clobber` で static resolver 状態を掃除し、後続の dev/test を source 直読みに戻す。
- reviewer で scope creep を指摘されたら、asset cleanup を広げるのではなく **Propshaft migration と public asset 回帰防止** に戻す。
