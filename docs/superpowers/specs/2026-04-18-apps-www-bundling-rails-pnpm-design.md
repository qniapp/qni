# apps/www bundling-rails pnpm cleanup design

## Goal

`apps/www` の `jsbundling-rails` / `cssbundling-rails` を current upstream に近い状態へ更新し、pnpm migration 時に追加した `apps/www/lib/tasks/pnpm_bundling_overrides.rake` を削除できるか再評価する。

今回の目的は、`apps/www` の asset build/test lane を **できるだけ Rails 標準に戻しつつ、pnpm workspace で壊れない最小構成に整理すること** である。

加えて、project-supported な local PostgreSQL setup（service 起動済み・localhost:5432 到達可能・test DB 準備可能）では、local `pnpm run test:ci` が毎回 `PGHOST` / `PGUSER` / `PGPASSWORD` を要求しないように、`apps/www` の **test environment だけ** に default 接続値を持たせる。

## Non-goals

- `apps/www` の bundler 自体を esbuild/Tailwind から別方式へ置き換えること
- `Sprockets` から `Propshaft` へ移行すること
- `apps/www` の dev / production DB 設定を変えること
- `apps/www` system test (`pnpm test`) まで env-free に広げること
- local PostgreSQL service 自体の起動/導入/初期化を自動化すること
- `apps/tutorial` や root workspace の build orchestration を再設計すること
- 既存の `pnpm` 移行 docs を historical record 以上に書き換えること

## Current state

現在の `apps/www` は次の状態にある。

- `apps/www/Gemfile`
  - `jsbundling-rails`
  - `cssbundling-rails`
- `apps/www/Gemfile.lock`
  - `jsbundling-rails (1.0.0)`
  - `cssbundling-rails (0.2.4)`
- `apps/www/package.json`
  - `build:js` / `build:css` は `pnpm exec esbuild` / `pnpm exec tailwindcss`
- `apps/www/lib/tasks/pnpm_bundling_overrides.rake`
  - gem 側の `css:build` / `javascript:build` を `clear`
  - root `node_modules/.bin` を `PATH` に足して `tailwindcss` / `esbuild` を直接実行

この override は、pnpm strict migration 時に Rails 側 task が Yarn 前提に寄っていたため導入された practical fix だった。

一方で upstream 側は進んでおり、今回の調査では次を確認した。

- `rails/jsbundling-rails` latest release: `v1.3.1`
- `rails/cssbundling-rails` latest release: `v1.4.3`
- `jsbundling-rails` は pnpm support を取り込んでいる
- package-manager detection も以前より改善している

また、local `pnpm run test:ci` は現状そのままだと失敗する。実測では次の error が出た。

- `connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: No such file or directory`

root cause は `apps/www/config/database.yml` の `test` section に host / username / password が無く、Rails が Unix socket + current user へ fallback することにある。CI は `apps/www/config/database.yml.github-actions` をコピーして `host: localhost` と credential env を与えるため通っている。

## Options considered

### Option A: gem を更新し、override を外せるかを first-class に検証する

#### Pros

- Rails 標準 task に戻せる可能性がある
- brittle な local override を減らせる
- pnpm migration で残った暫定対応を整理できる
- 失敗しても exact failure を観測して最小 override に戻せる

#### Cons

- upstream 改善だけでは monorepo/root install 前提が吸収しきれない可能性がある
- 一度 override を外して focused verification を回す必要がある

#### Assessment

今回の推奨案。まずこれを試し、通らない場合だけ exact failure に合わせて最小 override を残す。

### Option B: gem だけ更新し、override はそのまま維持する

#### Pros

- 一番 conservative
- 既存 CI/local 成功パスを壊しにくい

#### Cons

- 古い practical fix を温存したままになる
- 根本的に Rails-way へ戻せるかが分からないまま終わる
- 将来再調査が必要になる可能性が高い

#### Assessment

fallback としては妥当だが、今回の reevaluation 目的には弱い。

### Option C: bundling gems をやめて custom task / pnpm scripts を正本にする

#### Pros

- 実装実態には正直
- Rails gem task の都合に引っ張られない

#### Cons

- 今回の scope を超える
- Rails 標準から外れ、保守負担が増える
- 現時点では YAGNI

#### Assessment

今やるべきではない。まずは gem upgrade + override reevaluation までで十分。

## Chosen approach

今回は **Option A** を採用する。

### 変更方針

1. `apps/www` の `jsbundling-rails` / `cssbundling-rails` を current upstream に近い安全な version へ上げる
2. `apps/www/config/database.yml` の `test` section にのみ、env override 可能な local default を追加する
   - `host: ENV.fetch("PGHOST", "localhost")`
   - `port: ENV.fetch("PGPORT", 5432)`
   - `database: ENV.fetch("PGDATABASE", "qni_test")`
   - `username: ENV.fetch("PGUSER", "postgres")`
   - `password: ENV.fetch("PGPASSWORD", "postgres")`
