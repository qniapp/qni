# apps/www bundling-rails pnpm cleanup Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `apps/www` の bundling gem を current upstream に寄せ、`pnpm_bundling_overrides.rake` を削除できるか検証したうえで、必要なら最小 override に縮小し、あわせて local `pnpm run test:ci` を PG env なしで動かせるようにする。

**Architecture:** まず現状の working path と失敗 path を明示的に再現し、`pnpm run test:ci` failure の root cause を test DB config に固定する。その後、bundling gem update → override 除去実験 → focused verification の順で進め、upstream task だけで通るなら override を削除し、通らなければ失敗した task だけを最小限に補う。最後に guard と docs を更新し、repo-level parity と GitHub Actions を確認する。

**Tech Stack:** Rails 7.2, Ruby 4.0.2, PostgreSQL, pnpm 10.33.0, Node.js 20.20.2, jsbundling-rails, cssbundling-rails, esbuild, Tailwind CSS, GitHub Actions

---

## File Structure

### Files likely to change

- `apps/www/Gemfile`: bundling gem version constraints を更新する
- `apps/www/Gemfile.lock`: bundling gem update を lockfile に反映する
- `apps/www/config/database.yml`: test environment に env-overridable default connection を追加する
- `apps/www/lib/tasks/pnpm_bundling_overrides.rake`: 削除または最小化する
- `scripts/check-local-build-env.mjs`: final state を guard する
- `docs/tech-stack.md`: `apps/www` build/test plumbing の現状を反映する

### Files to inspect/reference

- `apps/www/package.json`
- `apps/www/config/database.yml.github-actions`
- `.github/workflows/ci.yml`
- `docs/superpowers/specs/2026-04-18-apps-www-bundling-rails-pnpm-design.md`

---

### Task 1: baseline と root cause を固定する

**Files:**

- Reference: `apps/www/config/database.yml`
- Reference: `apps/www/config/database.yml.github-actions`
- Reference: `apps/www/lib/tasks/pnpm_bundling_overrides.rake`
- Reference: `apps/www/Gemfile.lock`

- [ ] **Step 1: current gem / override state を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
ruby -e "require 'bundler'; lock = Bundler::LockfileParser.new(Bundler.read_file('apps/www/Gemfile.lock')); %w[jsbundling-rails cssbundling-rails].each{|n| s=lock.specs.find{|x|x.name==n}; puts [n,s&.version].join(': ')}"
rg -n "css:build|javascript:build|tailwindcss|esbuild" apps/www/lib/tasks/pnpm_bundling_overrides.rake
```

Expected: `jsbundling-rails 1.0.0` / `cssbundling-rails 0.2.4` と override task 内容を確認できる。

- [ ] **Step 2: local `pnpm run test:ci` failure を再現する**

Run:

```bash
cd /home/yasuhito/Work/qni
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm run test:ci'
```

Expected: FAIL。`connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed` を含む error で、Rails が socket fallback していることを確認する。

- [ ] **Step 3: current apps/www bundling lane の working baseline も確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres pnpm run build
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres ruby -S bundle exec rails css:build javascript:build
RAILS_ENV=production PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres ruby -S bundle exec rails assets:precompile
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres ruby -S bundle exec rails test
```

Expected: PASS。override ありの現行 bundling/test lane が working であることを確認する。

- [ ] **Step 4: root working baseline も確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres pnpm run test:ci'
```

Expected: PASS。current main の working path を確保する。

- [ ] **Step 5: baseline-only note を残して commit はしない**

この task は観測だけ。commit しない。

### Task 2: test DB の local default を追加する

**Files:**

- Modify: `apps/www/config/database.yml`
- Reference: `apps/www/config/database.yml.github-actions`

- [ ] **Step 1: `test` section を env-overridable default へ更新する**

`apps/www/config/database.yml` の `test` section を次の意図に揃える。

- `host`: `ENV.fetch("PGHOST", "localhost")`
- `port`: `ENV.fetch("PGPORT", 5432)`
- `database`: `qni_test` に固定する
- `username`: `ENV.fetch("PGUSER", "postgres")`
- `password`: `ENV.fetch("PGPASSWORD", "postgres")`

`development` / `production` は触らない。`PGDATABASE` で別 DB に流れないことも守る。

- [ ] **Step 2: test DB prepare を env なしで実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
RAILS_ENV=test ruby -S bundle exec rails db:prepare
```

Expected: PASS。`qni_test` を localhost:5432 に対して準備できる。

- [ ] **Step 3: local `pnpm run test:ci` を env なしで再実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm run test:ci'
```

Expected: PASS。

- [ ] **Step 4: test DB default change を commit する**

```bash
git add apps/www/config/database.yml
git commit -m "test: default www test db connection"
```

### Task 3: bundling gem を更新する

**Files:**

- Modify: `apps/www/Gemfile`
- Modify: `apps/www/Gemfile.lock`

- [ ] **Step 1: target version strategy を決める**

`apps/www/Gemfile` を current upstream と整合する形へ更新する。基本方針は Rails 7.2 / Ruby 4.0.2 で無理なく解決する安全な最新版を採用する。

- [ ] **Step 2: bundler update を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
ruby -S bundle update jsbundling-rails cssbundling-rails
```

