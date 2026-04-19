# apps/tutorial Stimulus CDN cleanup design

## Goal

`apps/tutorial` に残っている **Stimulus の public CDN import + inline bootstrap** を取り除き、tutorial runtime の Stimulus 初期化を **repo 管理下の bundle (`apps/tutorial/src/**`)\*\* に戻す。

今回の lane の主目的は次の 4 点である。

1. `apps/tutorial/_layouts/default.html` に残っている `https://unpkg.com/@hotwired/stimulus/...` 依存を除去する
2. tutorial の `sidebar` controller と Stimulus 起動を **inline script ではなく `apps/tutorial/src/**` 側で管理\*\*する
3. `apps/tutorial/package.json` に `@hotwired/stimulus` を **明示依存として追加**し、hoist 任せの曖昧な依存境界を避ける
4. tutorial の現在の runtime behavior、特に **sidebar の open / close / scroll 復元** を保ったまま、generated outputs (`apps/tutorial/**`, `html/**`) を整合させる

今回の lane は frontend framework の全面整理ではなく、**tutorial 内に閉じた conservative な dependency / bootstrap cleanup** である。

## Non-goals

- `apps/www` の Stimulus 構成や controller を今回まとめて整理すること
- `packages/**` に tutorial 用 controller や shared bootstrap を持ち込むこと
- `MathJax` / `Orbit` / `Plausible` など、Stimulus 以外の外部 script を今回まとめて見直すこと
- tutorial の service worker / worker 命名整理や broader PWA cleanup を同時に進めること
- `apps/tutorial` の sidebar 以外の UI behavior を redesign すること
- `docs/tech-stack.md` など repo 直下 docs を今回まとめて更新すること
- `apps/www` と tutorial の Stimulus controller 構成を完全に統一すること
- CDN cleanup を口実に tutorial の HTML / CSS / navigation 設計を広く変更すること

## User-approved scope

会話中に今回の lane の条件は次のように固定された。

- 次の modernization lane は **`apps/tutorial` の Stimulus CDN cleanup** を選ぶ
- 全体の境界は **最小 / 保守的 (apps/tutorial-only)** とし、Stimulus の cleanup に絞る
- ただし実装内容は **B** を採用し、
  - `unpkg` import をやめる
  - tutorial の Stimulus 起動と `sidebar` controller 登録を `apps/tutorial/src/**` に移す
  - **bundle を source of truth にする**
    ことまで含める
- 依存宣言は **A** を採用し、`@hotwired/stimulus` は `apps/tutorial/package.json` に **明示追加**する
- verification は **B** を採用し、
  - `pnpm --dir apps/tutorial build`
  - `pnpm --dir apps/tutorial build:site`
  - generated output の確認
  - focused local browser smoke（sidebar open / close / scroll restoration）
    を行う

したがって今回の lane は、**tutorial に閉じた Stimulus dependency / bootstrap cleanup + focused runtime confirmation** として扱う。

## Current state

### Template state

現在の `apps/tutorial/_layouts/default.html` は次の状態になっている。

- `./application.js` を module script として読み込んでいる
- その一方で、さらに inline `<script type="module">` を持っている
- inline module script の中で
  - `https://unpkg.com/@hotwired/stimulus/dist/stimulus.js`
  - `Application.start()`
  - `Stimulus.register('sidebar', ...)`
    を直接書いている

つまり tutorial の Stimulus runtime は、**bundle 外の CDN import と template inline code** で成立している。

### Controller / markup contract state

sidebar 関連の HTML 契約は現在すでに template / include 側に明示されている。

- `apps/tutorial/_layouts/page.html`
  - `data-controller="sidebar"`
  - `data-action="click->sidebar#open"`
