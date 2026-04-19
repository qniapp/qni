# apps/www/docs external CDN cleanup Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `apps/www/docs` から `unpkg` 依存の browser asset import を取り除き、current effective versions の `tailwindcss 2.2.19` と `@highlightjs/cdn-assets 11.2.0` を `apps/www/docs/vendor/**` の source of truth として保守的に local static delivery へ切り替える。

**Architecture:** current local `main` を基点に dedicated worktree を切り、まず source / generated docs HTML に old CDN URL が残っている現状を baseline として固定する。その後 `npm pack` で取得した 3 つの runtime asset と provenance README を `apps/www/docs/vendor/**` に配置し、`apps/www/docs/_layouts/default.html` の CDN URL だけを `{{ site.baseurl }}/vendor/...` へ置換する。最後に `pnpm --dir apps/www build:docs` で `_site/**` を再生成し、generated HTML から CDN URL が消え new vendor path semantics が出力されること、diff が `apps/www/docs/**` に閉じること、reviewer 承認まで通す。

**Tech Stack:** Jekyll 4.4.1, Ruby 4.0.2, Bundler 4.0.10, Node.js 20.20.2, pnpm 10.33.0, `tailwindcss 2.2.19`, `@highlightjs/cdn-assets 11.2.0`

---

## File Structure

### Files likely to change

- `apps/www/docs/_layouts/default.html`: 3 つの CDN URL を `{{ site.baseurl }}/vendor/...` に置き換える
- `apps/www/docs/vendor/tailwindcss/tailwind.min.css`: `tailwindcss 2.2.19` 由来の runtime CSS を新規追加する
- `apps/www/docs/vendor/highlightjs/highlight.min.js`: `@highlightjs/cdn-assets 11.2.0` 由来の runtime JS を新規追加する
- `apps/www/docs/vendor/highlightjs/styles/atom-one-dark.min.css`: current highlight theme CSS を新規追加する
- `apps/www/docs/vendor/README.md`: package / version / file origin を記録する provenance note を新規追加する

### Files to inspect/reference only

- `docs/superpowers/specs/2026-04-20-apps-www-docs-external-cdn-cleanup-design.md`
- `apps/www/docs/.gitignore`
- `apps/www/docs/custom.css`
- `apps/www/docs/_config.yml`
- `apps/www/package.json`
- `apps/www/docs/_site/**`（generated / ignored output）

### Scope guard

今回の implementation diff で変更してよい path は原則として次のみ。

- `apps/www/docs/_layouts/default.html`
- `apps/www/docs/vendor/tailwindcss/tailwind.min.css`
- `apps/www/docs/vendor/highlightjs/highlight.min.js`
- `apps/www/docs/vendor/highlightjs/styles/atom-one-dark.min.css`
- `apps/www/docs/vendor/README.md`

今回の lane では変更しない。

- `apps/www/docs/custom.css`
- `apps/www/docs/_config.yml`
- `apps/www/package.json`
- `apps/www/**` の docs 以外
- `apps/tutorial/**`
- repo-level workflow / scripts

`apps/www/docs/_site/**` は generated output であり、手編集も commit も行わない。

---

### Task 1: dedicated worktree と baseline を固定する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-20-apps-www-docs-external-cdn-cleanup-design.md`
- Reference: `apps/www/package.json`
- Reference: `apps/www/docs/_layouts/default.html`
- Reference: `apps/www/docs/_config.yml`

