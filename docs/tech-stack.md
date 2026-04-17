# qni tech stack

このドキュメントは、`qni` が **何の上で動き**、**何を使って build / test / deploy しているか** を、repo 全体と各 app/package の役割に分けて整理したものです。

## 概要

`qni` は **JavaScript / TypeScript を中心にした monorepo** です。量子回路の共通ロジック・シミュレータ・Web Components を共有 package として持ち、それらを 2 つのアプリで利用しています。

- `apps/www`: Rails ベースの本番 Web アプリ（`qniapp.net`）
- `apps/tutorial`: Jekyll ベースの静的チュートリアルサイト（GitHub Pages 公開）
- `packages/common`: 共通ユーティリティ
- `packages/simulator`: TypeScript 製の量子回路シミュレータ
- `packages/elements`: 量子回路表示用 Web Components ライブラリ

この repo は「単一のフロントエンド SPA」ではなく、**Rails アプリ + 静的サイト + 共有 TS ライブラリ群** を 1 つの monorepo で管理する構成です。

## 共通基盤

### 言語・実行環境

repo 全体のローカル標準ツールチェインは以下です。

- **Node.js `20.20.2`**
- **Ruby `4.0.2`**
- **pnpm `10.33.0`**

根拠:

- `.tool-versions`
- `.node-version`
- `.ruby-version`
- `.mise.toml`
- `.github/workflows/ci.yml`
- `.github/workflows/pages.yml`

この構成になっている理由は、Node 側 workspace build/test と、Ruby 側の Rails / Jekyll の両方を同じ repo で扱うためです。

### Monorepo 管理

repo ルートの `package.json` は **pnpm workspace + root scripts** を使って各 package/app をまとめて操作します。

主な役割:

- **pnpm workspace**: `packages/*` と `apps/*` の依存解決を一元管理
- **root scripts**: `build`, `lint`, `typecheck`, `test`, `docs`, `size` を明示的に横断実行

主なルート scripts:

- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm test:ci`
- `pnpm docs`
- `pnpm size`

### フロントエンド build 系

共有されている主な build/test ツール:

- **TypeScript**: 型チェック
- **ESLint**: lint
- **Prettier / pretty-quick**: 整形
- **esbuild**: JS bundle
- **Tailwind CSS + PostCSS**: CSS build
- **Rollup**: 一部 npm 向け build
- **Jest**: unit test
- **Web Test Runner**: browser component test
- **TypeDoc**: package docs

つまり repo 全体としては、**TS library monorepo の開発体験** を保ちつつ、アプリ層だけ Rails / Jekyll を載せている形です。

## アプリケーション

### `apps/www`

`apps/www` は **qniapp.net の本番 Web アプリ** です。

#### 何の上で動くか

- **Ruby on Rails 7.2 系** の Web アプリとして動作
- アプリサーバーは **Puma 7**
- 本番では **Heroku** 上で稼働
- DB は **PostgreSQL** 前提
- フロントエンド資産は Rails アプリ内で配信

根拠:

- `apps/www/Procfile`: `bundle exec puma -C config/puma.rb`
- `apps/www/package.json`
- `apps/www/Gemfile.lock`（Rails 7.2 系）
- production rollout/runbook の履歴

#### 何を使って構築するか

`apps/www` は Rails アプリですが、フロントエンド build は Node toolchain を併用します。

- **Rails**: ルーティング、サーバレンダリング、DB 連携、アプリ本体
- **esbuild**: `application.js` / `serviceworker.js` を bundle
- **Tailwind CSS + PostCSS**: `application.css` を build
- **TypeScript**: フロントエンド型チェック
- **Stimulus / Rails UJS / Turbolinks**: ブラウザ側 UI 補助
- **Puppeteer**: system test / browser 依存処理 / Grover 周辺のブラウザ実行経路で利用

主な scripts:

- `pnpm build`
- `pnpm build:js`
- `pnpm build:css`
- `pnpm test`（system test を含む）
- `pnpm test:ci`（Rails test）
- `pnpm build:docs`（`apps/www/docs` の Jekyll build）

#### app 内で使う共有 package

- `@qni/common`
- `@qni/simulator`
- `@qni/elements`

つまり `apps/www` は、**Rails がアプリの土台**で、その上に **TS 製 simulator / elements を組み合わせて量子回路 UI を提供する Web アプリ**です。

### `apps/tutorial`

`apps/tutorial` は **GitHub Pages 向けの静的チュートリアルサイト** です。

#### 何の上で動くか

- **Jekyll** ベースの静的サイト
- build 後の成果物は repo ルートの **`html/`** に出力
- 公開先は **GitHub Pages**

根拠:

- `apps/tutorial/package.json`
- `.github/workflows/pages.yml`
- Pages 移行で `docs/` ではなく `html/` を deploy artifact にした履歴

#### 何を使って構築するか

- **Ruby/Jekyll**: ページ生成
- **esbuild**: tutorial 用 JS / service worker build
- **Tailwind CSS**: tutorial 用 CSS build
- `@qni/common`, `@qni/simulator`, `@qni/elements`: 埋め込み回路や UI に利用

主な scripts:

- `pnpm start`
- `pnpm build`
- `pnpm build:site`
- `pnpm build:js`
- `pnpm build:css`

`build:site` が monorepo 全体の build を先に呼ぶのは、tutorial 単体ではなく、共有 package の build 成果物に依存しているためです。

## 共有パッケージ

### `packages/common`

共通ユーティリティ層です。

主な役割:

- 数値・角度・複素数まわりの補助
- 他 package で共有する基礎ロジック

使っているもの:

- TypeScript
- Jest
- TypeDoc
- `fraction.js`
- `neverthrow`

位置づけとしては、量子回路 UI そのものではなく、**下支えの共通ライブラリ**です。

### `packages/simulator`

量子回路のシミュレーション本体です。

主な役割:

- state vector / gate matrix などの量子回路計算
- `apps/www` や `apps/tutorial` から呼ばれる計算コア

使っているもの:

- TypeScript
- Jest
- `fp-ts`
- `qunit`

README でも触れられている通り、この package は browser 側から非同期に使われることを意識した構成で、**Qni の計算コア** にあたります。

### `packages/elements`

量子回路を表示・操作するための **Web Components ライブラリ** です。

主な役割:

- 量子回路 UI の描画
- circuit editor 的なブラウザ部品の提供
- `apps/www` や他の利用者への UI 部品配布

使っているもの:

- TypeScript
- Web Components
- Web Test Runner
- Tailwind CSS
- Rollup / build script
- `@github/catalyst`
- `interactjs`
- `xstate`
- `tippy.js`

位置づけとしては、**Qni の UI 部品ライブラリ** です。シミュレーション本体を持つ `packages/simulator` と分離されているため、表示層と計算層の責務が比較的きれいに分かれています。

## ビルド・テスト・開発ワークフロー

### ローカル開発

repo ルートで以下を使うのが基本です。

- `./scripts/install-local-build-env.sh`
- `./scripts/full-build-local.sh`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test:ci`

