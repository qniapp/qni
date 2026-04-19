# apps/tutorial service worker registration cleanup Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `apps/tutorial` から misleading な Service Worker registration だけを保守的に撤去し、`/serviceworker.js` の simulator worker 契約と `data-service-worker="/serviceworker.js"` 互換を維持したまま tutorial runtime を current implementation に揃える。

**Architecture:** current local `main` を基点に dedicated worktree を切り、まず current unwanted behavior を content-grep ベースの RED で固定する。その後 `apps/tutorial/src/application.js` から companion import を外し、`apps/tutorial/src/serviceworker-companion.js` を削除して tutorial-local build を更新する。最後に `build:site` で `html/` mirror を再生成し、`html/application.js*` と `html/src/application.js` から registration を消しつつ `serviceworker.js` artifacts と generated HTML の contract が無傷であることを確認し、review 済みの実装を merge/push ready な状態まで仕上げる。

**Tech Stack:** Jekyll 4.4.1, Ruby 4.0.2, Bundler 4.0.10, Node.js 20.20.2, pnpm 10.33.0, esbuild, GitHub Pages Actions

---

## File Structure

### Files likely to change

- `apps/tutorial/src/application.js`: `serviceworker-companion` import を削除する
- `apps/tutorial/src/serviceworker-companion.js`: 削除する
- `apps/tutorial/application.js`: tutorial-local bundle を再生成する
- `apps/tutorial/application.js.map`: tutorial-local source map を再生成する
- `html/application.js`: Pages output の built bundle を再生成する
- `html/application.js.map`: Pages output の built source map を再生成する
- `html/src/application.js`: generated source mirror を再生成する
- `html/src/serviceworker-companion.js`: generated source mirror から削除される

### Files to inspect/reference only

- `docs/superpowers/specs/2026-04-19-apps-tutorial-serviceworker-registration-cleanup-design.md`
- `apps/tutorial/package.json`
- `apps/tutorial/src/serviceworker.js`
- `apps/tutorial/serviceworker.js`
- `apps/tutorial/serviceworker.js.map`
- `apps/tutorial/_plugins/mini_qni_filter.rb`
- `packages/elements/src/quantum-simulator-element.ts`
- `.github/workflows/pages.yml`
- `scripts/check-pages-config.mjs`
- `html/serviceworker.js`
- `html/serviceworker.js.map`
- `html/src/serviceworker.js`

### Scope guard

今回の implementation diff で変更してよい path は原則として次のみ。

- `apps/tutorial/src/application.js`
- `apps/tutorial/src/serviceworker-companion.js`（削除）
- `apps/tutorial/application.js`
- `apps/tutorial/application.js.map`
- `html/application.js`
- `html/application.js.map`
- `html/src/application.js`
- `html/src/serviceworker-companion.js`（削除）

今回の lane では変更しない。

- `packages/**`
- `apps/www/**`
- `apps/www/docs/**`
- `apps/tutorial/src/serviceworker.js`
- `apps/tutorial/serviceworker.js`
- `apps/tutorial/serviceworker.js.map`
- `html/serviceworker.js`
- `html/serviceworker.js.map`
- `html/src/serviceworker.js`
- repo-level workflow / script files

`html/**` への手編集は行わない。`build:site` による generated diff だけを許容する。

---

### Task 1: dedicated worktree と baseline を固定する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-19-apps-tutorial-serviceworker-registration-cleanup-design.md`
- Reference: `apps/tutorial/package.json`
- Reference: `apps/tutorial/src/application.js`
- Reference: `apps/tutorial/src/serviceworker-companion.js`
- Reference: `apps/tutorial/_plugins/mini_qni_filter.rb`
- Reference: `packages/elements/src/quantum-simulator-element.ts`
- Reference: `scripts/check-pages-config.mjs`

- [ ] **Step 1: dedicated worktree を current local `main` から作成する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git rev-parse --abbrev-ref HEAD
git worktree add -b feat/tutorial-worker-registration-cleanup .worktrees/tutorial-worker-registration-cleanup HEAD
```

Expected: spec / plan commit を含む current local `main` を基点に `.worktrees/tutorial-worker-registration-cleanup` が作成される。comparison base としての `origin/main` は以後の review / integration 判断に使う。

- [ ] **Step 2: worktree で toolchain と依存を揃える**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
mise trust . >/dev/null 2>&1 || true
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm install --frozen-lockfile'
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup/apps/tutorial
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: worktree 上で root pnpm deps と `apps/tutorial` の Ruby deps が current main と同条件で揃う。

- [ ] **Step 3: current unwanted state を観測する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
rg -n "serviceworker-companion" apps/tutorial/src/application.js html/src/application.js
rg -n "navigator\.serviceWorker\.register" apps/tutorial/src/serviceworker-companion.js apps/tutorial/application.js html/application.js html/src/serviceworker-companion.js
rg -n "new Worker\('./serviceworker\.js'\)" packages/elements/src/quantum-simulator-element.ts
rg -n 'data-service-worker="/serviceworker\.js"' apps/tutorial/_plugins/mini_qni_filter.rb
```

