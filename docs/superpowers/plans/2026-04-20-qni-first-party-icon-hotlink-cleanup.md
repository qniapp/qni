# qni first-party icon hotlink cleanup Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 3 つの confirmed first-party icon hotlink を、各 boundary の既存 local asset へ保守的に差し替え、tutorial / docs / www の current UI surface を維持したまま external icon ownership drift だけを解消する。

**Architecture:** current local `main` を基点に dedicated worktree を作り、まず 3 target source files と generated outputs / rendered SVG surface に old hotlink が残っている現状を baseline として固定する。その後 tutorial → docs → www の順に各 boundary を最小置換で更新し、tutorial は `build:site` による tracked `html/*.html` 追従、docs は `build:docs` による `_site/**/*.html` 追従、www は Rails partial render による focused machine verification で安全に閉じる。最後に Python static server + Puppeteer を使った lightweight real-page confirmation を 3 surfaces で行い、reviewer 承認と execution handoff まで完了する。

**Tech Stack:** Jekyll 4.4.1, Rails 7.2.x, Ruby 4.0.2, Bundler 4.0.10, Node.js 20.20.2, pnpm 10.33.0, Puppeteer 23.x, Python 3 `http.server`, Git worktrees

---

## File Structure

### Files likely to change

- `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`: tutorial mobile menu の icon src を `./images/qni-icon-512.png` へ置き換える
- `html/*.html`: `pnpm --dir apps/tutorial build:site` により tutorial generated pages が new local icon ref を含む状態へ再生成される
- `apps/www/docs/_includes/sidebar.html`: docs sidebar の icon src を `{{ site.baseurl }}/images/icon.svg` へ置き換える
- `apps/www/app/views/circuit_svg/_circuit_svg.html.erb`: circuit SVG logo の icon src を `/icon-512.png` へ置き換える

### Files to inspect/reference only

- `docs/superpowers/specs/2026-04-20-qni-first-party-icon-hotlink-cleanup-design.md`
- `apps/tutorial/package.json`
- `apps/tutorial/_layouts/page.html`
- `apps/tutorial/src/controllers/sidebar_controller.js`
- `apps/www/docs/_config.yml`
- `apps/www/package.json`
- `apps/www/config/routes.rb`
- `apps/www/app/controllers/circuit_svg_controller.rb`
- `apps/www/public/icon-512.png`
- `apps/www/docs/_site/**`（generated / ignored output only）

### Scope guard

今回の implementation diff で変更してよい tracked path は原則として次のみ。

