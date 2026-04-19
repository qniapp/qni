# apps/tutorial MathJax CDN cleanup Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `apps/tutorial` の MathJax を public CDN 依存から外し、`apps/tutorial/vendor/mathjax/es5/**` を source of truth にしたまま、全 tutorial ページの current MathJax loading contract を維持しつつ generated outputs (`html/*.html`, `html/vendor/mathjax/es5/**`) を整合させる。

**Architecture:** current local `main` を基点に dedicated worktree を切り、まず source / generated HTML に CDN URL が残っている現状と `html/*.html` の flat output 前提を baseline として固定する。その後 `npm pack mathjax@3.2.2` の tarball から `package/es5/**` を `apps/tutorial/vendor/mathjax/es5/**` に vendor し、`apps/tutorial/_layouts/default.html` の MathJax script src だけを `./vendor/mathjax/es5/tex-mml-chtml.js` に置き換える。最後に `build:site` で `html/*.html` と `html/vendor/mathjax/es5/**` を再生成し、full-tree completeness・relative path safety・focused browser smoke・reviewer・merge / push / CI / cleanup まで通す。

**Tech Stack:** Jekyll 4.4.1, Ruby 4.0.2, Bundler 4.0.10, Node.js 20.20.2, npm / pnpm 10.33.0, MathJax 3.2.2 (`es5` self-hosted tree), GitHub Pages Actions

---

## File Structure

### Files likely to change

- `apps/tutorial/_layouts/default.html`: MathJax script src を CDN URL から local vendor path に置き換える
- `apps/tutorial/vendor/mathjax/es5/**`: `mathjax@3.2.2` tarball の `package/es5/**` を vendor した source-of-truth tree を新規追加する
- `html/*.html`: generated tutorial pages が local vendor path を参照するよう再生成される
- `html/vendor/mathjax/es5/**`: Pages output 側の generated vendor tree が新規追加される

### Files to inspect/reference only

- `docs/superpowers/specs/2026-04-20-apps-tutorial-mathjax-cdn-cleanup-design.md`
- `apps/tutorial/package.json`
- `apps/tutorial/.gitignore`
- `apps/tutorial/README.md`
- `apps/tutorial/application.js`
- `apps/tutorial/application.js.map`
- `apps/tutorial/application.css`
- `apps/tutorial/src/**`
- `apps/tutorial/serviceworker.js`
- `apps/tutorial/serviceworker.js.map`
- `scripts/check-pages-config.mjs`
- `.github/workflows/pages.yml`
- `html/application.js`
- `html/application.js.map`
- `html/serviceworker.js`
- `html/serviceworker.js.map`

### Scope guard

今回の implementation diff で変更してよい path は原則として次のみ。

- `apps/tutorial/_layouts/default.html`
- `apps/tutorial/vendor/mathjax/es5/**`
- `html/*.html`
- `html/vendor/mathjax/es5/**`

今回の lane では変更しない。

- `apps/tutorial/package.json`
- `apps/tutorial/src/**`
- `apps/tutorial/application.js`
- `apps/tutorial/application.js.map`
- `apps/tutorial/application.css`
- `apps/tutorial/serviceworker.js`
- `apps/tutorial/serviceworker.js.map`
- `apps/www/**`
- `packages/**`
- repo-level workflow / script files
- `Orbit` / `Plausible` の script URL

`html/**` への手編集は行わない。`pnpm --dir apps/tutorial build:site` による generated diff のみを許容する。

---

### Task 1: dedicated worktree と baseline を固定する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-20-apps-tutorial-mathjax-cdn-cleanup-design.md`
- Reference: `apps/tutorial/package.json`
- Reference: `apps/tutorial/_layouts/default.html`
- Reference: `scripts/check-pages-config.mjs`
- Reference: `html/*.html`