- `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
  - `data-sidebar-target="menu"`
  - `data-sidebar-target="body"`
  - `data-action="click->sidebar#close"`

また inline controller の実装は次の振る舞いを持っている。

- `connect`
  - `sessionStorage['sidebar-md-scroll']` を読み、desktop sidebar body scroll を復元する
  - `beforeunload` で mobile / desktop 両方の scroll を保存する
- `open`
  - menu の `hidden` を外し、mobile sidebar を表示する
  - `sessionStorage['sidebar-scroll']` を使って mobile sidebar scroll を復元する
- `close`
  - menu に `hidden` を戻す

したがって cleanup の本質は、**この契約と挙動を壊さずに実装場所だけを template から source bundle へ移すこと** にある。

### Source / bundle state

現在の `apps/tutorial/src/application.js` は次の 1 行に近い薄い entry である。

- `@qni/elements` を import
- `Complex` を re-export

ここには Stimulus bootstrap も controller 登録も存在しない。

その結果、tutorial の UI behavior は **source bundle ではなく template inline script に分散**している。

### Dependency declaration state

現在の `apps/tutorial/package.json` には `@hotwired/stimulus` が宣言されていない。

一方で monorepo 全体では `apps/www/package.json` が `@hotwired/stimulus` を依存に持っているため、workspace / hoist の結果として参照できる可能性はある。しかし tutorial 自身の dependency boundary としては曖昧であり、今回の lane ではこの曖昧さを残さない。

### Generated output state

現在の generated outputs でも、source と同じく CDN import と inline bootstrap が広く反映されている。

- `html/*.html` の多くに
  - `https://unpkg.com/@hotwired/stimulus/dist/stimulus.js`
  - `window.Stimulus = Application.start()`
  - `Stimulus.register('sidebar', ...)`
    が埋め込まれている
- `apps/tutorial/application.js` / `html/application.js` / `html/src/application.js` は Stimulus bootstrap の source of truth ではない

したがって今回の lane では、source だけでなく **generated HTML / built JS まで一貫して bundle 管理へ寄せる** 必要がある。

## External context

今回の repo scan + web research では次を確認した。

- public CDN 上の executable JS import は、2026 時点でも **security / availability / dependency control** の面で弱い。特に version pin や SRI を伴わない third-party executable import は保守上の負債になりやすい
- `apps/www` 側ではすでに `@hotwired/stimulus` を local dependency として bundle 管理しており、tutorial だけが template inline + CDN の古い形に残っている
- broader な `serviceworker.js` naming cleanup には依然価値があるが、`apps/tutorial` / `apps/www` / `packages/elements` をまたぐ **一段広い lane** になる
- `bin/dev` / `Procfile.dev` / foreman は Rails upstream でもまだ現役で、今この repo の最優先 conservative cleanup とは言いにくい

したがって現時点では、**tutorial に閉じていて根拠が明確な Stimulus CDN cleanup** が最も自然な次レーンである。

## Options considered

### Option A: 1 ファイル集約

#### Idea

`apps/tutorial/src/application.js` に

- `@qni/elements` import
- Stimulus 起動
- `sidebar` controller 定義

をすべてまとめる。

#### Pros

- diff が最小
- 新規ファイル数が少ない
- 実装が速い

#### Cons

- tutorial 側の責務が再び 1 ファイルへ詰まりやすい
- 今回はきれいでも、次の小さな UI behavior がまた entry に足されていく
- inline script を bundle に移しただけで、構造的にはほぼ据え置きになりやすい

#### Assessment

悪くはないが、今回の scope B で意図している「source of truth を bundle 側へ寄せつつ、軽く整理する」と比べると少し弱い。

### Option B: 軽量 controller 構成に寄せる

#### Idea

`apps/tutorial/src/**` 内に tutorial 用の小さな Stimulus 構成を作る。

- `src/controllers/application.js`
- `src/controllers/sidebar_controller.js`
- `src/controllers/index.js`
- entry からそれらを読む

#### Pros

- current inline behavior を素直に source bundle へ移せる
- `apps/www` ほど大げさでなくても、責務が明確になる
- tutorial 内だけで閉じた conservative cleanup にしやすい
- 今後 sidebar 以外の小さな controller が増えても置き場所がぶれにくい

#### Cons

- Option A よりファイル数は増える
- app 規模に対してわずかに構成が増す

#### Assessment

今回の推奨案。**保守性と conservative さのバランスが最も良い**。

### Option C: `apps/www` に近い shared / unified 構成へ寄せる

#### Idea

tutorial と `apps/www` の Stimulus bootstrap / controller 構成をより共通化する、あるいは shared module へ寄せる。

#### Pros

- 見た目の一貫性は上がる
- 将来的な shared 化の入口になる

#### Cons

- 今回の lane には広すぎる
- `apps/www` や `packages/**` を巻き込みやすい
- cleanup というより structure migration に近づく

#### Assessment

今回は不採用。必要なら follow-up lane として切り出すべき。

## Chosen approach

今回は **Option B** を採用する。

### Core approach

1. `apps/tutorial/package.json` に `@hotwired/stimulus` を明示追加する
2. `apps/tutorial/src/controllers/application.js` に tutorial 用 Stimulus `Application.start()` を置く
3. `apps/tutorial/src/controllers/sidebar_controller.js` に current inline sidebar behavior を移す
4. `apps/tutorial/src/controllers/index.js` で `sidebar` controller を登録する
5. `apps/tutorial/src/application.js` を tutorial bundle の真の entry とし、`@qni/elements` に加えて tutorial controllers を読み込む
6. `apps/tutorial/_layouts/default.html` から
   - `unpkg` Stimulus import
   - inline `Application.start()`
   - inline `Stimulus.register('sidebar', ...)`
     を削除する
7. `pnpm --dir apps/tutorial build` / `build:site` により、`apps/tutorial/**` と `html/**` の generated outputs を最終状態へ揃える

### Dependency boundary policy

今回の dependency policy は **tutorial が使うものは tutorial が宣言する** で固定する。

したがって `@hotwired/stimulus` は

- root や hoist 任せにせず
- `apps/tutorial/package.json` に **明示依存**として置く

この方針により、tutorial 単体の build / maintenance / future cleanup の読みやすさを保つ。

## Architecture / behavior impact

### What stays the same

- `apps/tutorial/_layouts/page.html` の `data-controller="sidebar"`
- `data-action="click->sidebar#open"` / `click->sidebar#close"`
- `data-sidebar-target="menu"` / `body`
- sidebar の open / close UX
- `sessionStorage` による scroll 保存 / 復元
- `./application.js` を module script として読む layout contract
- tutorial の見た目、ナビゲーション、ページ本文構造
- `@qni/elements` を使う tutorial runtime

### What changes

- Stimulus bootstrap の source of truth が `default.html` inline script から `apps/tutorial/src/**` へ移る
- tutorial HTML から `unpkg` の executable import が消える
- `apps/tutorial/package.json` に tutorial 自身の Stimulus 依存が追加される
- generated `html/*.html` から inline Stimulus bootstrap が消え、runtime behavior は built `application.js` 側が担う

### Runtime contract after this lane

この lane 完了後、tutorial の sidebar behavior は

- HTML 側が `data-controller` / `data-action` / `data-target` を持ち
- JS 側が **bundle 管理の Stimulus controller** としてそれを解釈する

という、通常の Stimulus app に近い責務分離になる。

## Files likely to change

Primary source scope:

- `apps/tutorial/package.json`
- `apps/tutorial/src/application.js`
- `apps/tutorial/src/controllers/application.js`（新規）
- `apps/tutorial/src/controllers/index.js`（新規）
- `apps/tutorial/src/controllers/sidebar_controller.js`（新規）
- `apps/tutorial/_layouts/default.html`

Generated / built scope:

- `apps/tutorial/application.js`
- `apps/tutorial/application.js.map`
- `html/application.js`
- `html/application.js.map`
- `html/src/application.js`
- `html/**/*.html` のうち `default.html` を使う generated pages
- lockfile（`pnpm-lock.yaml`）

Files expected to remain unchanged:

- `apps/tutorial/_layouts/page.html`
- `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
- `apps/tutorial/src/serviceworker.js`
- `apps/www/**`
- `packages/**`
- `docs/tech-stack.md`