- `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
- `html/*.html`
- `apps/www/docs/_includes/sidebar.html`
- `apps/www/app/views/circuit_svg/_circuit_svg.html.erb`

今回の lane では変更しない。

- `apps/tutorial/images/**`
- `apps/www/docs/images/**`
- `apps/www/public/**`
- `apps/tutorial/_includes/static_sidebar_for_desktop.html`
- `apps/www/docs/_layouts/**`
- `apps/www` の controller / route / social image flow
- `Orbit` / `Plausible`
- repo-wide icon policy / helper / shared component
- workflow / script / package / lockfile

`apps/www/docs/_site/**` は verification artifact であり、手編集も commit も行わない。

---

### Task 1: dedicated worktree と baseline を固定する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-20-qni-first-party-icon-hotlink-cleanup-design.md`
- Reference: `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
- Reference: `apps/www/docs/_includes/sidebar.html`
- Reference: `apps/www/app/views/circuit_svg/_circuit_svg.html.erb`
- Reference: `apps/www/docs/_config.yml`
- Reference: `apps/www/public/icon-512.png`

- [ ] **Step 1: current local `main` から dedicated worktree を作成する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git switch main
git status --short --branch
BASE_SHA=$(git rev-parse main)
echo "$BASE_SHA" >/tmp/qni-icon-hotlink-base-sha
git worktree add -b feat/first-party-icon-hotlink-cleanup .worktrees/first-party-icon-hotlink-cleanup main
```

Expected: `.worktrees/first-party-icon-hotlink-cleanup` が current local `main` を base に作成され、以後の diff / reviewer target 用に base SHA も `/tmp/qni-icon-hotlink-base-sha` に固定される。

- [ ] **Step 2: worktree で toolchain と依存を揃える**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
mise trust . >/dev/null 2>&1 || true
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm install --frozen-lockfile'
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup/apps/tutorial
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup/apps/www/docs
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: root pnpm deps と `apps/tutorial` / `apps/www/docs` / `apps/www` の Ruby deps が worktree 上で current main と同条件に揃う。

- [ ] **Step 3: current unwanted state を source 側で観測する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
rg -n 'https://qniapp.net/icon-512.png' apps/tutorial/_includes/off_canvas_menu_for_mobile.html apps/www/app/views/circuit_svg/_circuit_svg.html.erb
rg -n 'https://qni-quantum.herokuapp.com/icon-512.png' apps/www/docs/_includes/sidebar.html
if rg -n './images/qni-icon-512.png' apps/tutorial/_includes/off_canvas_menu_for_mobile.html; then
  echo 'unexpected pre-existing tutorial local icon ref'
  exit 1
fi
if rg -n -F '{{ site.baseurl }}/images/icon.svg' apps/www/docs/_includes/sidebar.html; then
  echo 'unexpected pre-existing docs local icon ref'
  exit 1
fi
if rg -n 'src="/icon-512.png"' apps/www/app/views/circuit_svg/_circuit_svg.html.erb; then
  echo 'unexpected pre-existing www local icon ref'
  exit 1
fi
test -e apps/tutorial/images/qni-icon-512.png
test -e apps/www/docs/images/icon.svg
test -e apps/www/public/icon-512.png
```

Expected: 3 target source files すべてに old hotlink が残っており、新しい local refs はまだ入っていない。一方で採用予定の local assets は既に存在する。

- [ ] **Step 4: baseline generated / rendered state を観測する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'pnpm --dir apps/tutorial build:site >/tmp/qni-icon-hotlink-tutorial-baseline.log'
if ! rg -n 'https://qniapp.net/icon-512.png' html --glob '*.html'; then
  echo 'expected tutorial generated html to still contain old hotlink before changes'
  exit 1
fi
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'pnpm --dir apps/www build:docs >/tmp/qni-icon-hotlink-docs-baseline.log'
if ! rg -n 'https://qni-quantum.herokuapp.com/icon-512.png' apps/www/docs/_site --glob '*.html'; then
  echo 'expected generated docs html to still contain old docs hotlink before changes'
  exit 1
fi
cat >/tmp/qni-render-circuit-svg-baseline.rb <<'RUBY'
html = ApplicationController.render(
  partial: 'circuit_svg/circuit_svg',
  formats: [:html],
  locals: { json: '{"cols":["H"]}' }
)
abort('expected old circuit svg hotlink before changes') unless html.include?('https://qniapp.net/icon-512.png')
abort('unexpected /icon-512.png before changes') if html.include?('src="/icon-512.png"')
puts 'baseline circuit svg render still uses old hotlink'
RUBY
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails runner /tmp/qni-render-circuit-svg-baseline.rb'
```

Expected:

- `html/*.html` には tutorial old hotlink が残っている
- generated `apps/www/docs/_site/**/*.html` には docs old hotlink が残っている
- rendered circuit SVG surface には www old hotlink が残っている

- [ ] **Step 5: baseline task は commit しない**

この task は観測のみ。commit しない。

### Task 2: tutorial mobile menu icon を local asset に切り替え、tracked `html/*.html` を追従させる

**Files:**

- Modify: `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`
- Generated: `html/*.html`
- Reference: `apps/tutorial/_layouts/page.html`

- [ ] **Step 1: RED を target source / generated output で固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
rg -n 'https://qniapp.net/icon-512.png' apps/tutorial/_includes/off_canvas_menu_for_mobile.html
if rg -n './images/qni-icon-512.png' apps/tutorial/_includes/off_canvas_menu_for_mobile.html; then
  echo 'unexpected tutorial local icon ref before edit'
  exit 1
fi
if ! rg -n 'https://qniapp.net/icon-512.png' html --glob '*.html'; then
  echo 'expected tutorial generated html to still contain old hotlink before tutorial edit'
  exit 1
fi
```

Expected: tutorial source と generated `html/*.html` に old hotlink が残っている。これが今回消したい RED。

- [ ] **Step 2: `off_canvas_menu_for_mobile.html` の icon src を local path に置き換える**

Update only this element in `apps/tutorial/_includes/off_canvas_menu_for_mobile.html`:

```html
<img class="mr-2 h-7 w-7" src="./images/qni-icon-512.png" alt="Qni" />
```

Keep unchanged:

- `alt="Qni"`
- `mr-2 h-7 w-7`
- surrounding mobile menu structure
- Stimulus targets / actions

- [ ] **Step 3: tutorial site を再生成する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'set -o pipefail; pnpm --dir apps/tutorial build:site 2>&1 | tee /tmp/qni-icon-hotlink-tutorial-build.log'
```

Expected: `apps/tutorial` build と Jekyll site generation が green で、tracked `html/*.html` が source change に追従する。

- [ ] **Step 4: tutorial source / generated output の GREEN を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
if rg -n 'https://qniapp.net/icon-512.png' apps/tutorial/_includes/off_canvas_menu_for_mobile.html; then
  echo 'unexpected old tutorial hotlink remains in source include'
  exit 1
fi
rg -n './images/qni-icon-512.png' apps/tutorial/_includes/off_canvas_menu_for_mobile.html
if rg -n 'https://qniapp.net/icon-512.png' html --glob '*.html'; then
  echo 'unexpected old tutorial hotlink remains in generated html'
  exit 1
fi
rg -n './images/qni-icon-512.png' html --glob '*.html'
python - <<'PY'
import pathlib, subprocess, sys
changed = set(filter(None, subprocess.check_output(['git', 'diff', '--name-only'], text=True).splitlines()))
allowed = {'apps/tutorial/_includes/off_canvas_menu_for_mobile.html'}
extra = sorted(path for path in changed if path not in allowed and not (path.startswith('html/') and path.endswith('.html')))
if extra:
    print('Unexpected changed files after tutorial task:')
    for path in extra:
        print(path)
    sys.exit(1)
print('Tutorial task diff scope OK')
PY
```

Expected: tutorial source / generated `html/*.html` から old hotlink が消え、new local path が入る。diff は tutorial source file と `html/*.html` に閉じる。

- [ ] **Step 5: tutorial icon cleanup を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
git add apps/tutorial/_includes/off_canvas_menu_for_mobile.html html/*.html
git commit -m "refactor: localize tutorial mobile menu icon"
```

### Task 3: docs sidebar icon を local docs asset に切り替え、generated docs HTML を確認する

**Files:**

- Modify: `apps/www/docs/_includes/sidebar.html`
- Reference: `apps/www/docs/_config.yml`
- Generated only: `apps/www/docs/_site/**`

- [ ] **Step 1: RED を target source / generated docs HTML で固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
rg -n 'https://qni-quantum.herokuapp.com/icon-512.png' apps/www/docs/_includes/sidebar.html
if rg -n -F '{{ site.baseurl }}/images/icon.svg' apps/www/docs/_includes/sidebar.html; then
  echo 'unexpected docs local icon ref before edit'
  exit 1
fi
if ! rg -n 'https://qni-quantum.herokuapp.com/icon-512.png' apps/www/docs/_site --glob '*.html'; then
  echo 'expected generated docs html to still contain old docs hotlink before docs edit'
  exit 1
fi
```

Expected: docs source / generated docs HTML に old hotlink が残っている。これが今回消したい RED。

- [ ] **Step 2: `apps/www/docs/_includes/sidebar.html` の icon src を local docs path に置き換える**

Update only this element in `apps/www/docs/_includes/sidebar.html`:

```html
<img class="h-8 w-8 mr-2" src="{{ site.baseurl }}/images/icon.svg" alt="Qni"></img>
```

Keep unchanged:

- `alt="Qni"`
- `h-8 w-8 mr-2`
- sidebar structure / navigation include

- [ ] **Step 3: docs site を再生成する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'set -o pipefail; pnpm --dir apps/www build:docs 2>&1 | tee /tmp/qni-icon-hotlink-docs-build.log'
```

Expected: docs build が green で、generated `_site/**/*.html` が current source に追従する。

- [ ] **Step 4: docs source / generated output の GREEN を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
if rg -n 'https://qni-quantum.herokuapp.com/icon-512.png' apps/www/docs/_includes/sidebar.html; then
  echo 'unexpected old docs hotlink remains in source include'
  exit 1
fi
rg -n -F '{{ site.baseurl }}/images/icon.svg' apps/www/docs/_includes/sidebar.html
if rg -n 'https://qni-quantum.herokuapp.com/icon-512.png' apps/www/docs/_site --glob '*.html'; then
  echo 'unexpected old docs hotlink remains in generated docs html'
  exit 1
fi
rg -n '<img class="h-8 w-8 mr-2" src="https://qniapp.github.io/qni/images/icon.svg" alt="Qni"></img>' apps/www/docs/_site --glob '*.html'
python - <<'PY'
import pathlib, subprocess, sys
base_sha = pathlib.Path('/tmp/qni-icon-hotlink-base-sha').read_text().strip()
changed = set(filter(None, subprocess.check_output(['git', 'diff', '--name-only', base_sha], text=True).splitlines()))
allowed = {
    'apps/tutorial/_includes/off_canvas_menu_for_mobile.html',
    'apps/www/docs/_includes/sidebar.html',
}
extra = sorted(path for path in changed if path not in allowed and not (path.startswith('html/') and path.endswith('.html')))
if extra:
    print('Unexpected changed files after docs task:')
    for path in extra:
        print(path)
    sys.exit(1)
print('Docs task diff scope OK relative to base + working tree')
PY
```

