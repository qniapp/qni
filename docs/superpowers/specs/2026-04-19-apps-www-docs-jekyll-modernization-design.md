# apps/www/docs Jekyll 4.4.1 + config drift cleanup design

## Goal

`apps/www/docs` の Jekyll site を **保守的に現行化**し、repo 内で観測できる config drift と build warning を、`apps/www/docs` に閉じた形で整理する。

今回の lane の主目的は次の 3 点である。

1. `apps/www/docs` の Jekyll stack を `4.2.0` から **`4.4.1`** へ上げる
2. `apps/www/docs/_config.yml` に残っている **公開 metadata / URL drift** を現行の `qniapp/qni` / `https://qniapp.github.io/qni` に揃える
3. `apps/www build:docs` で現在出ている warning のうち、**repo 側で安全に消せるものだけ** を同じ lane で減らす

この lane は docs build を安定・明確化するためのものであり、`apps/www` 本体や Pages 全体の配信方式を再設計するものではない。

## Non-goals

- `apps/www` 本体の Rails / asset / runtime を同時に整理すること
- `apps/tutorial` や `html/` の Pages 配信 lane を同時に整理すること
- `apps/www/docs` のページ構造、URL slug、navigation 構造を作り直すこと
- `apps/www/docs` の見た目や CDN 利用（Tailwind CDN / highlight.js CDN など）を今回まとめて再設計すること
- GitHub Pages / Actions の deploy flow を変更すること
- `GitHub Metadata: No GitHub API authentication could be found` のような **環境依存 warning** を、この lane で無理に消すこと
- docs site を `qniapp.github.io/qni` 以外の公開先へ移すこと
- `_site/` を commit 対象へ変えること
- `apps/www/docs/_plugins/ruby_4_compat.rb` を、必要性の検証なしに削除すること

## User-approved scope

会話中に今回の lane のスコープは次のように固定された。

- 次の modernization lane は **`apps/www/docs`** を選ぶ
- lane の中身は **Jekyll `4.4.1` + repo drift cleanup** を中心にする
- warning cleanup は **Option B** を採用し、
  - `faraday-retry` warning
  - `Logger not initialized properly` / `Stevenson#initialize` 系 warning
    のような **repo 側で安全に扱えるもの** だけを対象にする
- metadata 正本は **Option A** を採用し、
  - `repository: qniapp/qni`
  - `baseurl: https://qniapp.github.io/qni`
    に揃える
- `GitHub Metadata` の API authentication warning のような **環境依存 warning** は今回は対象外とする

したがって、この lane は **docs-only / conservative / one-by-one** の範囲に留める。

## Current state

### Version state

現在の `apps/www/docs` は次の状態である。

- `apps/www/docs/Gemfile`
  - `gem 'jekyll'`
  - `gem 'jekyll-github-metadata'`
  - `gem 'jekyll-gzip'`
- `apps/www/docs/Gemfile.lock`
  - `jekyll (4.2.0)`
  - `jekyll-github-metadata (2.13.0)`

一方で repo 内の他の static-site lane では、すでに `apps/tutorial` が **Jekyll `4.4.1`** へ上がっている。

つまり `apps/www/docs` は、repo 全体の current static-site baseline から見ると **一段古い Jekyll lane** と言える。

### Config drift

`apps/www/docs/_config.yml` は現在、次の metadata を持つ。

- `repository: yasuhito/qni`
- `baseurl: "https://yasuhito.github.io/qni"`

しかし現在の公開 URL / repo 文脈は次で揃っている。

- public Pages URL: `https://qniapp.github.io/qni/`
- canonical repo org/name: `qniapp/qni`

実際に `cd apps/www && pnpm build:docs` を実行すると、生成された `_site/*.html` には

- `https://yasuhito.github.io/qni/index.js`
- `https://yasuhito.github.io/qni/qni.css`
- `https://yasuhito.github.io/qni/custom.css`

のような **古い absolute URL** が焼き込まれる。

したがって `apps/www/docs` は、build は通るが、**生成結果の metadata / asset URL が現行公開先とずれている**。

### Build warnings

現状の `pnpm --dir apps/www build:docs` では、少なくとも次の warning が出る。

1. `To use retry middleware with Faraday v2.0+, install faraday-retry gem`
2. `Logger not initialized properly`
3. `Jekyll::Stevenson#initialize: does not call super probably`
4. `GitHub Metadata: No GitHub API authentication could be found...`

