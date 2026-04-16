# Yarn 1 から pnpm への段階移行 Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** qni monorepo の package manager を Yarn 1 から pnpm へ安全に移行し、Lerna を維持したまま local/CI/Pages/Docker の build・test・deploy 導線を pnpm ベースへ揃える。

**Architecture:** まず pnpm workspace と lockfile を成立させ、その上で root/package/app scripts、local helper scripts、CI/Pages、Docker、docs を段階的に pnpm 化する。初回移行では node_modules 互換性を優先し、必要なら `.npmrc` で hoist を補助しつつ、各段階で fresh verification を実施して failure surface を切り分ける。

**Tech Stack:** pnpm, Lerna, Node.js 20.20.2, Ruby 4.0.2, Rails 7.2, Jekyll, GitHub Actions, GitHub Pages, Docker

---

## File Structure

### New files

- `pnpm-workspace.yaml`: pnpm workspace の package/app/example 範囲を定義する
- `pnpm-lock.yaml`: pnpm lockfile
- `.npmrc`（必要なら）: hoist/linker の互換設定

### Modified files

- `package.json`: `packageManager` 追加、root scripts の pnpm 化
- `apps/tutorial/package.json`: `build:site` を含む scripts の pnpm 化
- `apps/www/package.json`: `engines.yarn` の撤去/置換、scripts の pnpm 化
- `packages/common/package.json`: `yarn jest` を pnpm 化
- `packages/simulator/package.json`: `yarn jest` を pnpm 化
- `packages/elements/package.json`: `yarn ...` scripts を pnpm 化
- `examples/elements-example/package.json`（必要なら）: runner 記述の整合
- `.github/workflows/ci.yml`: pnpm setup/cache/install/command に更新
- `.github/workflows/pages.yml`: pnpm setup/cache/install と tutorial build 更新
- `scripts/check-local-build-env.mjs`: pnpm 前提検証へ更新
- `scripts/full-build-local.sh`: pnpm install/build/site build へ更新
- `scripts/install-local-build-env.sh`: pnpm bootstrap へ更新
- `.husky/pre-push`: pnpm ベースへ更新
- `Dockerfile`: pnpm install/build へ更新
- `README.md`: package manager / local setup 記述更新
- `docs/tech-stack.md`: Yarn workspaces 記述を pnpm に更新

### Removed files / final cleanup

- `yarn.lock`
- 残存する Yarn install 手順
- 残存 `engines.yarn`

---

### Task 1: pnpm workspace baseline を作る

**Files:**

- Create: `pnpm-workspace.yaml`
- Create: `pnpm-lock.yaml`
- Create/Modify: `.npmrc`（必要なら）
- Modify: `package.json`
- Reference: `docs/superpowers/specs/2026-04-13-yarn-to-pnpm-migration-design.md`

- [ ] **Step 1: 現行 workspace 範囲と script 依存を再確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
node -e "const p=require('./package.json'); console.log(JSON.stringify({workspaces:p.workspaces,scripts:p.scripts}, null, 2))"
```

Expected: ルート `workspaces` と `scripts` が確認できる。

- [ ] **Step 2: `pnpm-workspace.yaml` を作成する**

内容:

```yaml
packages:
  - 'packages/*'
  - 'apps/*'
  - 'examples/*'
```

- [ ] **Step 3: `package.json` に `packageManager` を追加し、Yarn 固有 script を pnpm 記法へ最小変換する**

方針:

- `packageManager: "pnpm@<pinned-version>"` を追加
- `publish:patch`, `fix:style` などの `yarn` 呼び出しを `pnpm` / `pnpm exec` / `pnpm run` に変える
- `lerna run ...` はこの task では維持

- [ ] **Step 4: `pnpm install` を実行して lockfile を生成する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm install
```

Expected: `pnpm-lock.yaml` が生成され、install が完了する。

- [ ] **Step 5: hoisting 問題が出た場合だけ `.npmrc` に最小互換設定を追加する**

候補:

```ini
node-linker=node-modules
public-hoist-pattern[]=*
```

または、より狭い pattern を採用する。不要なら作らない。

