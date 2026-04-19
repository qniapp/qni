# apps/www Jbuilder removal design

## Goal

`apps/www` から **未使用の `jbuilder` 依存**を保守的に取り除き、現在の `/:json` / `svg/:json` 経路や ERB-based な描画フローを変えずに、**Jbuilder 非依存であることを focused guard 付きで固定**する。

今回の lane の主目的は次の 3 点である。

1. `apps/www/Gemfile` / `Gemfile.lock` から未使用の `jbuilder` を除去する
2. `apps/www` が **`.jbuilder` template や `Jbuilder` DSL を使っていない**ことを test で guard する
3. `/:json` / `svg/:json` の現在の request path が **Jbuilder とは無関係に動いている**ことを軽く検証する

この lane は JSON API 設計の見直しではなく、**dependency hygiene + 再発防止 guard** に絞った conservative cleanup である。

## Non-goals

- `apps/www/config/routes.rb` の `/:json` / `svg/:json` 契約を作り直すこと
- JSON API を新設したり serializer / presenter を導入すること
- controller / view の描画方式を ERB から別方式へ変更すること
- `docs/tech-stack.md` など repo 直下 docs を今回まとめて更新すること
- `apps/tutorial` や `packages/**` に波及する cleanup を行うこと
- `serviceworker.js` 命名整理や broader worker redesign を同時に進めること
- `bin/dev` / `foreman` / dev process manager の見直しを同時に行うこと
- 手動ブラウザ smoke を今回の lane の必須 verification に含めること

## User-approved scope

会話中に今回の lane の条件は次のように固定された。

- 次の lane は **`apps/www` の `jbuilder` 除去** を選ぶ
- scope は **B** を採用し、
  - `jbuilder` 除去
  - `apps/www` 内の関連する小さな死に筋整理
    に留める
- ただし repo 直下 docs 更新までは広げず、**`apps/www` に閉じた cleanup** とする
- verification は **B** を採用し、
  - `apps/www` focused verify
  - repo-level non-browser verify (`pnpm build`, `pnpm lint`, `pnpm typecheck`, `pnpm test:ci`)
    を行う
- アプローチは **Option B** を採用し、単なる gem 削除ではなく、**focused guard を追加**して再発防止まで含める

したがって今回の lane は、**`apps/www` に閉じた未使用依存の削除 + guard 追加**として扱う。

## Current state

### Dependency state

現在の `apps/www/Gemfile` には、asset / frontend 関連 gem 群の中に `gem 'jbuilder'` が残っている。

一方で `apps/www` 配下を確認すると、観測できる `jbuilder` / `Jbuilder` 参照は **dependency file (`Gemfile` / `Gemfile.lock`) に限られ**、少なくとも現在の app-local code からは runtime usage が見えない。

### Template / rendering state

`apps/www` 配下では、`.jbuilder` template は見つからない。

また `CircuitsController` / `CircuitSvgController` とその view は、現在次のような構成である。

- `/:json` は `CircuitsController#show` に入る
- `svg/:json` は `CircuitSvgController#show` に入る
- 描画は通常の ERB template / partial を使っている
- `Jbuilder` DSL や `respond_to { |f| f.json ... }` で JSON response を組み立てる構成ではない

つまり現在の `json` は **path parameter として使われている** のであって、Jbuilder-based response format を意味していない。

### Application configuration state

`apps/www/config/application.rb` に Jbuilder 前提の設定はない。

そのため、現状の repo から見える範囲では、`jbuilder` は **historical default dependency が残っているだけ** の可能性が高い。

### Testing constraint already observed in this app

最近の `apps/www` integration test では、request rendering が application layout を通る際に、**Propshaft asset helper が test 環境の未ビルド asset で false-negative を起こす** 場面があった。

実際に Grover hardening lane では、request continuation test のために layout asset tag を最小限 stub する対応を入れている。

したがって今回の request-based guard でも、**Jbuilder 除去の確認とは無関係な asset helper 失敗**を避ける設計が必要である。

## External context

今回の repo scan + web research では次を確認した。

- Jbuilder 自体は Rails 7 系でも保守されているが、**必要なのは `.jbuilder` template や `Jbuilder` DSL を実際に使う app** である
- 一方で `bin/dev` + `foreman` は Rails app で今も一般的に使われており、次の conservative lane としては `jbuilder` より優先度が低い
- `serviceworker.js` 命名整理にはまだ価値があるが、`apps/www` / `apps/tutorial` / `packages/elements` をまたぐ **一段広い lane** になる

したがって現時点では、**unused dependency の明確な証拠があり、かつ `apps/www` に閉じて実施できる `jbuilder` 除去**が最も自然な次レーンである。