このうち 1-3 は gem version / dependency / repo configuration に起因する可能性が高く、repo 側から低リスクに改善できる余地がある。

一方 4 は GitHub API authentication の有無に依存するため、この lane で repo だけ直して完全に消す対象には向かない。

### Compatibility shim

`apps/www/docs/_plugins/ruby_4_compat.rb` には、Liquid 4 系向けの taint API shim が残っている。

これは Ruby 4 toolchain 下で docs site を buildable にするための互換コードであり、Jekyll 4.4.1 へ上げたあとでも **不要と確認できるまでは維持**するのが安全である。

## External context

今回の外部調査では、次が確認できた。

- Jekyll `4.4.1` は 2025-01 時点の current stable line
- `jekyll-github-metadata` は Jekyll 4 系と組み合わせて使える
- `faraday-retry` warning は `octokit` / `jekyll-github-metadata` 系が Faraday 2 上で出しうる既知の warning で、**`faraday-retry` を入れる**のが最も小さい repo-side fix である
- Jekyll / Logger warning は、古めの Jekyll line と Ruby/logger 組み合わせに強く結びついており、まずは **Jekyll 本体を 4.4.1 へ揃える**のが自然である

したがって、この lane では「まず version を current line へ上げ、その結果で warning を再評価し、必要最小限の gem 追加だけ行う」という順序が安全である。

## Options considered

### Option A: Jekyll 4.4.1 + metadata drift correction only

#### Pros

- 最小差分で Jekyll と config drift を直せる
- scope が `apps/www/docs/**` にほぼ閉じる
- warning cleanup を切り離せる

#### Cons

- build warning が残る可能性が高い
- 現状の「build は通るが noisy」という負債が lane 完了後にも残る

#### Assessment

十分 conservative だが、今回ユーザーが明示的に含めた warning cleanup B を満たさない。

### Option B: Jekyll 4.4.1 + metadata drift correction + low-risk warning cleanup

#### Pros

- ユーザー承認済みスコープと一致する
- docs lane の value が明確になる
- warning も「repo 側で安全に扱えるもの」に限定できる
- `apps/www/docs` の build story が整理される

#### Cons

- 単純な version bump よりは diff が少し増える
- warning の原因が upstream 側だった場合、どこまで repo 側で持つか判断が必要

#### Assessment

今回の推奨案。one-by-one 方針を壊さず、docs lane 単体で完結しやすい。

### Option C: docs runtime / CDN / layout もまとめて広く整理する

#### Pros

- docs lane をまとめて modernize できる
- stale dependency や head markup も一気に触れる

#### Cons

- blast radius が大きい
- Jekyll upgrade と drift cleanup の評価が難しくなる
- user-approved の conservative lane を超える

#### Assessment

今回は不採用。必要なら follow-up lane として切り出す。

## Chosen approach

今回は **Option B** を採用する。

### Core approach

1. `apps/www/docs` の Jekyll stack を **`4.4.1`** へ上げる
2. `jekyll-github-metadata` など関連 gem も、Jekyll `4.4.1` と Ruby `4.0.2` の組み合わせで自然に解決される current line へ揃える
3. `apps/www/docs/_config.yml` の
   - `repository`
   - `baseurl`
     を現行の `qniapp/qni` / `https://qniapp.github.io/qni` に揃える
4. docs build warning のうち、今回扱うのは次に限定する
   - `faraday-retry` warning
   - `Logger not initialized properly`
   - `Stevenson#initialize` warning
5. `GitHub Metadata` API auth warning は **今回の対象外** とし、環境依存 warning として残す
6. docs のページ構造・layout・CDN・navigation は、version bump と metadata correction に必要な最小限以外は触らない
7. `ruby_4_compat.rb` は、Jekyll 4.4.1 で不要と確認できた場合のみ削除候補にする。未確認のまま削除しない

## Files likely to change

Primary scope:

- `apps/www/docs/Gemfile`
- `apps/www/docs/Gemfile.lock`
- `apps/www/docs/_config.yml`

Possible in-scope follow-up files:

- `apps/www/docs/_plugins/ruby_4_compat.rb`（必要性が消えた場合のみ）

Verification-only / normally unchanged:

- `apps/www/package.json`
- `apps/www/docs/_layouts/default.html`
- `apps/www/docs/_site/**`（ignored output）

### Scope guard

今回の実コード差分は **原則 `apps/www/docs/**` に閉じる\*\*。

