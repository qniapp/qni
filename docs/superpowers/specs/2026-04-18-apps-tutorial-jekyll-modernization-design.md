# apps/tutorial Jekyll modernization design

## Goal

`apps/tutorial` を **Jekyll 3.10 系から Jekyll 4 系へ保守的に更新**し、tutorial site に残っている古い Ruby / Jekyll 負債を減らす。

今回の目的は、tutorial を **Jekyll 4 上で安定して build / serve / Pages deploy できる状態**に寄せつつ、見た目・導線・主要動作を実用上維持することである。

加えて、この upgrade と自然に結びつく範囲で、`apps/tutorial` 内に閉じた **repo drift 修正** と **軽い stale cleanup** も同じ lane で回収する。

## Non-goals

- `apps/tutorial` を Jekyll 以外の static site generator へ移行すること
- tutorial の asset build を Jekyll 側へ戻すこと
- `esbuild` / `tailwindcss` / `pnpm` ベースの asset build を再設計すること
- `apps/www` や `apps/www/docs` を同時に modernize すること
- GitHub Pages の公開 URL や `html/` 出力方針を変えること
- tutorial の runtime / CDN 依存を包括的に再設計すること
- 生成 HTML の byte-identical な一致を目標にすること
- tutorial の情報設計・ナビゲーション・コンテンツ構成自体を変えること

## User-approved scope

この lane のスコープは、会話中に次のように固定された。

- **対象は `apps/tutorial` 専用**
  - `apps/www/docs` は Jekyll 4 実績の参照対象として扱うが、今回の変更対象には含めない
- **出力互換は実用寄り**
  - 多少の HTML 差分は許容する
  - ただし、見た目・導線・主要動作は維持する
- **upgrade と自然に結びつく cleanup は同時実施してよい**
  - `README` の `yarn` → `pnpm` のような drift 修正
  - Jekyll 4 化で露出した tutorial-only の古い依存・記述の小規模整理
  - tutorial 内の明らかに stale な runtime 依存の軽微整理
- ただし、lane が広がりすぎないように、cleanup は **upgrade との因果が明確なものだけ** に限定する

## Current state

現在の `apps/tutorial` は次のような構成で動いている。

### Ruby / Jekyll side

- `apps/tutorial/Gemfile`
  - `gem 'jekyll'`
  - `gem 'rubocop'`
  - stdlib 補助 gem (`benchmark`, `logger`, `csv`, `base64`, `bigdecimal`, `ostruct`)
- `apps/tutorial/Gemfile.lock`
  - `jekyll (3.10.0)`
  - `jekyll-sass-converter (1.5.2)`
  - `sass (3.7.4)`
  - `liquid (4.0.4)`
  - `kramdown (2.5.2)`
- `apps/tutorial` には `_config.yml` が無く、デフォルト設定ベースで動いている
- custom plugin を `apps/tutorial/_plugins/*.rb` に多数持つ
  - `mini_qni_filter.rb`
  - `qubit_circle_filter.rb`
  - `qpu_operation_tag.rb`
  - `bold_tag.rb`
  - `ket_tag.rb`
  - `margin_note_tag_block.rb`
  - `numbered_margin_note_tag_block.rb`
  - `sqrt_filter.rb`

### Asset / runtime side

- `apps/tutorial/package.json`
  - `build:js`: `esbuild`
  - `build:css`: `tailwindcss`
  - `build:site`: `pnpm build && pnpm --dir ../.. build:site-deps && ruby -S bundle exec jekyll build -d ../../html`
  - `start`: `ruby -S bundle exec jekyll s -d ../../html --host 0.0.0.0`
- `apps/tutorial/_layouts/default.html`
  - local `./application.js` / `./application.css` を読む
  - `MathJax` を jsDelivr から読む
  - `orbit-web-component` を CDN から読む
  - sidebar 用 Stimulus を unpkg CDN から読む
- `apps/tutorial/README.md`
  - まだ `yarn build` / `yarn build:site` / `yarn start` と記載されている
- `scripts/check-pages-config.mjs`
  - `apps/tutorial/package.json` の `start` / `build:site` と `html/` 出力を guard している