Expected: docs source / generated `_site/**/*.html` から old hotlink が消え、sidebar branding image 自体が `src="https://qniapp.github.io/qni/images/icon.svg" alt="Qni"` を持つ形で出力される。tracked diff は tutorial source + `html/*.html` + docs source に閉じる。

- [ ] **Step 5: docs icon cleanup を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
git add apps/www/docs/_includes/sidebar.html
git commit -m "refactor: localize docs sidebar icon"
```

### Task 4: circuit SVG logo icon を local public asset に切り替え、focused render verification を通す

**Files:**

- Modify: `apps/www/app/views/circuit_svg/_circuit_svg.html.erb`
- Reference: `apps/www/public/icon-512.png`
- Reference: `apps/www/config/routes.rb`
- Reference: `apps/www/app/controllers/circuit_svg_controller.rb`

- [ ] **Step 1: RED を target source / rendered SVG surface で固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
rg -n 'https://qniapp.net/icon-512.png' apps/www/app/views/circuit_svg/_circuit_svg.html.erb
if rg -n 'src="/icon-512.png"' apps/www/app/views/circuit_svg/_circuit_svg.html.erb; then
  echo 'unexpected www local icon ref before edit'
  exit 1
fi
cat >/tmp/qni-render-circuit-svg-red.rb <<'RUBY'
html = ApplicationController.render(
  partial: 'circuit_svg/circuit_svg',
  formats: [:html],
  locals: { json: '{"cols":["H"]}' }
)
abort('expected old circuit svg hotlink before www edit') unless html.include?('https://qniapp.net/icon-512.png')
abort('unexpected /icon-512.png before www edit') if html.include?('src="/icon-512.png"')
puts 'circuit svg RED fixed'
RUBY
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails runner /tmp/qni-render-circuit-svg-red.rb'
```

