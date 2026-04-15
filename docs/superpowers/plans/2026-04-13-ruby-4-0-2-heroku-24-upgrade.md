# qni Ruby 4.0.2 / Heroku-24 更新 実装計画

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** repo 全体の Ruby version policy を 4.0.2 に統一し、`apps/www` を Ruby 4.0.2 / Heroku-24 で安全に deploy できる状態へ更新する。

**Architecture:** まず repo 側で Ruby 4.0.2 互換を完成させ、その後に Heroku 本番 app `qni-quantum` の stack を `heroku-24` へ切り替えて deploy する。rollback は切替直前に作る baseline release を起点に行い、古い expired release には依存しない。

**Tech Stack:** Ruby 4.0.2, Rails 6.1.x, Bundler, Heroku Cedar classic buildpacks, Node.js, Yarn 1, Jekyll, GitHub Actions

---

### Task 1: Heroku 現行状態と rollback 前提を固定する

**Files:**

- Create: `docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md`
- Verify only: Heroku app `qni-quantum`

- [ ] **Step 1: Heroku 現行状態を採取する**

Run:

```bash
heroku apps:info -a qni-quantum
heroku stack -a qni-quantum
heroku buildpacks -a qni-quantum
heroku config -s -a qni-quantum | cut -d= -f1
heroku domains -a qni-quantum
heroku releases -a qni-quantum -n 20
heroku ps -a qni-quantum
```

Expected: 現行 stack / buildpacks / config key 名 / domains / releases / dynos が取得できる。

- [ ] **Step 2: 生の秘密値を保存しない形で runbook 下書きを作る**

`docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md` に以下を記録する:

- app 名
- stack
- buildpack 一覧
- `APP_BASE=apps/www`
- domains
- dyno 数
- rollback 手順の枠

**注意:** Config vars は key 名のみ書き、secret value は保存しない。

- [ ] **Step 3: 現行外形疎通を確認する**

Run:

```bash
curl -I -L https://qniapp.net/
curl -I -L https://www.qniapp.net/
```

Expected: どちらも 200 系。

- [ ] **Step 4: rollback 候補 release の扱いを runbook に明記する**

Runbook に次を明記する:

- 切替前の古い release は expired の可能性がある
- rollback は切替直前に作る baseline release を第一候補とする
- baseline release 番号を runbook に書く

- [ ] **Step 5: Commit**

```bash
git add docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md
git commit -m "docs: add qni-quantum rollout runbook"
```

### Task 2: repo 全体の Ruby 4.0.2 version policy を確立する

**Files:**

- Modify: `.ruby-version`
- Modify: `.tool-versions`
- Modify: `.mise.toml`
- Modify: `apps/www/.ruby-version`
- Modify: `apps/tutorial/.ruby-version`
- Modify: `README.md`
- Test: `scripts/check-local-build-env.mjs`

- [ ] **Step 1: 既存 version files を Ruby 4.0.2 前提へ更新する**

更新対象:

- root `.ruby-version`
- root `.tool-versions`
- `apps/www/.ruby-version`
- `apps/tutorial/.ruby-version`

Expected: repo 内の Ruby 宣言が 4.0.2 に揃う。

- [ ] **Step 2: `.mise.toml` を Ruby 4.0.2 前提に更新する**

`compile = false` の扱いと、Ruby 4.0.2 を local で現実的に入れられる方針へ調整する。

- [ ] **Step 3: `README.md` の local setup 説明を Ruby 4.0.2 に更新する**

最低限以下を反映する:

- Ruby 4.0.2
- setup script / full build script
- `apps/www` が本番対象であること

- [ ] **Step 4: `scripts/check-local-build-env.mjs` を red にする**

Run:

```bash
npm run test:local-build-env
```

Expected: FAIL。まだチェック内容が 2.7.4 前提のため。

- [ ] **Step 5: チェックを Ruby 4.0.2 前提へ更新する**

`check-local-build-env.mjs` を修正し、root / app の Ruby 宣言が 4.0.2 であることを確認するようにする。