- [ ] **Step 1: current local `main` から dedicated worktree を作成する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git switch main
git status --short --branch
BASE_SHA=$(git rev-parse main)
echo "$BASE_SHA" >/tmp/qni-www-docs-external-cdn-base-sha
git worktree add -b feat/www-docs-external-cdn-cleanup .worktrees/www-docs-external-cdn-cleanup main
```

Expected: `.worktrees/www-docs-external-cdn-cleanup` が current local `main` を base に作成され、以後の diff / reviewer target 用に base SHA も `/tmp/qni-www-docs-external-cdn-base-sha` へ固定される。

- [ ] **Step 2: worktree で toolchain と依存を揃える**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
mise trust . >/dev/null 2>&1 || true
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm install --frozen-lockfile'
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup/apps/www/docs
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: root pnpm deps と `apps/www/docs` の Ruby deps が worktree 上で current main と同条件に揃う。

- [ ] **Step 3: current unwanted state を観測する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
rg -n 'https://unpkg.com/@highlightjs/cdn-assets@11.2.0/highlight.min.js|https://unpkg.com/@highlightjs/cdn-assets@11.2.0/styles/atom-one-dark.min.css|https://unpkg.com/tailwindcss@\^2/dist/tailwind.min.css' apps/www/docs/_layouts/default.html
if rg -n -F '{{ site.baseurl }}/vendor/' apps/www/docs/_layouts/default.html; then
  echo 'unexpected pre-existing local vendor refs in docs layout'
  exit 1
fi
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'pnpm --dir apps/www build:docs >/tmp/qni-www-docs-external-cdn-baseline.log'
rg -n 'https://unpkg.com/@highlightjs/cdn-assets@11.2.0/highlight.min.js|https://unpkg.com/@highlightjs/cdn-assets@11.2.0/styles/atom-one-dark.min.css|https://unpkg.com/tailwindcss@\^2/dist/tailwind.min.css' apps/www/docs/_site --glob '*.html' | head -n 20
```

Expected:

- source layout に 3 つの CDN URL が残っている
- source layout に local vendor refs はまだない
- generated `_site/**/*.html` にも same CDN URL が残っている

- [ ] **Step 4: baseline task は commit しない**

この task は観測のみ。commit しない。

### Task 2: current effective versions の runtime asset と provenance note を vendor 配置する

**Files:**

- Create: `apps/www/docs/vendor/tailwindcss/tailwind.min.css`
- Create: `apps/www/docs/vendor/highlightjs/highlight.min.js`
- Create: `apps/www/docs/vendor/highlightjs/styles/atom-one-dark.min.css`
- Create: `apps/www/docs/vendor/README.md`

- [ ] **Step 1: RED を source file existence で固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
for path in \
  apps/www/docs/vendor/tailwindcss/tailwind.min.css \
  apps/www/docs/vendor/highlightjs/highlight.min.js \
  apps/www/docs/vendor/highlightjs/styles/atom-one-dark.min.css \
  apps/www/docs/vendor/README.md; do
  if test -e "$path"; then
    echo "unexpected pre-existing file: $path"
    exit 1
  fi
