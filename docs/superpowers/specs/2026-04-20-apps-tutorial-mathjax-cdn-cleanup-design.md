# apps/tutorial MathJax CDN cleanup design

## Goal

`apps/tutorial` に残っている **MathJax の public CDN import** を取り除き、tutorial site の数式レンダリングを **repo 管理下の静的資産** から配信する。

今回の lane の主目的は次の 4 点である。

1. `apps/tutorial/_layouts/default.html` に残っている `https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js` 依存を除去する
2. `apps/tutorial/vendor/mathjax/es5/**` を **MathJax 配信の source of truth** として repo に持つ
3. `apps/tutorial` の build / Pages 出力で、MathJax を **relative local path** から読み込むように揃える
4. 数式表示の runtime behavior を保ったまま、generated outputs (`html/**`) を source-of-truth に追従させる

今回の lane は runtime redesign や page optimization ではなく、**tutorial 内に閉じた conservative な asset-source cleanup** である。

## Non-goals

- `Orbit` や `Plausible` の external script まで今回まとめて self-host / proxy 化すること
- MathJax を数式ページだけに conditional load すること
- MathJax の renderer や config を変更すること
- `apps/tutorial` に npm-based copy pipeline や custom asset task を追加すること
- `apps/tutorial/src/**`, `application.js`, `application.css`, `serviceworker.js` の runtime を整理し直すこと
- `apps/www`, `apps/www/docs`, `packages/**` を同時に整理すること
- `docs/tech-stack.md` など repo-wide docs を今回まとめて更新すること
- CDN cleanup を口実に tutorial の HTML / CSS / navigation 設計を広く変更すること

## User-approved scope

会話中に今回の lane の条件は次のように固定された。

- 次の modernization lane は **`apps/tutorial` MathJax CDN cleanup** を選ぶ
- 全体の境界は **tutorial-only / conservative** とする
- `Orbit` / `Plausible` は今回触らず、**MathJax だけ** を対象にする
- MathJax の配置は **A** を採用し、`apps/tutorial/vendor/mathjax/es5/**` に **vendor した upstream tree を commit** する
- 読み込み位置は **A** を採用し、MathJax は **引き続き全 tutorial ページで読む**
- vendor 範囲も **A** を採用し、`tex-mml-chtml.js` 周辺だけではなく **`es5` tree をまとめて保持** する
- 進め方は **Approach 1 / 保守的な置換レーン** を採用し、CDN URL を local vendored path に置き換えることに集中する

したがって今回の lane は、**tutorial に閉じた MathJax asset-source cleanup + focused runtime confirmation** として扱う。

## Current state

### Template state

現在の `apps/tutorial/_layouts/default.html` は次の external executable scripts を読み込んでいる。

- `./application.js`
- `https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js`
- `https://js.withorbit.com/orbit-web-component.js`
- `https://plausible.io/js/plausible.js`

このうち今回の対象は **MathJax の CDN import だけ** である。

### Page usage state

repo scan では、tutorial ページは全 68 ページあり、そのうち数式記法や数式レンダリング前提のページが複数存在することを確認した。

- `$$ ... $$` を含むページがある
- `\(` など MathJax 系マーカーを含むページが複数ある
- したがって MathJax は current tutorial runtime において still-active dependency である

一方で、数式ページだけに限定する仕組みは今は存在しないため、`default.html` から **全ページで読み込む** current contract が維持されている。

### Build / output state

`apps/tutorial/package.json` の主な build は次のとおりである。

- `pnpm build`
  - tutorial CSS / JS を build
- `pnpm build:site`
  - monorepo packages を build
  - Jekyll により tutorial site を repo root `html/` へ出力

現状では generated `html/*.html` も `default.html` を反映しており、MathJax CDN URL を含んでいる。

また現在の tutorial page output は **`html/*.html` の top-level flat structure** になっており、nested な page HTML は存在しない。この flat output が、今回 `./vendor/...` を安全に採用する前提になる。

### Static asset state

- `apps/tutorial/vendor/` ディレクトリは存在するが、現時点では空である
- `apps/tutorial` 直下に `_config.yml` は存在しない
- したがって current tutorial build は、Jekyll の default behavior に依存して static files を `html/` へ出力している

### External context relevant to static asset delivery