Expected: `Gemfile.lock` に新しい version が反映される。

- [ ] **Step 3: focused bundle sanity check を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
ruby -S bundle exec rails runner 'puts :ok'
```

Expected: PASS。

- [ ] **Step 4: gem update を commit する**

```bash
git add apps/www/Gemfile apps/www/Gemfile.lock
git commit -m "build: update www bundling gems"
```

### Task 4: override を外して upstream task を再評価する

**Files:**

- Modify/Delete: `apps/www/lib/tasks/pnpm_bundling_overrides.rake`
- Reference: `apps/www/package.json`

- [ ] **Step 1: override を一時的に外す**

まずは file を削除するか、読み込まれない状態にして upstream task をそのまま使う。

- [ ] **Step 2: focused build path を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
pnpm run build
ruby -S bundle exec rails css:build javascript:build
RAILS_ENV=production ruby -S bundle exec rails assets:precompile
ruby -S bundle exec rails test
```

Expected: どちらか。

- PASS: upstream task だけで十分
- FAIL: exact failing task / command / missing PATH or package manager assumption を記録する

- [ ] **Step 3: root cause ごとに分岐する**

**If PASS:**

- override file を削除したまま進む

**If FAIL:**

- error message を読み、何が不足しているかを 1 つに絞る
- `apps/www/lib/tasks/pnpm_bundling_overrides.rake` を **失敗した task だけ** 補う最小構成へ書き直す
- `css:build` と `javascript:build` の両方を無条件に上書きしないで済むならそうする

- [ ] **Step 4: focused verification を再実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
pnpm run build
ruby -S bundle exec rails css:build javascript:build
RAILS_ENV=production ruby -S bundle exec rails assets:precompile
ruby -S bundle exec rails test
```

Expected: PASS。

- [ ] **Step 5: override reevaluation を commit する**

```bash
git add apps/www/lib/tasks/pnpm_bundling_overrides.rake
git commit -m "build: reevaluate www pnpm bundling tasks"
```

削除した場合は `git add -u apps/www/lib/tasks/pnpm_bundling_overrides.rake` を使う。

### Task 5: guard と docs を final state に揃える

**Files:**

- Modify: `scripts/check-local-build-env.mjs`
- Modify: `docs/tech-stack.md`

- [ ] **Step 1: config guard を追加/更新する**

`scripts/check-local-build-env.mjs` に final state を表す assertion を足す。

最低限、次を guard する。

- `apps/www/config/database.yml` test section が localhost / qni_test / postgres defaults を持ち、host/port/user/password は env override 可能であること
- `ENV.fetch("PGHOST")` / `PGPORT` / `PGUSER` / `PGPASSWORD` が `test` section 以外（`default` / `development` / `production`）に現れないこと
- `PGDATABASE` override を使わず、test DB 名は `qni_test` に固定されていること
- `development` / `production` section に同様の default injection が広がっていないこと
- `apps/www` の bundling state が final decision と矛盾しないこと

  - override 削除なら file が存在しないこと
  - override 最小化なら broad clear-and-replace に戻っていないこと

- [ ] **Step 2: doc を現行構成に更新する**

`docs/tech-stack.md` の `apps/www` build/test 記述を、次のどちらかの final state に合わせる。

- Rails bundling gems + pnpm-native scripts + upstream task で動く
- Rails bundling gems + 最小 pnpm override を残す

加えて、local `pnpm run test:ci` が test-only DB defaults で動くことを short note として残す。

- [ ] **Step 3: guard を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
node scripts/check-local-build-env.mjs
```

Expected: PASS。

- [ ] **Step 4: docs/guard update を commit する**

```bash
git add scripts/check-local-build-env.mjs docs/tech-stack.md
git commit -m "docs: record www bundling and test defaults"
```

### Task 6: full verification と integration を完了する

**Files:**

- Verify only

- [ ] **Step 1: local repo-level verification を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
node scripts/check-local-build-env.mjs
node scripts/check-pages-config.mjs
pnpm run build
pnpm run lint
pnpm run typecheck
pnpm run test:ci
pnpm run size
(cd apps/www && ruby -S bundle exec rails css:build javascript:build)
(cd apps/www && RAILS_ENV=production ruby -S bundle exec rails assets:precompile)
git diff --check
```

Expected: All PASS。

- [ ] **Step 2: pre-push 相当の focused apps/www verification を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
PUPPETEER_CACHE_DIR=$HOME/.cache/puppeteer pnpm test
```

Expected: PASS。

- [ ] **Step 3: reviewer を実行する**

Review context:

- Spec: `docs/superpowers/specs/2026-04-18-apps-www-bundling-rails-pnpm-design.md`
- Plan: `docs/superpowers/plans/2026-04-18-apps-www-bundling-rails-pnpm.md`
- Base SHA: implementation branch base
- Head SHA: current HEAD
- Focus: bundling override removal/minimization, test DB default scope, unintended CI/runtime regressions

- [ ] **Step 4: main へ integrate して push する**

Push 前に working tree clean を確認し、必要な env が無い前提でも `pnpm run test:ci` が通る final state を維持したまま main に載せる。

- [ ] **Step 5: fresh GitHub Actions runs を確認する**

Check:

- CI
- Deploy Pages
- CodeQL

Expected: all green。
