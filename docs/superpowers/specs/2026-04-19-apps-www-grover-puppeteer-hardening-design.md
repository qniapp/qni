# apps/www Grover / Puppeteer hardening design

## Goal

`apps/www` の Grover / Puppeteer 実行経路を **保守的に harden** し、`/:json` の表示リクエストから optional な social image 生成を安全に切り分ける。

今回の lane の主目的は次の 4 点である。

1. `Circuit#attach_social_image` が失敗しても **`show` リクエスト全体を落とさない** ようにする
2. Grover / Puppeteer 実行に必要な **local / CI / Heroku 前提の契約** を repo 内から追えるようにする
3. 自動テストでは **soft-fail 境界と設定契約** を重点的に検証し、実ブラウザ経路は明示的 smoke 手順として整理する
4. 将来の Grover / Puppeteer 更新判断に備え、**runtime 設定の参照口を一本化**する

この lane は Grover/Puppeteer の version upgrade lane ではなく、まず **現行 production path を壊れにくく・読みやすくする** ための整理である。

## Non-goals

- `apps/www/package.json` の `puppeteer ~23.2` を更新すること
- Grover を別の PDF / image renderer に置き換えること
- `CircuitsController#show` からの **同期生成フロー** を job / queue / 非同期処理へ移すこと
- retry / fallback image / placeholder image / cache refresh policy を新規導入すること
- GitHub Actions や Heroku buildpack 構成を、この lane で実際に組み替えること
- `apps/tutorial` や Pages lane を同時に触ること
- system test / browser smoke を毎回の CI で常時実行すること
- `og:image` 生成成功時の見た目や画像内容そのものを作り直すこと
- historical runbook を今回の lane で全面書き換えること

## User-approved scope

会話中に今回の lane の条件は次のように固定された。

- **A: hardening のみ**
  - 今回は conservative hardening に留め、Puppeteer update lane と混ぜない
- **B: local + CI + Heroku 前提の契約整理**
  - local だけでなく、CI / Heroku で何を前提にしているかを repo 側で読めるようにする
- **B: social image 生成だけ soft-fail**
  - Grover 失敗時は `og:image` 添付を諦めるが、ページ本体は落とさない
- **B: 中くらいの検証強度**
  - 自動テストは soft-fail と設定契約に集中し、実ブラウザ経路は明示的 smoke 手順として扱う
- **A: 同期生成のまま**
  - `show` → `attach_social_image` の同期呼び出しは維持し、失敗時だけ safe にする

したがって、この lane は **upgrade でも async 化でもなく、現行 sync path の安全化と契約明文化** に限定される。

## Current state

### Runtime path

現在 `apps/www` では、`CircuitsController#show` が valid JSON のときに

1. `Circuit.find_or_create_by(json: @json)`
2. `@circuit.attach_social_image(circuit_svg_url(json: @json))`

を同期的に実行する。

`Circuit#attach_social_image` は現在、次の条件では何もしない。

- `Rails.env.test?`
- `social_image.attached?`

それ以外では `Grover.new(...).to_png` を呼び、その結果を Active Storage の `social_image` として添付する。

つまり `/:json` の表示リクエストは、現状 **optional な OGP image 生成のために headless browser 実行へ同期的に入る設計** になっている。

### Failure mode

現状の `attach_social_image` / `generate_social_image` には、Grover / Puppeteer / browser 起動失敗を soft-fail する境界がない。

そのため、browser binary 不在、launch option 不整合、sandbox まわり、Puppeteer module / executable path 問題などが起きた場合、`show` リクエストまで巻き込んで失敗する余地がある。

一方 view 側の `apps/www/app/views/circuits/show.html.erb` では、

- `@circuit.social_image.attached?` のときだけ `og:image` を出す

という optional 表示になっているため、**「画像が無いなら meta を出さない」UI 契約自体はすでに成立**している。

つまり不足しているのは view 側の optionality ではなく、**生成側がその optionality を守るための failure boundary** である。

### Dependency and environment state

repo 内で観測できる現行状態は次である。

- `apps/www/Gemfile.lock`
  - `grover (1.2.10)`
- `apps/www/package.json`
  - `puppeteer: ~23.2`
- `docs/tech-stack.md`
  - Puppeteer は `system test / browser 依存処理 / Grover 周辺のブラウザ実行経路` として記載済み
- 2026-04 の rollout runbook
  - Heroku production `qni-quantum` は Puppeteer 関連 buildpack と `GROVER_NO_SANDBOX` config var を含む構成で運用されている

つまり production ではすでに Grover / Puppeteer 経路が前提化されているが、**repo 内の app-local 説明や runtime 設定参照口はまだ薄い**。

### Test coverage gap

既存の `apps/www` test では、Grover 実行そのものを積極的に踏まない構成になっている。