- `.github/workflows/pages.yml`
  - `pnpm --dir apps/tutorial build:site` を実行して `html/` を Pages artifact として deploy している

### Important structural observation

tutorial の CSS/JS はすでに Jekyll 側ではなく **Node build が正本**になっている。

つまり、今回の modernization で主に片付けるべきなのは:

1. **古い Jekyll 本体**
2. **古い Sass / converter 系の負債**
3. **tutorial 周辺の drift / stale 記述**

であり、asset build の主導権を Jekyll 側に戻す必要はない。

## External context

今回の調査では、upstream 側で次を確認した。

- `jekyll 4.4.1` は current stable line として利用可能
- `jekyll 4.4.1` の runtime dependency は `jekyll-sass-converter 3.1.0 (>= 2.0, < 4.0)` を含む
- `jekyll-sass-converter` README では、`v3.0` から `sass-embedded` ベースへ移行している
- Jekyll 公式の 3.x → 4.x upgrade docs では、default excludes の変化・plugin 互換・template parsing の差分が主要な注意点として挙げられている
- repo 内にも `apps/www/docs/Gemfile.lock` で `jekyll 4.2.0` 実績があり、qni repo 自体は Jekyll 4 を完全に未知の構成としては扱っていない

このため、tutorial lane は「Jekyll 4 を初導入する」のではなく、**repo 内既存実績のある Jekyll 4 系に tutorial を追従させる**作業として捉えられる。

## Options considered

### Option A: 最小アップグレード

`apps/tutorial` の Ruby/Jekyll 依存だけを更新し、その他は一切触らない。

#### Pros

- 差分が最小で安全
- root cause の切り分けがしやすい

#### Cons

- `README` の `yarn` 記述など明らかな drift が残る
- upgrade で露出した stale runtime / template 記述も取り残しやすい
- 「今まとめて片付けると自然」な cleanup を後で別 lane に分けることになる

#### Assessment

安全ではあるが、今回ユーザーが許可した cleanup 範囲を十分に活かせない。

### Option B: 保守的本線 + 明確な stale cleanup だけ同時実施

`apps/tutorial` の Jekyll 4 化を主目的に据えつつ、tutorial 内に閉じた明確な drift / stale cleanup だけ同じ lane で回収する。

#### Pros

- 今回の user-approved scope に最も合う
- 古い Ruby/Jekyll 負債と周辺の小さなズレをまとめて整理できる
- それでも tutorial structure や Pages 方針には踏み込まないため安全性を保ちやすい

#### Cons

- 最小案より差分は少し広がる
- cleanup の境界を明文化しないとスコープが膨らむ

#### Assessment

今回の推奨案。upgrade と因果が明確な tutorial-only cleanup を含める。

### Option C: ついでに tutorial を大きく整理する

Jekyll 4 化に加え、runtime 依存・layout 構造・asset 方針まで広く見直す。

#### Pros

- 長期的には一番きれいになる可能性がある

#### Cons

- one-by-one careful maintenance から外れやすい
- regress 時の原因切り分けが難しくなる
- 今回の lane としては広すぎる

#### Assessment

不採用。今回の作業としては過剰。

## Chosen approach

今回は **Option B** を採用する。

### Core approach

1. `apps/tutorial` の Jekyll を **4.4 系**へ更新する
2. それに伴って `Gemfile.lock` を現行 Bundler / Ruby 4.0.2 に整合する形へ再解決する
3. Jekyll 4 で壊れる custom plugin / layout / Liquid 記述があれば、**最小修正**で通す
4. tutorial の Node build (`esbuild`, `tailwindcss`, `pnpm`) は正本のまま維持する
5. 同じ lane で、upgrade と因果が明確な tutorial-only cleanup を回収する
   - `apps/tutorial/README.md` の `yarn` 記述更新
   - Jekyll 4 / Sass 3.x → modern converter 移行で露出した古い依存や記述の整理
   - `_layouts/default.html` などにある **重複タグ・明らかな古い記述・upgrade で露出した最小限の runtime/bootstrap 記述** の小規模整理
   - ただし CDN strategy の見直し、runtime dependency の入れ替え、asset loading 方針の再設計には踏み込まない

### Files likely to change

Primary scope（原則この範囲に閉じる）:

- `apps/tutorial/Gemfile`
- `apps/tutorial/Gemfile.lock`
- `apps/tutorial/README.md`
- `apps/tutorial/_layouts/default.html`
- `apps/tutorial/_layouts/page.html` (必要な場合のみ)
- `apps/tutorial/_plugins/*.rb` (必要な場合のみ)

Non-tutorial files は **今回の implementation scope から除外する**。

- `scripts/check-pages-config.mjs`
- `docs/tech-stack.md`
- `apps/www/docs/**`

これらは参照対象に留め、tutorial-only の変更後に guard/documentation mismatch が見つかっても、**今回は変更しない**。必要なら別フォローアップ候補として切り出す。

したがって、この lane で code/source として変更してよい範囲は原則:

- `apps/tutorial/**`
- tutorial 変更に追従して regenerate される `html/**`

のみとする。

### Files to inspect / reference during implementation

- `.github/workflows/pages.yml`
- `apps/tutorial/package.json`
- `apps/tutorial/.gitignore`
- `apps/www/docs/Gemfile`
- `apps/www/docs/Gemfile.lock`

## Architecture / behavior impact

### What stays the same

- tutorial content hierarchy
- `html/` への build output
- GitHub Pages deploy flow
- `pnpm --dir apps/tutorial build:site` を中心にした build path
- tutorial 用 JS/CSS の Node build
- custom Liquid plugin による表現スタイル

### What changes

- tutorial site generator の土台が Jekyll 3.10 → Jekyll 4.4 系へ更新される
- 古い Sass / converter 系依存は current Jekyll 4 側へ追従する
- tutorial 周辺 docs / scripts / layout 記述が current repo reality に寄る

### Behavioral target

今回の互換目標は **実用互換**である。

したがって acceptance は:

- 代表ページが同様に生成される
- ナビゲーション/前後リンク/埋め込み UI が保たれる
- Pages 向け artifact 出力が保たれる
- HTML の空白・属性順・微細な markup 差は許容する

とする。

## Cleanup boundary

今回ユーザーから「やっている間に、もしついでにこっちも合わせたほうがキレイ、とか出てきたらやって OK」と明示許可を受けている。

ただし lane が濁らないよう、cleanup は次の条件を満たす場合だけ含める。

- `apps/tutorial` に閉じている
- Jekyll 4 化と因果が明確
- 見た目・導線・主要動作を変えない
- 差分の理由を 1 段落で説明できる

逆に、次のものは今回含めない。

- tutorial 外への波及
- runtime 依存の全面再設計
- CDN strategy 全体の見直し
- tutorial structure / information architecture の変更
- `scripts/check-pages-config.mjs` / `docs/tech-stack.md` / `apps/www/docs/**` の変更

## Risks

### Risk 1: custom plugin 互換差

`apps/tutorial/_plugins/*.rb` は Liquid tag/filter の単純な実装が多いが、Jekyll 4 の render pipeline 差で意図しない差分や warning が出る可能性がある。

**Mitigation:**

- まず build failure / warning を観測する
- 修正は最小差分に限定する
- plugin 自体の全面置換はしない

### Risk 2: Sass / converter 周辺の差分

Jekyll 4.4 系では `jekyll-sass-converter 3.1.0` に寄るため、旧 tutorial lockfile の `sass 3.7.4` / LibSass 系とは挙動差が出る可能性がある。

ただし tutorial の主要 CSS は Node 側で生成されているため、影響は Jekyll 側の Sass usage が存在する場合に限られる。

**Mitigation:**

- Jekyll build で実際に Sass path が使われているか確認する
- 問題が出た場合だけ関連ファイルを最小修正する

### Risk 3: default excludes / config まわりの差分

Jekyll 4 では default excludes の扱いが変わっているため、`node_modules` や build artifact の扱いが思わぬ差分を生む可能性がある。

**Mitigation:**

- build 出力を spot check する
- 必要な場合のみ `apps/tutorial/_config.yml` を最小追加する
- 既存の `.gitignore` / Pages build path と矛盾しないようにする

### Risk 4: cleanup の膨張

runtime/layout cleanup を広げすぎると、upgrade lane の意味が薄くなる。

**Mitigation:**

