# qni Lerna Removal Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** qni の root orchestration から Lerna を外し、pnpm native な root scripts と周辺 workflow へ段階移行して `COREPACK_ENABLE_STRICT=0` も不要にする。

**Architecture:** `packages/*` は pnpm recursive、`apps/www` と `examples/elements-example` は明示実行、`apps/tutorial` は Pages artifact builder として root build から分離するハイブリッド構成に置き換える。まず root build/lint/typecheck/test 系を Lerna なしで成立させ、その後 CI/Pages/local helper/Docker を追従させ、最後に `lerna.json` と `devDependencies.lerna` を削除する。

**Tech Stack:** pnpm 9, Node.js 20.20.2, Ruby 4.0.2, Rails 7.2, Jekyll, GitHub Actions, GitHub Pages, Docker

---

## File Structure

### Modified files

- `package.json`: root scripts を Lerna 依存から pnpm native へ置換する
- `lerna.json`: 最終削除までの途中で参照確認、最後に削除
- `apps/tutorial/package.json`: root build 依存の循環を避けるため `build:site` の位置づけを再確認する
- `.github/workflows/ci.yml`: root scripts の新構造に追従する
- `.github/workflows/pages.yml`: tutorial Pages build の新構造に追従する
- `scripts/install-local-build-env.sh`: strict mode 互換前提を削る
- `scripts/full-build-local.sh`: root scripts の新構造に追従する
- `scripts/check-local-build-env.mjs`: Lerna / strict 互換前提を更新する
- `scripts/check-pages-config.mjs`: tutorial build 配線を検証する
- `.husky/pre-push`: root scripts の新構造に追従する
- `Dockerfile`: strict mode 互換前提を削る
- `README.md`: root orchestration と local workflow を更新する
- `docs/tech-stack.md`: monorepo orchestration の事実を更新する

### Removed files

- `lerna.json`

---

### Task 1: root `build` を Lerna なしに置き換える

**Files:**

- Modify: `package.json`
- Reference: `apps/tutorial/package.json`
- Reference: `docs/superpowers/specs/2026-04-13-qni-lerna-removal-design.md`

- [ ] **Step 1: 現行 build 依存を再確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
node -e "const p=require('./package.json'); console.log(p.scripts.build); console.log(require('./apps/tutorial/package.json').scripts['build:site'])"
```

Expected: root `build` と tutorial `build:site` の現状依存が確認できる。

- [ ] **Step 2: root `build` をハイブリッド pnpm 構成へ書き換える**

方針:

- `build:packages`: `pnpm -r --filter ./packages/* build`
- `build:www`: `pnpm --dir apps/www build`
- `build:example`: `pnpm --dir examples/elements-example build`
- `build`: 上記の合成
- `apps/tutorial` は root `build` から外す

- [ ] **Step 3: tutorial `build:site` が root `build` 循環を起こさないことを確認する**

方針:

- 必要なら `apps/tutorial/package.json` の prebuild 呼び出しを shared packages + www のみへ寄せる
- Pages 用 build は tutorial 専用レーンに保つ

- [ ] **Step 4: strict mode で root build を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm build
```

Expected: `COREPACK_ENABLE_STRICT=0` なしで root build が通る。

- [ ] **Step 5: tutorial Pages build を別レーンで確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm --dir apps/tutorial build:site
```

Expected: `html/` が生成され、root build と循環しない。

- [ ] **Step 6: Commit**

```bash
git add package.json apps/tutorial/package.json
git commit -m "build: replace lerna build orchestration"
```

### Task 2: root `lint` / `typecheck` を Lerna なしに置き換える

**Files:**

- Modify: `package.json`

- [ ] **Step 1: 現行 lint/typecheck 対象を棚卸しする**

Run:

```bash
cd /home/yasuhito/Work/qni
node -e "const p=require('./package.json'); console.log({lint:p.scripts.lint,typecheck:p.scripts.typecheck})"
```

Expected: 現行 root script が確認できる。

- [ ] **Step 2: root `lint` を pnpm native に置き換える**

方針:

- `lint:packages`: `pnpm -r --filter ./packages/* lint`
- `lint:www`: `pnpm --dir apps/www lint`
- `lint:tutorial`: `pnpm --dir apps/tutorial lint`
- `lint`: 上記の合成

- [ ] **Step 3: root `typecheck` を pnpm native に置き換える**

方針:

- `typecheck:packages`: `pnpm -r --filter ./packages/* typecheck`
- `typecheck:www`: `pnpm --dir apps/www typecheck`
- `typecheck`: 上記の合成

- [ ] **Step 4: strict mode で lint/typecheck を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm lint
pnpm typecheck
```

Expected: `COREPACK_ENABLE_STRICT=0` なしで両方通る。

- [ ] **Step 5: Commit**

```bash
git add package.json
git commit -m "build: replace lerna lint and typecheck orchestration"
```

### Task 3: root `test` / `test:ci` を Lerna なしに置き換える

**Files:**

- Modify: `package.json`
- Reference: `apps/www/package.json`
- Reference: `packages/*/package.json`

- [ ] **Step 1: 現行 test/test:ci の構成を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
node -e "const p=require('./package.json'); console.log({test:p.scripts.test,'test:ci':p.scripts['test:ci']})"
```

Expected: 現行 root test 系 script が確認できる。

- [ ] **Step 2: package 側 test:ci をまとめる root script を追加する**

方針:

- `test:ci:packages`: `pnpm -r --filter ./packages/* test:ci`
- `test:ci:www`: `pnpm --dir apps/www test:ci`
- `test:ci`: 上記の合成

- [ ] **Step 3: 必要なら `test` も root で同様に再構成する**

方針:

- browser/system test を含む root `test` は、package 群と `apps/www` の役割を明示した構成にする
- もし現行 `test` が開発者向けすぎて不安定なら、今回の必須対象は `test:ci` を優先する

- [ ] **Step 4: strict mode で root `test:ci` を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres pnpm test:ci
```

Expected: `COREPACK_ENABLE_STRICT=0` なしで root `test:ci` が通る。

- [ ] **Step 5: 必要なら `apps/www` system test lane を追加確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/apps/www
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres PUPPETEER_CACHE_DIR=/home/yasuhito/.cache/puppeteer pnpm test
```

Expected: package manager / root orchestration の変更が system test lane を壊していない。

- [ ] **Step 6: Commit**

```bash
git add package.json
git commit -m "build: replace lerna test orchestration"
```

### Task 4: root `docs` / `size` / `clean` を Lerna なしに置き換える

**Files:**

- Modify: `package.json`

- [ ] **Step 1: 現行 docs/size/clean script を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
node -e "const p=require('./package.json'); console.log({clean:p.scripts.clean,docs:p.scripts.docs,size:p.scripts.size})"
```

Expected: 現行補助 script が確認できる。

- [ ] **Step 2: `clean` を pnpm native に置き換える**

方針:

- 対象 workspace を明示し、必要なものだけ `pnpm --dir ... clean` で呼ぶ

- [ ] **Step 3: `docs` と `size` を pnpm native に置き換える**

方針:

- `docs` と `size` は対象 workspace を明示する
- `packages/*` recursive が安全なら活用する

- [ ] **Step 4: strict mode で補助 script を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm docs
pnpm size
```

Expected: `COREPACK_ENABLE_STRICT=0` なしで補助 script が通る。

- [ ] **Step 5: Commit**

```bash
git add package.json
git commit -m "build: replace lerna utility orchestration"
```

### Task 5: CI / Pages / local helper / Docker を strict mode 前提に追従させる

**Files:**

- Modify: `.github/workflows/ci.yml`
- Modify: `.github/workflows/pages.yml`
- Modify: `scripts/install-local-build-env.sh`
- Modify: `scripts/full-build-local.sh`
- Modify: `scripts/check-local-build-env.mjs`
- Modify: `scripts/check-pages-config.mjs`
- Modify: `.husky/pre-push`
- Modify: `Dockerfile`
- Modify: `README.md`
- Modify: `docs/tech-stack.md`

- [ ] **Step 1: `COREPACK_ENABLE_STRICT=0` の残存箇所を列挙する**

Run:

```bash
cd /home/yasuhito/Work/qni
grep -RIn "COREPACK_ENABLE_STRICT=0" . --exclude-dir=node_modules
```

Expected: 追従が必要な箇所一覧が得られる。

- [ ] **Step 2: CI / Pages workflow から互換 env を外す**

方針:

- strict mode で root `pnpm ...` が通る前提に更新する
- Pages workflow は `pnpm --dir apps/tutorial build:site` またはそれに準ずる新構成へ追従する

- [ ] **Step 3: local helper / Husky / Docker を strict mode 前提へ更新する**

方針:

- install/build/test の全導線から互換 env を除去する
- README / tech-stack / config checks も整合させる

- [ ] **Step 4: config checks を再実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
node scripts/check-local-build-env.mjs
node scripts/check-pages-config.mjs
```

Expected: helper/workflow/docs が strict mode 前提で整合する。

- [ ] **Step 5: strict mode でフル verification を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm install --frozen-lockfile
pnpm build
pnpm lint
pnpm typecheck
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres pnpm test:ci
pnpm size
pnpm --dir apps/tutorial build:site
git diff --check
```

Expected: strict mode のまま主要 verification が通る。

- [ ] **Step 6: Commit**

```bash
git add .github/workflows/ci.yml .github/workflows/pages.yml scripts/install-local-build-env.sh scripts/full-build-local.sh scripts/check-local-build-env.mjs scripts/check-pages-config.mjs .husky/pre-push Dockerfile README.md docs/tech-stack.md
git commit -m "ci: remove corepack compatibility mode"
```

### Task 6: Lerna を削除して最終確認する

**Files:**

- Remove: `lerna.json`
- Modify: `package.json`

- [ ] **Step 1: `lerna` 参照を最終検索する**

Run:

```bash
cd /home/yasuhito/Work/qni
grep -RIn "\blerna\b" . --exclude-dir=node_modules
```

Expected: 現行運用面に残る Lerna 参照が把握できる。

- [ ] **Step 2: `package.json` から `devDependencies.lerna` と Lerna script を除去する**

方針:

- root script はすでに pnpm native 化済みであること
- ここでは不要な Lerna 依存だけを外す

- [ ] **Step 3: `lerna.json` を削除する**

- [ ] **Step 4: 最終 verification を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
pnpm install --frozen-lockfile
pnpm build
pnpm lint
pnpm typecheck
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres pnpm test:ci
pnpm size
pnpm --dir apps/tutorial build:site
git diff --check
```

Expected: Lerna なし・strict mode のまま verification が通る。

- [ ] **Step 5: Final Commit**

```bash
git add -A
git commit -m "build: remove lerna from monorepo orchestration"
```
