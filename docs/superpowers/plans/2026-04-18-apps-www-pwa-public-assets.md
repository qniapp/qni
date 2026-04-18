# apps/www PWA / public asset cleanup Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `apps/www` の PWA / root public asset を `public/` 正本に保守的に揃え、`/manifest.json`・`/serviceworker.js`・icon 類の公開 URL を維持したまま、重複 source と誤解を招く service worker registration を撤去する。

**Architecture:** dedicated worktree 上で current drift を focused Rails guard に先に赤で固定し、その後 `app/assets/javascripts` 側の duplicate manifest / worker / companion を削除する。`application.js` と `package.json` は app bundle 専用に絞り、`public/serviceworker.js` / `.map` と icon / manifest 類を committed source-of-truth として残す。最後に clean build・production precompile・local production smoke・repo-level verification・reviewer を通してから main へ統合する。

**Tech Stack:** Rails 7.2, Ruby 4.0.2, Node.js 20.20.2, pnpm 10.33.0, Propshaft, esbuild, Tailwind CSS, Puma, PostgreSQL, GitHub Actions

---

## File Structure

### Files likely to change

- `apps/www/package.json`: `build:js` を app bundle 専用にし、lint target から削除対象 worker source を外す
- `apps/www/app/javascript/application.js`: `serviceworker-companion` import を削除する
- `apps/www/app/assets/javascripts/manifest.json`: 削除する
- `apps/www/app/assets/javascripts/serviceworker.js`: 削除する
- `apps/www/app/assets/javascripts/serviceworker-companion.js`: 削除する
- `apps/www/test/integration/pwa_public_assets_test.rb`: desired end-state を固定する focused guard を追加する
- `scripts/check-local-build-env.mjs`: CI が見る repo-level guard を final state に合わせて更新する

### Files to inspect/reference

- `apps/www/app/views/layouts/application.html.erb`
- `apps/www/public/manifest.json`
- `apps/www/public/serviceworker.js`
- `apps/www/public/serviceworker.js.map`
- `apps/www/public/favicon.ico`
- `apps/www/public/icon.svg`
- `apps/www/public/icon-192.png`
- `apps/www/public/icon-512.png`
- `apps/www/public/apple-touch-icon.png`
- `apps/www/public/apple-touch-icon-precomposed.png`
- `apps/www/Procfile.dev`
- `apps/www/config/environments/production.rb`
- `packages/elements/src/quantum-simulator-element.ts`
- `docs/superpowers/specs/2026-04-18-apps-www-pwa-public-assets-design.md`

### Scope guard

実装 diff で変更してよい source path は原則として次のみ。

- `apps/www/**`
- `scripts/check-local-build-env.mjs` （CI の repo-level guard を final state に揃えるための単一例外）

今回の lane では変更しない。

- `packages/**`
- `apps/tutorial/**`
- `docs/tech-stack.md`
- workflow file / Pages config

`packages/elements/src/quantum-simulator-element.ts` は **reference-only**。`new Worker('./serviceworker.js')` 契約は維持し、consumer 側 API は触らない。

---

### Task 1: dedicated worktree と baseline を固定する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-18-apps-www-pwa-public-assets-design.md`
- Reference: `apps/www/package.json`
- Reference: `apps/www/app/javascript/application.js`
- Reference: `apps/www/app/assets/javascripts/serviceworker-companion.js`
- Reference: `apps/www/app/assets/javascripts/serviceworker.js`
- Reference: `apps/www/app/assets/javascripts/manifest.json`
- Reference: `apps/www/public/manifest.json`
- Reference: `apps/www/public/serviceworker.js`

- [ ] **Step 1: dedicated worktree を作成する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git worktree add -b feat/www-pwa-public-assets .worktrees/www-pwa-public-assets origin/main
```

Expected: `.worktrees/www-pwa-public-assets` が `origin/main` 基点で作成される。

- [ ] **Step 2: worktree で toolchain と依存を揃える**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets
mise trust . >/dev/null 2>&1 || true
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm install --frozen-lockfile'
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: worktree でも root pnpm deps と `apps/www` bundle が current main と同条件で揃う。

- [ ] **Step 3: current drift を観測する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets
rg -n "serviceworker-companion|serviceworker\.js|manifest\.json" apps/www/app/javascript/application.js apps/www/app/assets/javascripts apps/www/package.json
ls apps/www/public/manifest.json apps/www/public/serviceworker.js apps/www/public/icon-192.png apps/www/public/icon-512.png apps/www/public/apple-touch-icon.png apps/www/public/apple-touch-icon-precomposed.png
```