- [ ] **Step 1: current local `main` から dedicated worktree を作成する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git switch main
git status --short --branch
BASE_SHA=$(git rev-parse main)
echo "$BASE_SHA" >/tmp/qni-tutorial-mathjax-base-sha
git worktree add -b feat/tutorial-mathjax-cdn-cleanup .worktrees/tutorial-mathjax-cdn-cleanup main
```

Expected: `.worktrees/tutorial-mathjax-cdn-cleanup` が current local `main` を base に作成され、以後の diff / reviewer target 用に base SHA も `/tmp/qni-tutorial-mathjax-base-sha` に固定される。

- [ ] **Step 2: worktree で toolchain と依存を揃える**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
mise trust . >/dev/null 2>&1 || true
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm install --frozen-lockfile'
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup/apps/tutorial
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: root pnpm deps と `apps/tutorial` の Ruby deps が worktree 上で current main と同条件に揃う。

- [ ] **Step 3: current unwanted state と current layout assumptions を観測する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
rg -n 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' apps/tutorial/_layouts/default.html html/*.html
if rg -n './vendor/mathjax/es5/tex-mml-chtml.js' apps/tutorial/_layouts/default.html html/*.html; then
  echo 'unexpected pre-existing local MathJax vendor path'
  exit 1
fi
python - <<'PY'
from pathlib import Path
vendor = Path('apps/tutorial/vendor')
print('vendor exists:', vendor.exists())
print('vendor entries:', sorted(p.name for p in vendor.iterdir()) if vendor.exists() else [])
html_pages = sorted(Path('html').glob('*.html'))
nested = [p for p in Path('html').rglob('*.html') if p.parent != Path('html')]
print('top-level html pages:', len(html_pages))
print('nested html pages:', len(nested))
if nested:
    raise SystemExit('unexpected nested html pages in baseline')
PY
```

Expected:

- source / generated HTML に MathJax CDN URL が残っている
- local vendor path はまだ存在しない
- `apps/tutorial/vendor/` は空、または `mathjax` をまだ含まない
- generated tutorial pages は `html/*.html` の top-level flat output である

