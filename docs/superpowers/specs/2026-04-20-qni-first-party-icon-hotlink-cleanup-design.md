# qni first-party icon hotlink cleanup design

## Goal

qni repo 内にまだ残っている **Qni 自身のアイコンを外部 URL から読む参照** を、各 app / site 境界の **既存ローカル資産** へ差し替える。

今回の lane の主目的は次の 4 点である。

1. 3 つの confirmed hotlink sites から first-party icon の external URL 依存を取り除く
2. 各境界で既に存在する nearest local asset を **source of truth** として使う
3. tutorial / docs / www の current runtime behavior を保ったまま、icon ownership だけを repo 側へ戻す
4. blast radius を広げず、rollback が容易な **conservative cleanup** として完了させる

この lane は icon system の再設計ではなく、**3 箇所に閉じた first-party icon ownership cleanup** である。

## Non-goals

- repo 全体の icon 参照ポリシーを統一すること
- PNG / SVG を 1 形式に寄せること
- 新しい icon asset を追加すること
- helper 化 / shared partial 化 / component 化を同時に行うこと
- `apps/tutorial` の `Orbit` / `Plausible` を整理すること
- `apps/www/docs` や `apps/www` の broader asset policy / PWA policy を再設計すること
- `apps/www` social image generation flow 自体を変更すること
- confirmed されていない他の icon / image hotlink まで一斉に掃除すること
- visual redesign や brand refresh を行うこと

## User-approved scope

会話中に今回の lane の条件は次のように固定された。

- 次の conservative modernization lane は **first-party icon hotlink cleanup** とする
- scope は **A / minimum** を採用し、対象は次の 3 箇所だけに限定する
  - `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
  - `apps/www/docs/_includes/sidebar.html`
  - `apps/www/app/views/circuit_svg/_circuit_svg.html.erb`
- source-of-truth policy は **A** を採用し、3 箇所を 1 つの共有 asset へ正規化せず、**各境界で最寄りの既存 local asset** を使う
  - tutorial mobile menu → `./images/qni-icon-512.png`
  - docs sidebar → `{{ site.baseurl }}/images/icon.svg`
  - circuit SVG logo → `/icon-512.png`
- verification は **B** を採用し、machine checks に加えて 3 面の lightweight real-page confirmation を行う
- implementation approach は **1** を採用し、**各場所で既存ローカル資産へ差し替える最小置換** とする

したがって今回の lane は、**3 exact references only / no new files / no cross-app normalization** の cleanup として扱う。

## Current state

### Confirmed hotlink sites

現在 repo scan で確認できる first-party icon hotlink は次の 3 箇所である。

1. `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
   - current: `https://qniapp.net/icon-512.png`
2. `apps/www/docs/_includes/sidebar.html`
   - current: `https://qni-quantum.herokuapp.com/icon-512.png`
3. `apps/www/app/views/circuit_svg/_circuit_svg.html.erb`
   - current: `https://qniapp.net/icon-512.png`

これらはいずれも third-party CDN ではないが、**repo 内にある Qni 自身の icon asset を使わず、外部 origin に依存している** という点で ownership drift がある。

### Existing local assets already available

今回の lane で必要なローカル資産は、既に各境界に存在する。

- tutorial
  - `apps/tutorial/images/qni-icon-512.png`
- docs
  - `apps/www/docs/images/icon.svg`
- www public root
  - `apps/www/public/icon-512.png`

したがって今回の cleanup では、新しい画像追加や変換 pipeline は不要である。

### Boundary-specific runtime context

#### tutorial

- hotlink 箇所は mobile off-canvas menu header である
- `apps/tutorial` は `pnpm --dir apps/tutorial build:site` により repo root `html/*.html` を更新する
- 現状の generated `html/*.html` にも `https://qniapp.net/icon-512.png` が残っている
- tutorial では同一境界内に既に `./images/...` パス運用が存在するため、relative local asset への差し替えが自然である

#### docs

- hotlink 箇所は `apps/www/docs/_includes/sidebar.html` の sidebar branding である
- docs は `pnpm --dir apps/www build:docs` で `apps/www/docs/_site/**` を生成する
- `apps/www/docs/_config.yml` では `baseurl: 'https://qniapp.github.io/qni'` を使っており、docs layout / include は `{{ site.baseurl }}` を path policy として利用している
- docs 境界には既に `apps/www/docs/images/icon.svg` があるため、`{{ site.baseurl }}/images/icon.svg` が最も保守的である

#### www / circuit SVG