Expected: current main では `application.js` が `serviceworker-companion` を import し、`package.json` の `build:js` / `lint` が `app/assets/javascripts/serviceworker.js` を前提にしていることを確認できる。

- [ ] **Step 4: current apps/www lane の baseline を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'pnpm lint && pnpm build && ruby -S bundle exec rails test'
```

Expected: PASS。変更前 baseline が green であることを固定する。

- [ ] **Step 5: baseline task は commit しない**

この task は観測のみ。commit しない。

### Task 2: desired end-state を focused guard で RED に固定する

**Files:**

- Create: `apps/www/test/integration/pwa_public_assets_test.rb`
- Modify later: `scripts/check-local-build-env.mjs`
- Reference: `apps/www/app/views/layouts/application.html.erb`
- Reference: `apps/www/public/manifest.json`
- Reference: `apps/www/public/serviceworker.js`
- Reference: `apps/www/package.json`
- Reference: `apps/www/app/javascript/application.js`

- [ ] **Step 1: focused guard test を追加する**

`apps/www/test/integration/pwa_public_assets_test.rb` を新規作成し、少なくとも次を確認する。

```ruby
# frozen_string_literal: true

require 'test_helper'
require 'json'

class PwaPublicAssetsTest < ActionDispatch::IntegrationTest
  test 'public root assets remain the only pwa source-of-truth files' do
    %w[
      public/manifest.json
      public/serviceworker.js
      public/serviceworker.js.map
      public/favicon.ico
      public/icon.svg
      public/icon-192.png
      public/icon-512.png
      public/apple-touch-icon.png
      public/apple-touch-icon-precomposed.png
    ].each do |path|
      assert Rails.root.join(path).exist?, "Expected #{path} to exist"
    end

    %w[
      app/assets/javascripts/manifest.json
      app/assets/javascripts/serviceworker.js
      app/assets/javascripts/serviceworker-companion.js
    ].each do |path|
      assert_not Rails.root.join(path).exist?, "Expected #{path} to be removed"
    end
  end

  test 'app bundle no longer registers a service worker or rebuilds the worker asset' do
    app_js = Rails.root.join('app/javascript/application.js').read
    package_json = JSON.parse(Rails.root.join('package.json').read)
    scripts = package_json.fetch('scripts')

    assert_no_match(/serviceworker-companion/, app_js)
    assert_no_match(%r{app/assets/javascripts/serviceworker\.js}, scripts.fetch('build:js'))
    assert_no_match(%r{app/assets/javascripts/serviceworker\.js}, scripts.fetch('lint'))
  end

  test 'root layout still references manifest and icons from public paths' do
    get '/'

    assert_response :success
    assert_select 'link[rel="manifest"][href="/manifest.json"]'
    assert_select 'link[href="/favicon.ico"]', minimum: 1
    assert_select 'link[href="/icon.svg"]', minimum: 1
    assert_select 'link[href="/apple-touch-icon.png"]', minimum: 1
  end
end
```

- [ ] **Step 2: focused test を実行して RED を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/integration/pwa_public_assets_test.rb'
```

Expected: FAIL。現状では duplicate `app/assets/javascripts/*` が残っており、`application.js` も companion import を持ち、`build:js` / `lint` も worker source を参照しているので赤になる。

- [ ] **Step 3: failing guard 追加だけを commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets
git add apps/www/test/integration/pwa_public_assets_test.rb
git commit -m "test: add www pwa public asset guard"
```

### Task 3: duplicate public asset plumbing を削除する

**Files:**

- Modify: `apps/www/package.json`
- Modify: `apps/www/app/javascript/application.js`
- Modify: `scripts/check-local-build-env.mjs`
- Delete: `apps/www/app/assets/javascripts/manifest.json`
- Delete: `apps/www/app/assets/javascripts/serviceworker.js`
- Delete: `apps/www/app/assets/javascripts/serviceworker-companion.js`
- Reference-only: `apps/www/public/serviceworker.js`
- Reference-only: `apps/www/public/serviceworker.js.map`
- Reference-only: `apps/www/public/manifest.json`

- [ ] **Step 1: `application.js` から misleading registration import を外す**

`apps/www/app/javascript/application.js` を次の shape にする。

```js
import '@qni/elements'

