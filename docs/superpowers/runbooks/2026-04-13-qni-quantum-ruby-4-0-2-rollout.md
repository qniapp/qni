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

## Rollout / rollback 手順

### 切替直前に埋める欄

- DB backup id: `TBD`
- Baseline marker: `TBD`
- Baseline release 番号: `TBD（stack 切替直前に記録する）`
- Deploy release 番号: `TBD`
- 実行日時: `TBD`

### Rollback 前提

- 切替前の古い release は `expired` の可能性がある
- rollback の第一候補は、切替直前に current slug を参照して作る baseline release とする
- baseline release 番号は production cutover 実行前にこの runbook へ記入する
- baseline release は一時 config var を追加して current slug を参照する新しい release を作る

### 0. 事前確認

```bash
heroku apps:info -a qni-quantum
heroku ps -a qni-quantum
curl -I -L https://qniapp.net/
curl -I -L https://www.qniapp.net/
```

期待値:
- dyno が up
- `qniapp.net` / `www.qniapp.net` が 200 系

### 1. DB backup を取得して完了を確認する

```bash
heroku pg:backups:capture -a qni-quantum --wait-interval 3
heroku pg:backups -a qni-quantum
heroku pg:backups:info -a qni-quantum b001
```

運用メモ:
- `heroku pg:backups` の最新 completed backup id を `DB backup id` 欄へ記入する
- `b001` は例。実際は最新 backup id に置き換える

### 2. Baseline release を作る

```bash
export BASELINE_MARKER="ruby4-rollout-$(date -u +%Y%m%dT%H%M%SZ)"
heroku config:set RUBY4_ROLLOUT_BASELINE="$BASELINE_MARKER" -a qni-quantum
heroku releases -a qni-quantum -n 3
```

運用メモ:
- 直近 release のうち `Set RUBY4_ROLLOUT_BASELINE config vars` の release を baseline release として記録する
- `Baseline marker` と `Baseline release 番号` をこの runbook に記入する
- この config var は rollout 完了後に cleanup してよい。cleanup 自体も新 release を作る点に注意する

cleanup command:

```bash
heroku config:unset RUBY4_ROLLOUT_BASELINE -a qni-quantum
```

### 3. stack を heroku-24 へ切り替える

```bash
heroku stack:set heroku-24 -a qni-quantum
```

期待値:
- 次回 deploy で stack 変更が有効になる pending 状態になる

### 4. deploy する

この repo の worktree から実行する。

```bash
git push https://git.heroku.com/qni-quantum.git HEAD:main
heroku releases -a qni-quantum -n 5
```

運用メモ:
- deploy 後に作られた release 番号を `Deploy release 番号` 欄へ記入する

### 5. smoke test を実行する

#### 5-1. dyno / logs / 外形確認

```bash
heroku ps -a qni-quantum
heroku logs -a qni-quantum --num 200
heroku logs -a qni-quantum --tail
curl -I -L https://qniapp.net/
curl -I -L https://www.qniapp.net/
```

失敗条件:
- dyno が boot loop / crashed
- どちらかの URL が 200 系でない
- logs に boot / asset / DB / puppeteer の致命エラーが連続する

#### 5-2. HTML body と asset を確認する

```bash
python - <<'PY'
import re, requests, sys
html = requests.get('https://qniapp.net/', timeout=30).text
assert 'Application Error' not in html
assert 'There's nothing here, yet.' not in html
assets = [u for u in re.findall(r'(?:src|href)="([^"]+)"', html) if 'application-' in u and ('css' in u or 'js' in u)]
assert assets, 'no asset urls found on homepage'
for url in assets[:2]:
    res = requests.get(url, timeout=30)
    print(res.status_code, url)
    assert res.status_code == 200
print('homepage_html_ok')
PY
```

#### 5-3. DB-backed + Grover/Puppeteer path を確認する

```bash
SMOKE_JSON='{"cols":[],"title":"Ruby 4 smoke"}'
ENCODED=$(ruby -ruri -e 'puts URI.encode_www_form_component(ARGV[0])' "$SMOKE_JSON")
curl -fsS "https://qniapp.net/$ENCODED" -o /tmp/qni-smoke.html
rg -n 'og:image|Ruby 4 smoke' /tmp/qni-smoke.html
```

期待値:
- `/:json` route が 200 で返る
- HTML に `og:image` が含まれる
- これにより `Circuit.find_or_create_by` と `attach_social_image` を通る

### 6. rollback する場合

```bash
heroku rollback <baseline-release> -a qni-quantum
heroku ps -a qni-quantum
curl -I -L https://qniapp.net/
curl -I -L https://www.qniapp.net/
```

期待値:
- baseline release に戻る
- dyno が up
- `qniapp.net` / `www.qniapp.net` が 200 系へ復旧する

### 7. rollout 完了後に記録すること

- 実行日時
- DB backup id
- Baseline marker
- Baseline release
- Deploy release
- smoke 結果
- rollback 実施有無
- 必要なら cleanup release 番号
