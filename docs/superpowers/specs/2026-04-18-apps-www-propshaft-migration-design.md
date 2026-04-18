# apps/www Propshaft migration design

## Goal

`apps/www` の asset pipeline を **Sprockets から Propshaft へ保守的に移行**し、Rails 7.2 上で残っている古い asset plumbing を減らす。

今回の目的は、`apps/www` の **既存 pnpm + jsbundling/cssbundling 構成を維持したまま**、Sprockets 依存を外して Rails の現在寄りの asset delivery へ整理することである。

## Non-goals

- `apps/www` の JavaScript bundler を esbuild から別方式へ置き換えること
- `apps/www` の CSS build を Tailwind/PostCSS から別方式へ置き換えること
- `apps/www` の service worker / manifest / icon 配信戦略を再設計すること
- `apps/www` を importmap / Vite / Turbo 前提へ寄せること
- `apps/tutorial` や `apps/www/docs` を同時に modernize すること
- CloudFront / CDN 設定や cache policy を包括的に見直すこと
- runtime の画面機能やルーティングを追加すること
- 過去の `docs/superpowers/*` の historical record を現行 stack に合わせて全面更新すること

## Current state

現在の `apps/www` の asset 周辺は、実態としてはすでに **Node build が正本**で、Sprockets は主に digest / precompile の接着層として残っている。

### Ruby / Rails side

- `apps/www/Gemfile`
  - `gem 'cssbundling-rails'`
  - `gem 'jsbundling-rails'`
  - `gem 'sprockets-rails'`
- `apps/www/Gemfile.lock`
  - `sprockets (4.2.2)`
  - `sprockets-rails (3.5.2)`
- `apps/www/config/application.rb`
  - `require 'sprockets/railtie'`
- `apps/www/config/initializers/assets.rb`
  - `Rails.application.config.assets.precompile += %w[application.js application.css]`
- `apps/www/app/assets/config/manifest.js`
  - `//= link_tree ../builds`

### Node / asset build side

- `apps/www/package.json`
  - `build:js`: `esbuild` で `app/javascript/application.js` と `app/assets/javascripts/serviceworker.js` を bundle
  - `build:css`: `tailwindcss --postcss` で `app/assets/stylesheets/application.tailwind.css` から `app/assets/builds/application.css` を生成
- `apps/www/Procfile.dev`
  - Rails server + `pnpm build --watch` + `pnpm build:css --watch`
- `apps/www/app/views/layouts/application.html.erb`
  - `<%= javascript_include_tag 'application', defer: true %>`
  - `<%= stylesheet_link_tag 'application' %>`

### Public root assets

`apps/www` では service worker / manifest / favicon 系は、現在すでに **root public path** で配信している。

- `apps/www/public/manifest.json`
- `apps/www/public/serviceworker.js`
- `apps/www/public/serviceworker.js.map`
- `apps/www/public/favicon.ico`
- `apps/www/public/icon.svg`
- `apps/www/public/icon-192.png`
- `apps/www/public/icon-512.png`
- `apps/www/public/apple-touch-icon.png`

layout 側もこれらを helper 経由ではなく root path で読んでいる。

- `<link rel="manifest" href="/manifest.json" />`
- `favicon_link_tag '/favicon.ico'`
- `favicon_link_tag '/icon.svg'`
- `favicon_link_tag '/apple-touch-icon.png'`

### Important structural observations

repo 調査で次を確認した。

1. `apps/www` の source には、Sprockets 依存の CSS helper (`image_url`, `font_url` など) は見つからない
2. `apps/www` の source には、Propshaft 移行時に置換が必要な `RAILS_ASSET_URL(...)` も見つからない
3. 直接の Sprockets surface はかなり小さく、主に次に集約されている
   - `sprockets-rails` gem
   - `require 'sprockets/railtie'`
   - `app/assets/config/manifest.js`
   - `config/initializers/assets.rb`