done
```

Expected: target vendor files / README はまだ存在しない。これが今回埋める RED。

- [ ] **Step 2: `tailwindcss 2.2.19` tarball から `dist/tailwind.min.css` を取得する**

Run:

```bash
TMP_TAILWIND_DIR=$(mktemp -d /tmp/qni-tailwind-XXXXXX)
cd "$TMP_TAILWIND_DIR"
mise exec node@20.20.2 -- bash -lc 'TARBALL=$(npm pack tailwindcss@2.2.19 --silent); echo "$TARBALL" > /tmp/qni-tailwind-tarball-name'
TARBALL=$(cat /tmp/qni-tailwind-tarball-name)
tar -xf "$TARBALL"
test -e "$TMP_TAILWIND_DIR/package/dist/tailwind.min.css"
printf '%s\n' "$TMP_TAILWIND_DIR" >/tmp/qni-tailwind-extract-dir
```

Expected: temp directory に `package/dist/tailwind.min.css` が展開される。

- [ ] **Step 3: `@highlightjs/cdn-assets 11.2.0` tarball から runtime JS / theme CSS を取得する**

Run:

```bash
TMP_HLJS_DIR=$(mktemp -d /tmp/qni-hljs-XXXXXX)
cd "$TMP_HLJS_DIR"
mise exec node@20.20.2 -- bash -lc 'TARBALL=$(npm pack @highlightjs/cdn-assets@11.2.0 --silent); echo "$TARBALL" > /tmp/qni-hljs-tarball-name'
TARBALL=$(cat /tmp/qni-hljs-tarball-name)
tar -xf "$TARBALL"
test -e "$TMP_HLJS_DIR/package/highlight.min.js"
test -e "$TMP_HLJS_DIR/package/styles/atom-one-dark.min.css"
printf '%s\n' "$TMP_HLJS_DIR" >/tmp/qni-hljs-extract-dir
```

Expected: temp directory に `highlight.min.js` と `styles/atom-one-dark.min.css` が展開される。

- [ ] **Step 4: extracted upstream files を `apps/www/docs/vendor/**` にコピーする\*\*

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
TMP_TAILWIND_DIR=$(cat /tmp/qni-tailwind-extract-dir)
TMP_HLJS_DIR=$(cat /tmp/qni-hljs-extract-dir)
mkdir -p apps/www/docs/vendor/tailwindcss apps/www/docs/vendor/highlightjs/styles
cp "$TMP_TAILWIND_DIR/package/dist/tailwind.min.css" apps/www/docs/vendor/tailwindcss/tailwind.min.css
cp "$TMP_HLJS_DIR/package/highlight.min.js" apps/www/docs/vendor/highlightjs/highlight.min.js
cp "$TMP_HLJS_DIR/package/styles/atom-one-dark.min.css" apps/www/docs/vendor/highlightjs/styles/atom-one-dark.min.css
```

Expected: target vendor file 3 つが source tree に配置される。

- [ ] **Step 5: provenance README を追加する**

Create `apps/www/docs/vendor/README.md` with at least this content:

```md
# apps/www/docs vendored browser assets

This directory contains the exact runtime assets currently referenced by `apps/www/docs/_layouts/default.html`.

## Sources

- `tailwindcss@2.2.19`
  - `package/dist/tailwind.min.css`
- `@highlightjs/cdn-assets@11.2.0`
  - `package/highlight.min.js`
  - `package/styles/atom-one-dark.min.css`

These files are vendored to remove `unpkg` runtime dependencies from `apps/www/docs` without changing the effective browser-side versions in this lane.
```

- [ ] **Step 6: vendored source files が upstream extracted files と一致することを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
TMP_TAILWIND_DIR=$(cat /tmp/qni-tailwind-extract-dir)
TMP_HLJS_DIR=$(cat /tmp/qni-hljs-extract-dir)
cmp -s "$TMP_TAILWIND_DIR/package/dist/tailwind.min.css" apps/www/docs/vendor/tailwindcss/tailwind.min.css
cmp -s "$TMP_HLJS_DIR/package/highlight.min.js" apps/www/docs/vendor/highlightjs/highlight.min.js
cmp -s "$TMP_HLJS_DIR/package/styles/atom-one-dark.min.css" apps/www/docs/vendor/highlightjs/styles/atom-one-dark.min.css
rg -n 'tailwindcss@2.2.19|@highlightjs/cdn-assets@11.2.0|tailwind.min.css|highlight.min.js|atom-one-dark.min.css' apps/www/docs/vendor/README.md
```

Expected: 3 file の内容一致と README provenance が確認できる。

- [ ] **Step 7: vendor placement を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
git add apps/www/docs/vendor
git commit -m "build: vendor www docs browser assets"
```

### Task 3: docs layout を local vendor path に切り替える

**Files:**

- Modify: `apps/www/docs/_layouts/default.html`
- Reference: `apps/www/docs/custom.css`

- [ ] **Step 1: RED を source layout 内容で固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
rg -n 'https://unpkg.com/@highlightjs/cdn-assets@11.2.0/highlight.min.js|https://unpkg.com/@highlightjs/cdn-assets@11.2.0/styles/atom-one-dark.min.css|https://unpkg.com/tailwindcss@\^2/dist/tailwind.min.css' apps/www/docs/_layouts/default.html
```

Expected: old CDN URL がまだ見つかる。これが今回消したい RED。

- [ ] **Step 2: `_layouts/default.html` の CDN URL を local vendor path に置き換える**

Update only these refs in `apps/www/docs/_layouts/default.html`:

```html
<script src="{{ site.baseurl }}/vendor/highlightjs/highlight.min.js"></script>
<link href="{{ site.baseurl }}/vendor/tailwindcss/tailwind.min.css" rel="stylesheet" />
<link rel="stylesheet" href="{{ site.baseurl }}/vendor/highlightjs/styles/atom-one-dark.min.css" />
```

Keep unchanged:

- `{{ site.baseurl }}/index.js`
- `{{ site.baseurl }}/qni.css`
- `{{ site.baseurl }}/custom.css`
- favicon links
- inline `hljs.highlightAll()`
- CSS / script include order

- [ ] **Step 3: source-side GREEN を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
if rg -n 'https://unpkg.com/@highlightjs/cdn-assets@11.2.0/highlight.min.js|https://unpkg.com/@highlightjs/cdn-assets@11.2.0/styles/atom-one-dark.min.css|https://unpkg.com/tailwindcss@\^2/dist/tailwind.min.css' apps/www/docs/_layouts/default.html; then
  echo 'unexpected CDN URL remains in docs layout'
  exit 1
fi
rg -n -F '{{ site.baseurl }}/vendor/highlightjs/highlight.min.js' apps/www/docs/_layouts/default.html
rg -n -F '{{ site.baseurl }}/vendor/highlightjs/styles/atom-one-dark.min.css' apps/www/docs/_layouts/default.html
rg -n -F '{{ site.baseurl }}/vendor/tailwindcss/tailwind.min.css' apps/www/docs/_layouts/default.html
python - <<'PY'
import subprocess, sys
changed = set(filter(None, subprocess.check_output(['git', 'diff', '--name-only'], text=True).splitlines()))
allowed = {
    'apps/www/docs/_layouts/default.html',
    'apps/www/docs/vendor/tailwindcss/tailwind.min.css',
    'apps/www/docs/vendor/highlightjs/highlight.min.js',
    'apps/www/docs/vendor/highlightjs/styles/atom-one-dark.min.css',
    'apps/www/docs/vendor/README.md',
}
extra = sorted(changed - allowed)
if extra:
    print('Unexpected changed files:')
    for path in extra:
        print(path)
    sys.exit(1)
print('Source-side diff scope OK')
PY
```

Expected: layout から old CDN URL が消え、new local vendor refs が入り、diff は allowed source files に閉じる。

- [ ] **Step 4: layout cleanup を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
git add apps/www/docs/_layouts/default.html
git commit -m "build: localize www docs browser assets"
```

### Task 4: docs build と generated HTML invariants を確認する

**Files:**

- Reference: `apps/www/docs/_site/**` (generated only)

- [ ] **Step 1: docs site を再生成する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'set -o pipefail; pnpm --dir apps/www build:docs 2>&1 | tee /tmp/qni-www-docs-external-cdn-build.log'
```

Expected: docs build は green で、`_site/**` が current source に追従して再生成される。

- [ ] **Step 2: generated HTML から old CDN URL が消えたことを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
if rg -n 'https://unpkg.com/@highlightjs/cdn-assets@11.2.0/highlight.min.js|https://unpkg.com/@highlightjs/cdn-assets@11.2.0/styles/atom-one-dark.min.css|https://unpkg.com/tailwindcss@\^2/dist/tailwind.min.css' apps/www/docs/_site --glob '*.html'; then
  echo 'unexpected CDN URL remains in generated docs HTML'
  exit 1
fi
```

Expected: generated `_site/**/*.html` に old CDN URL は 0 件。

- [ ] **Step 3: generated HTML が new vendor path semantics を出力することを確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
rg -n '/vendor/highlightjs/highlight.min.js' apps/www/docs/_site --glob '*.html'
rg -n '/vendor/highlightjs/styles/atom-one-dark.min.css' apps/www/docs/_site --glob '*.html'
rg -n '/vendor/tailwindcss/tailwind.min.css' apps/www/docs/_site --glob '*.html'
```

