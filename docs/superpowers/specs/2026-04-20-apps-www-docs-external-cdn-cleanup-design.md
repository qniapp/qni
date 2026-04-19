# apps/www/docs external CDN cleanup design

## Goal

`apps/www/docs` に残っている **public CDN 依存の static asset import** を取り除き、docs site が必要とする browser-side asset を **repo 管理下の静的ファイル** から配信する。

今回の lane の主目的は次の 4 点である。

1. `apps/www/docs/_layouts/default.html` に残っている `unpkg` 依存を除去する
2. `apps/www/docs/vendor/**` を docs asset 配信の **source of truth** として repo に持つ
3. docs build / generated output (`apps/www/docs/_site/**`) が CDN URL ではなく **local vendor path** を出力するよう揃える
4. docs の current runtime behavior を保ったまま、asset ownership だけを repo 側へ寄せる

この lane は docs の見た目や Jekyll build flow を再設計するものではなく、**`apps/www/docs` に閉じた conservative な asset-source cleanup** である。

## Non-goals

- `apps/www` 本体の Rails layout / Plausible / asset delivery を同時に整理すること
- `apps/tutorial` の `Orbit` / `Plausible` / MathJax lane とまとめて external script cleanup を行うこと
- `tailwindcss` や `highlight.js` の version を今回 opportunistic に更新すること
- `apps/www/docs` の page structure / navigation / content / visual design を広く変更すること
- `apps/www/docs` に npm copy task や custom asset pipeline を追加すること
- `apps/www/package.json` の `build:docs` flow を今回作り変えること
- docs browser runtime の広い visual regression や manual smoke を、この lane の必須条件にすること
- `_site/` を commit 対象へ変えること
- `apps/www/docs` の Jekyll modernization lane で扱った metadata / gem / warning cleanup を今回やり直すこと

## User-approved scope

会話中に今回の lane の条件は次のように固定された。

- 次の modernization lane は **`apps/www/docs` external CDN cleanup** を選ぶ
- 全体の境界は **`apps/www/docs` only** とする
- 配置は **A** を採用し、repo-owned asset の source of truth は `apps/www/docs/vendor/**` とする
- vendor 範囲は **A** を採用し、runtime で実際に参照している 3 配信物だけを保持する
  - `tailwind.min.css`
  - `highlight.min.js`
  - `atom-one-dark.min.css`
- version 方針は **A** を採用し、次の current effective versions を **据え置きで固定**する
  - `tailwindcss 2.2.19`
  - `@highlightjs/cdn-assets 11.2.0`
- 検証は **B** を採用し、docs build 成功に加えて、generated HTML から CDN URL が消え local vendor path が出力されることを機械確認する
- 実装方式は、runtime redesign や asset automation ではなく、**layout の参照先を local static files に差し替える保守的な置換レーン** とする

したがって今回の lane は、**docs-only / fixed-version / no-new-pipeline の static asset ownership cleanup** として扱う。

## Current state

### Template state

現在の `apps/www/docs/_layouts/default.html` は次の external asset を読み込んでいる。

- `{{ site.baseurl }}/index.js`
- `https://unpkg.com/@highlightjs/cdn-assets@11.2.0/highlight.min.js`
- `{{ site.baseurl }}/qni.css`
- `https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css`
- `https://unpkg.com/@highlightjs/cdn-assets@11.2.0/styles/atom-one-dark.min.css`
- `{{ site.baseurl }}/custom.css`
- inline `hljs.highlightAll()`

このうち今回の対象は、`unpkg` から読んでいる次の 3 asset だけである。

- `highlight.min.js`
- `tailwind.min.css`
- `atom-one-dark.min.css`

`index.js`, `qni.css`, `custom.css`, favicon 群, inline `hljs.highlightAll()` は current docs runtime contract として維持する。

### Effective version state

現状の CDN URL は version の意味として次を持っている。

- `https://unpkg.com/@highlightjs/cdn-assets@11.2.0/...`
  - effective version は **`11.2.0`**
- `https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css`
  - `unpkg` の解決では **`2.2.19`** に redirect される

したがって current docs runtime は、実質的に

- `@highlightjs/cdn-assets 11.2.0`
- `tailwindcss 2.2.19`

