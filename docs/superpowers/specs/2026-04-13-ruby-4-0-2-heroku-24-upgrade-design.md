# qni Ruby 4.0.2 / Heroku-24 更新設計

## 目的

長期間メンテされていない qni の Ruby 実行基盤を、追加費用を発生させずに最新安定版へ更新する。

今回の第一目標は以下の 2 点である。

1. repo 全体の Ruby version policy を **Ruby 4.0.2** に統一する
2. 本番 Heroku app **`qni-quantum`** を **`heroku-20` から `heroku-24`** へ移行し、`apps/www` を Ruby 4.0.2 で継続稼働させる

## 現状

### repo 側

- root と `apps/tutorial` は最近の作業で Ruby 2.7.4 前提に揃えられている
- `apps/www` も `Gemfile` と `.ruby-version` では Ruby 2.7.4 を前提としている
- `apps/www` は Rails 6.1 系で、gem 群も全体に古い
- `apps/tutorial` は Jekyll ベースで、本番対象ではないが repo 全体の Ruby version policy 統一の対象になる

### Heroku 本番側

本番は personal app ではなく、team `qniapp` の **`qni-quantum`** で運用されている。

確認できた内容:

- stack: `heroku-20`
- buildpacks:
  1. `https://github.com/lstoll/heroku-buildpack-monorepo`
  2. `heroku/nodejs`
  3. `jontewks/puppeteer`
  4. `heroku/ruby`
  5. `https://github.com/CoffeeAndCode/puppeteer-heroku-buildpack.git`
- config var: `APP_BASE=apps/www`
- custom domains:
  - `qniapp.net`
  - `www.qniapp.net`
- dynos: `web` x 2
- 最後のコード deploy は 2023-03-31

### 制約

- 追加費用がかかる staging app は作らない
- 本番 1 本で進める
- 数分の瞬断は許容する
- Rails 7 への移行は今回やらない
- repo 内で Ruby version を分けず、**Ruby 4.0.2 に統一**する

## 対象範囲

### 対象

- root / CI / Docker / scripts / docs を Ruby 4.0.2 前提に揃える
- `apps/www` を Ruby 4.0.2 で bundle / boot / test / deploy できる状態へ更新する
- `apps/tutorial` を Ruby 4.0.2 統一方針に追随させる
- `qni-quantum` の stack を `heroku-24` に変更し、deploy / smoke / rollback まで整える

### 対象外

- Rails 7 以上への移行
- 仕様変更
- 無関係な gem 一括更新
- add-on プラン変更
- dyno 数変更
- 新しい有料環境の追加

## 採用方針

### 1. 2 フェーズ方式

本番切替までを一気に行わず、次の 2 フェーズに分ける。

#### フェーズ 1: repo 側準備

- Ruby 4.0.2 へ version policy を統一
- `apps/www` の Ruby 4.0.2 互換性を確保
- 必要最小限の gem 更新を実施
- `apps/tutorial` と CI / Docker / scripts の整合を取る
- Heroku 反映前の検証を完了する

#### フェーズ 2: Heroku 本番切替

- 現行 Heroku 設定と正常 release を記録
- stack を `heroku-24` へ変更
- 更新済みコードを deploy
- smoke test 実施
- 問題時は即 rollback

この分割により、repo 側問題と Heroku runtime 問題を切り分けやすくする。

### 2. 最小更新方針

- Ruby 4.0.2 で問題になる箇所だけを更新する
- Rails は **6.1 系を維持**し、必要なら **6.1 系 patch/minor 更新まで**を許容する
- gem は「古いから更新」ではなく、次の優先順位で更新する
  1. bundle/install を塞ぐもの
  2. boot/runtime を塞ぐもの
  3. test/build を塞ぐもの
  4. 開発専用で壊れるもの

特に要注意な候補:

- `byebug`
- `rbtrace`
- `web-console`
- `bootsnap`
- `pg`
- `puma`
- puppeteer / grover 周辺

### 3. Heroku 側変更は最小限に限定

今回、Heroku 側で最初から確定している変更は次のみ。

- `qni-quantum` stack: **`heroku-20` → `heroku-24`**

そのほかは原則維持する。

- buildpack の並びはまず現行維持
- `APP_BASE=apps/www` は維持
- domains / add-ons / dyno 数は変更しない

ただし、Ruby 4.0.2 / heroku-24 で build が壊れる場合に限って buildpack や Node/Yarn 指定の最小調整を行う。

