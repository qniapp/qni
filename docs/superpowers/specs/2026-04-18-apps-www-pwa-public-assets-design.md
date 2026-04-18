# apps/www PWA / public asset cleanup design

## Goal

`apps/www` の PWA / root public asset まわりを **保守的に整理**し、`manifest.json`・worker bundle・icon 類の **source of truth を `public/` に統一**する。

今回の目的は、Propshaft 移行後に残っている **「build される資産」と「実際に root path で配信される資産」のズレ**をなくし、`apps/www` の public asset story を current state に合う形へ明文化することである。

加えて、実体は Web Worker なのに `navigator.serviceWorker.register('/serviceworker.js')` している現状のねじれを解消し、**誤解を招く service worker registration を削除**する。

## Non-goals

- `apps/www` に本物の Service Worker を新規導入すること
- `packages/elements` の `new Worker('./serviceworker.js')` API や consumer contract を変えること
- `/serviceworker.js` という公開 URL を変更すること
- Rails 7.2 の PWA standard route (`app/views/pwa` / route 配信) へ全面移行すること
- `apps/www` の Propshaft / jsbundling / cssbundling の責務を再設計すること
- `apps/tutorial` の同種ファイル (`serviceworker.js`, manifest, companion`) を同時に整理すること
- CloudFront / cache policy / offline strategy を包括的に見直すこと
- icon 画像の中身やデザインを更新すること
- `docs/superpowers/*` の historical record を現行状態に合わせて全面書き換えること

## Current state

Propshaft 移行後の `apps/www` では、通常の app asset と root public asset の責務がまだ中途半端に分かれている。

### Layout / runtime side

- `apps/www/app/views/layouts/application.html.erb`
  - `<%= javascript_include_tag 'application', defer: true %>`
  - `<%= stylesheet_link_tag 'application' %>`
  - `<link rel="manifest" href="/manifest.json" />`
  - `favicon_link_tag '/favicon.ico'`
  - `favicon_link_tag '/icon.svg'`
  - `favicon_link_tag '/apple-touch-icon.png'`
- `apps/www/app/javascript/application.js`
  - `import '../assets/javascripts/serviceworker-companion'`
- `apps/www/app/assets/javascripts/serviceworker-companion.js`
  - `navigator.serviceWorker.register('/serviceworker.js', {scope: '/'})`

つまり app 側はすでに、manifest / icon 類を **Propshaft helper ではなく root public path** で読んでいる。

### Build side

- `apps/www/package.json`
  - `build:js` は `app/javascript/application.js` を `app/assets/builds/` へ bundle
  - 同時に `app/assets/javascripts/serviceworker.js` も `app/assets/builds/` へ bundle
- `apps/www/Procfile.dev`
  - `js: pnpm build --watch`
  - `css: pnpm build:css --watch`

ここで問題なのは、worker bundle の出力先が **`app/assets/builds/serviceworker.js`** なのに、実際の app runtime が使う公開 URL は **`/serviceworker.js`** だという点である。

### Public root side

現在 `apps/www/public/` に存在する主要な root asset は次である。

- `apps/www/public/manifest.json`
- `apps/www/public/serviceworker.js`
- `apps/www/public/serviceworker.js.map`
- `apps/www/public/favicon.ico`
- `apps/www/public/icon.svg`
- `apps/www/public/icon-192.png`
- `apps/www/public/icon-512.png`
- `apps/www/public/apple-touch-icon.png`
- `apps/www/public/apple-touch-icon-precomposed.png`

repo 調査では次を確認した。

1. `apps/www/public/manifest.json` と `apps/www/app/assets/javascripts/manifest.json` は **重複管理**されており、現在は内容も一致している
2. `apps/www/package.json` の `build:js` が生成する `app/assets/builds/serviceworker.js` は、現在配信されている `public/serviceworker.js` と **別物**である
3. `packages/elements/src/quantum-simulator-element.ts` は `new Worker('./serviceworker.js')` を使っており、consumer 側は **相対 URL の `/serviceworker.js` 互換**に依存している
4. `apps/www/app/assets/javascripts/serviceworker.js` の中身は `install` / `fetch` / `activate` を持たず、実体としては **Service Worker ではなく simulator 用 Web Worker** である
5. それにもかかわらず `serviceworker-companion.js` が同じ `/serviceworker.js` を `navigator.serviceWorker.register(...)` しようとしている

今回の lane の root cause は、**同じ名前の URL に対して「Web Worker bundle」「root public file」「Service Worker registration」の 3 つが混在していること**である。

## External context

今回の調査では external / upstream 側で次を確認した。

- Rails 7.2 は default PWA files を `app/views/pwa` 経由で扱う導線を持つ
- ただし qni はすでに `public/manifest.json` と `public/serviceworker.js` を root path で運用しており、Rails 標準 PWA route へ今すぐ寄せる必然性はない
- Propshaft は minimal asset delivery layer であり、root public asset の source-of-truth を持つ責務ではない
- qni のように `public/` で serviceworker / manifest / icon を直接配信する app では、**Propshaft 管理 asset と public root asset の責務を分けて考える**ほうが保守しやすい

したがって今回の lane では、Rails の標準 PWA 機能へ寄せるよりも、**qni がすでに採っている public root delivery を正本として明文化する**ほうが安全である。

## Options considered

### Option A: 現状維持

#### Pros

- 変更が最小
- runtime path を一切触らない

#### Cons

- `manifest.json` が二重管理のまま残る
- `build:js` が作る worker と配信される worker のズレが残る
- 実体は Web Worker なのに Service Worker registration が残る
- Propshaft 後の `apps/www` の asset story がさらに分かりづらくなる

#### Assessment

最も conservative だが、Propshaft 後の follow-up としては前進が少ない。

### Option B: `public/` を正本にし、duplicate public asset plumbing を整理する

#### Pros

- ユーザーが選んだ `public/` 正本方針と一致する
- `/manifest.json` / `/serviceworker.js` / icon URL を維持できる
- 重複ファイルを減らせる
- Service Worker registration のねじれを scope 内で自然に解消できる
- Propshaft asset と root public asset の責務が明確になる

#### Cons

- `public/serviceworker.js` を committed source-of-truth として扱うため、通常の app build では worker を再生成しない方針を受け入れる必要がある
- `package.json` / lint / integration test を一緒に更新する必要がある
- 将来 worker ロジックを積極的に変更したくなった場合は、別途 regeneration policy を設計したくなる可能性がある

#### Assessment

今回の推奨案。blast radius を抑えつつ、現在の実装実態へ寄せられる。

### Option C: Web Worker と本物の Service Worker を分離する

#### Pros

- 用語と実体が完全に一致する
- 将来の PWA 拡張にはきれいな形になる

#### Cons

- scope が広い
- `packages/elements` との互換 URL や API も再設計が必要になりやすい
- 追加の runtime / browser verification が増える

#### Assessment

今回は不採用。将来本物の Service Worker を入れるなら follow-up lane として切り出すべき。

## Chosen approach

今回は **Option B** を採用する。

### Core approach

1. `apps/www` の PWA / root asset の正本を `public/` に統一する
2. `manifest.json` と icon 類は **literal file** として `public/` を正本に固定する
3. `/serviceworker.js` は公開 URL としては維持するが、設計上は **legacy public URL を持つ simulator 用 Web Worker bundle** として扱う
4. `apps/www/public/serviceworker.js` と `apps/www/public/serviceworker.js.map` を worker の source-of-truth に固定する
5. `app/assets/javascripts/serviceworker.js` と `app/assets/builds/serviceworker.js` の二重 plumbing をやめ、通常の app build では worker を扱わない
6. `app/assets/javascripts/manifest.json` を削除し、`manifest.json` の二重管理をなくす
7. `serviceworker-companion.js` を削除し、`application.js` からの import も削除する
8. `navigator.serviceWorker.register('/serviceworker.js')` をやめる
9. `/manifest.json`・`/serviceworker.js`・各 icon の root URL はそのまま維持する

## Architecture / behavior impact

### Responsibility split after this lane

#### Propshaft-managed app assets

対象:

- `application.js`
- `application.css`

役割:

- Rails layout から読む通常 asset
- 出力先は `app/assets/builds`
- Propshaft が digest / asset host / helper 連携を担当

#### Public-managed root assets

対象:

- `manifest.json`
- `serviceworker.js`
- `serviceworker.js.map`
- `favicon.ico`
- `icon.svg`
- `icon-192.png`
- `icon-512.png`
- `apple-touch-icon.png`
- `apple-touch-icon-precomposed.png`

役割:

- root public path で直接配信する asset
- `apps/www/public/` が source-of-truth
- Propshaft の管理対象に混ぜない
- worker についてもこの lane では `public/` の committed artifact を正本とみなす

### Naming / compatibility policy

今回の lane では、公開 URL `/serviceworker.js` は **互換維持のためそのまま残す**。

ただし設計上は、これを「Service Worker」ではなく **legacy public URL を持つ simulator worker bundle** とみなす。

これにより、`packages/elements/src/quantum-simulator-element.ts` の

- `new Worker('./serviceworker.js')`

は変更不要になる。

### What changes

- `serviceworker-companion.js` が消える
- `application.js` は worker registration import を持たなくなる
- `manifest.json` は `public/` だけが正本になる
- `public/serviceworker.js` / `.map` を worker の正本として扱い、通常の app build から worker 出力を外す
- `apps/www` の public asset story が
  - Propshaft app asset
  - root public asset
    へ明確に分かれる

### What stays the same

- layout は `/manifest.json` と root icon path を参照し続ける
- `packages/elements` の worker URL 契約は維持する
- `apps/www` の `application.js` / `application.css` の読み方は変えない
- `apps/tutorial` 側の service worker / manifest story は触らない
- 本物の Service Worker 機能は追加しない

## Expected touch points

Primary:

- `apps/www/package.json`
- `apps/www/app/javascript/application.js`
- `apps/www/app/assets/javascripts/serviceworker.js` (削除)
- `apps/www/app/assets/javascripts/manifest.json` (削除)
- `apps/www/app/assets/javascripts/serviceworker-companion.js` (削除)
- `apps/www/public/serviceworker.js`
- `apps/www/public/serviceworker.js.map`
- `apps/www/public/manifest.json`

Likely tests / guards:

- `apps/www/test/integration/*`

Reference-only / verify-only:

- `apps/www/app/views/layouts/application.html.erb`
- `apps/www/Procfile.dev`
- `packages/elements/src/quantum-simulator-element.ts`

## Build design

この lane の build 方針は、**worker を通常の app build から外す**ことである。

最終像としては `apps/www/package.json` の JS build は次の責務分離になる。

- app bundle
  - `app/javascript/application.js`
  - 出力先: `app/assets/builds/`
- root public worker
  - 正本: `public/serviceworker.js` と `public/serviceworker.js.map`
  - 通常の `build:js` では再生成しない

この設計では、`build:js` は `application.js` のみを app asset として扱う。

重要なのは、**worker が app/assets/builds 側に残らず、`public/` の committed asset だけが正本として残ること**である。

将来 worker の regeneration を再設計したくなった場合は、通常の app build に隠れて混ぜるのではなく、別 lane で dedicated refresh path を設計する。

## Risks

主なリスクは次の 4 つ。

1. **worker 出力先変更で local watch / production precompile の前提が壊れる**
   - `pnpm build --watch` や `assets:precompile` 時に worker が更新され続けるかを要確認
2. **削除した registration に実は hidden dependency がある**
   - ただし repo 調査上、`install` / `fetch` / `activate` を持つ本物の Service Worker 実装は見当たらない
3. **public 配信 asset と app asset の境界が曖昧なまま別ファイルが増える**
   - `apps/www` 内の focused integration guard が必要
4. **`apps/tutorial` の類似構造と混同して scope creep する**
   - 今回は `apps/www` のみ
5. **worker regeneration policy を後回しにすることへの保守コスト**
   - ただしこれは user-approved の `public/` 正本方針に沿ったトレードオフであり、今回の cleanup では受け入れる

## Verification strategy

### Focused verification

- `cd apps/www && pnpm run build`
- `cd apps/www && pnpm run lint`
- `cd apps/www && ruby -S bundle exec rails test`
- `cd apps/www && MINITEST_REPORTER=SpecReporter ruby -S bundle exec rails test:system test`
- `cd apps/www && RAILS_ENV=production ruby -S bundle exec rails assets:precompile`

### Root asset smoke

local server を使って次を確認する。

- `GET /manifest.json` → 200
- `GET /serviceworker.js` → 200
- `GET /favicon.ico` → 200
- `GET /icon.svg` → 200
- `GET /icon-192.png` → 200
- `GET /icon-512.png` → 200
- `GET /apple-touch-icon.png` → 200

さらに次を確認する。

- layout が引き続き `/manifest.json` を参照している
- app runtime が `serviceworker-companion.js` を読み込まない
- `app/assets/builds/serviceworker.js` を前提にしない
- `app/assets/javascripts/manifest.json` が存在しない
- `app/assets/javascripts/serviceworker.js` が存在しない

### Acceptance criteria

- `apps/www/public/` が PWA / root icon asset の正本として一貫する
- `/serviceworker.js` の公開 URL 互換が維持される
- 誤解を招く Service Worker registration が消える
- `apps/www` の build / test / production precompile が green
- 変更範囲が `apps/www/**` と spec doc に収まる

## Rollback

もし regression が出た場合は、次の順に rollback できる。

1. `serviceworker-companion.js` 削除を戻す
2. worker build 出力先を以前の状態に戻す
3. `manifest.json` の重複削除を戻す

ただし、今回の理想は runtime を広く変えずに構成整理だけで終えることなので、rollback も比較的単純である。

## Recommendation

Propshaft lane の次としては、今回の cleanup は scope / 価値 / 安全性のバランスが良い。

- Propshaft では触らなかった public root asset story を補完できる
- runtime URL は変えない
- `packages/elements` との契約は維持できる
- 一方で、manifest 重複と誤った registration という具体的な保守負債を減らせる

したがって、次の `apps/www` modernization lane としては、**`public/` 正本の PWA / root asset 整理**を保守的に進めるのが妥当である。