- [ ] **Step 6: config check が green になることを確認する**

Run:

```bash
npm run test:local-build-env
```

Expected: PASS。

- [ ] **Step 7: Commit**

```bash
git add .ruby-version .tool-versions .mise.toml apps/www/.ruby-version apps/tutorial/.ruby-version README.md scripts/check-local-build-env.mjs
git commit -m "chore: pin repo Ruby to 4.0.2"
```

### Task 3: `apps/www` を Ruby 4.0.2 で bundle できるようにする

**Files:**

- Modify: `apps/www/Gemfile`
- Modify: `apps/www/Gemfile.lock`
- Verify only: `apps/www`

- [ ] **Step 1: `apps/www/Gemfile` の Ruby version を 4.0.2 に更新する**

Expected: `ruby '4.0.2'` になる。

- [ ] **Step 2: Ruby 4.0.2 で lockfile を再生成する準備をする**

Run:

```bash
cd apps/www
ruby -v
ruby -S bundle -v
```

Expected: Ruby 4.0.2 が選ばれ、Bundler version が確認できる。

- [ ] **Step 3: まず bundle install を実行して最初の失敗点を確定する**

Run:

```bash
cd apps/www
ruby -S bundle install
```

Expected: そのまま通るか、最初の非互換 gem / Bundler / native extension エラーで失敗する。

- [ ] **Step 4: 失敗理由ごとに最小修正を入れる**

優先順位:

1. Bundler / lockfile format
2. native extension (`pg`, `puma`, `bootsnap` など)
3. 開発系 gem (`byebug`, `rbtrace`, `web-console`)
4. Rails 6.1 patch/minor 更新

**ルール:** Rails 7 へは進まない。Rails 6.1.latest + Ruby 4.0.2 で成立しない場合、この計画を停止してユーザーへ次の 2 案を返す。

1. Rails 7 系更新を今回の対象に広げる
2. 今回の Ruby target を 3.4.9 へ下げる

- [ ] **Step 5: `bundle install` を green にする**

Run:

```bash
cd apps/www
ruby -S bundle install
```

Expected: PASS。`Gemfile.lock` の `RUBY VERSION` と `BUNDLED WITH` が更新される。

- [ ] **Step 6: Commit**

```bash
git add apps/www/Gemfile apps/www/Gemfile.lock
git commit -m "chore: update apps/www for Ruby 4.0.2"
```

### Task 4: `apps/www` の Node / Yarn / Bundler を pin し、build 再現性を作る

**Files:**

- Modify: `apps/www/package.json`
- Modify: `apps/www/Gemfile.lock`
- Modify: `.github/workflows/ci.yml`
- Verify or Modify: `.github/workflows/pages.yml`
- Verify or Modify: `Dockerfile`
- Modify: `scripts/install-local-build-env.sh`
- Modify: `scripts/full-build-local.sh`

- [ ] **Step 1: `apps/www/package.json` に `engines.node` / `engines.yarn` を追加する**

Node は Heroku classic buildpack / 既存 frontend toolchain と整合する exact version にする。

- [ ] **Step 2: Bundler の exact version を lockfile に固定する**

Run:

```bash
cd apps/www
ruby -S bundle update --bundler
```

Expected: `BUNDLED WITH` が現行の exact version になる。

- [ ] **Step 3: CI の Ruby version を 4.0.2 に更新する**

`.github/workflows/ci.yml` で `apps/www` / `apps/tutorial` setup の Ruby version を揃える。

- [ ] **Step 4: `pages.yml` と `Dockerfile` の Ruby 前提を点検する**

確認観点:

- `.github/workflows/pages.yml` に Ruby version の明示があれば 4.0.2 へ追随する
- `Dockerfile` が 2.7.4 を source build している前提なら、4.0.2 に追随させるか、少なくとも現状のズレを解消する

Expected: CI / Pages / Docker の Ruby version policy が矛盾しない。

- [ ] **Step 5: local install/build scripts の Ruby 4.0.2 前提を整える**

対象:

- `scripts/install-local-build-env.sh`
- `scripts/full-build-local.sh`

Expected: local setup と full build が Ruby 4.0.2 で回る。

- [ ] **Step 6: config / setup scripts を確認する**

Run:

```bash
npm run test:local-build-env
bash scripts/install-local-build-env.sh
```

Expected: PASS。

- [ ] **Step 7: Commit**

```bash
git add apps/www/package.json apps/www/Gemfile.lock .github/workflows/ci.yml .github/workflows/pages.yml Dockerfile scripts/install-local-build-env.sh scripts/full-build-local.sh
git commit -m "chore: pin runtime versions for Ruby 4.0.2 rollout"
```

### Task 5: `apps/tutorial` を Ruby 4.0.2 方針に追随させる

**Files:**

- Modify: `apps/tutorial/Gemfile`
- Modify: `apps/tutorial/Gemfile.lock`
- Verify only: `apps/tutorial`

- [ ] **Step 1: Ruby 4.0.2 で `apps/tutorial` の bundle install を試す**

Run:

```bash
cd apps/tutorial
ruby -v
ruby -S bundle install
```

Expected: PASS するか、最初の非互換点で失敗する。

- [ ] **Step 2: minimal change で追随させる**

ルール:

- feature 変更はしない
- Ruby 4.0.2 で build を壊さない最小修正だけ行う
- 追随不能なら production cutover を止めてユーザーへ戻す