- [ ] **Step 6: baseline build を走らせて workspace 解決だけ先に確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm build
```

Expected: Lerna 経由 build が通る、または次 task で直すべき具体 failure が得られる。

- [ ] **Step 7: Commit**

```bash
git add package.json pnpm-workspace.yaml pnpm-lock.yaml .npmrc
git commit -m "build: add pnpm workspace baseline"
```

### Task 2: package/app scripts を pnpm 化する

**Files:**

- Modify: `package.json`
- Modify: `apps/tutorial/package.json`
- Modify: `apps/www/package.json`
- Modify: `packages/common/package.json`
- Modify: `packages/simulator/package.json`
- Modify: `packages/elements/package.json`
- Modify: `examples/elements-example/package.json`（必要なら）

- [ ] **Step 1: package/app scripts 内の `yarn` 残存箇所を列挙する**

Run:

```bash
cd /home/yasuhito/Work/qni
grep -RIn "yarn" package.json apps packages examples --include='package.json'
```

Expected: package.json 群の `yarn` 使用箇所一覧が出る。

- [ ] **Step 2: root `package.json` scripts を pnpm 化する**

具体例:

- `publish:patch`: `pnpm build && pnpm test && lerna publish`
- `fix:style`: `pnpm exec prettier ... --write`

- [ ] **Step 3: `apps/tutorial/package.json` scripts を pnpm 化する**

具体例:

- `build`: `pnpm build:css && pnpm build:js`
- `build:site`: `pnpm --dir ../.. build && ruby -S bundle exec jekyll build -d ../../html`
- `watch:*`: `pnpm ...`

- [ ] **Step 4: `apps/www/package.json` scripts と engine 記述を pnpm 化する**

具体例:

- `build`, `build:npm`, `pretest`, `test:watch`, `prerelease` の `yarn` を置換
- `engines.yarn` は削除し、必要なら `packageManager` pin に寄せる

- [ ] **Step 5: `packages/*` scripts の `yarn jest` / `yarn test` を pnpm 化する**

方針:

- 既存意図を変えず、`pnpm jest ...` または `pnpm test ...` に最小変換する

- [ ] **Step 6: script 単位の focused verification を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm build
pnpm lint
pnpm typecheck
```

Expected: root scripts が pnpm 経由で通る。

- [ ] **Step 7: `apps/tutorial` と `apps/www` の focused build を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm --dir apps/tutorial build
pnpm --dir apps/www build:js
pnpm --dir apps/www build:css
```

Expected: asset/build scripts が pnpm で通る。

- [ ] **Step 8: Commit**

```bash
git add package.json apps/tutorial/package.json apps/www/package.json packages/*/package.json examples/elements-example/package.json
git commit -m "build: migrate workspace scripts to pnpm"
```

### Task 3: local helper scripts と Husky を pnpm 化する

**Files:**

- Modify: `scripts/check-local-build-env.mjs`
- Modify: `scripts/full-build-local.sh`
- Modify: `scripts/install-local-build-env.sh`
- Modify: `.husky/pre-push`

- [ ] **Step 1: helper scripts の Yarn 前提箇所を列挙する**

Run:

```bash
cd /home/yasuhito/Work/qni
grep -RIn "yarn" scripts .husky/pre-push
```

Expected: local helper / hook の更新箇所が列挙される。

- [ ] **Step 2: `scripts/install-local-build-env.sh` を pnpm bootstrap に更新する**

方針:

- global Yarn install をやめる
- Corepack 有効化または pnpm install 手順へ置換
- 最後の version 表示も `pnpm -v` ベースにする

- [ ] **Step 3: `scripts/full-build-local.sh` を pnpm ベースに更新する**

方針:

- `pnpm install --frozen-lockfile`
- `pnpm build`
- `pnpm --dir apps/tutorial build:site`

- [ ] **Step 4: `scripts/check-local-build-env.mjs` の検証条件を pnpm 前提へ更新する**

方針:

- `engines.yarn` 検証を削る
- CI/Pages workflow が pnpm setup を使うことを検証する
- README / root packageManager と整合することを確認する

- [ ] **Step 5: `.husky/pre-push` を pnpm ベースに更新する**

具体例:

```sh
pnpm fix:style && pnpm exec eslint && pnpm test
```

- [ ] **Step 6: local helper verification を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
node scripts/check-local-build-env.mjs
bash scripts/full-build-local.sh
```

Expected: helper config と local full build が通る。

- [ ] **Step 7: Commit**

```bash
git add scripts/check-local-build-env.mjs scripts/full-build-local.sh scripts/install-local-build-env.sh .husky/pre-push
git commit -m "build: migrate local tooling to pnpm"
```

### Task 4: CI と Pages workflow を pnpm 化する

**Files:**

- Modify: `.github/workflows/ci.yml`
- Modify: `.github/workflows/pages.yml`
- Reference: `scripts/check-local-build-env.mjs`

- [ ] **Step 1: workflow の Yarn 固定箇所を列挙する**

Run:

```bash
cd /home/yasuhito/Work/qni
grep -RIn "yarn\|Install Yarn\|cache: yarn" .github/workflows
```