### Scope guard

今回の実コード差分は **`apps/tutorial/**`に閉じる** のが原則で、repo 直下で許容するのは dependency resolution に伴う`pnpm-lock.yaml`と generated`html/\*\*` だけである。

また `html/**` は **手編集しない**。`build:site` の generated diff のみを許容する。

## Test / verification design

### Required automated checks

1. `pnpm --dir apps/tutorial build`
2. `pnpm --dir apps/tutorial build:site`
3. `git diff --check`

### Source / generated invariants

少なくとも次を確認する。

- `apps/tutorial/_layouts/default.html` に
  - `https://unpkg.com/@hotwired/stimulus/...`
  - inline `Application.start()`
  - inline `Stimulus.register('sidebar', ...)`
    が残っていないこと
- `apps/tutorial/package.json` に `@hotwired/stimulus` が明示追加されていること
- `apps/tutorial/application.js` に tutorial 用 Stimulus bootstrap / sidebar controller 登録が反映されていること
- `html/application.js` と `html/src/application.js` も同じ source-of-truth に追従していること
- generated `html/*.html` から `unpkg` Stimulus import と inline bootstrap が消えていること
- 一方で `data-controller="sidebar"`, `data-sidebar-target`, `click->sidebar#open|close` は generated HTML に残っていること