## 変更対象と責務

### A. Ruby version policy

対象:

- `.ruby-version`
- `.tool-versions`
- `.mise.toml`
- `apps/www/.ruby-version`
- `apps/tutorial/.ruby-version`
- `README.md`

責務:

- repo 全体が Ruby 4.0.2 を使うことを一意にする

### B. `apps/www` 本体

対象:

- `apps/www/Gemfile`
- `apps/www/Gemfile.lock`
- 必要に応じて `apps/www/package.json`
- 必要に応じて `apps/www/bin/*`, `config/*`

責務:

- Ruby 4.0.2 上で bundle / boot / test / build / deploy が成立する状態にする

### C. `apps/tutorial` 追随

対象:

- `apps/tutorial/Gemfile`
- `apps/tutorial/Gemfile.lock`
- `apps/tutorial/.ruby-version`

責務:

- repo 全体 Ruby 4.0.2 方針を壊さないようにする
- 本番対象ではないため、変更は最小限に留める

### D. CI / Docker / local scripts

対象:

- `.github/workflows/ci.yml`
- 必要に応じて `.github/workflows/pages.yml`
- `Dockerfile`
- `scripts/install-local-build-env.sh`
- `scripts/full-build-local.sh`
- `scripts/check-local-build-env.mjs`

責務:

- ローカル / CI / Heroku 前提のズレを減らす
- Ruby 4.0.2 の運用導線を成立させる

### E. Heroku rollout / rollback

対象:

- Heroku app `qni-quantum`
- stack / buildpacks / config snapshot
- rollout runbook
- rollback runbook

責務:

- 安全に本番切替する
- 問題時に即復旧できるようにする

## 実行順序

1. Heroku 現行状態の記録
2. root / app の Ruby version files 更新
3. `apps/www` を Ruby 4.0.2 対応
4. `apps/tutorial` を最小追随
5. CI / Docker / scripts 更新
6. ローカル / CI 検証
7. 切替直前の Heroku 状態再確認
8. `qni-quantum` stack を `heroku-24` に変更
9. deploy
10. smoke test
11. 問題があれば rollback

## Smoke test 方針

本番反映後は短時間で外形健全性を判定する。

### 必須チェック

1. `web.1`, `web.2` が起動している
2. `https://qniapp.net/` が 200 系を返す
3. `https://www.qniapp.net/` が 200 系を返す
4. エラーページではなく期待する HTML を返す
5. 代表的な CSS / JS asset が 200 を返す
6. `heroku logs` に致命的な boot / load / asset / puppeteer / DB エラーが連続していない

### 余力があれば追加

- DB を使う公開ページ 1 本の応答確認
- 既存の主要 public route 1 本の応答確認

## Rollback 方針

### rollback 条件

次のいずれかで即 rollback とする。

- build 失敗
- release 後に dyno が起動しない
- `qniapp.net` / `www.qniapp.net` が 200 系にならない
- トップページが 5xx / router error / app error
- asset 崩れで実質利用不能
- ログに致命エラーが連続

### rollback 方法

第一手段は **前の正常 release への rollback** とする。

Heroku の stack upgrade では、新 stack 向け slug の再 build が必要だが、公式ドキュメント上 rollback は通常どおり可能である。したがって切替前に「最後の正常 release」を必ず記録する。

必要なら補助手段として:

1. stack を `heroku-20` に戻す
2. 再 deploy する

ただし最優先は release rollback による即時復旧とする。

## Heroku 側で必要になる変更

### 確定

- `qni-quantum` の stack を `heroku-24` に変更する

### 条件付き

- buildpack の最小調整
- Node/Yarn version 明示
- Ruby 4.0.2 / Bundler に合わせた deploy 手順微修正

### 原則変更しないもの

- domains
- add-ons
- dyno 数
- DB プラン
- PointDNS / Scout の契約構成

## 成功条件

以下を満たしたら今回のフェーズは成功とする。

1. repo 全体の Ruby version policy が 4.0.2 に統一されている
2. `apps/www` が Ruby 4.0.2 で bundle / boot / test できる
3. CI が Ruby 4.0.2 前提で通る
4. `qni-quantum` が `heroku-24` で deploy できる
5. `qniapp.net` / `www.qniapp.net` の smoke test が通る
6. 問題時に rollback できる runbook が存在する