の browser asset に依存している。

### Generated output state

`cd apps/www && pnpm build:docs` は現在成功するが、generated `apps/www/docs/_site/*.html` には引き続き CDN URL が焼き込まれる。

つまり現状は build は通るが、browser は docs page load 時に still-external な CDN へ依存している。

### Local styling / highlighting state

`apps/www/docs/custom.css` には `.hljs` / `.hljs-name` / `.hljs-attr` / `.hljs-string` / `.hljs-title` など、highlight.js theme の上に載る軽い override がある。

したがって今回の lane では、highlight theme 自体を差し替えるのではなく、**current theme file (`atom-one-dark.min.css`) を同じ順序で local 配信へ置き換える**のが安全である。

### Build / ignore state

- docs build entrypoint は `apps/www/package.json` の `pnpm build:docs`
- `apps/www/docs/.gitignore` には `_site/` が含まれており、generated output は commit しない current policy である

このため今回の lane は、source 側 `apps/www/docs/**` のみを変更し、`_site/**` は verification artifact として扱う。

## External context

repo scan + web research では次を確認した。

- `highlight.js` は `@highlightjs/cdn-assets` package から prebuilt browser assets を取得できる
- `@highlightjs/cdn-assets@11.2.0` tarball には、今回必要な次の file が含まれている
  - `highlight.min.js`
  - `styles/atom-one-dark.min.css`
- `tailwindcss@2.2.19` tarball には `dist/tailwind.min.css` が含まれている
- `tailwindcss@^2` CDN URL は current resolution として `2.2.19` に落ち着くため、**current behavior を保ったまま固定 version vendor 化するなら `2.2.19` を source of truth にするのが自然**である
- Tailwind upstream docs でも production では generated/minified CSS を配る前提が自然であり、今回の docs lane では prebuilt `tailwind.min.css` を local static file として持つ構成が最も小さい
- `Plausible` や `Orbit` は別 app / 別 lane であり、今回と同じ “docs-only local asset replacement” の枠に自然には入らない

したがって、**current effective versions の browser-ready distribution files を `apps/www/docs/vendor/**` に置き、layout の URL だけ差し替える\*\*のが最も conservative である。

## Options considered

### Option A: `apps/www/docs/vendor/**` に runtime で使う 3 ファイルだけを置き、layout の URL だけ差し替える

#### Idea

- `apps/www/docs/vendor/tailwindcss/tailwind.min.css`
- `apps/www/docs/vendor/highlightjs/highlight.min.js`
- `apps/www/docs/vendor/highlightjs/styles/atom-one-dark.min.css`

だけを commit する。

#### Pros

- 最小差分で済む
- `apps/www/docs` 内に閉じられる
- build/copy pipeline を追加しなくてよい
- rollback が単純

#### Cons

- vendor provenance を別途軽く残さないと、後から由来が分かりにくい

#### Assessment

今回のコア方針。ユーザー選択 A 群と一致する。

### Option B: Option A に加えて、vendor provenance 用の軽い README を残す

#### Idea

- runtime 差し替え自体は Option A
- 追加で `apps/www/docs/vendor/README.md` などに package/version/file origin を明記する

#### Pros

- 監査しやすい
- 将来の更新時に「なぜこの 3 ファイルがあるか」が分かる
- 差分は小さいまま

#### Cons

- runtime 以外の補助 file が 1 つ増える

#### Assessment

今回の推奨案。保守性を上げつつ blast radius を増やさない。

### Option C: vendor は commit するが、取得/更新の copy script まで同時に入れる

#### Idea

- 今回の local asset replacement に加え、今後の更新用 script/pipeline も整える

#### Pros

- 将来の更新は少し楽になる

#### Cons

- 今回の lane が “CDN cleanup” から “asset maintenance automation” に広がる
- `apps/www/package.json` や scripts まで波及しやすい

#### Assessment

今回は不採用。必要なら follow-up lane として切り出すべき。

## Chosen approach

今回は **Option B** を採用する。

### Core approach

1. current effective versions の upstream distribution file を次へ配置する
   - `apps/www/docs/vendor/tailwindcss/tailwind.min.css`
   - `apps/www/docs/vendor/highlightjs/highlight.min.js`
   - `apps/www/docs/vendor/highlightjs/styles/atom-one-dark.min.css`
