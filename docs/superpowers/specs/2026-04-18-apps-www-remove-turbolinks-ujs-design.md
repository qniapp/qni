# apps/www remove Turbolinks and Rails UJS design

## Goal

`apps/www` から未使用の `turbolinks` と `@rails/ujs` を取り除き、ページ遷移は通常の full reload に戻す。

今回の目的は、Rails 7.2 に残る Turbolinks/UJS 時代の依存を安全に減らすことであり、Turbo 導入そのものではない。

## Non-goals

- `turbo-rails` / `@hotwired/turbo` の導入
- Stimulus controller の再設計
- asset pipeline / bundling の再構成
- 画面やルーティングの機能追加
- `apps/tutorial` の変更
- この cleanup に直接関係しない root workspace の再設計
- `docs/superpowers/*` 配下の過去 plan/spec を現行 stack に合わせて書き換えること

## Current state

`apps/www` では現在、次の legacy 依存が残っている。

- `apps/www/app/javascript/application.js`
  - `require('@rails/ujs').start()`
  - `require('turbolinks').start()`
- `apps/www/package.json`
  - `@rails/ujs`
  - `turbolinks`
  - `@types/turbolinks`
- `apps/www/Gemfile`
  - `gem 'turbolinks'`

一方、repo 調査では以下の実使用は見つからなかった。

- `Rails.ajax`
- `data-remote`
- `data-method`
- `data-confirm`
- `turbolinks:*` lifecycle event
- `turbo:*` lifecycle event
- `Turbo.visit` / `Turbo.session`

`apps/www/app/views/layouts/application.html.erb` には `data-turbo-track="reload"` が残っているが、Turbo 自体は導入されていないため、現状では意味のない属性になっている。

## Options considered

### Option A: Turbolinks と `@rails/ujs` を両方削除し、通常 full reload に戻す

#### Pros

- 変更範囲が小さい
- 依存削減の意図が明確
- 現在の repo 実使用と最も整合する
- 失敗しても rollback が簡単

#### Cons

- もし暗黙に Turbolinks の高速遷移へ依存している箇所があれば、ページ遷移体験が変わる
- 後で Turbo を入れるなら別タスクになる

#### Assessment

最小リスクで legacy 依存を減らせるため、今回の推奨案とする。

### Option B: `@rails/ujs` だけ削除して Turbolinks は残す

#### Pros

- さらに小さい変更に見える
- ページ遷移体験は維持しやすい

#### Cons

- Turbolinks 単体を残す根拠が弱い
- legacy frontend 構成が中途半端に残る
- 近いうちにもう一度同種の整理が必要になる可能性が高い

#### Assessment

暫定策としては成立するが、今回は dependency cleanup として中途半端。

### Option C: いきなり Turbo へ置き換える

#### Pros

- Rails 7 系の標準方向に近づく
- 将来的な Hotwire 方向と整合する

#### Cons

- 導入・互換確認・動作確認の範囲が広がる
- 今回の「不要依存を外す」目的から外れる
- 実使用が薄いのに新規導入を伴うのは YAGNI に反する

#### Assessment

将来の候補としては妥当だが、今回の first step には重い。

## Chosen approach

今回は **Option A** を採用する。

### 変更内容

1. `apps/www/app/javascript/application.js` から `@rails/ujs` と `turbolinks` の startup を削除する
2. `apps/www/package.json` から `@rails/ujs` / `turbolinks` / `@types/turbolinks` を削除する
3. root `pnpm-lock.yaml` を更新し、`apps/www` importer から対応する frontend dependency lock を外す
4. `apps/www/Gemfile` から `gem 'turbolinks'` を削除する
5. `apps/www/Gemfile.lock` を更新し、Turbolinks 関連 gem を除去する
6. `apps/www/app/views/layouts/application.html.erb` から stale な `data-turbo-track="reload"` を削除する
7. `scripts/check-local-build-env.mjs` に、これらの legacy 依存を再導入しないための guard を追加する
8. `docs/tech-stack.md` の `apps/www` frontend 記述を current state に合わせる

### Expected touch points

- `apps/www/app/javascript/application.js`
- `apps/www/package.json`
- `pnpm-lock.yaml`
- `apps/www/Gemfile`
- `apps/www/Gemfile.lock`
- `apps/www/app/views/layouts/application.html.erb`
- `scripts/check-local-build-env.mjs`
- `docs/tech-stack.md`

## Architecture / behavior impact

この変更はページ遷移の挙動を **Turbolinks navigation から通常のブラウザ遷移へ戻す**。ただし、現状の repo には Turbolinks/UJS 固有 API への依存が見当たらないため、期待される影響は次の範囲に留まる。

- ページ遷移時の full reload 化
- 初期化タイミングが通常の page load に揃う
- Stimulus 自体は既存どおり `app/javascript/controllers` から起動する
- custom elements や service worker companion の bundle 構成は変えない

つまり、frontend runtime を新しくするのではなく、**不要な起動コードを外して現在の実装実態に揃える**変更である。

## Risks

主なリスクは次の 2 つ。

1. **暗黙の navigation dependency**
   - repo 内検索では見つからなくても、実ブラウザ操作で Turbolinks 的な遷移を前提にしていた箇所があるかもしれない。
2. **stale build / config assumptions**
   - package/gem/layout のいずれかに Turbolinks 前提が残っていると、build や test で露見する可能性がある。

ただし、どちらも `apps/www` の local/system test と CI で検出可能で、rollback も容易。

## Verification strategy

TDD で小さく進める。

### Red

まず `scripts/check-local-build-env.mjs` に以下を要求する failing guard を追加する。

- `apps/www/Gemfile` に `gem 'turbolinks'` が存在しない
- `apps/www/package.json` に `@rails/ujs` / `turbolinks` / `@types/turbolinks` が存在しない
- `apps/www/app/javascript/application.js` に startup 呼び出しが存在しない
- `apps/www/app/views/layouts/application.html.erb` に `data-turbo-track` が残っていない

### Green

最小変更で依存と startup を削除し、以下で確認する。

前提: local PostgreSQL が利用可能で、`apps/www` の test DB を作成できること。

- `pnpm install`
- `pnpm install --frozen-lockfile`
- `node scripts/check-local-build-env.mjs`
- `cd apps/www && ruby -S bundle install`
- `cd apps/www && PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres ruby -S bundle exec rails db:setup`
- `cd apps/www && PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres PUPPETEER_CACHE_DIR=$HOME/.cache/puppeteer pnpm test`
- `PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres PUPPETEER_CACHE_DIR=$HOME/.cache/puppeteer pnpm test`
- `git diff --check`

### Acceptance

- local guard が通る
- `pnpm install --frozen-lockfile` が green
- `apps/www` system test が green
- root `pnpm test` が green
- pre-push 相当の再確認で green
- `docs/tech-stack.md` が変更内容と矛盾しない
- GitHub Actions CI / Pages / CodeQL が green

## Rollback

もし system test または CI で暗黙依存が見つかった場合は、この変更をそのまま revert すれば元に戻せる。今回の変更は dependency と startup 削除に限定するため、rollback は単純である。

## Recommendation

`apps/www` では現時点で Turbolinks/UJS 実使用が見つからないため、まずは **新しいものを入れずに古いものを外す**のが最も安全である。

この変更が green で着地した後に、必要なら別タスクとして Turbo 導入を検討する。

なお、`docs/superpowers/*` 配下の dated な spec/plan に Turbolinks/UJS 言及が残っていても、それらは historical record とみなし、current stack の正本は `docs/tech-stack.md` と実コードに置く。