Jekyll 4 の default excludes は `vendor/bundle/`, `vendor/cache/`, `vendor/gems/`, `vendor/ruby/` などであり、**`vendor/mathjax` 自体を一律に除外する設定ではない**。

そのため今回の lane では、追加の `_config.yml` や custom copy pipeline を導入せず、`apps/tutorial/vendor/mathjax/es5/**` を **static files として mirror させる設計** を第一候補にできる。

## External context

repo scan + web research では次を確認した。

- third-party executable JS の public CDN import は、2026 時点でも **security / dependency control / availability** の面で弱い
- MathJax upstream docs は、`mathjax@3` を取得して **`es5` directory をそのまま self-host** する方法を明示している
- npm registry 上で取得可能な `mathjax@3` の latest stable は `3.2.2` であり、今回の lane では **`mathjax@3.2.2` に pin して vendor provenance を固定** するのが最も再現性が高い
- `Orbit` docs は現状 hosted embed 前提であり、同じ lane で conservative に self-host 化する根拠が弱い
- `Plausible` は proxy / custom domain / self-host という改善経路を持つが、**GitHub Pages で配る tutorial lane** としては MathJax ほど自然ではない

したがって現時点では、**tutorial に閉じていて upstream guidance も明快な MathJax CDN cleanup** が最も自然な next lane である。

## Options considered

### Option A: `vendor/mathjax/es5/**` を commit し、layout の URL だけ置換する

#### Idea

- `apps/tutorial/vendor/mathjax/es5/**` に upstream `es5` tree を配置する
- `apps/tutorial/_layouts/default.html` の CDN URL を `./vendor/mathjax/es5/tex-mml-chtml.js` に置き換える
- build / site generation で static mirror させる

#### Pros

- upstream の self-host guidance に近い
- build-time copy pipeline を追加しなくてよい
- tutorial-only の conservative lane にしやすい
- relative path 化により GitHub Pages の `/qni/` subpath と整合しやすい

#### Cons

- repo に vendor files が増える
- 数式を使わないページでも従来どおり MathJax を読む

#### Assessment

今回の推奨案。**最も conservative で、ユーザー承認済みの A 方針群とも一致する**。

### Option B: npm 依存として取得し、build 時に vendor へコピーする

#### Idea

- `mathjax@3` を package dependency として導入する
- build 時に `node_modules/mathjax/es5/**` を `apps/tutorial/vendor/` あるいは output へコピーする

#### Pros

- vendor files の更新は npm package version に寄せられる
- upstream version tracking はやや明示的になる

#### Cons

- build pipeline が増える
- drift 管理が複雑になる
- 今回の lane では過剰

#### Assessment

今回は不採用。必要なら将来の asset-management lane として切り出すべき。

### Option C: CDN cleanup と同時に conditional load まで行う

#### Idea

- local vendor path に切り替える
- さらに数式ページだけ MathJax を読むよう page-level condition を追加する

#### Pros

- page load の無駄を少し減らせる

#### Cons

- 68 ページの判定と guard が必要になる
- 今回 user が承認した「全ページ読み込み維持」とズレる
- optimization lane に寄りすぎる

#### Assessment

今回は不採用。必要なら follow-up lane として切り出す。

## Chosen approach

今回は **Option A** を採用する。

### Core approach

1. `npm pack mathjax@3.2.2` で取得した tarball を展開し、その `package/es5/**` を `apps/tutorial/vendor/mathjax/es5/**` に追加する
2. `apps/tutorial/_layouts/default.html` の MathJax script を
   - `https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js`
     から
   - `./vendor/mathjax/es5/tex-mml-chtml.js`
     へ置き換える
3. `id="MathJax-script"`, `async`, `tex-mml-chtml.js` entry はそのまま維持する
4. `pnpm --dir apps/tutorial build:site` により、generated `html/*.html` と `html/vendor/mathjax/es5/**` を最終状態へ揃える
5. `Orbit` / `Plausible` / JS bundle / CSS / service worker には触れない

### Vendor provenance / completeness policy

今回 vendor する対象は、**`mathjax@3.2.2` tarball 内の `package/es5/**` 全体\*\* に固定する。

