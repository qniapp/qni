# apps/tutorial Stimulus CDN cleanup Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `apps/tutorial` の Stimulus を public CDN + inline bootstrap 依存から外し、`apps/tutorial/src/**` で source-manage しつつ、sidebar の open / close / scroll restoration を壊さずに generated outputs (`apps/tutorial/**`, `html/**`) を揃える。

**Architecture:** current local `main` を基点に dedicated worktree を切り、まず `default.html` と generated `html/*.html` に `unpkg` import / inline Stimulus bootstrap が残っている現状を baseline として固定する。その後 `apps/tutorial/package.json` に `@hotwired/stimulus` を明示追加し、tutorial-local な `src/controllers/**` を新設して sidebar controller と Stimulus 起動を bundle 側へ移す。最後に `apps/tutorial/_layouts/default.html` から CDN / inline bootstrap を削除し、`build` と `build:site` で built JS / generated HTML / source mirrors を再生成して、focused local browser smoke・reviewer・merge / push / CI / cleanup まで通す。

**Tech Stack:** Jekyll 4.4.1, Ruby 4.0.2, Bundler 4.0.10, Node.js 20.20.2, pnpm 10.33.0, esbuild, Stimulus 3.x, GitHub Pages Actions

---

## File Structure

### Files likely to change

- `apps/tutorial/package.json`: tutorial 側の `@hotwired/stimulus` 明示依存を追加する
- `pnpm-lock.yaml`: workspace lockfile を更新する
- `apps/tutorial/src/application.js`: tutorial bundle entry から controllers bootstrap を読む
- `apps/tutorial/src/controllers/application.js`: tutorial 用 Stimulus application を新設する
- `apps/tutorial/src/controllers/index.js`: tutorial 用 controller 登録を新設する
- `apps/tutorial/src/controllers/sidebar_controller.js`: inline sidebar behavior を source-managed controller へ移す
- `apps/tutorial/_layouts/default.html`: `unpkg` import と inline Stimulus bootstrap を削除する
- `apps/tutorial/application.js`: tutorial-local built JS を再生成する
- `apps/tutorial/application.js.map`: tutorial-local source map を再生成する
- `html/application.js`: Pages output built JS を再生成する
- `html/application.js.map`: Pages output source map を再生成する
- `html/src/application.js`: generated source mirror を再生成する
- `html/src/controllers/application.js`: generated source mirror として新規追加される
- `html/src/controllers/index.js`: generated source mirror として新規追加される
- `html/src/controllers/sidebar_controller.js`: generated source mirror として新規追加される
- `html/*.html`: `default.html` を使う generated tutorial pages から `unpkg` import / inline bootstrap が消える

### Files to inspect/reference only