4. 一方で `app/assets/stylesheets` と `app/assets/javascripts` は、現在の qni では **配信用 asset というより bundler input** として使われている
5. Propshaft は `app/assets` 配下を広く load path に入れるため、このまま移行すると **source input まで public/assets に載せてしまう**可能性がある

この 4-5 が、qni の Propshaft lane で一番大事な設計ポイントである。

## External context

今回の調査では、official / upstream 側で次を確認した。

- Rails Guides は、現行の Rails asset pipeline の中心を Propshaft として説明している
- Propshaft は、transpile / bundle 自体は担当せず、browser-ready asset の digest と配信に集中する
- Propshaft の README / UPGRADING.md でも、**すでに Node-based bundling を使っている app ほど移行しやすい**と明示されている
- Propshaft では `app/assets` 配下の asset を広く load path に載せるため、compiler input directory は `config.assets.excluded_paths` で外すのが推奨されている
- Rails 8 の新規 app では Propshaft が標準であり、Rails 7.2 から見ても将来方向と整合する

qni の `apps/www` は、すでに `jsbundling-rails` / `cssbundling-rails` + `pnpm` へ寄っているため、理屈の上では **Propshaft と相性が良い側**にある。

## Options considered

### Option A: Sprockets を維持し、今回は移行しない

#### Pros

- 変更が最小
- 既存 production path を一切触らない
- rollback 不要で安全

#### Cons

- Rails 7.2 上に古い asset pipeline が残る
- 次の Rails modernization で再度同じ検討が必要になる
- qni の実装実態（Node build 正本）と asset pipeline の役割がずれたままになる

#### Assessment

最も conservative だが、今回の modernization lane としては前進が少ない。

### Option B: 保守的 Propshaft migration を行い、bundler input は明示的に除外する

#### Pros

- Rails の現在寄りの asset pipeline へ寄せられる
- qni の現在構成（pnpm + js/css bundling）と整合する
- Sprockets surface が小さいため、変更点を限定しやすい
- service worker / manifest / icon の root public 配信を触らずに済む

#### Cons

- `config.assets.excluded_paths` の設計を間違えると source asset の露出や asset missing が起こりうる
- `assets:precompile`、production asset host、system test の再確認が必要
- `public/` 配信と `app/assets/` build input の二重性を今まで以上に意識する必要がある

#### Assessment

今回の推奨案。blast radius を抑えつつ、Sprockets 依存を外せる。

### Option C: Propshaft 移行と同時に service worker / manifest / public asset 整理まで広くやる

#### Pros

- asset story 全体としては一番きれいになる可能性がある
- `public/` と `app/assets/` の役割整理まで一度に進められる

#### Cons

- scope が急に広くなる
- root cause 切り分けが難しくなる
- 既に別 lane で決めた public root delivery を再度掘り返すことになる
- careful one-by-one modernization の方針から外れやすい

#### Assessment

今回は不採用。Propshaft lane は **Sprockets 置換に限定**し、public asset の追加整理は必要なら follow-up に切り出す。

## Chosen approach

今回は **Option B** を採用する。

### Core approach

1. `apps/www` から `sprockets-rails` を外し、`propshaft` を導入する
2. `apps/www/config/application.rb` から `require 'sprockets/railtie'` を外す
3. `apps/www/app/assets/config/manifest.js` を削除する
4. `apps/www/config/initializers/assets.rb` の Sprockets-era precompile 設定を削除する
5. 必要な Propshaft 設定は、Sprockets-era initializer を流用せず、専用 initializer へ分離する
6. `app/assets/stylesheets` と `app/assets/javascripts` は **bundler input** とみなし、Propshaft の `excluded_paths` に入れる
7. `app/assets/builds` は引き続き Rails helper (`javascript_include_tag`, `stylesheet_link_tag`) から参照される digest 対象として扱う
8. `public/manifest.json`、`public/serviceworker.js`、favicon/icon 系は **今回の blast radius の外**に置き、現在の root path 配信を維持する
9. `scripts/check-local-build-env.mjs` と `docs/tech-stack.md` を current state に合わせて更新し、Sprockets 再導入を防ぐ