### Focused local browser smoke

ユーザー承認済みの verification B として、tutorial の representative page をローカルで開き、sidebar に対して focused smoke を行う。

確認項目は次の 3 つに絞る。

1. mobile sidebar が **open** できる
2. mobile sidebar が **close** できる
3. sidebar scroll が保存され、再表示時に **復元**される

今回の lane は CDN cleanup なので、複数ページの exhaustive browser test までは広げず、**sidebar contract が壊れていないことを focused smoke で押さえる**。

## Risks and mitigations

### Risk: inline script removal で sidebar が silently 壊れる

Stimulus bootstrap を template から source bundle へ移すため、build は通っても browser runtime で controller 未登録になる可能性がある。

**Mitigation:** generated JS と generated HTML の両方を grep / read で確認し、focused local smoke で open / close / scroll restoration まで押さえる。

### Risk: `window.Stimulus` 前提の hidden dependency がある

もし tutorial 内のどこかが global `window.Stimulus` を暗黙利用していると、inline script removal で壊れる可能性がある。

**Mitigation:** repo scan 上は `window.Stimulus` 利用は current inline bootstrap に閉じている。spec 実行時も source / generated grep で再確認する。

### Risk: generated output drift

tutorial は source だけでなく built JS と `html/` 出力も commit しているため、source 変更だけでは不十分である。

**Mitigation:** `build` と `build:site` を正式手順として両方実行し、generated outputs を final state に揃える。

### Risk: cleanup が外部 script 全般の見直しへ広がる

Stimulus CDN cleanup を始めると、MathJax / Orbit / Plausible まで一緒に触りたくなる可能性がある。

**Mitigation:** 今回は Stimulus だけに限定し、他 external script は明示的に out-of-scope とする。

## Implementation sequence

1. **RED-ish baseline confirmation**
   - current source / generated outputs に `unpkg` Stimulus import と inline bootstrap が存在することを確認する
2. **Dependency declaration**
   - `apps/tutorial/package.json` に `@hotwired/stimulus` を追加し、lockfile を更新する
3. **Source-side migration**
   - tutorial 用 Stimulus bootstrap / controller files を `src/controllers/**` に追加する
   - `src/application.js` からそれらを読む
4. **Template cleanup**
   - `default.html` から `unpkg` import と inline bootstrap を削除する
5. **Generated output refresh**
   - `pnpm --dir apps/tutorial build`
   - `pnpm --dir apps/tutorial build:site`
6. **Verification**
   - source / generated invariants を確認する
   - focused local sidebar smoke を行う
   - `git diff --check` を通す

## Success criteria

この lane は次を満たせば成功とする。

- tutorial の Stimulus が **public CDN ではなく repo 管理の bundle** で動いている
- `apps/tutorial/package.json` が Stimulus 依存を明示している
- `sidebar` の runtime behavior（open / close / scroll restoration）が維持されている
- generated `apps/tutorial/**` と `html/**` が source-of-truth に追従している
- cleanup が `apps/tutorial` 外へ広がっていない
