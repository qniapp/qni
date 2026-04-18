# apps/www remove Turbolinks and Rails UJS Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `apps/www` から未使用の `turbolinks` と `@rails/ujs` を外し、ページ遷移を通常の full reload に戻す。

**Architecture:** まず root guard を failing state にして、legacy dependency が残っていると plan 全体が進められない形にする。その後、JS startup・npm dependency・Ruby gem・stale layout attribute を最小差分で削除し、最後に docs を current stack に更新したうえで `apps/www` system test / root test / CI parity を確認する。

**Tech Stack:** Rails 7.2, Ruby 4.0.2, pnpm 10.33.0, Node.js 20.20.2, Stimulus, esbuild, Tailwind CSS, Capybara/Selenium system tests, GitHub Actions

---

## File Structure

### Modified files

- `scripts/check-local-build-env.mjs`: `apps/www` に Turbolinks/UJS を再導入しない guard を追加する
- `apps/www/app/javascript/application.js`: `@rails/ujs` と `turbolinks` startup を削除する
- `apps/www/package.json`: `@rails/ujs` / `turbolinks` / `@types/turbolinks` を削除する
- `pnpm-lock.yaml`: `apps/www` importer から対応する Node dependency lock を外す
- `apps/www/Gemfile`: `gem 'turbolinks'` を削除する
- `apps/www/Gemfile.lock`: `turbolinks` / `turbolinks-source` を lockfile から外す
- `apps/www/app/views/layouts/application.html.erb`: stale な `data-turbo-track="reload"` を削除する
- `docs/tech-stack.md`: `apps/www` frontend stack 記述を現行 state に合わせる

### Verification-only files

- `.github/workflows/ci.yml`: DB setup と frozen lockfile 条件の reference
- `apps/www/test/application_system_test_case.rb`: system test lane の reference
- `docs/superpowers/specs/2026-04-18-apps-www-remove-turbolinks-ujs-design.md`: 実装対象の正本 spec

---

### Task 1: root guard を failing state で固定する

**Files:**

- Modify: `scripts/check-local-build-env.mjs`
- Reference: `apps/www/app/javascript/application.js`
- Reference: `apps/www/package.json`
- Reference: `apps/www/Gemfile`
- Reference: `apps/www/app/views/layouts/application.html.erb`