- provenance 正本: `npm pack mathjax@3.2.2` で取得した tarball
- source 正本: `apps/tutorial/vendor/mathjax/es5/**`
- completeness 方針: `tex-mml-chtml.js` だけではなく、tarball 内 `package/es5/**` と **tree 全体で一致**させる

したがって実装・検証では、`apps/tutorial/vendor/mathjax/es5/**` が upstream extracted tree と **directory diff で一致**することを確認する。単一 file existence check だけで「full tree vendoring」を満たしたとは見なさない。

### Path policy

MathJax の参照は **absolute path ではなく relative path** を使う。

- 採用: `./vendor/mathjax/es5/tex-mml-chtml.js`
- 不採用: `/vendor/...`
- 不採用: `https://qniapp.github.io/qni/...`

この方針により、tutorial source と generated `html/*.html` の双方で、GitHub Pages の `/qni/` subpath を壊さずに配信できる。

## Architecture / behavior impact

### What stays the same

- MathJax は **引き続き全 tutorial ページで読む**
- `id="MathJax-script"` は維持する
- `async` 読み込みも維持する
- entry component は `tex-mml-chtml.js` のまま
- tutorial page 本文、front matter、数式記法、Orbit prompt の LaTeX 記法は変えない
- `Orbit` / `Plausible` の script URL は変えない
- `apps/tutorial/src/**`, `application.js`, `application.css`, `serviceworker.js` は変えない

### What changes

- MathJax の source of truth が **public CDN** から **`apps/tutorial/vendor/mathjax/es5/**`\*\* に移る
- generated `html/*.html` から MathJax CDN URL が消える
- generated `html/vendor/mathjax/es5/**` が出力される

### Runtime contract after this lane

この lane 完了後、tutorial の MathJax contract は次のようになる。

- source 側の配信正本: `apps/tutorial/vendor/mathjax/es5/**`
- HTML 参照の正本: `apps/tutorial/_layouts/default.html`
- generated mirror: `html/*.html`, `html/vendor/mathjax/es5/**`

つまり tutorial site は、**repo 内で所有する MathJax static asset を relative path から読む**状態になる。

## Files likely to change

Primary source scope:

- `apps/tutorial/_layouts/default.html`
- `apps/tutorial/vendor/mathjax/es5/**`（新規）

Generated scope:

- `html/*.html` のうち `default.html` を使う generated pages
- `html/vendor/mathjax/es5/**`（新規）

Files expected to remain unchanged:

- `apps/tutorial/package.json`
- `apps/tutorial/src/**`
- `apps/tutorial/application.js`
- `apps/tutorial/application.js.map`
- `apps/tutorial/application.css`
- `apps/tutorial/serviceworker.js`
- `apps/tutorial/serviceworker.js.map`
- `apps/www/**`
- `packages/**`
- `docs/tech-stack.md`

### Scope guard

今回の実コード差分は原則として **`apps/tutorial/**`と generated`html/**` に閉じる**。`html/**` への手編集は行わず、`build:site` による generated diff のみを許容する。

repo 直下 docs や workflow、scripts への変更は今回の lane では想定しない。

## Verification strategy

### Required automated checks

1. `pnpm --dir apps/tutorial build`
2. `pnpm --dir apps/tutorial build:site`
3. `node scripts/check-pages-config.mjs`
4. `git diff --check`

### Source / generated invariants

少なくとも次を確認する。

- `apps/tutorial/_layouts/default.html` に
  - `https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js`
    が残っていないこと
- `apps/tutorial/_layouts/default.html` に
  - `./vendor/mathjax/es5/tex-mml-chtml.js`
    が入っていること
- generated `html/*.html` から MathJax CDN URL が消えていること
- generated `html/*.html` が `./vendor/mathjax/es5/tex-mml-chtml.js` を参照していること
- `html/vendor/mathjax/es5/tex-mml-chtml.js` が存在すること
- `apps/tutorial/vendor/mathjax/es5/tex-mml-chtml.js` が存在すること
- `apps/tutorial/vendor/mathjax/es5/**` が、`npm pack mathjax@3.2.2` から展開した upstream `package/es5/**` と directory diff で一致すること
- `html/vendor/mathjax/es5/**` が `apps/tutorial/vendor/mathjax/es5/**` と directory diff で一致すること
- generated tutorial pages が引き続き `html/*.html` の top-level flat output であり、nested page HTML が新規に発生していないこと
- `Orbit` / `Plausible` の external script URL は source / generated の双方で unchanged であること
- scope 外の `apps/tutorial/src/**`, `application.js`, `application.css`, `serviceworker.js` に不要 diff が出ていないこと