## Options considered

### Option A: gem を外すだけの最小 cleanup

#### Pros

- diff が最小
- 変更箇所がほぼ `Gemfile` / `Gemfile.lock` に限定される
- blast radius が最も小さい

#### Cons

- 「なぜ消して安全なのか」を test で固定できない
- 将来 `jbuilder` が無自覚に戻るのを防ぎにくい
- user-approved の B スコープとしては少し弱い

#### Assessment

安全ではあるが、今回の lane としては guard が不足する。

### Option B: 依存除去 + focused guard 追加

#### Pros

- user-approved approach と一致する
- cleanup の意図を test で固定できる
- `/:json` 経路と Jbuilder が無関係であることを軽く証明できる
- `apps/www` に閉じた conservative lane にしやすい

#### Cons

- gem 削除だけよりは diff が少し増える
- request-based guard は Propshaft asset helper の false-negative を避ける工夫が要る

#### Assessment

今回の推奨案。dependency hygiene と再発防止のバランスが最も良い。

### Option C: `jbuilder` 除去と route / JSON 意味整理を同時に進める

#### Pros

- `/:json` という URL 契約の意味まで整理できる
- JSON-related naming drift も減らせる

#### Cons

- cleanup を超えて設計変更に近づく
- route / controller / consumer 契約まで触る可能性があり、blast radius が増える
- user-approved の conservative lane を超えやすい

#### Assessment

今回は不採用。必要なら follow-up lane として切り出すべき。

## Chosen approach

今回は **Option B** を採用する。

### Core approach

1. `apps/www/Gemfile` / `apps/www/Gemfile.lock` から `jbuilder` を除去する
2. `apps/www/test/integration/jbuilder_removal_test.rb` のような focused guard を追加する
3. guard では少なくとも次を確認する
   - `Gemfile` に **`jbuilder` の gem 宣言が無い**
   - `Gemfile.lock` の `DEPENDENCIES` に top-level の `jbuilder` が無い
   - `app/views/**/*.jbuilder` が存在しない
   - `/:json` と `svg/:json` の **両方の** request path が Jbuilder 非依存で成立する
4. `apps/www` 内に Jbuilder 前提の README / コメント / generator 痕跡が見つかった場合のみ、同じ lane で小さく整理する
5. repo 直下 docs や broader route cleanup には広げない

## Architecture / behavior impact

### What stays the same

- `apps/www/config/routes.rb` の `/:json` / `svg/:json` 契約
- `CircuitsController#show` / `CircuitSvgController#show` の責務
- ERB / partial ベースの描画フロー
- `Circuit` / Grover / Propshaft / public asset 周辺の現在の runtime behavior
- local / CI / Heroku の app runtime contract

### What changes

- `apps/www` は `jbuilder` を install / bundle しなくなる
- `apps/www` に `.jbuilder` template を持たないことが test で固定される
- representative な JSON-path request が Jbuilder 非依存であることが focused test で残る

### Dependency boundary after this lane

この lane 完了後、`apps/www` における JSON-related path は

- **Jbuilder-based response building のためのものではなく**
- path parameter を含む通常の Rails request / ERB render

として repo 内の実装と test の両方で読める状態になる。

## Files likely to change

Primary scope:

- `apps/www/Gemfile`
- `apps/www/Gemfile.lock`
- `apps/www/test/integration/jbuilder_removal_test.rb`（新規）

Possible small in-scope follow-up files:

- `apps/www/README.md`（`apps/www` 内に Jbuilder 前提の記述が実在した場合のみ）
- `apps/www` 配下のコメント類（同上）

Reference-only / normally unchanged:

- `apps/www/config/routes.rb`
- `apps/www/app/controllers/circuits_controller.rb`
- `apps/www/app/controllers/circuit_svg_controller.rb`
- `apps/www/app/views/**`

### Scope guard

今回の実コード差分は **`apps/www/**` に閉じる。

repo 直下 docs、`apps/tutorial`、`packages/**`、workflow、Pages、service worker / Grover / Propshaft 関連の broader lane には広げない。

また、実際に Jbuilder 痕跡が見つからない場合、最終 diff は **`Gemfile` / `Gemfile.lock` / new focused test** 程度に収まるのが望ましい。

## Test / guard design

### Dependency guard

`apps/www/Gemfile` を読み、comment や quote style の揺れに依存しない形で、**`jbuilder` の gem 宣言が存在しない**ことを確認する。

あわせて `apps/www/Gemfile.lock` の `DEPENDENCIES` からも top-level の `jbuilder` が消えていることを確認する。

