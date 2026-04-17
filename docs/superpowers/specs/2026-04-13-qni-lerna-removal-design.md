# qni Lerna Removal Design

## Goal

qni から Lerna を段階的に外し、root orchestration を pnpm native に置き換える。最終的には、root build/lint/typecheck/test/docs/size を **Lerna なし・`COREPACK_ENABLE_STRICT=0` なし** で動かせる状態を目指す。

## Non-goals

- Turbo / Nx / Moon 等の新規導入
- Rails / Jekyll / Heroku 構成変更
- dependency 更新そのもの
- tutorial / www の機能変更
- publish/release flow の大規模再設計

## Current State

- package manager は pnpm へ移行中
- ただし root orchestration は `lerna run ...`
- `Lerna (powered by Nx)` が内部で Yarn 前提を残しており、`packageManager=pnpm` と strict mode が衝突する
- 現時点の暫定回避は `COREPACK_ENABLE_STRICT=0`

## Architecture Decision

qni では **ハイブリッド型 pnpm orchestration** を採用する。

### packages

- `packages/*` は recursive 実行
- 例: `pnpm -r --filter ./packages/* build`

### apps/www

- Rails app なので明示実行
- 例: `pnpm --dir apps/www build`

### apps/tutorial

- Pages artifact builder として root build から分離
- 例: `pnpm --dir apps/tutorial build:site`

### examples/elements-example

- example は明示実行
- 例: `pnpm --dir examples/elements-example build`

## Target Root Scripts

たとえば以下の方向:

```json
{
  "scripts": {
    "build:packages": "pnpm -r --filter ./packages/* build",
    "build:www": "pnpm --dir apps/www build",
    "build:example": "pnpm --dir examples/elements-example build",
    "build": "pnpm run build:packages && pnpm run build:www && pnpm run build:example",

    "lint:packages": "pnpm -r --filter ./packages/* lint",
    "lint:www": "pnpm --dir apps/www lint",
    "lint:tutorial": "pnpm --dir apps/tutorial lint",
    "lint": "pnpm run lint:packages && pnpm run lint:www && pnpm run lint:tutorial",

    "typecheck:packages": "pnpm -r --filter ./packages/* typecheck",
    "typecheck:www": "pnpm --dir apps/www typecheck",
    "typecheck": "pnpm run typecheck:packages && pnpm run typecheck:www",

    "test:ci:packages": "pnpm -r --filter ./packages/* test:ci",
    "test:ci:www": "pnpm --dir apps/www test:ci",
    "test:ci": "pnpm run test:ci:packages && pnpm run test:ci:www"
  }
}
```

## Migration Order

1. build を Lerna なしにする
2. lint / typecheck を Lerna なしにする
3. test / test:ci を Lerna なしにする
4. docs / size / clean を置換
5. CI / Pages / local helper / Docker を追従
6. `COREPACK_ENABLE_STRICT=0` を除去
7. `lerna.json` / `lerna` dependency を削除

## Main Risk

最大リスクは `apps/tutorial` の扱いです。`build:site` が root build に依存する構造を雑に扱うと、循環や二重 build を招きます。

## Acceptance Criteria

- root `pnpm build` が strict mode で通る
- root `pnpm lint` が strict mode で通る
- root `pnpm typecheck` が strict mode で通る
- root `pnpm test:ci` が strict mode で通る
- Pages build が strict mode で通る
- CI / local / Docker で `COREPACK_ENABLE_STRICT=0` が不要
- `lerna.json` と `devDependency.lerna` を削除できる
