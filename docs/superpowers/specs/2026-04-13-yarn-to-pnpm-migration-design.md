# Yarn 1 から pnpm への段階移行デザイン

## 背景

qni は現在、repo ルートで Yarn 1 workspaces と Lerna を使って monorepo の package/app build を束ねています。同時に、`apps/www` は Rails、`apps/tutorial` は Jekyll を使っており、GitHub Actions / GitHub Pages / Docker / local helper scripts も Yarn 1 前提で配線されています。

2026 年時点では Yarn 1 は保守的な継続運用対象であり、package manager としては pnpm の方が現代的で、workspace 管理・再現性・install パフォーマンスの面で優位です。ただし qni は JS-only repo ではないため、package manager の切り替えが Ruby lane や Pages build、Puppeteer/system test lane に副作用を出さないよう、段階的に進める必要があります。

## 目的

- repo の package manager を Yarn 1 から pnpm に置き換える
- 既存の Lerna orchestration は今回維持し、責務分離を保つ
- `apps/www`、`apps/tutorial`、`packages/*`、CI、Pages、Docker、local scripts で pnpm ベースの install/build/test を成立させる
- lockfile を `pnpm-lock.yaml` に移し、Yarn 依存の現行運用記述を更新する

## 非目的

- Lerna の廃止・別 task runner への移行
- Turbo/Nx/Moon 等への monorepo 再設計
- Node / Ruby version policy の変更
- Rails / Jekyll / Heroku deploy 方式の変更
- npm publish/release フロー全体の再設計
- dependency バージョン更新そのもの

## 現状観測

### ルート package manager / orchestration

- `package.json`
  - `workspaces` を定義
  - `clean/build/lint/typecheck/test/test:ci/docs/size` は `lerna run ...`
  - `publish:patch`、`fix:style` が `yarn` を直接呼ぶ
- ルート lockfile は `yarn.lock`
- ルートには `packageManager` 未設定

### app/package scripts

- `apps/tutorial/package.json`
  - `build` / `watch:*` が `yarn ...`
  - `build:site` が `yarn --cwd ../.. build` を前提に monorepo build を先行実行
- `apps/www/package.json`
  - `engines.yarn = 1.22.22`
  - `build` / `build:npm` / `pretest` / `test:watch` / `prerelease` が `yarn ...`
- 各 package の scripts にも `yarn jest` などの呼び出しが残る

### CI / Pages / local / Docker

- `.github/workflows/ci.yml`
  - `npm install --global yarn@1.22.22`
  - `yarn`, `yarn build`, `yarn lint`, `yarn typecheck`, `yarn test:ci`, `yarn size`
- `.github/workflows/pages.yml`
  - `cache: yarn`
  - `npm install --global yarn@1.22.22`
  - `yarn install --frozen-lockfile`
  - `yarn workspace @qni/tutorial build:site`
- `scripts/check-local-build-env.mjs`
  - `apps/www/package.json` の `engines.yarn` を検証
  - workflow が `yarn@1.22.22` を install していることを検証
- `scripts/full-build-local.sh`
  - `yarn install --frozen-lockfile`
  - `yarn build`
  - `yarn build:site`
- `scripts/install-local-build-env.sh`
  - `npm install --global yarn@1.22.22`
- `.husky/pre-push`
  - `yarn fix:style && npx eslint && yarn test`
- `Dockerfile`
  - `npm install -g yarn`
  - `yarn install`, `yarn build`

### ドキュメント

- `README.md`
  - local baseline として Yarn 1 を明記
- `docs/tech-stack.md`
  - Yarn workspaces + Lerna を現行 stack として説明

## 制約

- user 方針により、今回は package manager の切り替えに限定し、Lerna は維持する
- 既存の Pages URL (`https://qniapp.github.io/qni/`) は維持する
- `apps/www` の Rails test / system test lane と `apps/tutorial` の Jekyll build lane を壊さない
- local full build をこのマシンで引き続き通せること
- 移行中に failure point が分かるよう、段階的に変更する

## 移行方針

### 採用方針: 互換レイヤ付きの段階移行

一気に全面切り替えは行わず、まず pnpm workspace と lockfile を成立させ、その後 scripts / CI / Pages / local / Docker を順に移行する。Lerna は維持し、workspace 実行 runner を `pnpm` に差し替えるだけに留める。

### 設計原則

1. **責務分離**: 今回は package manager だけを替える。orchestration の設計変更はしない。
2. **small blast radius**: install / script / CI / Docker を段階化して切り分ける。
3. **node_modules 前提を維持**: 初回移行では PnP や厳格 isolation を狙わず、既存ツールとの互換性を優先する。
4. **fresh verification 重視**: lockfile 生成後、CI 相当と app 個別 build/test を実行して副作用を確かめる。
5. **rollback 明確化**: Yarn 撤去は最後に行い、途中段階で revert しやすくする。

## 目標アーキテクチャ

### ルート

- `package.json`
  - `packageManager: "pnpm@<pinned-version>"` を追加
  - scripts 内の `yarn` 呼び出しを `pnpm` / `pnpm exec` / `pnpm run` に置換
- `pnpm-workspace.yaml`
  - 現行 `workspaces` と同じ package/app/example 範囲を定義
- `pnpm-lock.yaml`
  - ルート lockfile として採用
- `.npmrc`
  - 必要に応じて hoist 振る舞いを制御して既存 node_modules 前提ツールを互換運用する

### package/app 実行

- package/app の scripts は、ローカル package manager として pnpm を前提にする
- `apps/tutorial` の root build 呼び出しは `pnpm --dir ../.. build` 相当へ移行
- `apps/www` の `engines.yarn` は削除または packageManager pin に置き換える