- `Circuit#attach_social_image` は `Rails.env.test?` で早期 return する
- `CircuitPageTest` は shared circuit page の表示継続を確認しているが、Grover failure boundary は検証していない
- `apps/www/README.md` は現在ほぼ空で、local / CI / Heroku の browser 実行前提は app-local に整理されていない

そのため現在は、**production path に近い機能なのに、失敗時挙動と設定契約が repo 内で十分に説明・検証されていない**。

## External context

今回の外部調査では次を確認した。

- Grover は 2026-04 時点でも活発に保守されており、`1.2.10` が公開されている
- 一方で Grover upstream には **Puppeteer 24 系サポートの論点**が残っており、`24.x` への追従は「今すぐ安全な保守 lane」とは言いにくい
- Puppeteer 本体は 24 系が進んでいるが、Linux server / container / preinstalled Chrome / headless shell 周辺は依然として **環境依存の launch 問題**が起きやすい
- Heroku は 2026-03 の platform update でも「stable / secure / reliable」寄りの運用姿勢を強めており、production path では保守的変更が望ましい

したがって今回の lane では、Puppeteer version を追いかけるよりも、**現行 `grover 1.2.10` + `puppeteer ~23.2` の production path を堅くする**方が自然である。

## Options considered

### Option A: rescue だけ入れる最小 hardening

#### Pros

- diff が小さい
- `Circuit` 周辺だけで完結しやすい
- すぐに request crash を減らせる

#### Cons

- local / CI / Heroku 契約が repo 内で依然として曖昧なまま残る
- 今後の Grover / Puppeteer 更新判断に必要な設定境界が整わない
- 「なぜこれで安全なのか」が README / config から追いにくい

#### Assessment

最小修正としては成立するが、今回ユーザーが選んだ **B: local + CI + Heroku 契約整理** を満たしきらない。

### Option B: 契約を明文化した conservative hardening

#### Pros

- user-approved scope と一致する
- sync path を維持したまま failure boundary を明示できる
- 将来の upgrade lane の前提を整えられる
- production path に対して最も conservative

#### Cons

- rescue だけよりは diff が広がる
- 実ブラウザ経路を自動テストで毎回踏まないため、smoke 手順の質が重要になる

#### Assessment

今回の推奨案。hardening / contract / verification のバランスが最も良い。

### Option C: hardening と Puppeteer upgrade 判定を同時に進める

#### Pros

- 一度に upgrade readiness まで進められる
- versions と contract を同時に見直せる

#### Cons

- blast radius が大きい
- Puppeteer 24 / Linux launch 問題まで lane に持ち込むことになる
- 今回の user-approved A scope を超える

#### Assessment

今回は不採用。必要なら follow-up lane として切り出すべき。

## Chosen approach

今回は **Option B** を採用する。

### Core approach

1. `CircuitsController#show` → `Circuit#attach_social_image` の **同期フローは維持**する
2. `attach_social_image` の外部依存部分に、**social image 生成専用の soft-fail 境界**を作る
3. Grover / Puppeteer 実行条件は `apps/www/config/initializers/grover.rb` のような **専用設定窓口**に寄せる
4. `Circuit` は「画像を付けるかどうかの orchestration」を担当し、browser path / launch option の literal 管理は持ちすぎない
5. failure 時は `social_image` を未添付のままにし、`show` ページ本体は通常どおり返す
6. soft-fail は silent にせず、**warning ログ**として観測可能にする
7. 自動テストは success path の full browser 起動ではなく、**soft-fail と設定契約**に集中させる
8. 実ブラウザ経路は local / CI / Heroku 用の **明示的 smoke 手順**として app-local docs に残す

## Architecture / behavior impact

### Responsibility split after this lane

#### 1. Request / orchestration boundary: `Circuit`

`apps/www/app/models/circuit.rb` は引き続き次を担当する。

- すでに `social_image` があるなら何もしない
- test 環境なら何もしない
- 必要なら Grover path を呼ぶ
- 失敗したら social image 生成だけ soft-fail する
- warning ログを残す

ここでは **optional image を付ける判断**だけを持ち、環境別の browser executable / launch arg の定義元にはしない。

#### 2. Configuration boundary: initializer / Rails config

Grover / Puppeteer 契約は `apps/www/config/initializers/grover.rb` のような単一 entrypoint に集約する。

この entrypoint では少なくとも次を整理する。

- browser executable path をどこから取るか
- launch args をどこで定義するか
- local / CI / Heroku で何を前提とするか
- application code がどう参照するか

重要なのは「値を増やすこと」より **参照口を一本化すること** である。

#### 3. Observation boundary: logs

Grover / Puppeteer path の失敗は warning ログとして残す。

ログには次のような最小限の切り分け情報を含める。

- social image generation で失敗したこと
- exception class
- exception message の最小限
- `Circuit` id などの切り分け情報
- Rails env