- `docs/superpowers/specs/2026-04-19-apps-tutorial-stimulus-cdn-cleanup-design.md`
- `apps/tutorial/_layouts/page.html`
- `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
- `apps/tutorial/_includes/static_sidebar_for_desktop.html`
- `apps/tutorial/src/serviceworker.js`
- `apps/tutorial/serviceworker.js`
- `html/serviceworker.js`
- `html/src/serviceworker.js`
- `scripts/check-pages-config.mjs`

### Scope guard

今回の implementation diff で変更してよい path は原則として次のみ。

- `apps/tutorial/package.json`
- `pnpm-lock.yaml`
- `apps/tutorial/src/application.js`
- `apps/tutorial/src/controllers/**`
- `apps/tutorial/_layouts/default.html`
- `apps/tutorial/application.js`
- `apps/tutorial/application.js.map`
- `html/application.js`
- `html/application.js.map`
- `html/src/application.js`
- `html/src/controllers/**`
- `html/*.html`

今回の lane では変更しない。

- `apps/www/**`
- `packages/**`
- `docs/tech-stack.md`
- `apps/tutorial/_layouts/page.html`
- `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
- `apps/tutorial/_includes/static_sidebar_for_desktop.html`
- `apps/tutorial/src/serviceworker.js`
- `apps/tutorial/serviceworker.js`
- `apps/tutorial/serviceworker.js.map`
- `html/serviceworker.js`
- `html/serviceworker.js.map`
- `html/src/serviceworker.js`
- `MathJax` / `Orbit` / `Plausible` の external script
- repo-level workflow / script files（`scripts/check-pages-config.mjs` は verification で参照のみ）

`html/**` への手編集は行わない。`pnpm --dir apps/tutorial build:site` による generated diff のみを許容する。

---

### Task 1: dedicated worktree と baseline を固定する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-19-apps-tutorial-stimulus-cdn-cleanup-design.md`
- Reference: `apps/tutorial/package.json`
- Reference: `apps/tutorial/src/application.js`
- Reference: `apps/tutorial/_layouts/default.html`
- Reference: `apps/tutorial/_layouts/page.html`
- Reference: `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
- Reference: `apps/tutorial/_includes/static_sidebar_for_desktop.html`
- Reference: `scripts/check-pages-config.mjs`

- [ ] **Step 1: current local `main` から dedicated worktree を作成する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git switch main
git status --short --branch
BASE_SHA=$(git rev-parse main)
echo "$BASE_SHA" >/tmp/qni-tutorial-stimulus-base-sha
git worktree add -b feat/tutorial-stimulus-cdn-cleanup .worktrees/tutorial-stimulus-cdn-cleanup main
```

Expected: `.worktrees/tutorial-stimulus-cdn-cleanup` が current local `main` を base に作成され、以後の diff / reviewer target 用に base SHA も `/tmp/qni-tutorial-stimulus-base-sha` に固定される。

- [ ] **Step 2: worktree で toolchain と依存を揃える**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
mise trust . >/dev/null 2>&1 || true
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm install --frozen-lockfile'
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup/apps/tutorial
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: root pnpm deps と `apps/tutorial` の Ruby deps が worktree 上で current main と同条件に揃う。

- [ ] **Step 3: current unwanted state を観測する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
rg -n 'https://unpkg.com/@hotwired/stimulus' apps/tutorial/_layouts/default.html html/*.html
rg -n 'window\.Stimulus = Application\.start\(\)|Stimulus\.register\(' apps/tutorial/_layouts/default.html html/*.html
rg -n 'data-controller="sidebar"|click->sidebar#open|click->sidebar#close|data-sidebar-target="menu"|data-sidebar-target="body"|data-sidebar-target="bodyMd"' apps/tutorial/_layouts/page.html apps/tutorial/_includes/off_canvas_menu_for_mobile.html apps/tutorial/_includes/static_sidebar_for_desktop.html
test ! -e apps/tutorial/src/controllers/application.js
test ! -e apps/tutorial/src/controllers/index.js
test ! -e apps/tutorial/src/controllers/sidebar_controller.js
if rg -n '"@hotwired/stimulus"' apps/tutorial/package.json; then
  echo 'unexpected existing tutorial Stimulus dependency declaration'
  exit 1
fi
```

Expected:

- `default.html` と generated `html/*.html` に `unpkg` import と inline bootstrap がある
- source markup 側では `sidebar` controller contract がすでに存在する
- `src/controllers/**` はまだ存在しない
- `apps/tutorial/package.json` にはまだ `@hotwired/stimulus` が無い

- [ ] **Step 4: baseline build が通ることを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build'
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build:site'
node scripts/check-pages-config.mjs
```

Expected: baseline の tutorial build / build:site / Pages config check は PASS。現状は buildable だが CDN + inline bootstrap が残っている。

- [ ] **Step 5: baseline task は commit しない**

この task は観測のみ。commit しない。

### Task 2: Stimulus bootstrap を source-managed に移し、tutorial-local build を更新する

**Files:**

- Modify: `apps/tutorial/package.json`
- Modify: `pnpm-lock.yaml`
- Modify: `apps/tutorial/src/application.js`
- Create: `apps/tutorial/src/controllers/application.js`
- Create: `apps/tutorial/src/controllers/index.js`
- Create: `apps/tutorial/src/controllers/sidebar_controller.js`
- Modify: `apps/tutorial/_layouts/default.html`
- Modify: `apps/tutorial/application.js`
- Modify: `apps/tutorial/application.js.map`

- [ ] **Step 1: RED を source/content check で固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
rg -n 'https://unpkg.com/@hotwired/stimulus' apps/tutorial/_layouts/default.html
rg -n 'window\.Stimulus = Application\.start\(\)|Stimulus\.register\(' apps/tutorial/_layouts/default.html
if test -e apps/tutorial/src/controllers/sidebar_controller.js; then
  echo 'unexpected pre-existing sidebar controller source file'
  exit 1
fi
```

Expected: matches が見つかる。これが今回 source-managed bundle へ移したい current unwanted state の RED。

- [ ] **Step 2: `apps/tutorial/package.json` に `@hotwired/stimulus` を明示追加する**

Update the dependency block to include:

```json
"dependencies": {
  "@hotwired/stimulus": "^3.0.1",
  "@qni/common": "^0.0.87",
  "@qni/elements": "^0.0.87",
  "@qni/simulator": "^0.0.87"
}
```

- [ ] **Step 3: tutorial 用 Stimulus application file を作る**

Create `apps/tutorial/src/controllers/application.js` with this content:

```js
import { Application } from '@hotwired/stimulus'

const application = Application.start()
window.Stimulus = application

export { application }
```

- [ ] **Step 4: tutorial 用 sidebar controller を作る**

Create `apps/tutorial/src/controllers/sidebar_controller.js` with this content:

```js
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['menu', 'body', 'bodyMd']

  connect() {
    this.beforeUnloadHandler = this.saveScrollPositions.bind(this)

    const bodyMdScroll = sessionStorage.getItem('sidebar-md-scroll')
    if (bodyMdScroll !== null) {
      this.bodyMdTarget.scrollTop = parseInt(bodyMdScroll, 10)
    }

    window.addEventListener('beforeunload', this.beforeUnloadHandler)
  }

  disconnect() {
    window.removeEventListener('beforeunload', this.beforeUnloadHandler)
  }

  open() {
    this.menuTarget.classList.remove('hidden')

    const sidebarScroll = sessionStorage.getItem('sidebar-scroll')
    if (sidebarScroll !== null) {
      this.bodyTarget.scrollTop = parseInt(sidebarScroll, 10)
    }
  }

  close() {
    this.menuTarget.classList.add('hidden')
  }

  saveScrollPositions() {
    sessionStorage.setItem('sidebar-scroll', this.bodyTarget.scrollTop)
    sessionStorage.setItem('sidebar-md-scroll', this.bodyMdTarget.scrollTop)
  }
}
```

- [ ] **Step 5: tutorial 用 controller registration file を作る**

Create `apps/tutorial/src/controllers/index.js` with this content:

```js
import { application } from './application.js'
import SidebarController from './sidebar_controller.js'

application.register('sidebar', SidebarController)
```

- [ ] **Step 6: tutorial bundle entry を更新する**

Update `apps/tutorial/src/application.js` to this final form:

```js
export { Complex } from '@qni/elements'

import '@qni/elements'
import './controllers/index.js'
```

- [ ] **Step 7: `default.html` から CDN import と inline bootstrap を削除する**

`apps/tutorial/_layouts/default.html` では、次の inline block 全体を削除する。

```html
<script type="module">
  import { Application, Controller } from 'https://unpkg.com/@hotwired/stimulus/dist/stimulus.js'
  window.Stimulus = Application.start()

  Stimulus.register(
    'sidebar',
    class extends Controller {
      static targets = ['menu', 'body', 'bodyMd']

      connect() {
        let bodyMdScroll = sessionStorage.getItem('sidebar-md-scroll')
        if (bodyMdScroll !== null) {
          this.bodyMdTarget.scrollTop = parseInt(bodyMdScroll, 10)
        }

        window.addEventListener('beforeunload', () => {
          sessionStorage.setItem('sidebar-scroll', this.bodyTarget.scrollTop)
          sessionStorage.setItem('sidebar-md-scroll', this.bodyMdTarget.scrollTop)
        })
      }

      open() {
        this.menuTarget.classList.remove('hidden')

        let sidebarScroll = sessionStorage.getItem('sidebar-scroll')
        if (sidebarScroll !== null) {
          this.bodyTarget.scrollTop = parseInt(sidebarScroll, 10)
        }
      }

      close() {
        this.menuTarget.classList.add('hidden')
      }
    }
  )
</script>
```

`<script type="module" src="./application.js" defer></script>` はそのまま残す。`MathJax` / `Orbit` / `Plausible` には触れない。

- [ ] **Step 8: workspace lockfile と node_modules を更新する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm install'
```

Expected: `pnpm-lock.yaml` が更新され、worktree 上の tutorial build で `@hotwired/stimulus` がローカル依存として解決できる。

- [ ] **Step 9: tutorial-local build を再生成する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build'
```

Expected: `apps/tutorial/application.js` と `apps/tutorial/application.js.map` が新しい source-of-truth に追従して再生成される。

- [ ] **Step 10: source / tutorial-local build の GREEN を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
if rg -n 'https://unpkg.com/@hotwired/stimulus|window\.Stimulus = Application\.start\(\)|Stimulus\.register\(' apps/tutorial/_layouts/default.html; then
  echo 'unexpected CDN/inline Stimulus bootstrap remains in default layout'
  exit 1
fi
rg -n '"@hotwired/stimulus"' apps/tutorial/package.json
rg -n 'window\.Stimulus|application\.register\(.sidebar.|sidebar-md-scroll|sidebar-scroll' apps/tutorial/src/controllers/application.js apps/tutorial/src/controllers/index.js apps/tutorial/src/controllers/sidebar_controller.js apps/tutorial/application.js
rg -n 'import .\/controllers\/index\.js' apps/tutorial/src/application.js
```

Expected:

- `default.html` から CDN / inline bootstrap が消えている
- tutorial package に Stimulus 依存がある
- source files と built `apps/tutorial/application.js` に sidebar bootstrap が載っている
- bundle entry は controller index を読む

- [ ] **Step 11: source-side cleanup を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
git add apps/tutorial/package.json pnpm-lock.yaml apps/tutorial/src/application.js apps/tutorial/src/controllers/application.js apps/tutorial/src/controllers/index.js apps/tutorial/src/controllers/sidebar_controller.js apps/tutorial/_layouts/default.html apps/tutorial/application.js apps/tutorial/application.js.map
git commit -m "refactor: source-manage tutorial stimulus bootstrap"
```

### Task 3: `build:site` で generated Pages output を更新し、HTML / source mirror を固定する

**Files:**

- Modify: `html/application.js`
- Modify: `html/application.js.map`
- Modify: `html/src/application.js`
- Create: `html/src/controllers/application.js`
- Create: `html/src/controllers/index.js`
- Create: `html/src/controllers/sidebar_controller.js`
- Modify: `html/*.html`
- Reference: `html/serviceworker.js`
- Reference: `html/src/serviceworker.js`

- [ ] **Step 1: Pages output を再生成する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build:site'
```

Expected: `html/application.js*`, `html/src/**`, `html/*.html` が current tutorial source に追従して再生成される。

- [ ] **Step 2: generated HTML から CDN / inline bootstrap が消えたことを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
if rg -n 'https://unpkg.com/@hotwired/stimulus|window\.Stimulus = Application\.start\(\)|Stimulus\.register\(' html/*.html; then
  echo 'unexpected CDN/inline Stimulus bootstrap remains in generated HTML'
  exit 1
fi
```

Expected: generated tutorial HTML から `unpkg` import と inline Stimulus bootstrap が消えている。

- [ ] **Step 3: generated HTML に sidebar contract が残っていることを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
rg -n -m 10 'data-controller="sidebar"|click->sidebar#open|click->sidebar#close|data-sidebar-target="menu"|data-sidebar-target="body"|data-sidebar-target="bodyMd"' html/*.html
```

Expected: representative generated pages に `sidebar` controller contract が残っている。

- [ ] **Step 4: generated built JS / source mirror に sidebar bootstrap が入ったことを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
test -e html/src/controllers/application.js
test -e html/src/controllers/index.js
test -e html/src/controllers/sidebar_controller.js
rg -n 'sidebar-md-scroll|sidebar-scroll' html/application.js html/src/controllers/sidebar_controller.js
rg -n 'import .\/controllers\/index\.js' html/src/application.js
```

Expected:

- generated source mirror に controller files が追加されている
- built `html/application.js` と `html/src/controllers/sidebar_controller.js` に scroll-restore logic が反映されている
- source mirror の `html/src/application.js` は controller index を読む

- [ ] **Step 5: unrelated worker artifacts が無傷であることを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
test -e html/serviceworker.js && test -e html/src/serviceworker.js
SERVICEWORKER_DIFF=$(
  {
    git diff --name-only -- html/serviceworker.js html/serviceworker.js.map html/src/serviceworker.js apps/tutorial/src/serviceworker.js apps/tutorial/serviceworker.js apps/tutorial/serviceworker.js.map
    git diff --cached --name-only -- html/serviceworker.js html/serviceworker.js.map html/src/serviceworker.js apps/tutorial/src/serviceworker.js apps/tutorial/serviceworker.js apps/tutorial/serviceworker.js.map
  } | sort -u | sed '/^$/d'
)
if [ -n "$SERVICEWORKER_DIFF" ]; then
  echo 'unexpected serviceworker artifact drift:'
  printf '%s\n' "$SERVICEWORKER_DIFF"
  exit 1
fi
```

Expected: serviceworker 関連 artifacts は存在し、forbidden diff は空である。

- [ ] **Step 6: generated-output refresh を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
git add html/application.js html/application.js.map html/src/application.js html/src/controllers/application.js html/src/controllers/index.js html/src/controllers/sidebar_controller.js html/*.html
git commit -m "build: regenerate tutorial stimulus cleanup outputs"
```

### Task 4: focused verification・review・integration・push・cleanup を完了する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-19-apps-tutorial-stimulus-cdn-cleanup-design.md`
- Reference: `docs/superpowers/plans/2026-04-19-apps-tutorial-stimulus-cdn-cleanup.md`

- [ ] **Step 1: focused automated verification を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build'
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build:site'
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial lint'
node scripts/check-pages-config.mjs
git diff --check
```

Expected: all PASS。

- [ ] **Step 2: focused local browser smoke を実行する**

Run server:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
python3 -m http.server 4010 --directory html >/tmp/qni-tutorial-stimulus-smoke.log 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" >/dev/null 2>&1 || true' EXIT
for _ in $(seq 1 20); do
  curl -fsS http://127.0.0.1:4010/h_gate.html >/dev/null 2>&1 && break
  sleep 1
done
```

Manual smoke in a local browser:

1. Open `http://127.0.0.1:4010/h_gate.html`
2. Narrow the viewport (or use device emulation) so the hamburger button is visible
3. Click the hamburger button and confirm the mobile sidebar opens
4. Click the close button and confirm the sidebar closes
5. Re-open the sidebar, scroll the navigation list downward, then refresh the page
6. Open the sidebar again and confirm the mobile scroll position is restored
7. Widen to desktop width, scroll the fixed desktop sidebar, refresh, and confirm desktop scroll restoration still works

Expected: open / close / mobile scroll restore / desktop scroll restore all still work.

- [ ] **Step 3: final diff scope を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-stimulus-cdn-cleanup
python - <<'PY'
import pathlib, subprocess, sys
base_sha = pathlib.Path('/tmp/qni-tutorial-stimulus-base-sha').read_text().strip()
changed = set(filter(None, subprocess.check_output(['git', 'diff', '--name-only', f'{base_sha}..HEAD'], text=True).splitlines()))
allowed_exact = {
    'apps/tutorial/package.json',
    'pnpm-lock.yaml',
    'apps/tutorial/src/application.js',
    'apps/tutorial/_layouts/default.html',
    'apps/tutorial/application.js',
    'apps/tutorial/application.js.map',
    'html/application.js',
    'html/application.js.map',
    'html/src/application.js',
}
allowed_prefixes = [
    'apps/tutorial/src/controllers/',
    'html/src/controllers/',
]
forbidden_exact = {
    'apps/tutorial/_layouts/page.html',
    'apps/tutorial/_includes/off_canvas_menu_for_mobile.html',
    'apps/tutorial/_includes/static_sidebar_for_desktop.html',
    'apps/tutorial/src/serviceworker.js',
    'apps/tutorial/serviceworker.js',
    'apps/tutorial/serviceworker.js.map',
    'html/serviceworker.js',
    'html/serviceworker.js.map',
    'html/src/serviceworker.js',
}
forbidden_prefixes = [
    'apps/www/',
    'packages/',
]
forbidden = sorted(
    path for path in changed
    if path in forbidden_exact or any(path.startswith(prefix) for prefix in forbidden_prefixes)
)
if forbidden:
    print('Forbidden changed files:')
    for path in forbidden:
        print(path)
    sys.exit(1)
extra = sorted(
    path for path in changed
    if path not in allowed_exact
    and not any(path.startswith(prefix) for prefix in allowed_prefixes)
    and not (path.startswith('html/') and path.endswith('.html') and '/' not in path[5:])
)
if extra:
    print('Unexpected changed files:')
    for path in extra:
        print(path)
    sys.exit(1)
print('Diff scope OK')
PY
```

Expected: diff は `apps/tutorial/**`, `html/**`, `pnpm-lock.yaml` に閉じる。

- [ ] **Step 4: reviewer で final diff をレビューする**

Run a single reviewer on the full implementation diff from the captured base SHA to `HEAD` using the spec + plan context. Target:

- spec: `docs/superpowers/specs/2026-04-19-apps-tutorial-stimulus-cdn-cleanup-design.md`
- plan: `docs/superpowers/plans/2026-04-19-apps-tutorial-stimulus-cdn-cleanup.md`
- diff: `$(cat /tmp/qni-tutorial-stimulus-base-sha)..HEAD`

Expected: APPROVED. If issues are found, fix them in the same worktree, re-run focused verification, and re-run reviewer before proceeding.

- [ ] **Step 5: local `main` へ fast-forward merge し、canonical path で再確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
git switch main
git merge --ff-only feat/tutorial-stimulus-cdn-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build'
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build:site'
node scripts/check-pages-config.mjs
git diff --check
```

Expected: merge は fast-forward で完了し、canonical path の verification も PASS。

- [ ] **Step 6: `origin/main` へ push し、GitHub Actions を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
git push origin main
HEAD_SHA=$(git rev-parse HEAD)
for workflow in "CI" "Deploy Pages" "CodeQL"; do
  run_id=""
  for _ in $(seq 1 30); do
    run_id=$(gh run list --limit 30 --json databaseId,workflowName,headSha --branch main --jq ".[] | select(.headSha == \"${HEAD_SHA}\" and .workflowName == \"${workflow}\") | .databaseId" | head -n 1)
    if [ -n "$run_id" ]; then
      echo "$workflow $run_id"
      gh run watch "$run_id" --exit-status
      break
    fi
    sleep 5
  done
  if [ -z "$run_id" ]; then
    echo "missing GitHub Actions run for $workflow"
    exit 1
  fi
done
```

Expected: `CI`, `Deploy Pages`, `CodeQL` が target HEAD で green。

- [ ] **Step 7: branch / worktree cleanup を行う**

Run:

```bash
cd /home/yasuhito/Work/qni
git worktree remove .worktrees/tutorial-stimulus-cdn-cleanup
git branch -d feat/tutorial-stimulus-cdn-cleanup
git rev-list --left-right --count origin/main...HEAD
git status --short --branch
```

Expected:

- worktree / branch が削除される
- divergence は `0 0`
- `## main...origin/main` の clean state に戻る