import './controllers'
```

- [ ] **Step 2: `package.json` を app bundle 専用に絞る**

`apps/www/package.json` で次を行う。

- `lint` から `app/assets/javascripts/serviceworker.js` を外す
- `build:js` から `app/assets/javascripts/serviceworker.js` の esbuild invocation を外す
- `build:js` の最終形は app bundle のみとする

目標 shape:

```json
{
  "scripts": {
    "lint": "pnpm exec eslint app/javascript/controllers/**/*.js app/javascript/controllers/**/*.ts",
    "build:js": "pnpm exec esbuild app/javascript/application.js --bundle --keep-names --sourcemap --minify --outdir=app/assets/builds"
  }
}
```

`public/serviceworker.js` を再生成する refresh script は **この lane では追加しない**。worker regeneration policy は follow-up に切り出す。

- [ ] **Step 3: `app/assets/javascripts` の duplicate files を削除する**

削除対象:

- `apps/www/app/assets/javascripts/manifest.json`
- `apps/www/app/assets/javascripts/serviceworker.js`
- `apps/www/app/assets/javascripts/serviceworker-companion.js`

`apps/www/public/serviceworker.js` / `.map` / `manifest.json` / icon 類は **変更しない**。今回の lane では committed public asset を source-of-truth として残す。

- [ ] **Step 4: repo-level CI guard を final state に合わせる**

`scripts/check-local-build-env.mjs` の `apps/www` assertion を次の final state に合わせて更新する。

- `apps/www/package.json` の `lint` が `app/assets/javascripts/serviceworker.js` を要求しない
- `apps/www/package.json` の `build:js` が `app/assets/javascripts/serviceworker.js` を bundle しない
- `apps/www/app/assets/javascripts/manifest.json` が存在しない
- `apps/www/app/assets/javascripts/serviceworker.js` が存在しない
- `apps/www/app/assets/javascripts/serviceworker-companion.js` が存在しない

この更新は **CI の repo-level guard を apps/www の新しい正本方針に追従させるための単一例外** として扱う。

- [ ] **Step 5: stale build artifact を clobber して clean build を作る**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'pnpm clean && pnpm build && test ! -e app/assets/builds/serviceworker.js && test ! -e app/assets/builds/serviceworker.js.map'
```

Expected: PASS。`app/assets/builds/serviceworker.js*` が stale のまま残らず、app bundle だけが再生成される。

- [ ] **Step 6: focused guard を GREEN に戻す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'pnpm lint && ruby -S bundle exec rails test test/integration/pwa_public_assets_test.rb'
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets
node scripts/check-local-build-env.mjs
```

Expected: PASS。

- [ ] **Step 7: core cleanup を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets
git add apps/www/package.json apps/www/app/javascript/application.js apps/www/test/integration/pwa_public_assets_test.rb scripts/check-local-build-env.mjs
git add -u apps/www/app/assets/javascripts/manifest.json apps/www/app/assets/javascripts/serviceworker.js apps/www/app/assets/javascripts/serviceworker-companion.js
git commit -m "refactor: remove www duplicate pwa asset plumbing"
```

### Task 4: focused verification と local production smoke を完了する

**Files:**

- Reference: `apps/www/config/environments/production.rb`
- Reference: `apps/www/public/manifest.json`
- Reference: `apps/www/public/serviceworker.js`
- Reference: `apps/www/public/favicon.ico`
- Reference: `apps/www/public/icon.svg`
- Reference: `apps/www/public/icon-192.png`
- Reference: `apps/www/public/icon-512.png`
- Reference: `apps/www/public/apple-touch-icon.png`
- Reference: `apps/www/public/apple-touch-icon-precomposed.png`

- [ ] **Step 1: apps/www focused verification を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'pnpm lint && pnpm clean && pnpm build && ruby -S bundle exec rails test && pnpm test'
```

Expected: PASS。`rails test` と system test を含む `pnpm test` が green。

- [ ] **Step 2: production assets:precompile を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'SECRET_KEY_BASE=dummy AWS_ACCESS_KEY_ID=dummy AWS_SECRET_ACCESS_KEY=dummy AWS_REGION=us-east-1 RAILS_ENV=production ruby -S bundle exec rails assets:precompile && ruby -S bundle exec rails assets:clobber'
```

Expected: PASS。Propshaft app assets と committed public assets が production precompile と共存できる。