2. `apps/www/docs/vendor/README.md` に provenance を明記する
3. `apps/www/docs/_layouts/default.html` の CDN URL を `{{ site.baseurl }}/vendor/...` へ置き換える
4. `pnpm --dir apps/www build:docs` を実行し、generated `_site/**/*.html` が local vendor path を参照することを確認する
5. `custom.css` や inline `hljs.highlightAll()` は unchanged とし、highlighting behavior の構造は保つ

### Version / provenance policy

今回 vendor する source-of-truth version は固定で次とする。

- `tailwindcss 2.2.19`
- `@highlightjs/cdn-assets 11.2.0`

provenance メモには最低限、次を記録する。

- package 名
- version
- vendor 対象 file path
- 取得元 package tarball 由来であること

今回の lane では **version upgrade は行わず**、current behavior の browser asset ownership だけを repo 側へ寄せる。

### Path policy

layout の参照先は `{{ site.baseurl }}/vendor/...` を使う。

採用例:

- `{{ site.baseurl }}/vendor/highlightjs/highlight.min.js`
- `{{ site.baseurl }}/vendor/tailwindcss/tailwind.min.css`
- `{{ site.baseurl }}/vendor/highlightjs/styles/atom-one-dark.min.css`

これにより、current docs site がすでに採用している `{{ site.baseurl }}/...` path policy と整合を保ったまま、external CDN import だけを local path へ切り替えられる。

## Architecture / behavior impact

### What stays the same

- docs build entrypoint は `pnpm --dir apps/www build:docs` のまま
- `apps/www/docs` は current Jekyll static-site model のまま
- `_site/` は generated / ignored output のまま
- `index.js`, `qni.css`, `custom.css`, favicon 群の参照は unchanged
- highlight invocation は `hljs.highlightAll()` のまま
- docs content / page structure / navigation / visual design は原則 unchanged
- CSS include order は
  - `qni.css`
  - `tailwind.min.css`
  - `atom-one-dark.min.css`
  - `custom.css`
    の current intent を維持する

### What changes

- docs browser runtime が `unpkg` ではなく repo-owned static asset を読む
- source 側の asset source of truth が `apps/www/docs/vendor/**` へ移る
- generated `_site/**/*.html` から CDN URL が消える
- generated `_site/vendor/**` が build output に含まれる

### Runtime contract after this lane

この lane 完了後の docs asset contract は次のようになる。

- source 側正本: `apps/www/docs/vendor/**`
- HTML 参照正本: `apps/www/docs/_layouts/default.html`
- generated mirror: `apps/www/docs/_site/vendor/**`

つまり docs site は、**repo 内で固定管理する browser asset を同一 site 配下から読む**状態になる。

## Files likely to change

Primary source scope:

- `apps/www/docs/_layouts/default.html`
- `apps/www/docs/vendor/tailwindcss/tailwind.min.css`（新規）
- `apps/www/docs/vendor/highlightjs/highlight.min.js`（新規）
- `apps/www/docs/vendor/highlightjs/styles/atom-one-dark.min.css`（新規）
- `apps/www/docs/vendor/README.md`（新規）

Verification-only / normally unchanged:

- `apps/www/docs/_site/**`（generated, ignored）
- `apps/www/docs/custom.css`
- `apps/www/package.json`
- `apps/www/docs/_config.yml`
- `apps/www/docs` content pages

### Scope guard

今回の実コード差分は **`apps/www/docs/**` に閉じる**。`apps/www` 本体、workflow、scripts、package metadata への変更は今回想定しない。

## Verification strategy

### Required checks

1. `pnpm --dir apps/www build:docs`
2. generated HTML から旧 CDN URL が消えていること
3. generated HTML に local vendor path が出ていること
4. source 側 / generated 側の vendor file existence check
5. `git diff --check`

### Source / generated invariants

少なくとも次を確認する。

- `apps/www/docs/_layouts/default.html` に次の CDN URL が残っていない
  - `https://unpkg.com/@highlightjs/cdn-assets@11.2.0/highlight.min.js`
  - `https://unpkg.com/@highlightjs/cdn-assets@11.2.0/styles/atom-one-dark.min.css`
  - `https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css`