Expected: source partial と rendered circuit SVG surface の両方で old hotlink が残っている。これが今回消したい RED。

- [ ] **Step 2: `_circuit_svg.html.erb` の logo icon src を public root path に置き換える**

Update only this element in `apps/www/app/views/circuit_svg/_circuit_svg.html.erb`:

```erb
<img class="z-10 mr-2 h-16 w-16" src="/icon-512.png" alt="Qni" />
```

Keep unchanged:

- `alt="Qni"`
- `z-10 mr-2 h-16 w-16`
- surrounding SVG / foreignObject layout
- title / description / logo text structure

- [ ] **Step 3: focused machine verification で rendered SVG surface を確認する**

Run:

```bash
cat >/tmp/qni-render-circuit-svg-green.rb <<'RUBY'
html = ApplicationController.render(
  partial: 'circuit_svg/circuit_svg',
  formats: [:html],
  locals: { json: '{"cols":["H"]}' }
)
abort('unexpected old circuit svg hotlink remains') if html.include?('https://qniapp.net/icon-512.png')
abort('missing local /icon-512.png ref in rendered svg') unless html.include?('src="/icon-512.png"')
puts 'circuit svg render uses /icon-512.png'
RUBY
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails runner /tmp/qni-render-circuit-svg-green.rb'
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
if rg -n 'https://qniapp.net/icon-512.png' apps/www/app/views/circuit_svg/_circuit_svg.html.erb; then
  echo 'unexpected old www hotlink remains in source partial'
  exit 1
fi
rg -n 'src="/icon-512.png"' apps/www/app/views/circuit_svg/_circuit_svg.html.erb
python - <<'PY'
import pathlib, subprocess, sys
base_sha = pathlib.Path('/tmp/qni-icon-hotlink-base-sha').read_text().strip()
changed = set(filter(None, subprocess.check_output(['git', 'diff', '--name-only', base_sha], text=True).splitlines()))
allowed = {
    'apps/tutorial/_includes/off_canvas_menu_for_mobile.html',
    'apps/www/docs/_includes/sidebar.html',
    'apps/www/app/views/circuit_svg/_circuit_svg.html.erb',
}
extra = sorted(path for path in changed if path not in allowed and not (path.startswith('html/') and path.endswith('.html')))
if extra:
    print('Unexpected changed files after www task:')
    for path in extra:
        print(path)
    sys.exit(1)
print('WWW task diff scope OK relative to base + working tree')
PY
```