### CI / Pages / local / Docker

- GitHub Actions は `actions/setup-node` の pnpm cache と `pnpm/action-setup` を使う
- local helper scripts は global Yarn install 前提をやめ、pnpm を利用する
- Dockerfile も `pnpm install` / `pnpm build` ベースへ揃える

## リスクと対策

### 1. hoisting 差分で import / CLI 解決が壊れる

**リスク:** Yarn 1 の hoisting に依存した package があると、pnpm で CLI や dependency 解決が失敗する可能性がある。

**対策:**

- 初回は `node_modules` linker のまま進める
- 必要なら `.npmrc` で互換 hoist (`shamefully-hoist` または限定 public-hoist-pattern) を使う
- `build/lint/typecheck/test:ci/pages build` を fresh install 後に再実行する

### 2. Lerna と pnpm workspace の相性

**リスク:** 既存 `lerna run ...` が pnpm install レイアウトで想定通り動かない可能性がある。

**対策:**

- Lerna version は今回据え置き
- 最初に root `pnpm install` 後、`pnpm build` / `pnpm test:ci` で Lerna 経由実行を検証する
- もし script path/CLI 解決が崩れたら package 単位で `pnpm exec` 化する

### 3. Rails / Jekyll lane で asset build 前提が崩れる

**リスク:** `apps/www` や `apps/tutorial` が node_modules 配置に暗黙依存している可能性がある。

**対策:**

- `apps/www`: `build:js`, `rails test`, `yarn test` 相当の system test を focused で再検証
- `apps/tutorial`: `build`, `build:site`, local serve 相当を確認
- Ruby 側設定は触らない

### 4. Docker / local bootstrap が pnpm 未前提

**リスク:** 開発者 onboarding と Docker build が壊れる。

**対策:**

- `scripts/install-local-build-env.sh` と `Dockerfile` を migration surface として plan に含める
- README も同一変更セットで更新する

### 5. publish / prerelease のスクリプト差分

**リスク:** `publish:patch` や `apps/www` の `prerelease` が Yarn 固有呼び出しに依存している。

**対策:**

- 今回は release flow を全面再設計しない
- 既存意図を保ったまま `pnpm build`, `pnpm test`, `pnpm exec npm pack` などへ機械的に置き換える
- publish 自体は dry-run/差分確認までに留め、実 publish は今回の verification 対象外にする

## 検証方針

### 必須検証

- fresh install: `pnpm install --frozen-lockfile` 相当
- repo root:
  - `pnpm build`
  - `pnpm lint`
  - `pnpm typecheck`
  - `PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres pnpm test:ci`
  - `pnpm size`
- local helper:
  - `node scripts/check-pages-config.mjs`
  - `node scripts/check-local-build-env.mjs`
- `apps/tutorial`:
  - `pnpm --dir apps/tutorial build`
  - `pnpm --dir apps/tutorial build:site`
- `apps/www` focused:
  - `pnpm --dir apps/www build:js`
  - `pnpm --dir apps/www build:css`
  - `PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres ruby -S bundle exec rails test`
  - 必要に応じて system test lane
- `git diff --check`

### 望ましい追加検証

- Pages workflow 相当 build の手動再現
- Docker build smoke
- pre-push hook 相当コマンドの再実行

## 変更対象ファイルの見取り図

### 作成

- `pnpm-workspace.yaml`: pnpm workspace 定義
- `pnpm-lock.yaml`: pnpm lockfile
- `.npmrc`（必要なら）: hoist/linker 互換設定
- `docs/superpowers/plans/2026-04-13-yarn-to-pnpm-migration.md`: 実行 plan

### 変更

- `package.json`: packageManager / scripts / 依存運用の更新
- `.github/workflows/ci.yml`: pnpm install/cache へ移行
- `.github/workflows/pages.yml`: pnpm install/cache と tutorial build 呼び出し更新
- `apps/tutorial/package.json`: yarn 呼び出し除去
- `apps/www/package.json`: yarn engine / yarn scripts を pnpm 化
- `packages/*/package.json`: yarn script を pnpm 化
- `examples/elements-example/package.json`（必要なら）: runner 整合
- `scripts/check-local-build-env.mjs`: pnpm 前提検証へ更新
- `scripts/full-build-local.sh`: pnpm install/build へ更新
- `scripts/install-local-build-env.sh`: pnpm bootstrap へ更新
- `.husky/pre-push`: pnpm ベースへ更新
- `Dockerfile`: pnpm install/build へ更新
- `README.md`: local setup / toolchain 記述更新
- `docs/tech-stack.md`: package manager 記述更新

## 段階実行の想定順序

1. **workspace / lockfile baseline を成立**
2. **root/package/app scripts の pnpm 化**
3. **local helper scripts / Husky の pnpm 化**
4. **CI / Pages の pnpm 化**
5. **Docker / README / tech-stack の整合**
6. **fresh verification 一式**
7. **Yarn 痕跡削除（最後）**

## 受け入れ条件

- root install/build/lint/typecheck/test:ci/size が pnpm で通る
- `apps/tutorial` Pages build が pnpm で通り、`html/` artifact が生成される
- `apps/www` の Rails test lane と asset build lane が pnpm 化後も維持される
- CI / Pages workflow が pnpm 前提に更新される
- local helper scripts と Dockerfile が pnpm 前提に更新される
- 現行運用 docs が Yarn 1 前提のまま残らない
- `yarn.lock` と Yarn 1 install 手順は最後に撤去される