- `apps/www/docs/_layouts/default.html` が次の local vendor path を参照する
  - `{{ site.baseurl }}/vendor/highlightjs/highlight.min.js`
  - `{{ site.baseurl }}/vendor/highlightjs/styles/atom-one-dark.min.css`
  - `{{ site.baseurl }}/vendor/tailwindcss/tailwind.min.css`
- `apps/www/docs/_site/**/*.html` に CDN URL が残っていない
- `apps/www/docs/_site/**/*.html` に local vendor path が出力されている
- `apps/www/docs/vendor/**` に 3 file が存在する
- `apps/www/docs/_site/vendor/**` に対応する 3 file が存在する
- `apps/www/docs/vendor/README.md` に package 名 / version / file origin が記録されている
- diff が `apps/www/docs/**` に閉じている

### Explicit non-requirements for this lane

今回の lane では次は必須にしない。

- browser manual smoke
- visual screenshot regression
- highlight.js token color の深い比較
- Tailwind CSS 内容の semantic diff 監査

理由は、今回の設計が **固定 version の同等配布物を local static file に置き換えるだけ** だからである。したがってこの lane の本質は、**build success + generated HTML の参照先整合** にある。

## Risks and mitigations

### Risk: Jekyll が `vendor/**` を想定どおり `_site/` へ出さない

`vendor` というディレクトリ名から broad exclude を誤解する可能性がある。

**Mitigation:** 実 build 後に `_site/vendor/...` の file existence を明示確認する。出力されない場合のみ follow-up 調整を検討し、先に pipeline を増やさない。

### Risk: include order を誤って CSS の見え方が変わる

Tailwind / highlight theme / custom override の順序が変わると docs visual drift が起きうる。

**Mitigation:** `_layouts/default.html` では source URL だけ差し替え、stylesheet/script order は維持する。

### Risk: provenance が残らず、後で vendor file の由来が不明になる

最小差分だけを優先すると、次回更新時に context を失う。

**Mitigation:** `apps/www/docs/vendor/README.md` を含める方式 2 を採用し、package/version/file origin を明記する。

### Risk: cleanup が docs-only の境界を越える

`apps/www` 本体や別 lane の CDN cleanup まで同時に触りたくなる可能性がある。

**Mitigation:** 今回は `apps/www/docs/**` に変更を閉じ、他 app の external asset は explicit out-of-scope とする。

## Implementation sequence

1. **Baseline confirmation**
   - source / generated HTML に 3 つの CDN URL が存在することを確認する
2. **Vendor asset placement**
   - `tailwindcss 2.2.19` から `dist/tailwind.min.css` を取得し `apps/www/docs/vendor/tailwindcss/tailwind.min.css` に置く
   - `@highlightjs/cdn-assets 11.2.0` から `highlight.min.js` と `styles/atom-one-dark.min.css` を取得し `apps/www/docs/vendor/highlightjs/**` に置く
   - provenance README を追加する
3. **Template cleanup**
   - `apps/www/docs/_layouts/default.html` の CDN URL を local vendor path に置換する
4. **Generated output refresh**
   - `pnpm --dir apps/www build:docs`
5. **Verification**
   - generated HTML / vendor existence / scope guard / diff quality を確認する

## Success criteria

この lane は次を満たせば成功とする。

- `apps/www/docs` source から対象 CDN URL が消えている
- `apps/www/docs/vendor/**` が runtime で参照する 3 file の source of truth になっている
- generated `apps/www/docs/_site/**/*.html` から CDN URL が消え、local vendor path が出力される
- `_site/vendor/**` に対応 file が出力される
- provenance README が残る
- diff が `apps/www/docs/**` に保守的に閉じる

## Recommendation

現在の `apps/www/docs` は、Jekyll modernization 後も browser-side asset については still-external な CDN に依存している。次の保守レーンとしては、

- docs-only
- fixed current versions
- no new pipeline
- generated HTML で機械確認可能

という条件を満たす **external CDN cleanup** が最も自然である。

そのため今回は、**`apps/www/docs/vendor/**` を source of truth にした minimal vendor + layout path replacement\*\* を採るのが最も安全である。