Expected: rendered circuit SVG surface と source partial の両方で old hotlink が消え、`/icon-512.png` が使われる。tracked diff は approved files に閉じる。

- [ ] **Step 4: www icon cleanup を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
git add apps/www/app/views/circuit_svg/_circuit_svg.html.erb
git commit -m "refactor: localize circuit svg logo icon"
```

### Task 5: lightweight real-page confirmation を 3 surfaces で行う

**Files:**

- Generated: `html/*.html`
- Generated only: `apps/www/docs/_site/**`
- Reference: `apps/www/public/icon-512.png`

- [ ] **Step 1: tutorial / docs static servers と real `apps/www` Rails server を起動する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
python3 -m http.server 4010 --directory html >/tmp/qni-icon-hotlink-tutorial-server.log 2>&1 & echo $! >/tmp/qni-icon-hotlink-tutorial-server.pid
python3 -m http.server 4011 --directory apps/www/docs/_site >/tmp/qni-icon-hotlink-docs-server.log 2>&1 & echo $! >/tmp/qni-icon-hotlink-docs-server.pid
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'pnpm build >/tmp/qni-icon-hotlink-www-build.log'
rm -f /tmp/qni-icon-hotlink-www-rails.pid
PORT=4012 PIDFILE=/tmp/qni-icon-hotlink-www-rails.pid RAILS_ENV=test RAILS_SERVE_STATIC_FILES=1 mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails server -b 127.0.0.1 -p 4012' >/tmp/qni-icon-hotlink-www-server.log 2>&1 & echo $! >/tmp/qni-icon-hotlink-www-server.pid
for i in $(seq 1 30); do
  if curl -fsS 'http://127.0.0.1:4012/svg/%7B%22cols%22:%5B%22H%22%5D%7D' >/dev/null 2>&1; then
    break
  fi
  sleep 1
done
```

Expected: `html/`, `apps/www/docs/_site/`, real `apps/www` Rails test server の 3 本が起動し、`/svg/%7B%22cols%22:%5B%22H%22%5D%7D` が 200 を返せる状態になる。

- [ ] **Step 2: Puppeteer で 3 surfaces の lightweight real-page confirmation を実行する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
mkdir -p apps/www/tmp
cat >apps/www/tmp/qni-icon-hotlink-smoke.mjs <<'NODE'
import fs from 'node:fs/promises'
const require = (await import('node:module')).createRequire(import.meta.url)
const puppeteer = require('puppeteer')

const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/google-chrome-stable'
const browser = await puppeteer.launch({
  headless: 'new',
  executablePath,
  args: ['--no-sandbox'],
})

try {
  const tutorial = await browser.newPage()
  await tutorial.setViewport({ width: 390, height: 844, isMobile: true })
  await tutorial.goto('http://127.0.0.1:4010/h_gate.html', { waitUntil: 'domcontentloaded' })
  await tutorial.click('[data-action="click->sidebar#open"]')
  await tutorial.waitForSelector('[data-sidebar-target="menu"]:not(.hidden) img[alt="Qni"]')
  const tutorialResult = await tutorial.$eval('[data-sidebar-target="menu"] img[alt="Qni"]', (img) => ({
    srcAttr: img.getAttribute('src'),
    src: img.src,
    complete: img.complete,
    naturalWidth: img.naturalWidth,
  }))
  if (
    tutorialResult.srcAttr !== './images/qni-icon-512.png' ||
    !tutorialResult.src.endsWith('/images/qni-icon-512.png') ||
    !tutorialResult.complete ||
    tutorialResult.naturalWidth <= 0
  ) {
    throw new Error(`tutorial mobile menu icon mismatch: ${JSON.stringify(tutorialResult)}`)
  }

  const docs = await browser.newPage()
  const docsIconUrl = 'https://qniapp.github.io/qni/images/icon.svg'
  const docsIconBody = await fs.readFile('/home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup/apps/www/docs/_site/images/icon.svg')
  await docs.setRequestInterception(true)
  docs.on('request', (request) => {
    if (request.url() === docsIconUrl) {
      request.respond({ status: 200, contentType: 'image/svg+xml', body: docsIconBody })
    } else {
      request.continue()
    }
  })
  await docs.goto('http://127.0.0.1:4011/h_gate.html', { waitUntil: 'domcontentloaded' })
  await docs.waitForSelector('img[alt="Qni"]')
  const docsResult = await docs.$eval('img[alt="Qni"]', (img) => ({
    srcAttr: img.getAttribute('src'),
    src: img.src,
    complete: img.complete,
    naturalWidth: img.naturalWidth,
  }))
  if (
    docsResult.srcAttr !== docsIconUrl ||
    docsResult.src !== docsIconUrl ||
    !docsResult.complete ||
    docsResult.naturalWidth <= 0
  ) {
    throw new Error(`docs sidebar icon mismatch: ${JSON.stringify(docsResult)}`)
  }

  const www = await browser.newPage()
  await www.goto('http://127.0.0.1:4012/svg/%7B%22cols%22:%5B%22H%22%5D%7D', { waitUntil: 'domcontentloaded' })
  await www.waitForSelector('[data-circuit-svg-target="logo"] img[alt="Qni"]')
  const wwwResult = await www.$eval('[data-circuit-svg-target="logo"] img[alt="Qni"]', (img) => ({
    srcAttr: img.getAttribute('src'),
    src: img.src,
    complete: img.complete,
    naturalWidth: img.naturalWidth,
  }))
  if (
    wwwResult.srcAttr !== '/icon-512.png' ||
    !wwwResult.src.endsWith('/icon-512.png') ||
    !wwwResult.complete ||
    wwwResult.naturalWidth <= 0
  ) {
    throw new Error(`www circuit svg icon mismatch: ${JSON.stringify(wwwResult)}`)
  }

  console.log('tutorial/docs/www icon smoke OK')
} finally {
  await browser.close()
}
NODE
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup/apps/www
PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable mise exec node@20.20.2 -- bash -lc 'pnpm exec node tmp/qni-icon-hotlink-smoke.mjs'
```

Expected: browser smoke が `tutorial/docs/www icon smoke OK` で成功し、tutorial mobile menu / docs sidebar / real `apps/www` `svg/(:json)` route の 3 surfaces すべてで page-level icon reference が承認済み path を使い、3 icon とも `img.complete` / `naturalWidth > 0` を満たして実際に読み込まれる。

- [ ] **Step 3: smoke servers を cleanup する**

Run:

```bash
kill $(cat /tmp/qni-icon-hotlink-tutorial-server.pid) $(cat /tmp/qni-icon-hotlink-docs-server.pid) $(cat /tmp/qni-icon-hotlink-www-server.pid)
rm -f /tmp/qni-icon-hotlink-tutorial-server.pid /tmp/qni-icon-hotlink-docs-server.pid /tmp/qni-icon-hotlink-www-server.pid /tmp/qni-icon-hotlink-www-rails.pid
rm -f /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup/apps/www/tmp/qni-icon-hotlink-smoke.mjs
```

Expected: temporary servers が停止する。log / smoke fixture は temp artifact のままでよい。

- [ ] **Step 4: final mechanical checks を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/first-party-icon-hotlink-cleanup
BASE_SHA=$(cat /tmp/qni-icon-hotlink-base-sha)
git diff --check "$BASE_SHA"
if test -n "$(git status --short)"; then
  echo 'expected clean working tree before final handoff'
  git status --short
  exit 1
fi
python - <<'PY'
import pathlib, subprocess, sys
base_sha = pathlib.Path('/tmp/qni-icon-hotlink-base-sha').read_text().strip()
changed = set(filter(None, subprocess.check_output(['git', 'diff', '--name-only', base_sha], text=True).splitlines()))
allowed = {
    'apps/tutorial/_includes/off_canvas_menu_for_mobile.html',
    'apps/www/docs/_includes/sidebar.html',
    'apps/www/app/views/circuit_svg/_circuit_svg.html.erb',
}
extra = sorted(path for path in changed if path not in allowed and not (path.startswith('html/') and path.endswith('.html')))
if extra:
    print('Unexpected changed files in final diff:')
    for path in extra:
        print(path)
    sys.exit(1)
print('Final diff scope OK')
PY
```

Expected: whitespace / merge-marker issues が無く、final diff は approved tracked files に閉じる。

- [ ] **Step 5: real-page confirmation task は commit しない**

この task は verification only。temp artifacts は commit しない。

### Task 6: final review と execution handoff を完了する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-20-qni-first-party-icon-hotlink-cleanup-design.md`
- Reference: `docs/superpowers/plans/2026-04-20-qni-first-party-icon-hotlink-cleanup.md`

- [ ] **Step 1: reviewer subagent で final implementation diff をレビューする**

Review context に含めるもの:

- spec path: `docs/superpowers/specs/2026-04-20-qni-first-party-icon-hotlink-cleanup-design.md`
- plan path: `docs/superpowers/plans/2026-04-20-qni-first-party-icon-hotlink-cleanup.md`
- diff target: `$(cat /tmp/qni-icon-hotlink-base-sha)..HEAD`
- explicit constraints:
  - scope is only the 3 approved source replacements
  - nearest existing local asset per boundary only
  - no new image files and no shared icon system
  - tutorial generated output may change only under tracked `html/*.html`
  - docs `_site/**` is verification-only and not committed
  - no Orbit / Plausible / broader asset-policy changes
  - verification B requires machine checks plus lightweight real-page confirmation for tutorial mobile menu, docs sidebar, and www circuit SVG logo

Expected: APPROVED。Issues Found の場合は worktree で修正し、relevant verification steps を再実行してから reviewer をやり直す。

- [ ] **Step 2: execution handoff 用に final verification 状態をまとめる**

Capture in notes / handoff summary:

- changed tracked files
- tutorial `build:site` result and generated `html/*.html` old/new path outcome
- docs `build:docs` result and generated `_site/**/*.html` old/new path outcome
- circuit SVG render check result
- Puppeteer real-page smoke result for 3 surfaces
- final diff scope remains inside approved files

Expected: a low-context worker can continue from the dedicated worktree with the plan, spec, and verification summary only.