Expected: current main では source / built output / generated mirror に registration が残っており、worker contract と `data-service-worker` 互換も存在することを確認できる。

- [ ] **Step 4: baseline build を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build'
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build:site'
node scripts/check-pages-config.mjs
```

Expected: baseline は PASS。現在の tutorial lane は build 可能である。

- [ ] **Step 5: baseline task は commit しない**

この task は観測のみ。commit しない。

### Task 2: source-side registration plumbing を削除して tutorial-local build を更新する

**Files:**

- Modify: `apps/tutorial/src/application.js`
- Delete: `apps/tutorial/src/serviceworker-companion.js`
- Modify: `apps/tutorial/application.js`
- Modify: `apps/tutorial/application.js.map`
- Reference: `apps/tutorial/src/serviceworker.js`
- Reference: `packages/elements/src/quantum-simulator-element.ts`
- Reference: `apps/tutorial/_plugins/mini_qni_filter.rb`

- [ ] **Step 1: RED を content check で固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
rg -n "serviceworker-companion" apps/tutorial/src/application.js
rg -n "navigator\.serviceWorker\.register" apps/tutorial/src/serviceworker-companion.js apps/tutorial/application.js
```

Expected: matches が見つかる。これが今回消したい current unwanted behavior の RED。

- [ ] **Step 2: `apps/tutorial/src/application.js` から companion import を削除する**

最終形:

```js
export { Complex } from '@qni/elements'

import '@qni/elements'
```

- [ ] **Step 3: `apps/tutorial/src/serviceworker-companion.js` を削除する**

ファイル全体を削除する。registration logic はどこにも移さない。

- [ ] **Step 4: tutorial-local build を再生成する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build'
```

Expected: `apps/tutorial/application.js` と `apps/tutorial/application.js.map` が新しい source に追従して再生成される。

- [ ] **Step 5: source / tutorial-local built outputs を GREEN で確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
test ! -e apps/tutorial/src/serviceworker-companion.js
if rg -n "serviceworker-companion" apps/tutorial/src/application.js; then
  echo 'unexpected companion import remains in source'
  exit 1
fi
if rg -n "serviceworker-companion|navigator\.serviceWorker\.register" apps/tutorial/application.js apps/tutorial/application.js.map; then
  echo 'unexpected registration code remains in tutorial-local built outputs'
  exit 1
fi
rg -n "new Worker\('./serviceworker\.js'\)" packages/elements/src/quantum-simulator-element.ts
rg -n 'data-service-worker="/serviceworker\.js"' apps/tutorial/_plugins/mini_qni_filter.rb
```

Expected: companion source は削除済みで、source と tutorial-local built outputs から registration が消えている。一方で worker contract と `data-service-worker` 互換は維持される。

- [ ] **Step 6: serviceworker artifacts に差分を出していないことを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
test -e apps/tutorial/serviceworker.js
git diff --name-only -- apps/tutorial/serviceworker.js apps/tutorial/serviceworker.js.map
```

Expected: `apps/tutorial/serviceworker.js` は存在し、diff は空。

- [ ] **Step 7: source-side cleanup を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
git add apps/tutorial/src/application.js apps/tutorial/src/serviceworker-companion.js apps/tutorial/application.js apps/tutorial/application.js.map
git commit -m "refactor: remove tutorial worker registration"
```

### Task 3: Pages output / generated source mirror を再生成して final state を固定する

**Files:**

- Modify: `html/application.js`
- Modify: `html/application.js.map`
- Modify: `html/src/application.js`
- Delete: `html/src/serviceworker-companion.js`
- Reference: `html/serviceworker.js`
- Reference: `html/serviceworker.js.map`
- Reference: `html/src/serviceworker.js`
- Reference: `scripts/check-pages-config.mjs`