Expected: generated `_site/**/*.html` に new vendor path semantics が出力される。

- [ ] **Step 4: generated `\_site/vendor/**` に target files が存在することを確認する\*\*

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
test -e apps/www/docs/_site/vendor/tailwindcss/tailwind.min.css
test -e apps/www/docs/_site/vendor/highlightjs/highlight.min.js
test -e apps/www/docs/_site/vendor/highlightjs/styles/atom-one-dark.min.css
```

Expected: `_site/vendor/**` に target runtime asset 3 つが存在する。

- [ ] **Step 5: final verification の補助チェックを通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-docs-external-cdn-cleanup
git diff --check
python - <<'PY'
import pathlib, subprocess, sys
base_sha = pathlib.Path('/tmp/qni-www-docs-external-cdn-base-sha').read_text().strip()
changed = set(filter(None, subprocess.check_output(['git', 'diff', '--name-only', f'{base_sha}..HEAD'], text=True).splitlines()))
allowed = {
    'apps/www/docs/_layouts/default.html',
    'apps/www/docs/vendor/tailwindcss/tailwind.min.css',
    'apps/www/docs/vendor/highlightjs/highlight.min.js',
    'apps/www/docs/vendor/highlightjs/styles/atom-one-dark.min.css',
    'apps/www/docs/vendor/README.md',
}
extra = sorted(changed - allowed)
if extra:
    print('Unexpected changed files relative to base SHA:')
    for path in extra:
        print(path)
    sys.exit(1)
print('Diff scope OK')
PY
```

Expected: diff quality は clean、branch diff は allowed `apps/www/docs/**` source files に閉じる。

- [ ] **Step 6: build verification task は commit しない**

`_site/**` は ignored output のため commit しない。この task は verification only。

### Task 5: final review と execution handoff を完了する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-20-apps-www-docs-external-cdn-cleanup-design.md`
- Reference: `docs/superpowers/plans/2026-04-20-apps-www-docs-external-cdn-cleanup.md`

- [ ] **Step 1: reviewer subagent で final implementation diff をレビューする**

Review context に含めるもの:

- spec path: `docs/superpowers/specs/2026-04-20-apps-www-docs-external-cdn-cleanup-design.md`
- plan path: `docs/superpowers/plans/2026-04-20-apps-www-docs-external-cdn-cleanup.md`
- diff target: `$(cat /tmp/qni-www-docs-external-cdn-base-sha)..HEAD`
- explicit constraints:
  - scope is `apps/www/docs` only
  - source of truth is `apps/www/docs/vendor/**`
  - vendor only 3 runtime files + lightweight provenance note
  - keep versions fixed at `tailwindcss 2.2.19` and `@highlightjs/cdn-assets 11.2.0`
  - no new copy/build pipeline
  - verification is `pnpm --dir apps/www build:docs` + generated HTML URL checks only
  - no browser smoke is required in this lane

Expected: APPROVED。Issues Found の場合は worktree で修正し、Task 4 verification を再実行してから reviewer をやり直す。

- [ ] **Step 2: execution handoff 用に final verification 状態をまとめる**

Capture in notes / handoff summary:

- source files changed
- vendor provenance fixed at the approved versions
- `pnpm --dir apps/www build:docs` result
- generated HTML no longer contains old CDN URLs
- generated HTML emits `/vendor/...` path semantics
- `_site/vendor/**` contains the 3 target files
- diff remains inside `apps/www/docs/**`

Expected: a low-context worker can start execution from the dedicated worktree with the plan, spec, and final verification constraints only.