3. `apps/www/lib/tasks/pnpm_bundling_overrides.rake` を一度外し、focused verification で upstream task だけで通るかを確認する
4. もし upstream task だけで通らない場合は、failure を再現して root cause を絞り、**失敗した task だけ** を最小差分で補う
5. final state を `scripts/check-local-build-env.mjs` と `docs/tech-stack.md` に反映する

### Files likely to change

- `apps/www/Gemfile`
- `apps/www/Gemfile.lock`
- `apps/www/config/database.yml`
- `apps/www/lib/tasks/pnpm_bundling_overrides.rake` or delete it
- `scripts/check-local-build-env.mjs`
- `docs/tech-stack.md`

### Files to inspect/reference

- `apps/www/package.json`
- `apps/www/config/database.yml.github-actions`
- `.github/workflows/ci.yml`

## Architecture / behavior impact

この変更は runtime feature を増やすのではなく、`apps/www` の build/test plumbing を整理する。

期待する最終像は次のどちらかである。

1. **理想形**: Rails gem task が pnpm workspace 上でもそのまま機能し、custom override が不要になる
2. **許容形**: Rails gem task の不足分だけを補う小さな override が残る

どちらの形でも、`apps/www/package.json` の `build:js` / `build:css` 自体は pnpm ベースのままでよい。今回の焦点は Rails 側 task 連携の整理であり、frontend bundler の再選定ではない。

test DB default の追加は `test` environment に限定する。これにより local `pnpm run test:ci` と `rails db:setup` が TCP localhost 前提で素直に動くようになり、CI や production には影響しない。

## Risks

主なリスクは次の 3 つ。

1. **upstream task が qni の monorepo 前提を吸収しきれない**
   - root install + workspace package layout でのみ失敗する可能性がある。
   - とくに `apps/www` 直下には `pnpm-lock.yaml` が無く、root にしか lockfile が無いため、package-manager detection が CWD ベースだと外れる可能性がある。
2. **override 削除で Rails asset/test task が regress する**
   - `rails css:build` / `rails javascript:build` / `assets:precompile` path でのみ露見することがある。
3. **test DB default が他の local setup を縛りすぎる**
   - ただし env override を残すので、既存ユーザーは `PG*` or `DATABASE_URL` で逃がせる。

## Verification strategy

### Phase 1: reproduce current pain points

- `pnpm run test:ci` が PG env なしだと socket connection error になることを確認する
- current override ありで `apps/www` / root test が green な baseline を確認する

### Phase 2: update and reevaluate

- gem update 後に override を外し、focused build/test を回す
- failure したら message / failing task / PATH assumption を記録する
- fix は one root cause at a time にする

### Commands

前提: local PostgreSQL が localhost:5432 で利用可能で、`postgres/postgres` credential を使えるか、必要に応じて env override できること。

Focused / local:

- `cd apps/www && ruby -S bundle install`
- `cd apps/www && RAILS_ENV=test ruby -S bundle exec rails db:prepare`
- `cd apps/www && pnpm run build`
- `cd apps/www && ruby -S bundle exec rails css:build javascript:build`
- `cd apps/www && RAILS_ENV=production ruby -S bundle exec rails assets:precompile`
- `cd apps/www && ruby -S bundle exec rails test`
- `cd /home/yasuhito/Work/qni && pnpm run test:ci`

Repo-level parity:

- `node scripts/check-local-build-env.mjs`
- `node scripts/check-pages-config.mjs`
- `pnpm run build`
- `pnpm run lint`
- `pnpm run typecheck`
- `pnpm run test:ci`
- `pnpm run size`
- `git diff --check`

Acceptance:

- project-supported な local PostgreSQL setup 上で、local `pnpm run test:ci` が PG env なしで通る
- それ以外の custom local DB setup では、必要に応じて `PG*` または `DATABASE_URL` override を使える
- `apps/www` bundling/test lane が green
- final state が `docs/tech-stack.md` と矛盾しない
- GitHub Actions CI / Pages / CodeQL が green

## Rollback

もし gem upgrade または override reevaluation で regress した場合は、次の順で rollback できる。

1. `apps/www/config/database.yml` の test default 追加だけ残すか判断する
2. bundling gem update を revert する
3. `apps/www/lib/tasks/pnpm_bundling_overrides.rake` を previous working state に戻す

この設計では runtime feature 変更を伴わないため、rollback は比較的単純である。

## Recommendation

まずは **古い override を正当化し続けるのではなく、upstream が今どこまで吸収できるかを actual verification で確認する** のがよい。

そのうえで、どうしても必要な部分だけを最小 override として残す。併せて `apps/www` test DB の local default を test environment のみに追加し、`pnpm run test:ci` の毎回の PG env 指定をなくすのが、今の qni には最も実用的で安全な整理である。
