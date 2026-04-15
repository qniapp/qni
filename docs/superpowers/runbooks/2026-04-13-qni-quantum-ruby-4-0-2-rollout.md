# qni-quantum Ruby 4.0.2 / Heroku-24 rollout runbook

## 対象

- App: `qni-quantum`
- Team: `qniapp`
- Branch: `feat/ruby-4-0-2-heroku-24-upgrade`
- 本番対象 base: `APP_BASE=apps/www`
- 用途: Ruby 4.0.2 / Heroku-24 切替と rollback の基準記録
- 現行状態の採取日: 2026-04-15

## Heroku 現行状態スナップショット

### App 概要

- App: `qni-quantum`
- Owner: `qniapp@herokumanager.com`
- Region: `us`
- Web URL: `https://qni-quantum.herokuapp.com/`
- Add-ons:
  - `heroku-postgresql:essential-0`
  - `pointdns:developer`
  - `scout:chair`

### Stack

- 現行 stack: `heroku-20`
- `heroku stack -a qni-quantum` で確認できた切替候補: `cnb`, `container`, `heroku-22`, `heroku-24`

### Buildpacks

現行 classic buildpack の順序:

1. `https://github.com/lstoll/heroku-buildpack-monorepo`
2. `heroku/nodejs`
3. `jontewks/puppeteer`
4. `heroku/ruby`
5. `https://github.com/CoffeeAndCode/puppeteer-heroku-buildpack.git`

### Config vars

この runbook には key 名のみを記録する。secret value は保存しない。

- `APP_BASE`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `DATABASE_URL`
- `GROVER_NO_SANDBOX`
- `LANG`
- `RACK_ENV`
- `RAILS_ENV`
- `RAILS_LOG_TO_STDOUT`
- `RAILS_SERVE_STATIC_FILES`
- `SCOUT_KEY`
- `SCOUT_LOG_LEVEL`
- `SCOUT_MONITOR`
- `SECRET_KEY_BASE`

### Domains

Heroku domain:

- `qni-quantum.herokuapp.com`

Custom domains:

- `qniapp.net`
- `www.qniapp.net`

### Dynos

- Formation: `web` x `2`
- Dyno size: `Standard-1X`
- Command: `bundle exec rails server -p $PORT`
- 採取時点の稼働状態:
  - `web.1`: up
  - `web.2`: up

### Releases

- 採取時点の current release: `v853`
- 直近 20 release では Postgres maintenance 由来の update release が上位を占めている
- 直近 20 release 中で最後に確認できた code deploy: `v849` (`Deploy 2f38a691`, 2023-03-31 16:54:05 +0900)

## 現行外形疎通

実行コマンド:

```bash
curl -I -L https://qniapp.net/
curl -I -L https://www.qniapp.net/
```

2026-04-15 採取結果:

- `https://qniapp.net/` → `HTTP/2 200`, `content-type: text/html; charset=utf-8`
- `https://www.qniapp.net/` → `HTTP/2 200`, `content-type: text/html; charset=utf-8`

## 採取に使ったコマンド

以下を実行して上記 snapshot を採取した。

```bash
heroku apps:info -a qni-quantum
heroku stack -a qni-quantum
heroku buildpacks -a qni-quantum
heroku config -s -a qni-quantum | cut -d= -f1
heroku domains -a qni-quantum
heroku releases -a qni-quantum -n 20
heroku ps -a qni-quantum
curl -I -L https://qniapp.net/
curl -I -L https://www.qniapp.net/
```

## Rollout / rollback 枠

### 切替直前に埋める欄

- DB backup id: `TBD`
- Baseline release 番号: `TBD（stack 切替直前に記録する）`
- Deploy release 番号: `TBD`
- 実行日時: `TBD`

### Rollback 前提

- 切替前の古い release は `expired` の可能性がある
- rollback の第一候補は、切替直前に current slug を参照して作る baseline release とする
- baseline release 番号は production cutover 実行前にこの runbook へ記入する

### Rollback 手順の枠

1. `ps` / public URL / logs で失敗条件を確認する
2. 上で記録した baseline release へ rollback する
3. dyno と public URL を再確認する
4. 復旧後に追加調査へ進む

rollback command template:

```bash
heroku rollback <baseline-release> -a qni-quantum
```

rollback 後の確認枠:

```bash
heroku ps -a qni-quantum
curl -I -L https://qniapp.net/
curl -I -L https://www.qniapp.net/
```