## Expected touch points

Primary:

- `apps/www/Gemfile`
- `apps/www/Gemfile.lock`
- `apps/www/config/application.rb`
- `apps/www/config/initializers/assets.rb` (削除)
- `apps/www/config/initializers/propshaft.rb` (新規)
- `apps/www/app/assets/config/manifest.js` (削除)
- `apps/www/package.json` (`pnpm lint` が削除済み `app/assets/config/*.js` を読まないよう調整)
- `scripts/check-local-build-env.mjs`
- `docs/tech-stack.md`

Possibly reference-only / verify-only:

- `apps/www/Procfile.dev`
- `apps/www/config/environments/production.rb`
- `apps/www/config/initializers/assets_cache_headers.rb`
- `apps/www/app/views/layouts/application.html.erb`
- `apps/www/test/*`

## Architecture / behavior impact

### What stays the same

- `apps/www` の JS/CSS build は `pnpm` + `esbuild` + `tailwindcss` が正本
- layout は `javascript_include_tag 'application'` / `stylesheet_link_tag 'application'` を使い続ける
- production の `config.action_controller.asset_host` は維持する
- root public path の `manifest.json` / `serviceworker.js` / icon 群は現行どおり配信する
- system test / Grover / Active Storage / S3 などの runtime feature はこの lane では変えない

### What changes

- digest / precompile の担当が Sprockets から Propshaft へ変わる
- `app/assets` source 全体ではなく、**実際に配信したい compiled output** を中心に digest 対象を明示化する
- Sprockets-era の `manifest.js` / precompile list 依存を捨て、Propshaft の load path + excluded paths モデルへ寄せる

### Important design boundary

今回の migration は、`public/` と `app/assets/` の役割を全面再設計する lane ではない。

したがって、implementation 中に次のような事象が見つかった場合は、原則として **別 follow-up** に切り出す。

- `public/serviceworker.js` の更新経路が曖昧で、Propshaft とは別に整理が必要
- `manifest.json` / icon 配信を helper 経由へ寄せたくなる
- SRI や CDN 戦略まで同時に変えたくなる

Propshaft lane の成功条件は、まず **Sprockets を外しても current behavior が維持できること** である。

## Key implementation questions

implementation plan では、次を明示的に解く必要がある。

1. **excluded_paths の最小セットは何か**
   - `app/assets/stylesheets`
   - `app/assets/javascripts`
     を外せば十分か
2. **`config/initializers/assets_cache_headers.rb` はそのままでよいか**
   - `/assets` と `/public` の cache header 方針が Propshaft でも期待通りか
3. **production asset host の挙動**
   - CloudFront host が helper tag から引き続き正しく付くか
4. **development/watch path の挙動**
   - `bin/dev` で build watch + Rails server が従来どおり機能するか
5. **source asset の露出防止**
   - `application.tailwind.css` や `serviceworker-companion.js` のような bundler input が `public/assets` に出てこないことをどう検証するか
6. **public root assets の回帰防止**
   - `/manifest.json` と `/serviceworker.js` が、Propshaft 移行後も今の root path で取得できることをどう保証するか

## Risks

主なリスクは次の 4 つ。

1. **bundler input の誤露出**
   - `app/assets/stylesheets` や `app/assets/javascripts` を除外しないと、source asset が `public/assets` に載る可能性がある。
2. **missing asset / wrong digest path**
   - excluded_paths を広げすぎると、layout が読む `application` asset や sourcemap 周辺で不足が出る可能性がある。
3. **production-only regressions**
   - local dev では見えず、`assets:precompile` + asset_host + static serving で初めて露見する不整合がありうる。