- hotlink 箇所は `apps/www/app/views/circuit_svg/_circuit_svg.html.erb` の Qni logo である
- この partial は `apps/www/config/routes.rb` の `svg/(:json)` 経由で描画され、`Circuit#attach_social_image(circuit_svg_url(...))` により social image generation にも使われる current runtime path を持つ
- `apps/www/public/icon-512.png` は既に public root asset policy の一部として存在する
- したがって `/icon-512.png` は current `apps/www` public root asset boundary と整合する

## Why this lane now

repo scan と prior research の結果、remaining modernization candidates の中では次の状況があった。

- tutorial `Orbit` は upstream が hosted script embed を前提としている
- tutorial `Plausible` の first-party delivery は infra / proxy / custom-domain 前提になりやすい
- first-party icon hotlinks は **repo 内に既存 asset があり、変更箇所も 3 箇所に固定できる**

したがって、現在の conservative maintenance 流れでは、**first-party icon hotlink cleanup が最も小さく repo-fixable な ownership drift** である。

## Options considered

### Option 1: 各場所で最寄りの既存 local asset に差し替える

#### Idea

- tutorial mobile menu → `./images/qni-icon-512.png`
- docs sidebar → `{{ site.baseurl }}/images/icon.svg`
- circuit SVG logo → `/icon-512.png`

#### Pros

- 追加 file 不要
- 変更最小
- 各 app / site の既存 asset boundary を尊重できる
- rollback が単純

#### Cons

- PNG / SVG が mixed になる
- repo-wide な icon 統一にはならない

#### Assessment

今回の推奨案。ユーザー承認済みの scope A / source-of-truth A / approach 1 と一致する。

### Option 2: 3 箇所を local 化しつつ format / 見た目を寄せる

#### Idea

- docs 側にも PNG を追加するなどして、branding surface の見た目をそろえる

#### Pros

- 見た目の一貫性は上げやすい

#### Cons

- 新規 asset 追加や format 正規化が必要になる
- 今回の「最小 cleanup」から scope が広がる

#### Assessment

今回は不採用。今の lane では YAGNI。

### Option 3: helper / shared partial / shared icon policy まで進める

#### Idea

- icon の参照ポリシーを helper / shared component へ寄せる

#### Pros

- 将来的な統一感や再利用性は高い

#### Cons

- cross-app refactor になりやすい
- 今回の 3 箇所 cleanup には過剰
- rollback と review のコストが増える

#### Assessment

今回は不採用。必要なら別 lane として切り出すべき。

## Chosen approach

今回は **Option 1** を採用する。

### Core replacements

1. `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
   - from: `https://qniapp.net/icon-512.png`
   - to: `./images/qni-icon-512.png`
2. `apps/www/docs/_includes/sidebar.html`
   - from: `https://qni-quantum.herokuapp.com/icon-512.png`
   - to: `{{ site.baseurl }}/images/icon.svg`
3. `apps/www/app/views/circuit_svg/_circuit_svg.html.erb`
   - from: `https://qniapp.net/icon-512.png`
   - to: `/icon-512.png`

### Source-of-truth policy

- tutorial は `apps/tutorial/images/qni-icon-512.png` を source of truth とする
- docs は `apps/www/docs/images/icon.svg` を source of truth とする
- www は `apps/www/public/icon-512.png` を source of truth とする

この lane では **shared icon canonicalization を行わず、nearest existing asset を採用する**。

## Architecture / change boundary

今回の変更境界は、**3 つの参照差し替えだけ** に固定する。

### In scope

- `apps/tutorial/_includes/off_canvas_menu_for_mobile.html` の image `src` 更新
- `apps/www/docs/_includes/sidebar.html` の image `src` 更新
- `apps/www/app/views/circuit_svg/_circuit_svg.html.erb` の image `src` 更新
- tutorial / docs の generated outputs が source change に追従することの確認
- www の circuit SVG runtime surface が壊れないことの focused verification

### Out of scope

- `apps/tutorial/_includes/static_sidebar_for_desktop.html` のロゴ見直し
- `apps/www/docs` layout 全体の branding refresh
- `apps/www` share page / show page / social image flow の redesign
- `public/manifest.json` や favicon 群の再編
- 追加 hotlink search & destroy

### Expected behavior impact

今回の lane で変わるのは **どこから icon bytes を読むか** だけである。

変えないものは次のとおり。

- tutorial mobile menu の DOM 構造
- docs sidebar の DOM 構造
- circuit SVG logo の DOM 構造
- alt text (`Qni`)
- 画像サイズ class (`h-7 w-7`, `h-8 w-8`, `h-16 w-16`)
- social image generation の同期/非同期方針
- Pages URL や Rails route

## Verification / invariants

この lane の成功条件は、**3 箇所の external hotlink が消え、承認済み local refs に置き換わること** である。

### Machine checks

#### Source checks