### Focused local browser smoke

representative pages をローカルで開き、次を focused に確認する。

- **数式ありページ** 2〜3 枚
  - 少なくとも `index` 以外の tutorial page URL 1 枚を含める
  - 数式が未変換の生テキストのまま残っていない
  - network 上で vendored MathJax が 404 にならない
- **数式なしページ** 1 枚
  - `index.html` を確認対象に含め、root page からの `./vendor/...` 解決が正常であることを見る
  - local MathJax path 導入で tutorial の通常表示が壊れていない

今回の lane は CDN cleanup であるため、browser smoke も **数式表示と local asset path の妥当性** に絞る。

## Risks and mitigations

### Risk: `vendor/mathjax` が `html/` に出力されない

Jekyll が `vendor/` を broadly ignore すると思い込むと、output drift を見落とす可能性がある。

**Mitigation:** Jekyll 4 の default excludes は `vendor/bundle`, `vendor/cache`, `vendor/gems`, `vendor/ruby` であり、`vendor/mathjax` は default で broad exclude されない前提を確認したうえで、実 build 後に `html/vendor/mathjax/es5/tex-mml-chtml.js` の存在を明示確認する。

### Risk: vendored tree が不足し、runtime で追加 chunk / font が欠ける

`tex-mml-chtml.js` 単体だけでは依存ファイルが不足する可能性がある。

**Mitigation:** 必要最小限の trimming は行わず、**`mathjax@3.2.2` tarball の `package/es5/**` 全体\*\* を vendor し、upstream extracted tree との directory diff で completeness を確認する。

### Risk: relative path 前提が将来の nested output で壊れる

`./vendor/...` は current flat output では安全だが、もし nested page output が将来導入されると path resolution が崩れる可能性がある。

**Mitigation:** current lane では generated tutorial pages が `html/*.html` の top-level flat output であることを検証に入れる。将来 nested output が導入される場合は、MathJax path strategy 自体を別 lane で見直す。

### Risk: GitHub Pages subpath と path がずれる

`/vendor/...` のような absolute path は `/qni/` 配下で壊れる可能性がある。

**Mitigation:** relative path `./vendor/mathjax/es5/tex-mml-chtml.js` を採用し、`index.html` と non-index tutorial page の両方で smoke する。

### Risk: cleanup が Orbit / Plausible まで広がる

`default.html` に他の external script も残っているため、つい同時に触りたくなる可能性がある。

**Mitigation:** 今回は MathJax のみを対象とし、Orbit / Plausible は explicit out-of-scope とする。

## Implementation sequence

1. **Baseline confirmation**
   - source / generated HTML に MathJax CDN URL が存在することを確認する
2. **Vendor asset placement**
   - `npm pack mathjax@3.2.2` tarball を展開し、その `package/es5/**` を `apps/tutorial/vendor/mathjax/es5/**` に追加する
   - upstream extracted tree と source vendor tree の directory diff が一致することを確認する
3. **Template cleanup**
   - `apps/tutorial/_layouts/default.html` の MathJax script src を local vendored path に置換する
4. **Generated output refresh**
   - `pnpm --dir apps/tutorial build`
   - `pnpm --dir apps/tutorial build:site`
5. **Verification**
   - source / generated invariants を確認する
   - focused local browser smoke を行う
   - `git diff --check` を通す

## Success criteria

この lane は次を満たせば成功とする。

- tutorial source から MathJax CDN URL が消えている
- `apps/tutorial/vendor/mathjax/es5/**` が `mathjax@3.2.2` tarball の `package/es5/**` と一致する MathJax 配信の正本になっている
- generated `html/*.html` と `html/vendor/mathjax/es5/**` が source-of-truth に追従している
- representative math pages の focused smoke が通り、`index.html` と non-index tutorial page の双方で `./vendor/...` 解決が確認できる
- Orbit / Plausible を含む scope 外の runtime / assets に diff が漏れていない
