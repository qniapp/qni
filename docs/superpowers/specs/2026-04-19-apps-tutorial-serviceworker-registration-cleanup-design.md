# apps/tutorial service worker registration cleanup design

## Goal

`apps/tutorial` に残っている **misleading な Service Worker registration** を取り除き、tutorial runtime における worker の責務を current implementation に合う形へ整理する。

今回の目的は、`/serviceworker.js` という既存の公開 URL と `packages/elements` の consumer contract を維持したまま、tutorial 側で **「計算用 Web Worker」と「本物の Service Worker」扱いが混ざっている状態** を解消することである。

今回の lane は保守的に進め、runtime behavior の本質を変えずに、誤解を生む registration だけを外す。

## Non-goals

- `/serviceworker.js` の公開 URL を変更すること
- `packages/elements/src/quantum-simulator-element.ts` の `new Worker('./serviceworker.js')` contract を変更すること
- `apps/tutorial/src/serviceworker.js` の中身や simulator worker の計算経路を再設計すること
- tutorial に本物の Service Worker を新規導入すること
- tutorial の PWA / offline / cache strategy を再設計すること
- `apps/www` や `apps/www/docs` を同時に整理すること
- worker ファイル名や HTML attribute 名を今回の lane で rename すること
- `scripts/check-pages-config.mjs` など repo-wide guard を今回の lane で広げること

## User-approved scope

この lane のスコープは会話中に次のように固定された。

- **Option A / conservative** を採用する
- `apps/tutorial` でも **misleading な Service Worker registration だけ外す**
- `/serviceworker.js` の公開 URL は維持する
- `data-service-worker="/serviceworker.js"` の互換も維持する
- broader な PWA redesign や命名変更には踏み込まない

したがって、今回の lane の中心は **registration removal only** であり、worker contract 自体は温存する。

## Current state

現在の tutorial runtime では、同じ `/serviceworker.js` が 2 つの異なる意味で扱われている。

### Worker consumer side

- `packages/elements/src/quantum-simulator-element.ts`
  - `new Worker('./serviceworker.js')` を使って simulator worker を起動している
- `apps/tutorial/_plugins/mini_qni_filter.rb`
  - `<quantum-simulator ... data-service-worker="/serviceworker.js">` を出力している
- 生成済み tutorial HTML でもこの `data-service-worker` が広く使われている

つまり tutorial 側は、`/serviceworker.js` を **quantum simulator の計算用 worker asset** として扱っている。

### Registration side

- `apps/tutorial/src/application.js`
  - `import './serviceworker-companion'`
- `apps/tutorial/src/serviceworker-companion.js`
  - `navigator.serviceWorker.register('/serviceworker.js', { scope: './' })`
  - production 相当では `navigator.serviceWorker.register('/qni/serviceworker.js', { scope: '/qni/' })`

つまり application bundle は、同じ `serviceworker.js` を **本物の Service Worker script** のようにも扱っている。

### Build/output side

- `apps/tutorial/package.json`
  - `build:js` は `src/application.js` と `src/serviceworker.js` をそれぞれ build する
- committed outputs:
  - `apps/tutorial/application.js`
  - `apps/tutorial/application.js.map`
  - `apps/tutorial/serviceworker.js`
  - `apps/tutorial/serviceworker.js.map`
- Pages output:
  - `html/application.js`
  - `html/application.js.map`
  - `html/serviceworker.js`
  - `html/serviceworker.js.map`

このため current state では、tutorial runtime 上で **同じ asset 名に対して「generic Web Worker」と「Service Worker registration」の 2 つの責務が重なっている**。

## Root cause

root cause は、`serviceworker.js` という legacy name が残る中で、tutorial がその実体を **simulator 用 Web Worker** として使い続けている一方、古い companion code がそれを **Service Worker registration target** としても扱っていることである。

実体としての `src/serviceworker.js` は simulator computation 用の worker であり、`apps/www` でも同種のねじれはすでに整理済みである。