ローカルセットアップは、単に Node プロジェクトを動かすだけではなく、**Rails / Jekyll / PostgreSQL を含む複合 repo を安定して再現するための補助スクリプト** になっています。

### テスト構成

大まかには次の通りです。

- `packages/common` / `packages/simulator`: **Jest** による unit test
- `packages/elements`: **Web Test Runner** による browser test
- `apps/www`: **Rails test + system test**
- repo 全体: **pnpm root scripts 経由の横断 test**

つまりこの repo は、1 つの test runner に統一されているわけではなく、**層ごとに自然な test 手段を使い分ける構成**です。

## デプロイ・公開先

### GitHub Pages

`apps/tutorial` の静的サイトを build して、repo ルートの `html/` を artifact として **GitHub Pages** に deploy します。

- workflow: `.github/workflows/pages.yml`
- Node.js `20.20.2`
- Ruby `4.0.2`
- `pnpm --dir apps/tutorial build:site`
- deploy artifact: `html/`

公開 URL:

- `https://qniapp.github.io/qni/`

### Heroku

本番 Web アプリ `apps/www` は **Heroku** 上で運用されています。

現行方針の重要点:

- production target は `qni-quantum`
- stack は **heroku-24**
- Ruby は **4.0.2** に統一
- app server は **Puma**
- `APP_BASE=apps/www` の monorepo buildpack 構成

このため、repo 全体の Ruby policy や CI 設定も、最終的には `apps/www` 本番運用に合わせて揃えられています。

### Docker

repo ルートには `Dockerfile` もあります。これは主に `apps/www` を含む開発・実行環境をまとめて再現するためのものです。

含まれるもの:

- Ubuntu ベース環境
- Node.js 20 系
- pnpm
- Ruby 4.0.2
- PostgreSQL
- Rails app setup

現在の主たる本番配備先は Heroku ですが、Dockerfile は **ローカル/補助的な再現環境** としての意味合いが強いです。

## まとめ

`qni` の技術スタックは、単純な Web フロントエンド単体ではなく、次の 3 層で見ると分かりやすいです。

1. **共有 TS ライブラリ層**
   - `packages/common`
   - `packages/simulator`
   - `packages/elements`
2. **アプリ層**
   - Rails 本番アプリ `apps/www`
   - Jekyll 静的サイト `apps/tutorial`
3. **運用層**
   - pnpm workspace + root scripts
   - GitHub Actions CI
   - GitHub Pages
   - Heroku

つまり `qni` は、**TypeScript で量子回路の共通ロジックと UI を作り、その上に Rails アプリと Jekyll サイトを載せて公開する monorepo** です。