- [ ] **Step 4: baseline build が通ることを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build'
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build:site'
node scripts/check-pages-config.mjs
```

Expected: baseline の tutorial build / build:site / Pages config check は PASS。現状は buildable だが MathJax は CDN 依存のままである。

- [ ] **Step 5: baseline task は commit しない**

この task は観測のみ。commit しない。

### Task 2: `mathjax@3.2.2` の full `es5` tree を source 側へ vendor し、layout を置換する

**Files:**

- Modify: `apps/tutorial/_layouts/default.html`
- Create: `apps/tutorial/vendor/mathjax/es5/**`
- Reference: `apps/tutorial/.gitignore`
- Reference: `apps/tutorial/application.js`
- Reference: `apps/tutorial/application.css`

- [ ] **Step 1: RED を source-content check で固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
rg -n 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' apps/tutorial/_layouts/default.html
if test -e apps/tutorial/vendor/mathjax/es5/tex-mml-chtml.js; then
  echo 'unexpected pre-existing MathJax vendor tree'
  exit 1
fi
```

Expected: `default.html` に CDN URL が見つかり、source vendor tree はまだ存在しない。これが今回置換したい RED。

- [ ] **Step 2: `mathjax@3.2.2` tarball を取得して展開する**

Run:

```bash
TMP_MATHJAX_DIR=$(mktemp -d /tmp/qni-mathjax-XXXXXX)
cd "$TMP_MATHJAX_DIR"
mise exec node@20.20.2 -- bash -lc 'TARBALL=$(npm pack mathjax@3.2.2 --silent); echo "$TARBALL" > /tmp/qni-mathjax-tarball-name'
TARBALL=$(cat /tmp/qni-mathjax-tarball-name)
tar -xf "$TARBALL"
test -e "$TMP_MATHJAX_DIR/package/es5/tex-mml-chtml.js"
printf '%s\n' "$TMP_MATHJAX_DIR" >/tmp/qni-mathjax-extract-dir
```

Expected: temp directory に `package/es5/**` が展開され、`tex-mml-chtml.js` が存在する。以後の completeness diff 比較に temp dir を使える。

- [ ] **Step 3: extracted upstream `es5` tree を source vendor path へコピーする**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
TMP_MATHJAX_DIR=$(cat /tmp/qni-mathjax-extract-dir)
rm -rf apps/tutorial/vendor/mathjax
mkdir -p apps/tutorial/vendor/mathjax
cp -R "$TMP_MATHJAX_DIR/package/es5" apps/tutorial/vendor/mathjax/
test -e apps/tutorial/vendor/mathjax/es5/tex-mml-chtml.js
```

Expected: `apps/tutorial/vendor/mathjax/es5/**` が source tree に追加される。

- [ ] **Step 4: source vendor tree が upstream extracted tree と一致することを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
TMP_MATHJAX_DIR=$(cat /tmp/qni-mathjax-extract-dir)
diff -ru "$TMP_MATHJAX_DIR/package/es5" apps/tutorial/vendor/mathjax/es5
```

Expected: `diff` は no output で成功し、`full es5 tree vendoring` を source 側で満たす。

- [ ] **Step 5: `default.html` の MathJax script src を local vendor path に置換する**

`apps/tutorial/_layouts/default.html` の該当部分を次のようにする。

```html
<script id="MathJax-script" async src="./vendor/mathjax/es5/tex-mml-chtml.js"></script>
```

`id="MathJax-script"`, `async`, `Orbit`, `Plausible`, `./application.js` はそのまま維持する。

- [ ] **Step 6: source-side GREEN を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
if rg -n 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' apps/tutorial/_layouts/default.html; then
  echo 'unexpected MathJax CDN URL remains in source layout'
  exit 1
fi
rg -n './vendor/mathjax/es5/tex-mml-chtml.js' apps/tutorial/_layouts/default.html
rg -n 'https://js.withorbit.com/orbit-web-component.js|https://plausible.io/js/plausible.js' apps/tutorial/_layouts/default.html
python - <<'PY'
import subprocess, sys
changed = set(filter(None, subprocess.check_output(['git', 'diff', '--name-only'], text=True).splitlines()))
allowed = {'apps/tutorial/_layouts/default.html'}
extra = sorted(path for path in changed if path not in allowed and not path.startswith('apps/tutorial/vendor/mathjax/es5/'))
if extra:
    print('Unexpected source-side changed files:')
    for path in extra:
        print(path)
    sys.exit(1)
print('Source-side diff scope OK')
PY
```

Expected:

- source layout から MathJax CDN URL が消えている
- local vendor path が入っている
- Orbit / Plausible URL は unchanged
- source-side diff は `default.html` と `apps/tutorial/vendor/mathjax/es5/**` に閉じる

- [ ] **Step 7: source-side vendor placement を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
git add apps/tutorial/_layouts/default.html apps/tutorial/vendor/mathjax
git commit -m "build: vendor tutorial mathjax"
```

### Task 3: `build:site` で generated Pages output を更新し、generated tree を固定する

**Files:**

- Modify: `html/*.html`
- Create: `html/vendor/mathjax/es5/**`
- Reference: `html/application.js`
- Reference: `html/application.css`
- Reference: `html/serviceworker.js`

- [ ] **Step 1: Pages output を再生成する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build:site'
```

Expected: `html/*.html` と `html/vendor/mathjax/es5/**` が current source に追従して再生成される。

- [ ] **Step 2: generated HTML から CDN URL が消え、local vendor path が入ったことを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
if rg -n 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' html/*.html; then
  echo 'unexpected MathJax CDN URL remains in generated HTML'
  exit 1
fi
rg -n './vendor/mathjax/es5/tex-mml-chtml.js' html/*.html | head -n 10
rg -n 'https://js.withorbit.com/orbit-web-component.js|https://plausible.io/js/plausible.js' html/*.html | head -n 10
```

Expected: generated tutorial HTML から CDN URL が消え、local vendor path が入り、Orbit / Plausible URL は残る。

- [ ] **Step 3: generated vendor tree が source vendor tree と一致することを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
test -e html/vendor/mathjax/es5/tex-mml-chtml.js
diff -ru apps/tutorial/vendor/mathjax/es5 html/vendor/mathjax/es5
```

Expected: `html/vendor/mathjax/es5/**` が生成され、source vendor tree と directory diff で一致する。

- [ ] **Step 4: generated tutorial pages が引き続き flat output であることを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
python - <<'PY'
from pathlib import Path
nested = [p for p in Path('html').rglob('*.html') if p.parent != Path('html')]
if nested:
    print('Unexpected nested generated HTML pages:')
    for path in nested[:20]:
        print(path)
    raise SystemExit(1)
print('Generated HTML remains top-level flat output')
PY
```

Expected: nested page HTML は見つからず、`./vendor/...` を前提にした current layout assumption が保たれている。

- [ ] **Step 5: unrelated generated assets が無傷であることを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
python - <<'PY'
import subprocess, sys
forbidden_exact = {
    'apps/tutorial/application.js',
    'apps/tutorial/application.js.map',
    'apps/tutorial/application.css',
    'apps/tutorial/serviceworker.js',
    'apps/tutorial/serviceworker.js.map',
    'html/application.js',
    'html/application.js.map',
    'html/application.css',
    'html/serviceworker.js',
    'html/serviceworker.js.map',
}
changed = set(filter(None, subprocess.check_output(['git', 'diff', '--name-only'], text=True).splitlines()))
forbidden = sorted(path for path in changed if path in forbidden_exact)
if forbidden:
    print('Unexpected unrelated generated asset drift:')
    for path in forbidden:
        print(path)
    sys.exit(1)
print('No unrelated generated asset drift')
PY
```

Expected: JS / CSS / serviceworker など scope 外 generated assets に diff は出ていない。

- [ ] **Step 6: generated-output refresh を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
git add html/*.html html/vendor/mathjax
git commit -m "build: regenerate tutorial mathjax outputs"
```

### Task 4: focused verification・review・integration・push・cleanup を完了する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-20-apps-tutorial-mathjax-cdn-cleanup-design.md`
- Reference: `docs/superpowers/plans/2026-04-20-apps-tutorial-mathjax-cdn-cleanup.md`

- [ ] **Step 1: focused automated verification を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build'
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm --dir apps/tutorial build:site'
node scripts/check-pages-config.mjs
git diff --check
python - <<'PY'
import pathlib, subprocess, sys
base_sha = pathlib.Path('/tmp/qni-tutorial-mathjax-base-sha').read_text().strip()
changed = set(filter(None, subprocess.check_output(['git', 'diff', '--name-only', f'{base_sha}..HEAD'], text=True).splitlines()))
allowed_exact = {
    'apps/tutorial/_layouts/default.html',
}
extra = sorted(
    path for path in changed
    if path not in allowed_exact
    and not path.startswith('apps/tutorial/vendor/mathjax/es5/')
    and not path.startswith('html/vendor/mathjax/es5/')
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

Expected: all PASS。diff は `default.html`, source vendor tree, top-level generated HTML, generated vendor tree に閉じる。

- [ ] **Step 2: local HTTP server を立てて vendor asset の即時疎通を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/tutorial-mathjax-cdn-cleanup
python3 -m http.server 4012 --directory html >/tmp/qni-tutorial-mathjax-smoke.log 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" >/dev/null 2>&1 || true' EXIT
for _ in $(seq 1 20); do
  curl -fsS http://127.0.0.1:4012/index.html >/dev/null 2>&1 && break
  sleep 1
done
curl -fsS http://127.0.0.1:4012/vendor/mathjax/es5/tex-mml-chtml.js >/dev/null
```

Expected: local HTTP server が起動し、vendored MathJax entry file が 200 で取得できる。

- [ ] **Step 3: focused local browser smoke を実行する**

Manual smoke in a local browser:

1. Open `http://127.0.0.1:4012/index.html`
2. Confirm the page loads normally and the browser network panel shows `vendor/mathjax/es5/tex-mml-chtml.js` with no 404
3. Open `http://127.0.0.1:4012/inside_the_qft.html`
4. Confirm representative math content is rendered and not left as raw MathJax source text
5. Open `http://127.0.0.1:4012/shor_qft.html`
6. Confirm representative math content is rendered and the vendored MathJax request succeeds there as well
7. Optionally spot-check one more math-heavy page such as `http://127.0.0.1:4012/qubit.html`

Expected: `index.html` と non-index tutorial pages の双方で `./vendor/...` が解決し、representative math pages の数式表示が壊れていない。

- [ ] **Step 4: reviewer で final diff をレビューする**

Run a single reviewer on the full implementation diff from the captured base SHA to `HEAD` using the spec + plan context. Target:

- spec: `docs/superpowers/specs/2026-04-20-apps-tutorial-mathjax-cdn-cleanup-design.md`
- plan: `docs/superpowers/plans/2026-04-20-apps-tutorial-mathjax-cdn-cleanup.md`
- diff: `$(cat /tmp/qni-tutorial-mathjax-base-sha)..HEAD`
- explicit scope: MathJax only; `apps/tutorial/vendor/mathjax/es5/**` as source of truth; keep all-page loading; vendor full `es5` tree; do not touch Orbit / Plausible / JS / CSS / serviceworker lanes

Expected: APPROVED。Issues Found の場合は worktree 内で修正し、Step 1〜3 の verification を再実行してから reviewer をやり直す。

- [ ] **Step 5: local `main` へ fast-forward merge し、canonical path で再確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
git switch main
git merge --ff-only feat/tutorial-mathjax-cdn-cleanup
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
git worktree remove .worktrees/tutorial-mathjax-cdn-cleanup
git branch -d feat/tutorial-mathjax-cdn-cleanup
git rev-list --left-right --count origin/main...HEAD
git status --short --branch
```

Expected:

- worktree / branch が削除される
- divergence は `0 0`
- `## main...origin/main` の clean state に戻る
