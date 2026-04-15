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
- **Rails 6.1.latest + Ruby 4.0.2 で `apps/www` が成立しない場合は本番切替に進まず停止し、次の 2 案をユーザーへ返す:**
  - Rails 7 系更新を今回の対象に広げる
  - 今回の Ruby target を 3.4.9 へ下げる

#### フェーズ 2: Heroku 本番切替

- 現行 Heroku 設定と正常 release を記録
- DB backup を取得する
- **現在の slug を参照する新しい baseline release を切って rollback 先を更新する**
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

### 4. Runtime / toolchain は必ず pin する

本番 1 本で切り替えるため、Heroku build 時の runtime 解決を暗黙にしない。

- `apps/www/package.json` に **Node.js / Yarn の exact version を明記**する
- `apps/www/Gemfile.lock` の `BUNDLED WITH` を **exact version** で更新する
- CI / local scripts / Heroku build の前提が食い違う状態を許容しない
- Ruby 以外の大規模更新はしないが、**Heroku build を再現可能にするための pin は今回の対象**とする

### 5. `apps/tutorial` に例外を作らない

今回の方針では repo 内で Ruby version を分けないため、`apps/tutorial` も Ruby 4.0.2 に追随させる。

- `apps/tutorial` が Ruby 4.0.2 で従来どおり build できることを確認する
- もし minimal change で追随できない場合、**production cutover を止めてユーザーへ判断を戻す**
- 一時的な「tutorial だけ 2.7.4 に残す」例外は作らない

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
- Heroku build 用の Node / Yarn / Bundler pin を明示して、build の再現性を確保する

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
8. `heroku pg:backups:capture` で DB backup を取得
9. 現在の slug を参照する baseline release を作り、その release 番号を rollback 先として固定
10. `qni-quantum` stack を `heroku-24` に変更
11. deploy
12. smoke test
13. 問題があれば rollback

## Smoke test 方針

本番反映後は短時間で外形健全性を判定する。

### 必須チェック

1. `web.1`, `web.2` が起動している
2. `https://qniapp.net/` が 200 系を返す
3. `https://www.qniapp.net/` が 200 系を返す
4. エラーページではなく期待する HTML を返す
5. 代表的な CSS / JS asset が 200 を返す
6. **DB を使う公開 route が 200 を返す**
7. **Grover / Puppeteer を実際に通る route または処理が成功する**
   - 既存実装では `/:json` の circuit show が `Circuit.find_or_create_by` と `attach_social_image` を通すため、この系統の request を最優先候補にする
8. `heroku logs` に致命的な boot / load / asset / puppeteer / DB エラーが連続していない

### 余力があれば追加

- 既存の主要 public route を追加で 1 本確認

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

第一手段は **切替直前に作った baseline release への rollback** とする。

理由:

- Heroku の stack upgrade 後も rollback 自体は通常どおり可能である
- ただし 2025-10 以降の release artifact retention policy により、**30 日超かつ 20 release 以上前の release は `expired` になり rollback できない**
- したがって「昔の正常 release に戻る」前提は置かず、**切替直前に現在 slug を参照する新しい baseline release を作っておく**

baseline release は、非機能の一時 config var を追加するなどして current slug を参照する新 release を作成し、その release 番号を記録する方式を採る。

必要なら補助手段として:

1. stack を元の値へ戻す
2. baseline release へ rollback する

ただし **Heroku-20 は EOL のため、元 stack への再 build / 再 deploy を前提にしない**。最優先は baseline release への rollback による即時復旧とする。

## Heroku 側で必要になる変更

### 確定

- `qni-quantum` の stack を `heroku-24` に変更する

### 条件付き

- buildpack の最小調整
- `apps/www` の Node/Yarn exact version 明示
- Ruby 4.0.2 / Bundler に合わせた deploy 手順微修正
- baseline release 作成用の一時 config var 操作

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
7. 切替直前に作った baseline release への rollback 実行可能性が確認されている