- [ ] **Step 1: `build:site` を実行して Pages output を再生成する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build:site'
```

Expected: `html/application.js*` と `html/src/application.js` が current source に追従し、`html/src/serviceworker-companion.js` は消える。

- [ ] **Step 2: generated output から registration が消えたことを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
if rg -n "serviceworker-companion|navigator\.serviceWorker\.register" html/application.js html/application.js.map html/src/application.js; then
  echo 'unexpected registration code remains in generated outputs'
  exit 1
fi
test ! -e html/src/serviceworker-companion.js
```

Expected: generated built output / source map / generated source mirror から registration が消え、mirror 側 companion file も削除されている。

- [ ] **Step 3: generated HTML の contract が維持されていることを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
rg -n -m 5 'data-service-worker="/serviceworker\.js"' html/*.html
```

Expected: generated tutorial HTML に `data-service-worker="/serviceworker.js"` が引き続き残る。

- [ ] **Step 4: generated serviceworker artifacts が無傷であることを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
test -e html/serviceworker.js && test -e html/src/serviceworker.js
git diff --name-only -- html/serviceworker.js html/serviceworker.js.map html/src/serviceworker.js
```

Expected: `html/serviceworker.js` / `html/src/serviceworker.js` は存在し、diff は空。

- [ ] **Step 5: Pages guard と diff scope を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
node scripts/check-pages-config.mjs
python - <<'PY'
import subprocess, sys
allowed = {
  'apps/tutorial/src/application.js',
  'apps/tutorial/src/serviceworker-companion.js',
  'apps/tutorial/application.js',
  'apps/tutorial/application.js.map',
  'html/application.js',
  'html/application.js.map',
  'html/src/application.js',
  'html/src/serviceworker-companion.js',
}
changed = set(filter(None, subprocess.check_output(['git', 'diff', '--name-only'], text=True).splitlines()))
extra = sorted(changed - allowed)
if extra:
    print('Unexpected changed files:')
    for path in extra:
        print(path)
    sys.exit(1)
print('Diff scope OK')
PY
```

Expected: `scripts/check-pages-config.mjs` は PASS し、repo-wide diff は allowed file set に閉じる。

- [ ] **Step 6: generated output 更新を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
git add html/application.js html/application.js.map html/src/application.js html/src/serviceworker-companion.js
git commit -m "build: regenerate tutorial worker cleanup outputs"
```

### Task 4: final verification と review で merge-ready な状態を完成させる

**Files:**

- Reference: `docs/superpowers/specs/2026-04-19-apps-tutorial-serviceworker-registration-cleanup-design.md`
- Reference: `docs/superpowers/plans/2026-04-19-apps-tutorial-serviceworker-registration-cleanup.md`

- [ ] **Step 1: canonical verification を worktree で再実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build'
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build:site'
node scripts/check-pages-config.mjs
if rg -n "serviceworker-companion|navigator\.serviceWorker\.register" apps/tutorial/application.js apps/tutorial/application.js.map html/application.js html/application.js.map html/src/application.js; then
  echo 'unexpected registration code remains during final verification'
  exit 1
fi
test ! -e apps/tutorial/src/serviceworker-companion.js
test ! -e html/src/serviceworker-companion.js
git diff --check
```

Expected: 全 PASS。registration は source / built output / mirror から消え、diff quality も clean。

- [ ] **Step 2: reviewer を回す**

Use the built-in `reviewer` subagent against the final implementation diff with context limited to:

- spec path: `docs/superpowers/specs/2026-04-19-apps-tutorial-serviceworker-registration-cleanup-design.md`
- plan path: `docs/superpowers/plans/2026-04-19-apps-tutorial-serviceworker-registration-cleanup.md`
- explicit scope: remove misleading registration only, keep `/serviceworker.js` worker contract, keep `data-service-worker="/serviceworker.js"` compatibility, no rename/rearchitecture, no `apps/www` expansion

Expected: APPROVED。Issues Found の場合は worktree 内で修正し、Step 1 の verification を再実行してから reviewer をやり直す。

- [ ] **Step 3: merge-ready handoff 情報を記録する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-worker-registration-cleanup
git status --short --branch
git log --oneline --decorate -2
```

Expected: branch `feat/tutorial-worker-registration-cleanup` が clean で、review 済み commit が揃っていることを確認できる。

- [ ] **Step 4: remote write を伴う integration は human approval 後に別手順で行う**

この plan の完了条件は **merge-ready / push-ready な implementation branch を作ること** までとする。`main` への fast-forward merge、`origin/main` への push、GitHub Actions 監視、worktree cleanup は human approval 後の integration procedure として別途実施する。