- [ ] **Step 1: Guard 追加前の現状を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
rg -n "@rails/ujs|turbolinks|data-turbo-track" apps/www/app/javascript/application.js apps/www/package.json apps/www/Gemfile apps/www/app/views/layouts/application.html.erb
```

Expected: startup / dependency / stale attribute がまだ残っていることを確認できる。

- [ ] **Step 2: failing guard を追加する**

`scripts/check-local-build-env.mjs` に以下の assertion を追加する。

- `apps/www/app/javascript/application.js` に `@rails/ujs` / `turbolinks` startup が無い
- `apps/www/package.json` に `@rails/ujs` / `turbolinks` / `@types/turbolinks` が無い
- `apps/www/Gemfile` に `gem 'turbolinks'` が無い
- `apps/www/Gemfile.lock` に `turbolinks (` が無い
- `apps/www/app/views/layouts/application.html.erb` に `data-turbo-track` が無い

- [ ] **Step 3: Guard を実行して RED を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
node scripts/check-local-build-env.mjs
```

Expected: FAIL。最初の legacy dependency / startup 残存を示す message が出る。

- [ ] **Step 4: Guard 追加だけを commit する**

```bash
git add scripts/check-local-build-env.mjs
git commit -m "test: require apps/www turbolinks removal"
```

### Task 2: JS startup と Node dependency を削除する

**Files:**

- Modify: `apps/www/app/javascript/application.js`
- Modify: `apps/www/package.json`
- Modify: `pnpm-lock.yaml`
- Reference: `apps/www/app/javascript/controllers/application.js`

- [ ] **Step 1: JS entrypoint から startup を削除する**

`apps/www/app/javascript/application.js` を、`@qni/elements` / `./controllers` / `serviceworker-companion` の import だけが残る形にする。

- [ ] **Step 2: `apps/www/package.json` から Node dependency を削除する**

削除対象:

- `@rails/ujs`
- `turbolinks`
- `@types/turbolinks`

他の script や dependency には手を広げない。

- [ ] **Step 3: lockfile を更新する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm install
```

Expected: `pnpm-lock.yaml` の `apps/www` importer から `@rails/ujs` / `turbolinks` / `@types/turbolinks` が外れる。

- [ ] **Step 4: frozen lockfile parity を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm install --frozen-lockfile
```

Expected: PASS。local lockfile が CI 条件と一致する。

- [ ] **Step 5: root guard を再実行し、残りが Ruby/layout 側だけであることを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
node scripts/check-local-build-env.mjs
```

Expected: まだ FAIL するが、失敗理由が `Gemfile` か layout に進む。

- [ ] **Step 6: JS removal を commit する**

```bash
git add apps/www/app/javascript/application.js apps/www/package.json pnpm-lock.yaml
git commit -m "build: remove www turbolinks javascript deps"
```

### Task 3: Ruby gem と stale layout attribute を削除する

**Files:**

- Modify: `apps/www/Gemfile`
- Modify: `apps/www/Gemfile.lock`
- Modify: `apps/www/app/views/layouts/application.html.erb`
- Reference: `.github/workflows/ci.yml`

- [ ] **Step 1: `apps/www/Gemfile` から `turbolinks` gem を削除する**

対象行:

```ruby
gem 'turbolinks', '~> 5'
```

- [ ] **Step 2: layout から stale attribute を削除する**

`apps/www/app/views/layouts/application.html.erb` の

```erb
<%= javascript_include_tag 'application', 'data-turbo-track': 'reload', defer: true %>
```

を、Turbo 非依存の通常 include にする。

- [ ] **Step 3: Bundler lock を更新する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
ruby -S bundle install
```

Expected: `Gemfile.lock` から `turbolinks` / `turbolinks-source` が外れる。

- [ ] **Step 4: apps/www の test DB を準備する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
RAILS_ENV=test PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres ruby -S bundle exec rails db:setup
```

Expected: PASS。system test 実行前提の `qni_test` DB が作成される。

- [ ] **Step 5: root guard が green になることを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
node scripts/check-local-build-env.mjs
```

Expected: PASS。

- [ ] **Step 6: Ruby/layout cleanup を commit する**

```bash
git add apps/www/Gemfile apps/www/Gemfile.lock apps/www/app/views/layouts/application.html.erb scripts/check-local-build-env.mjs
git commit -m "build: remove www turbolinks rails integration"
```

### Task 4: docs 更新と focused/full verification を完了する

**Files:**

- Modify: `docs/tech-stack.md`
- Verify: `apps/www/test/application_system_test_case.rb`

- [ ] **Step 1: tech stack doc を現行構成へ更新する**

`docs/tech-stack.md` の `apps/www` frontend stack から、`Rails UJS / Turbolinks` を削除し、残る実態に合わせて書き換える。

最低限、次の説明に揃える。

- Stimulus は残る
- ページ遷移は通常 full reload
- Puppeteer/Grover 周辺は引き続き利用

- [ ] **Step 2: `apps/www` system test を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres PUPPETEER_CACHE_DIR=$HOME/.cache/puppeteer pnpm test
```

Expected: PASS。system test と関連 build が green。

- [ ] **Step 3: root test を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres PUPPETEER_CACHE_DIR=$HOME/.cache/puppeteer pnpm test
```

Expected: PASS。packages + `apps/www` を含む root test が green。

- [ ] **Step 4: CI 相当の local verification を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
node scripts/check-local-build-env.mjs
node scripts/check-pages-config.mjs
pnpm build
pnpm lint
pnpm typecheck
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres pnpm test:ci
pnpm size
```

Expected: PASS。CI が確認する config/build/lint/typecheck/test:ci/size が local でも通る。

- [ ] **Step 5: diff hygiene を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
git diff --check
```

Expected: PASS。余計な whitespace / conflict marker が無い。

- [ ] **Step 6: docs/verification commit を作る**

```bash
git add docs/tech-stack.md
git commit -m "docs: update www frontend stack"
```

### Task 5: push 前最終確認と live CI verification

**Files:**

- Verify only

- [ ] **Step 1: 現在の差分を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
git status --short
```

Expected: working tree clean。

- [ ] **Step 2: 実際の pre-push 相当コマンドを再実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm fix:style
pnpm exec eslint
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres PUPPETEER_CACHE_DIR=$HOME/.cache/puppeteer pnpm test
```

Expected: PASS。`.husky/pre-push` と同じ順序の確認が通る。

- [ ] **Step 3: push する**

Run:

```bash
cd /home/yasuhito/Work/qni
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres PUPPETEER_CACHE_DIR=$HOME/.cache/puppeteer git push origin main
```

Expected: push 成功。pre-push hook を通過する。

- [ ] **Step 4: GitHub Actions を確認する**

確認対象:

- CI
- Deploy Pages
- CodeQL

Expected: 3 つとも success。

- [ ] **Step 5: WID を更新する**

作業 summary と verification evidence を `wid` に残す。

- [ ] **Step 6: reviewer を実行する**

変更後に `reviewer` subagent を流し、必要なら follow-up commit を追加する。