`apps/www/package.json` や repo-wide scripts/workflows は、今回の lane では参照・検証対象に留め、docs build entrypoint がすでに成立している限り変更しない。

## Architecture / behavior impact

### What stays the same

- docs site は引き続き `apps/www/docs` の独立 Jekyll site として build される
- build entrypoint は `cd apps/www && pnpm build:docs` のまま
- `_site/` は generated output であり commit 対象にしない
- layout / navigation / page slug 構造は維持する

### What changes

- docs build に使う Jekyll line が `4.2.0` → `4.4.1` へ上がる
- generated docs HTML が参照する base URL は `qniapp.github.io/qni` に揃う
- `repository` metadata も `qniapp/qni` に揃う
- docs build warning のうち repo-side で安全に消せるものは減る

### Output compatibility policy

この lane では **practical parity** を目標にする。

- docs page の URL/path 構造は維持する
- 内容やナビゲーションの意味は維持する
- ただし、Jekyll version / metadata correction による build output の微差分までは固定しない

## Warning policy

### In scope

- `faraday-retry` warning
- `Logger not initialized properly`
- `Stevenson#initialize: does not call super probably`

### Out of scope

- `GitHub Metadata: No GitHub API authentication could be found...`
  - ローカル/CI の認証状態に依存し、repo 内だけで完全解消する対象ではないため
- Jekyll build とは無関係な broader workflow / deploy warning
- docs site の CDN / browser console warning 一般

## Verification strategy

### Required checks

1. `cd apps/www && pnpm build:docs`
   - docs build が green であること
2. `cd apps/www/docs && ruby -S bundle exec ruby -e 'require "yaml"; c=YAML.load_file("_config.yml"); puts c["repository"]; puts c["baseurl"]'`
   - `repository` と `baseurl` が意図した値になっていること
3. `grep -RFn "https://yasuhito.github.io/qni" apps/www/docs/_site`
   - no matches であること
4. `grep -RFn "https://qniapp.github.io/qni" apps/www/docs/_site`
   - generated site に新しい base URL が反映されること
5. `git diff --name-only`
   - 最終 diff が `apps/www/docs/**` に閉じていること
6. `git diff --check`
   - diff quality が clean であること

### Warning verification

`pnpm --dir apps/www build:docs` の出力を確認し、次を評価する。

- `faraday-retry` warning が消えること
- `Logger` / `Stevenson` warning が消えること
- `GitHub Metadata` API auth warning は残っても lane failure としないこと

### Optional check

- `_site/installation.html` など代表ページを spot check し、asset URL が `https://qniapp.github.io/qni/...` に揃っていることを確認する

## Risks and mitigations

### Risk: Jekyll 4.4.1 で互換 shim の要否が変わる

`ruby_4_compat.rb` を消せるように見えても、Liquid 4 系依存でまだ必要な可能性がある。

**Mitigation:** build と representative page rendering が安定するまでは shim を保持し、不要確認が取れた場合だけ削除する。

### Risk: warning cleanup が scope creep する

`faraday-retry` 対応のついでに broader gem refresh へ広がる可能性がある。

**Mitigation:** warning cleanup は「今回観測した warning を消すのに必要な最小 gem 追加 / lock refresh」に留める。

### Risk: metadata correction で docs asset URL が想定外に変わる

absolute URL correction により generated output 差分が広がる。

**Mitigation:** representative generated pages を grep し、`yasuhito.github.io/qni` → `qniapp.github.io/qni` の置換に閉じているかを確認する。

## Success criteria

- `apps/www/docs` が Jekyll `4.4.1` で build できる
- generated docs HTML が `https://qniapp.github.io/qni/...` を参照する
- `repository` metadata が `qniapp/qni` に揃う
- `faraday-retry` warning が消える
- `Logger` / `Stevenson` warning が repo-side safe fix で消える、または Jekyll 4.4.1 化で自然に消える
- `GitHub Metadata` API auth warning は lane failure にしない
- diff は `apps/www/docs/**` に保守的に閉じる

## Recommendation

現在の `apps/www/docs` は、build 自体は通るものの、

- Jekyll line が repo の current static-site baseline より古い
- generated metadata / asset URL が古い公開先を指す
- build warning が残っている

という状態にある。

そのため次の lane としては、**`apps/www/docs` を Jekyll `4.4.1` + current metadata + low-risk warning cleanup へ寄せる conservative modernization** が最も自然である。