今回の tutorial lane では、このねじれを **最小差分で tutorial 側にも揃える**。

## External context

external / platform context では次が言える。

- `navigator.serviceWorker.register(...)` は本物の Service Worker 用の API である
- generic Web Worker を使うだけなら registration は不要である
- tutorial は現在、offline/PWA behavior を積極的に活用する設計にはなっていない
- したがって今回の lane では、Service Worker を維持するよりも **誤解を招く registration をやめる** 方が current state に合う

## Options considered

### Option A: registration だけ外す

#### Pros

- 差分が最小
- user-approved scope と一致する
- `packages/elements` の consumer contract を維持できる
- `apps/www` で実施済みの整理と方向を合わせられる

#### Cons

- `serviceworker.js` というファイル名自体は legacy のまま残る
- `data-service-worker` という naming も今回の lane では維持される

#### Assessment

今回の推奨案。blast radius を最小にしつつ runtime の意味づけを正せる。

### Option B: registration removal に加えて tutorial 内の命名も整理する

#### Pros

- 実体と名前のズレも減らせる
- 将来の保守性はやや上がる

#### Cons

- rename 連鎖が発生しやすい
- generated HTML / plugin / consumer contract への影響範囲が広がる
- conservative lane としては広すぎる

#### Assessment

今回は不採用。必要なら follow-up lane として切り出す。

### Option C: 本物の Service Worker を導入し直す

#### Pros

- 命名と API の意味が完全に一致する
- PWA 戦略を整理する入口になる

#### Cons

- scope が大きすぎる
- tutorial の current needs を超える
- careful maintenance の one-by-one 方針に反する

#### Assessment

今回は不採用。

## Chosen approach

今回は **Option A** を採用する。

### Core approach

1. `apps/tutorial/src/application.js` から `serviceworker-companion` import を削除する
2. `apps/tutorial/src/serviceworker-companion.js` を削除する
3. `apps/tutorial/src/serviceworker.js` はそのまま維持する
4. `apps/tutorial/package.json` の `build:js` もそのまま維持し、worker asset は引き続き build する
5. regenerated `apps/tutorial/application.js` / `.map` から `navigator.serviceWorker.register(...)` を消す
6. `build:site` を通して `html/application.js` / `.map` 側にも同じ最終状態を反映する

## Files likely to change

Primary scope:

- `apps/tutorial/src/application.js`
- `apps/tutorial/src/serviceworker-companion.js`（削除）
- `apps/tutorial/application.js`
- `apps/tutorial/application.js.map`
- `html/application.js`
- `html/application.js.map`
- `html/src/application.js`
- `html/src/serviceworker-companion.js`（削除）

Files expected to remain unchanged:

- `apps/tutorial/src/serviceworker.js`
- `apps/tutorial/serviceworker.js`
- `apps/tutorial/serviceworker.js.map`
- `html/serviceworker.js`
- `html/serviceworker.js.map`
- `apps/tutorial/package.json`
- `apps/tutorial/_plugins/mini_qni_filter.rb`
- `packages/elements/src/quantum-simulator-element.ts`

### Scope guard

今回の source change は原則として:

- `apps/tutorial/**`
- generated outputs としての `html/application.js`
- generated outputs としての `html/application.js.map`
- generated outputs としての `html/src/application.js`
- generated outputs としての `html/src/serviceworker-companion.js`（削除）

に閉じる。`html/**` への手編集は行わず、`build:site` による generated diff だけを許容する。`packages/elements/**` や repo-wide scripts / workflow は参照対象に留める。

## Architecture / behavior impact

### What stays the same

- `quantum-simulator-element` は `new Worker('./serviceworker.js')` を使い続ける
- tutorial HTML は `data-service-worker="/serviceworker.js"` を維持する
- `apps/tutorial/package.json` の `build:js` は application bundle と worker bundle を両方 build する
- Pages output path は `html/` のまま