- [ ] **Step 3: tutorial build を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
bash scripts/full-build-local.sh
```

Expected: root build と tutorial site build が PASS。

- [ ] **Step 4: Commit**

```bash
git add apps/tutorial/Gemfile apps/tutorial/Gemfile.lock
git commit -m "chore: update tutorial for Ruby 4.0.2"
```

### Task 6: `apps/www` の boot / test / build を Ruby 4.0.2 で green にする

**Files:**

- Verify only: `apps/www`
- Modify as needed: `apps/www/*`

- [ ] **Step 1: `apps/www` の build を実行する**

Run:

```bash
cd apps/www
yarn build
```

Expected: PASS。asset build が通る。

- [ ] **Step 2: `apps/www` の test:ci を実行する**

Run:

```bash
cd apps/www
ruby -S bundle exec rails test
```

Expected: PASS するか、失敗箇所が Ruby 4.0.2 互換問題として再現する。

- [ ] **Step 3: 失敗があれば根本原因を特定して最小修正を入れる**

対象例:

- boot failure
- Zeitwerk / Rails 6.1 patch issue
- native ext runtime issue
- test helper incompatibility

- [ ] **Step 4: `apps/www` の system / smoke 寄り動線を確認する**

Run:

```bash
cd apps/www
ruby -S bundle exec rails runner 'puts :boot_ok'
```

Expected: `boot_ok` が出る。

- [ ] **Step 5: root CI 相当を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni
npm run test:local-build-env
npm run test:pages-config
yarn build
yarn lint
yarn typecheck
yarn test:ci
```

Expected: 全て PASS。

- [ ] **Step 6: Commit**

```bash
git add .ruby-version .tool-versions .mise.toml README.md \
  apps/www apps/tutorial \
  .github/workflows/ci.yml .github/workflows/pages.yml \
  Dockerfile scripts/install-local-build-env.sh scripts/full-build-local.sh scripts/check-local-build-env.mjs
git commit -m "fix: make apps/www pass on Ruby 4.0.2"
```

### Task 7: Heroku rollout runbook を完成させる

**Files:**

- Modify: `docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md`

- [ ] **Step 1: baseline release 作成手順を具体化する**

Runbook に exact command を書く:

- 一時 config var を追加して release 作成
- release 番号を記録
- 後でその config var を消す手順

- [ ] **Step 2: DB backup 手順を具体化する**

Runbook に exact command を書く:

```bash
heroku pg:backups:capture -a qni-quantum
```

確認方法も書く。

- [ ] **Step 3: stack update / deploy / smoke / rollback の exact commands を書く**

最低限含める:

- `heroku stack:set heroku-24 -a qni-quantum`
- deploy コマンド
- `heroku ps -a qni-quantum`
- `heroku logs -a qni-quantum --tail`
- `heroku rollback <baseline-release> -a qni-quantum`

- [ ] **Step 4: smoke に使う route / payload を固定する**

`/:json` route は `find_or_create_by` と `attach_social_image` を通るため、runbook には以下を明記する:

- side effect を許容する最小 payload
- DB-backed / Grover path を同時に確認できること

- [ ] **Step 5: Commit**

```bash
git add docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md
git commit -m "docs: finalize qni-quantum rollout runbook"
```

### Task 8: Heroku 本番切替を実施する

**Files:**

- Verify only: Heroku app `qni-quantum`

- [ ] **Step 1: 切替直前に current status を再確認する**

Run:

```bash
heroku apps:info -a qni-quantum
heroku ps -a qni-quantum
curl -I -L https://qniapp.net/
curl -I -L https://www.qniapp.net/
```

Expected: 現状正常。

- [ ] **Step 2: DB backup を取得して完了確認まで行う**

Run:

```bash
heroku pg:backups:capture -a qni-quantum
heroku pg:backups -a qni-quantum
```

Expected: backup job が開始され、最新 backup が完了済みとして確認できる。

- [ ] **Step 3: baseline release を作る**

Runbook の exact command を実行し、baseline release 番号を記録する。
Expected: current slug を参照する新 release ができる。

- [ ] **Step 4: stack を `heroku-24` に変更する**

Run:

```bash
heroku stack:set heroku-24 -a qni-quantum
```

Expected: 次回 deploy で有効になる pending 状態になる。

- [ ] **Step 5: production を deploy する**

Runbook に事前記載した exact command をそのまま実行する。
Expected: build / release 成功。

- [ ] **Step 6: smoke test を実行する**

最低限:

```bash
heroku ps -a qni-quantum
curl -I -L https://qniapp.net/
curl -I -L https://www.qniapp.net/
heroku logs -a qni-quantum --num 200
```

加えて runbook に固定した以下を必須実施とする:

- HTML body が app error / router error ではないことの確認
- 代表 asset の 200 確認
- DB-backed route の 200 確認
- Grover / Puppeteer path の成功確認
- logs に boot / asset / puppeteer / DB の致命エラーが連続していないことの確認

Expected: PASS。

- [ ] **Step 7: 失敗時は即 rollback する**

Run:

```bash
heroku rollback <baseline-release> -a qni-quantum
```

Expected: baseline release に復旧。

- [ ] **Step 8: 結果を runbook と spec に反映して締める**

Runbook に:

- 実行日時
- deploy release
- baseline release
- smoke 結果
- rollback 実行有無
  を記録する。

### Task 9: 最終確認と共有

**Files:**

- Verify only

- [ ] **Step 1: 最終状態を確認する**

Run:

```bash
git status --short
heroku apps:info -a qni-quantum
heroku stack -a qni-quantum
heroku releases -a qni-quantum -n 10
curl -I -L https://qniapp.net/
curl -I -L https://www.qniapp.net/
```

Expected: working tree clean、stack は `heroku-24`、外形疎通 OK。

- [ ] **Step 2: verification-before-completion として fresh evidence を再確認する**

少なくとも直前に実行したコマンド出力を読んで、成功条件 1〜7 を満たすか確認する。

- [ ] **Step 3: Commit**

必要な docs 差分が残っていれば:

```bash
git add docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md \
  docs/superpowers/specs/2026-04-13-ruby-4-0-2-heroku-24-upgrade-design.md \
  docs/superpowers/plans/2026-04-13-ruby-4-0-2-heroku-24-upgrade.md
git commit -m "docs: record Ruby 4.0.2 production rollout"
```

- [ ] **Step 4: 共有**

以下をユーザーへ報告する:

- 変更した Ruby / stack / Bundler / Node/Yarn
- Heroku 側で実際に変更した設定
- smoke 結果
- rollback 実施有無
- 残課題