- 次の 3 target source files だけを対象に、old URL が消えること
  - `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
  - `apps/www/docs/_includes/sidebar.html`
  - `apps/www/app/views/circuit_svg/_circuit_svg.html.erb`
- 上記 3 files から次の old URL が消えること
  - `https://qniapp.net/icon-512.png`
  - `https://qni-quantum.herokuapp.com/icon-512.png`
- 上記 3 files に次の new refs が入ること
  - `./images/qni-icon-512.png`
  - `{{ site.baseurl }}/images/icon.svg`
  - `/icon-512.png`

#### Build / generated-output checks

- `pnpm --dir apps/tutorial build:site` が成功すること
- generated `html/*.html` から tutorial の old hotlink が消え、`./images/qni-icon-512.png` が出力されること
- `pnpm --dir apps/www build:docs` が成功すること
- generated `apps/www/docs/_site/**/*.html` から docs の old hotlink が消え、`{{ site.baseurl }}` 展開後の current expected path、すなわち `https://qniapp.github.io/qni/images/icon.svg` が出ること（将来 `site.baseurl` が変わる場合はその展開結果に追従する）
- `apps/www` 側は focused request / render verification で `circuit_svg` surface が成功し、`/icon-512.png` 参照が使われること
- `git diff --check` が clean であること
- diff scope が今回の対象周辺に閉じること

#### Allowable generated drift

- tutorial 側では tracked generated output `html/*.html` の更新を許容する
- docs 側では `_site/` は ignore されているため、verification artifact としてのみ扱い commit しない

### Lightweight real-page confirmation

- tutorial: mobile menu を開いたとき Qni icon が表示されること
- docs: sidebar の Qni icon が表示されること
- www: circuit SVG / social image logo surface が visually broken にならないこと

### Invariants

- 新規 image file は追加しない
- 画像形式の統一はしない
- `Orbit` / `Plausible` には触れない
- `apps/www` public asset policy を広げない
- external icon hotlink cleanup 以外の behavior change を入れない

## Implementation sequence

1. tutorial source replacement
   - `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
2. docs source replacement
   - `apps/www/docs/_includes/sidebar.html`
3. www source replacement
   - `apps/www/app/views/circuit_svg/_circuit_svg.html.erb`
4. tutorial build / generated output confirmation
5. docs build / generated output confirmation
6. focused www verification
7. lightweight real-page confirmation on the 3 affected surfaces

この順序なら、smallest source diff を先に確定し、その後 app-boundary ごとに追従確認できる。

## Rollback boundary

rollback は単純で、**3 つの `src` 参照を元へ戻すだけ** である。

- tutorial は source rollback 後に `pnpm --dir apps/tutorial build:site` を再実行し、tracked `html/*.html` を source に再追従させればよい
- docs は source rollback のみでよく、`_site/**` は verification artifact なので commit 管理しない
- www は partial の `src` を戻せば current runtime path に復帰する

新規 asset 追加や shared helper 導入をしないため、rollback boundary は小さく明確である。

## Risks and mitigations

### Risk 1: docs だけ SVG を使うことで見た目が少し変わる

- reason: docs の nearest existing local asset は `icon.svg` であり、current hotlink は PNG である
- mitigation: 今回は **見た目統一より ownership cleanup を優先** し、size class と branding text を維持する
- note: visual mismatch が問題になる場合は follow-up lane で改めて icon unification を検討する

### Risk 2: tutorial relative path が generated page で壊れる

- reason: tutorial は `html/*.html` の flat output を前提に `./images/...` を使う
- mitigation: `build:site` 後に generated `html/*.html` を機械確認し、lightweight real-page confirmation でも mobile menu を開いて確認する

### Risk 3: circuit SVG logo が www public root asset policy とズレる

- reason: circuit SVG partial は HTML page ではなく rendered SVG surface で使われる
- mitigation: source of truth を `apps/www/public/icon-512.png` に固定し、focused request / render verification で `/icon-512.png` が current surface で解決できることを確認する

## Success criteria

この lane は次を満たしたとき完了とみなす。

1. 3 つの confirmed hotlink sites がすべて local refs に置き換わっている
2. tutorial generated `html/*.html` に old hotlink が残らない
3. docs generated `_site/**/*.html` に old hotlink が残らない
4. www circuit SVG surface が `/icon-512.png` 参照で正常に描画される
5. lightweight real-page confirmation で 3 surfaces に obvious regression がない

## Follow-up explicitly deferred

次は今回やらない。

- repo-wide icon normalization
- PNG / SVG 統一
- docs / tutorial / www の shared brand asset policy 導入
- other remaining image hotlinks の sweep
- tutorial `Orbit` / `Plausible` cleanup
- wider branding / design refresh