- cleanup は tutorial-only + causally related changes に限定する
- “今はきれいにしたいだけ” の修正は別 lane に送る

## Verification strategy

### Phase 1: focused tutorial verification

まず `apps/tutorial` 単体で Jekyll 4 が成立することを確認する。

想定コマンド:

- `cd apps/tutorial && ruby -S bundle install`
- `cd apps/tutorial && ruby -S bundle exec jekyll build -d /tmp/qni-tutorial-site-upgrade`
- 必要なら `cd apps/tutorial && ruby -S bundle exec jekyll serve -d /tmp/qni-tutorial-site-serve`

確認ポイント:

- custom plugins がロードできる
- layout/include/Liquid が崩れない
- Jekyll 4 で build error / warning が出ないか、出ても許容できる最小範囲か

### Phase 2: tutorial asset integration verification

- `pnpm --dir apps/tutorial build`
- `pnpm --dir apps/tutorial build:site`

確認ポイント:

- `esbuild` / `tailwindcss` の既存 build flow が保たれる
- `html/` への output が保たれる
- `scripts/check-pages-config.mjs` の前提が崩れない
- `apps/tutorial/Gemfile.lock` が Pages CI の Linux 実行環境で解決不能にならない
  - 少なくとも Linux platform を lockfile に保持するか、同等の Linux build 実証を行う

### Phase 3: output / behavior parity spot checks

- `html/index.html` を含む代表ページを数本確認する
- 必要なら `/tmp/qni-tutorial-site-upgrade` と `html/` の差分を見て、意味のある regress だけ拾う
- 前後リンク・sidebar・埋め込み component (`mini_qni`, `qubit_circle`, `qpu_operation`) を重点確認する

### Phase 4: repo-level safety checks

- `node scripts/check-pages-config.mjs`
- `node scripts/check-local-build-env.mjs`
- `git diff --check`
- `git diff --name-only | rg -v '^(apps/tutorial/|html/)'` が **無出力** であることを確認する
- `git diff --name-only | rg '^apps/www/docs/'` が **無出力** であることを確認する
- 必要なら `ruby -rbundler -e "lock = Bundler::LockfileParser.new(Bundler.read_file('apps/tutorial/Gemfile.lock')); puts lock.platforms.map(&:to_s)"` 等で lockfile platform を確認する

Pages CI は `ubuntu-latest` 上で `apps/tutorial` を bundle して build するため、local で通っても Linux platform 情報や CI 向け lockfile 整合が欠けていると deploy で落ちうる。この確認は tutorial lane の acceptance に含める。

必要なら final verification として:

- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test:ci`

まで広げる

### Acceptance criteria

- `apps/tutorial` が Jekyll 4 系で build できる
- `pnpm --dir apps/tutorial build:site` が `html/` を正しく生成する
- tutorial の主要ページ・導線・埋め込み UI が実用上維持される
- tutorial-only cleanup は upgrade との因果が説明できる範囲に収まる
- Pages workflow 前提と repo guard が維持される
- `apps/tutorial` の lockfile / bundle 解決が Pages CI の Linux 実行条件と整合している
- source diff は `apps/tutorial/**` に閉じ、非 source artifact は `html/**` のみが増分として現れる
- `apps/www/docs/**` は変更されない

## Rollback

この lane の rollback は比較的単純である。

- Jekyll 4 への更新で regress した場合は `apps/tutorial/Gemfile` / `Gemfile.lock` を旧 working state に戻す
- cleanup が混ざった場合も、tutorial-only files に閉じているため commit 単位で巻き戻しやすい
- Pages 出力方針や repo-wide package manager 方針には触れないため、blast radius は限定的である

## Recommendation

`apps/tutorial` はすでに asset build を Node 側へ移しており、残っている古さの中心は **Jekyll 3.10 + 旧 Sass converter / Ruby Sass 時代の lockfile** にある。

したがって、次の一手としては **tutorial を保守的に Jekyll 4.4 系へ上げ、必要最小限の tutorial-only cleanup を同時に行う** のがもっとも自然で安全である。

これは `apps/www` の Sprockets → Propshaft のような本番 app asset pipeline 置換より低リスクで、repo 全体の static/tutorial lane を先に健全化する順序としても妥当である。