- [ ] **Step 3: local production smoke で root public asset を叩く**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc '
  set -euo pipefail
  trap "kill ${server_pid:-0} >/dev/null 2>&1 || true" EXIT
  SECRET_KEY_BASE=dummy \
  AWS_ACCESS_KEY_ID=dummy \
  AWS_SECRET_ACCESS_KEY=dummy \
  AWS_REGION=us-east-1 \
  RAILS_ENV=production \
  RAILS_SERVE_STATIC_FILES=1 \
  bin/rails server -p 3001 -b 127.0.0.1 >/tmp/qni-www-pwa-public-assets.log 2>&1 &
  server_pid=$!
  for _ in $(seq 1 30); do
    curl -fsS -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/ >/dev/null 2>&1 && break
    sleep 1
  done
  curl -fsSI -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/
  curl -fsSI -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/manifest.json
  curl -fsSI -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/serviceworker.js
  curl -fsSI -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/favicon.ico
  curl -fsSI -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/icon.svg
  curl -fsSI -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/icon-192.png
  curl -fsSI -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/icon-512.png
  curl -fsSI -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/apple-touch-icon.png
  curl -fsSI -H "X-Forwarded-Proto: https" http://127.0.0.1:3001/apple-touch-icon-precomposed.png
'
```

Expected: すべて `200 OK`。

- [ ] **Step 4: root public asset final shape を spot-check する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets/apps/www
test ! -e app/assets/builds/serviceworker.js
test ! -e app/assets/builds/serviceworker.js.map
test ! -e app/assets/javascripts/manifest.json
test ! -e app/assets/javascripts/serviceworker.js
test ! -e app/assets/javascripts/serviceworker-companion.js
```

Expected: PASS。

- [ ] **Step 5: verification task は commit しない**

この task は verification のみ。commit しない。

### Task 5: repo-level verification・reviewer・統合・cleanup を完了する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-18-apps-www-pwa-public-assets-design.md`
- Reference: `docs/superpowers/plans/2026-04-18-apps-www-pwa-public-assets.md`

- [ ] **Step 1: scope guard と diff hygiene を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets
git diff --name-only origin/main...HEAD
git diff --check
```

Expected: source diff は `apps/www/**` と `scripts/check-local-build-env.mjs` のみに収まり、whitespace error も無い。

- [ ] **Step 2: repo-level verification を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-pwa-public-assets
node scripts/check-local-build-env.mjs
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm build && pnpm lint && pnpm typecheck && pnpm test:ci && pnpm test'
```

Expected: PASS。CI が実行する repo-level guard と pre-push 相当の全体検証が green。

- [ ] **Step 3: reviewer subagent で最終 diff をレビューする**

Review context に含めるもの:

- spec path: `docs/superpowers/specs/2026-04-18-apps-www-pwa-public-assets-design.md`
- plan path: `docs/superpowers/plans/2026-04-18-apps-www-pwa-public-assets.md`
- implementation diff
- user-approved constraints:
  - implementation surface is `apps/www/**` plus the single CI-guard exception `scripts/check-local-build-env.mjs`
  - `public/` is source-of-truth for manifest / serviceworker / icons
  - public URLs unchanged
  - remove misleading service worker registration
  - no true service worker redesign

Expected: APPROVED。問題があれば修正して focused verification を再実行する。

- [ ] **Step 4: main へ fast-forward merge する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git switch main
git status --short
git merge --ff-only feat/www-pwa-public-assets
```

Expected: local `main` へ fast-forward merge される。

- [ ] **Step 5: canonical path で最終 verification を再実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
node scripts/check-local-build-env.mjs
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm test'
git diff --check
```

Expected: PASS。merge 後も canonical path で CI guard と `pnpm test` が green。

- [ ] **Step 6: origin/main へ push し、GitHub Actions を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
git push origin main
gh run list --limit 10 --json databaseId,workflowName,status,conclusion,headSha --branch main
```

Expected: 対象 headSha の `CI`, `Deploy Pages`, `CodeQL` が起動する。完了まで待ち、すべて success を確認する。

- [ ] **Step 7: worktree / branch を cleanup する**

Run:

```bash
cd /home/yasuhito/Work/qni
git worktree remove .worktrees/www-pwa-public-assets
git branch -d feat/www-pwa-public-assets
git rev-list --left-right --count origin/main...HEAD
```

Expected: worktree と branch が削除され、`origin/main...HEAD` は `0	0` になる。