一方で circuit JSON 全文や過剰な request payload は出さない。

### What stays the same

- `CircuitsController#show` の同期フロー
- `og:image` が **attached 時だけ出る**という view 契約
- `grover 1.2.10` / `puppeteer ~23.2` の version line
- production で Grover/Puppeteer を使うという前提
- system test / browser 実行の大枠

### What changes

- `show` request は Grover 失敗だけで 500 しない
- social image 生成は **optional dependency boundary** として明示される
- Grover / Puppeteer 設定参照口が 1 箇所に集まる
- local / CI / Heroku 前提が app-local docs から追えるようになる
- soft-fail の自動検証が追加される

## Files likely to change

Primary scope:

- `apps/www/app/models/circuit.rb`
- `apps/www/config/initializers/grover.rb`（新規）
- `apps/www/test/**`（soft-fail / config contract / request continuation の focused test）
- `apps/www/README.md`

Possible small follow-up scope:

- `docs/tech-stack.md`（今回の contract が global inventory にとって本当に重要な 1-2 行なら追記可。不要なら触らない）

Reference-only / verify-only:

- `apps/www/app/views/circuits/show.html.erb`
- `apps/www/package.json`
- `docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md`

### Scope guard

今回の implementation diff は **原則 `apps/www/**` に閉じる\*\*。

`docs/tech-stack.md` は optional な補足範囲とし、workflow / Heroku 設定 / Pages / tutorial 方面へ広げない。

## Verification strategy

### Automated verification

今回の自動テストは、**full browser success path の常時実行**ではなく、次の focused checks を中心にする。

1. `attach_social_image` が browser / Grover 失敗を rescue して request crash に広げないこと
2. failure 時に `social_image` が未添付のまま残ること
3. failure 時に warning ログが出ること
4. `/:json` の page render が継続すること
5. `og:image` が attached 時だけ出る optional meta であること
6. Grover / Puppeteer 設定窓口がアプリから一貫して参照できること

### Manual smoke

実ブラウザ経路は明示的 smoke として整理する。

#### Local smoke

- browser prerequisite を満たした状態で representative な `/:json` を開く
- social image attach が成功すること、または少なくとも request が 200 で返ることを確認する
- 意図的に無効な executable path を与えるなどして failure mode も確認し、
  - request は継続
  - `og:image` は出ない
  - warning ログが残る
    を確認する

#### CI / Heroku contract verification

- CI では full browser success path を毎回 mandatory にはしない
- 代わりに README に、
  - prerequisite
  - 参照する env / config
  - 失敗時の切り分け観点
    を明記する
- Heroku については、既存 production contract（buildpack / config var / browser 実行前提）を **変更せず**, repo 内 docs から追えるようにする

## Risks and mitigations

### Risk: broad rescue が本来落とすべきバグまで隠す

social image 生成を守るつもりが、`Circuit` 全体の unrelated bug まで握りつぶす危険がある。

**Mitigation:** rescue は `attach_social_image` の外部依存処理に限定し、モデル全体や controller 全体では握りつぶさない。warning ログも必ず残す。

### Risk: 設定 entrypoint を増やしても docs と drift する

initializer だけ整えて README が古い、またはその逆になる可能性がある。

**Mitigation:** contract の source-of-truth は initializer とし、README はその参照方法と環境前提を説明する補助層に留める。

### Risk: local / CI に browser が無いとテストが不安定になる

実ブラウザ success path を自動化しすぎると環境依存で flaky になりやすい。

**Mitigation:** 自動テストは soft-fail / contract に集中し、success path は smoke 手順として明示する。

### Risk: scope creep して Puppeteer upgrade lane へ混ざる

設定整理の流れで version bump まで進めたくなる可能性がある。

**Mitigation:** `puppeteer ~23.2` と `grover 1.2.10` は今回据え置きと明記し、upgrade 判断は follow-up lane として切り出す。

## Success criteria

- `/:json` の request が Grover / Puppeteer 失敗だけで 500 しない
- social image 生成失敗時は `og:image` 添付を諦めるだけで、ページ本体は表示継続する
- Grover / Puppeteer 実行契約の参照口が app 内で一本化される
- local / CI / Heroku の前提が `apps/www` の docs から追える
- 自動テストで soft-fail と契約が検証される
- 実ブラウザ success path は smoke 手順として明示される
- `puppeteer ~23.2` と sync attach flow は維持される

## Recommendation

現在の `apps/www` は、Grover / Puppeteer を production path で利用している一方で、

- request failure boundary が明示されていない
- environment contract が app-local に整理されていない
- tests が soft-fail / contract を直接検証していない

という状態にある。

そのため次の lane としては、**version を動かさず、`show` の同期フローも維持したまま、optional social image generation を soft-fail 化し、Grover/Puppeteer 契約を明文化する conservative hardening** が最も自然である。