Expected: CI/Pages の更新対象が列挙される。

- [ ] **Step 2: `ci.yml` を pnpm setup/cache/install/run に更新する**

方針:

- `pnpm/action-setup` と `actions/setup-node` の pnpm cache を使う
- install command を `pnpm install --frozen-lockfile` にする
- `yarn build/lint/typecheck/test:ci/size` を `pnpm ...` に置換

- [ ] **Step 3: `pages.yml` を pnpm setup/cache/install/run に更新する**

方針:

- `cache: pnpm`
- install command を `pnpm install --frozen-lockfile`
- tutorial build を `pnpm --filter @qni/tutorial build:site` または等価コマンドへ変更

- [ ] **Step 4: workflow 設定チェックを実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
node scripts/check-local-build-env.mjs
node scripts/check-pages-config.mjs
```

Expected: workflow と helper 検証が通る。

- [ ] **Step 5: CI 相当コマンドをローカルで fresh 実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm install --frozen-lockfile
pnpm build
pnpm lint
pnpm typecheck
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres pnpm test:ci
pnpm size
```

Expected: CI workflow 相当がローカルで再現できる。

- [ ] **Step 6: Pages 相当 build を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm --dir apps/tutorial build:site
```

Expected: `html/` artifact が生成される。

- [ ] **Step 7: Commit**

```bash
git add .github/workflows/ci.yml .github/workflows/pages.yml
git commit -m "ci: switch workflows to pnpm"
```

### Task 5: Docker と現行 docs を pnpm に揃える

**Files:**

- Modify: `Dockerfile`
- Modify: `README.md`
- Modify: `docs/tech-stack.md`

- [ ] **Step 1: Docker と docs の Yarn 記述を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
grep -RIn "Yarn\|yarn" Dockerfile README.md docs/tech-stack.md
```

Expected: 更新対象の説明・コマンドが列挙される。

- [ ] **Step 2: `Dockerfile` の install/build runner を pnpm に置き換える**

方針:

- global Yarn install をやめる
- pnpm 利用可能な状態を作る
- `yarn install`, `yarn build` を pnpm 化する

- [ ] **Step 3: `README.md` の local setup と toolchain 記述を pnpm 前提に更新する**

方針:

- baseline package manager を pnpm に更新
- bootstrap / full build 導線と整合させる

- [ ] **Step 4: `docs/tech-stack.md` の package manager 記述を pnpm に更新する**

方針:

- 現行の package manager 事実を更新
- Lerna は維持していることを明記

- [ ] **Step 5: docs/build 整合の確認を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
node scripts/check-local-build-env.mjs
pnpm --dir apps/tutorial build:site
```

Expected: docs と build 導線が一致した状態で通る。

- [ ] **Step 6: Commit**

```bash
git add Dockerfile README.md docs/tech-stack.md
git commit -m "docs: update tooling references to pnpm"
```

### Task 6: Yarn 痕跡の最終撤去と受け入れ確認

**Files:**

- Remove: `yarn.lock`
- Modify: 残存 `package.json` / docs / scripts（必要箇所のみ）

- [ ] **Step 1: repo 全体の Yarn 残存を検索する**

Run:

```bash
cd /home/yasuhito/Work/qni
grep -RIn "\byarn\b\|Yarn 1\|yarn.lock" . --exclude-dir=node_modules --exclude=yarn.lock --exclude=apps/www/yarn.lock
```

Expected: 履歴 docs を除く現行運用面での残存が把握できる。

- [ ] **Step 2: `yarn.lock` を削除し、残存する現行運用 Yarn 記述を整理する**

方針:

- 履歴 docs（過去 plan/spec/runbook）の記録は原則維持
- README / tech-stack / scripts / workflows / package scripts の現行運用だけを対象にする

- [ ] **Step 3: 受け入れ verification を一式実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm install --frozen-lockfile
pnpm build
pnpm lint
pnpm typecheck
node scripts/check-pages-config.mjs
node scripts/check-local-build-env.mjs
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres pnpm test:ci
pnpm size
pnpm --dir apps/tutorial build:site
pnpm --dir apps/www build:js
pnpm --dir apps/www build:css
git diff --check
```

Expected: 全コマンドが成功し、diff hygiene も clean。

- [ ] **Step 4: 必要なら `apps/www` system test lane を追加で実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres PUPPETEER_CACHE_DIR=/home/yasuhito/.cache/puppeteer pnpm test
```

Expected: package manager 変更が Puppeteer/system test lane を壊していないことを確認できる。

- [ ] **Step 5: 最終 Commit**

```bash
git add -A
git commit -m "build: migrate monorepo from yarn to pnpm"
```