4. **scope creep**
   - service worker / manifest / icon 配信整理まで同時に触ると、移行の成否判定が難しくなる。

## Verification strategy

TDD で小さく進める。

### Red

まず guard を追加し、移行後の expected state をコードで固定する。

候補:

- `apps/www/Gemfile` に `sprockets-rails` が無い
- `apps/www/Gemfile` に `propshaft` がある
- `apps/www/config/application.rb` に `require 'sprockets/railtie'` が無い
- `apps/www/app/assets/config/manifest.js` が無い
- `apps/www/package.json` の lint target が削除済み `app/assets/config/*.js` に依存していない
- Propshaft 専用 initializer があり、bundler input の excluded path が設定されている

### Green

最小変更で移行し、次を確認する。

Local / focused:

- `cd apps/www && ruby -S bundle install`
- `cd apps/www && pnpm build`
- `cd apps/www && pnpm lint`
- `cd apps/www && ruby -S bundle exec rails test`
- `cd apps/www && PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres PUPPETEER_CACHE_DIR=$HOME/.cache/puppeteer pnpm test`
- `cd apps/www && SECRET_KEY_BASE=dummy AWS_ACCESS_KEY_ID=dummy AWS_SECRET_ACCESS_KEY=dummy AWS_REGION=us-east-1 RAILS_ENV=production ruby -S bundle exec rails assets:precompile`

Production-path checks:

- `RAILS_ENV=production RAILS_SERVE_STATIC_FILES=1` で production boot smoke が通る
  - 例: `cd apps/www && SECRET_KEY_BASE=dummy AWS_ACCESS_KEY_ID=dummy AWS_SECRET_ACCESS_KEY=dummy AWS_REGION=us-east-1 RAILS_ENV=production RAILS_SERVE_STATIC_FILES=1 ruby -S bundle exec rails server -p 3001`
- homepage の `application.css` / `application.js` helper 出力が asset host 付きで期待通りになる
- 上記 production local server に対する request で `/manifest.json` と `/serviceworker.js` が 200 で返る
  - 例: `curl -I http://127.0.0.1:3001/manifest.json` / `curl -I http://127.0.0.1:3001/serviceworker.js`
- `public/assets` に source input (`application.tailwind.css`, `serviceworker-companion.js`, raw `serviceworker.js` source など) が紛れ込んでいない

Repo-level parity:

- `node scripts/check-local-build-env.mjs`
- `node scripts/check-pages-config.mjs`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test:ci`
- `pnpm test`
- `pnpm size`
- `git diff --check`

### Acceptance

- local focused verification が通る
- repo-level verification が通る
- `apps/www` の system test が通る
- production asset precompile が通る
- root public assets (`/manifest.json`, `/serviceworker.js`, favicon/icon 群) が回帰しない
- `docs/tech-stack.md` が final state と矛盾しない
- GitHub Actions CI / Pages / CodeQL が green

## Rollback

rollback は比較的単純である。

1. `propshaft` 導入を戻す
2. `sprockets-rails` と `require 'sprockets/railtie'` を戻す
3. `manifest.js` と `assets.rb` の previous working state を戻す
4. `propshaft.rb` を削除する

今回の lane は runtime feature の追加ではなく asset plumbing の置換なので、failure 時は **Sprockets へ素直に戻せる設計**を保つべきである。

## Recommendation

`apps/www` はすでに **Node build が主、Sprockets は薄い接着層** という状態にあるため、Propshaft への移行候補としては比較的やりやすい。

ただし qni 特有の注意点は、`app/assets` の多くが「そのまま配る asset」ではなく「bundler input」だという点にある。

したがって、この lane の鍵は **Sprockets を Propshaft に置き換えること自体** よりも、**Propshaft に何を見せて何を見せないかを明示すること** にある。

その前提で、まずは conservative に `apps/www` だけを対象に移行し、public root assets の整理や broader asset cleanup は別 lane に分けるのが最も安全である。