### What changes

- tutorial application bundle は `serviceworker-companion` を含まなくなる
- browser 上で `navigator.serviceWorker.register(...)` は呼ばれなくなる
- localhost / production で分岐していた registration logic は消える
- tutorial における `serviceworker.js` の意味づけは **simulator worker asset** に一本化される

## Verification strategy

この lane の成功条件は「registration は消えるが worker contract は壊れない」である。

### Required checks

1. `pnpm --dir apps/tutorial build`
   - JS/CSS build が通ること
2. `rg -n "serviceworker-companion" apps/tutorial/src/application.js`
   - no matches になり、source import が消えていること
3. `test ! -e apps/tutorial/src/serviceworker-companion.js`
   - companion source file が削除済みであること
4. `pnpm --dir apps/tutorial build:site`
   - Pages build が通ること
5. `rg -n "new Worker\('./serviceworker\\.js'\)" packages/elements/src/quantum-simulator-element.ts && rg -n 'data-service-worker="/serviceworker\.js"' apps/tutorial/_plugins/mini_qni_filter.rb`
   - conservative lane の must-keep contract が source 上で維持されていること
6. `rg -n "serviceworker-companion|navigator\.serviceWorker\.register" apps/tutorial/application.js apps/tutorial/application.js.map html/application.js html/application.js.map html/src/application.js`
   - regenerated built outputs / source maps / generated source mirror で no matches になること
7. `test ! -e html/src/serviceworker-companion.js`
   - generated source mirror 側でも companion file が削除済みであること
8. `test -e apps/tutorial/serviceworker.js && test -e html/serviceworker.js && test -e html/src/serviceworker.js`
   - `/serviceworker.js` public contract 用の built artifacts / generated mirrors が引き続き存在すること
9. `git diff --name-only -- apps/tutorial/serviceworker.js apps/tutorial/serviceworker.js.map html/serviceworker.js html/serviceworker.js.map html/src/serviceworker.js`
   - no output で、serviceworker artifacts 自体には差分を出していないこと
10. `node scripts/check-pages-config.mjs`

- Pages config guard が引き続き通ること

11. `git diff --name-only`

- repo-wide の最終 diff が `apps/tutorial/src/application.js` / `apps/tutorial/src/serviceworker-companion.js`（削除）/ `apps/tutorial/application.js` / `apps/tutorial/application.js.map` / `html/application.js` / `html/application.js.map` / `html/src/application.js` / `html/src/serviceworker-companion.js`（削除）に実質閉じていることを確認する

### Optional spot check

- `python -m http.server` などで `html/` を配信し、tutorial page の basic loading を確認する
- browser devtools 上で registration attempt が出ないことを確認する

## Risks and mitigations

### Risk: hidden dependency on the companion script

もし `serviceworker-companion.js` が registration 以外の責務を持っていた場合、runtime への影響がありうる。

**Mitigation:** repo inspection では companion の責務は registration のみなので、削除後は bundle grep と spot check で十分確認できる。

### Risk: generated artifact drift

tutorial は built JS と `html/` output を commit しているため、source 変更だけでなく generated files の追従が必要である。

**Mitigation:** implementation では `pnpm --dir apps/tutorial build` と `build:site` を必ず実行し、generated outputs を final state に揃える。

## Success criteria

- tutorial application bundle から `navigator.serviceWorker.register(...)` が消える
- `serviceworker-companion` が source / built output から消える
- `/serviceworker.js` の public contract は維持される
- `packages/elements` の `new Worker('./serviceworker.js')` contract は無変更
- tutorial Pages build は green のまま
- 変更は conservative に `apps/tutorial/**` と generated `html/application.js*` / `html/src/application.js` / `html/src/serviceworker-companion.js` へ閉じる
- `packages/elements` の `new Worker('./serviceworker.js')` と tutorial の `data-service-worker="/serviceworker.js"` 互換は維持される