これは「lockfile から偶然消えた」ではなく、**app dependency policy として外した**ことを守る guard である。

### Template guard

`apps/www/app/views/**/*.jbuilder` が存在しないことを確認する。

これにより、将来 `.jbuilder` template が追加されたのに gem を外したまま、という不整合を早めに検知できる。

### Runtime guard

representative な request path として、次の **両方** を確認する。

- `get circuit_path(json: ...)`
- `get circuit_svg_path(json: ...)`

目的は JSON response の中身を細かく検証することではなく、**現在の 2 系統の JSON-path request がどちらも Jbuilder 非依存で render できる**ことを確認する点にある。

### Asset-helper false-negative avoidance

`circuit_path` / `circuit_svg_path` の integration request が application layout を通る場合、Propshaft asset helper による false-negative を避ける必要がある。

そのため guard test では、Grover lane ですでに使った方針にならい、**layout asset tag を最小限 stub する helper を明示的に使う**。

つまり今回の request guard では asset helper mitigation を optional にせず、**deterministic に同じ stubbing pattern を使って request continuation だけを確認する**。

これにより test failure の意味を「Jbuilder 除去が壊した」ことへ近づけ、asset prebuild の有無に引きずられにくくする。

## Implementation sequence

1. **RED**
   - focused guard test を先に追加する
   - 現状では `Gemfile` に `jbuilder` が残っているため、dependency guard が落ちる
2. **GREEN**
   - `apps/www/Gemfile` から `jbuilder` を削除する
   - `apps/www/Gemfile.lock` を更新する
   - `apps/www` 内に Jbuilder 前提の軽い痕跡があれば同時に整理する
3. **VERIFY**
   - focused guard を通す
   - repo-level non-browser verify を通す
   - diff quality と scope を確認する

## Verification strategy

### Focused verification

最低限、次を実行する。

1. `cd apps/www && ruby -S bundle exec rails test test/integration/jbuilder_removal_test.rb`
2. 必要に応じて、関連 integration test をまとめて再実行する
   - 例: `test/integration/grover_runtime_config_test.rb`

### Repo-level non-browser verification

ユーザー指定どおり、最終確認では次を実行する。

1. `pnpm build`
2. `pnpm lint`
3. `pnpm typecheck`
4. `pnpm test:ci`
5. `git diff --check`

### Diff boundary verification

- `git diff --name-only` で diff が `apps/www/**` に閉じていることを確認する
- 期待外の `docs/` / `apps/tutorial/` / `packages/**` 変更が無いことを確認する

## Risks and mitigations

### Risk: hidden Jbuilder usage を見落とす

`grep` で見えない load path や historical convention に依存している可能性がゼロではない。

**Mitigation:** `.jbuilder` template 不在と representative request path の focused guard を入れ、bundle / request の両側から確認する。

### Risk: request test が asset helper で false-negative になる

Jbuilder 除去とは無関係に、Propshaft asset lookup が test request を落とす可能性がある。

**Mitigation:** request 継続だけを目的にした最小 stub を使い、asset prebuild の有無を今回の lane の成否から切り離す。

### Risk: cleanup が route / JSON semantics redesign に広がる

`/:json` という URL を見て、その意味整理まで手を伸ばしたくなる可能性がある。

**Mitigation:** route 契約は今回は維持し、Jbuilder との無関係性を確認するに留める。

### Risk: repo-wide docs 更新まで広がる

`jbuilder` を外したので `docs/tech-stack.md` も更新したくなる可能性がある。

**Mitigation:** user-approved scope に従い、今回の lane は `apps/www` に閉じる。repo 直下 docs 更新は別 lane とする。

## Success criteria

- `apps/www/Gemfile` から `jbuilder` の gem 宣言が除去される
- `apps/www/Gemfile.lock` の `DEPENDENCIES` から top-level の `jbuilder` が除去される
- `apps/www/app/views/**/*.jbuilder` が存在しないことを guard できる
- `/:json` と `svg/:json` の両方の request path が Jbuilder 非依存で通る
- `pnpm build`, `pnpm lint`, `pnpm typecheck`, `pnpm test:ci` が通る
- `git diff --check` が clean である
- diff が `apps/www/**` に保守的に閉じる

## Recommendation

現在の `apps/www` では、`jbuilder` が Gemfile に残っている一方で、repo から観測できる範囲では

- `.jbuilder` template が無く
- `Jbuilder` DSL usage も無く
- `/:json` / `svg/:json` は path parameter + ERB render の経路として成立している

という状態にある。

そのため次の conservative lane としては、**`apps/www` から未使用の `jbuilder` を外し、再発防止の focused guard を加える dependency cleanup** が最も自然である。
