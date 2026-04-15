# Qni Pages html output migration Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move GitHub Pages output from `docs/` to `html/` so `docs/` can hold agent Markdown.

**Architecture:** Keep `apps/tutorial` as the Jekyll source of truth, but publish the generated site from `html/` through a GitHub Actions Pages workflow instead of the legacy `main:/docs` source. Recreate `docs/` as a Markdown-only directory for specs and plans.

**Tech Stack:** Git, GitHub Pages, GitHub Actions, Node.js, Yarn 1, Ruby/Jekyll

---

### Task 1: Lock the desired config in a failing test

**Files:**

- Create: `scripts/check-pages-config.mjs`
- Modify: `package.json`

- [ ] **Step 1: Write the failing test**

Create a Node-based config check that asserts:

- `apps/tutorial/package.json` writes Jekyll output to `../../html`
- `.github/workflows/pages.yml` exists and deploys Pages from `html`
- root `.prettierignore` ignores `html/` instead of root `docs/`
- `html/index.html` exists and `docs/index.html` does not

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:pages-config`
Expected: FAIL because the repo still points tutorial output to `docs/` and has no Pages workflow.

- [ ] **Step 3: Add the test runner entry**

Add `test:pages-config` to the root `package.json` scripts.

- [ ] **Step 4: Re-run the test to confirm the red state**

Run: `npm run test:pages-config`
Expected: FAIL with a message describing the first missing migration requirement.

### Task 2: Move generated site output to html

**Files:**

- Modify: `apps/tutorial/package.json`
- Modify: `.prettierignore`
- Move: `docs/` → `html/`
- Create: `docs/README.md`

- [ ] **Step 1: Point tutorial scripts at `html/`**

Update `apps/tutorial/package.json` so:

- `start` writes to `../../html`
- `build:site` builds assets and runs Jekyll into `../../html`

- [ ] **Step 2: Move the tracked generated site**

Run: `git mv docs html`
Expected: all previously tracked Pages HTML now lives under `html/`.

- [ ] **Step 3: Recreate Markdown docs directory**

Create `docs/README.md` documenting that `docs/` now stores agent-facing Markdown.

- [ ] **Step 4: Update ignore rules**

Replace the root `docs/` entry in `.prettierignore` with `html/`.

### Task 3: Switch Pages deployment to GitHub Actions

**Files:**

- Create: `.github/workflows/pages.yml`
- Modify: `README.md`

- [ ] **Step 1: Add Pages workflow**

Create a workflow that:

- checks out the repo
- configures Pages
- installs Node and Yarn 1
- installs workspace dependencies
- sets up Ruby for `apps/tutorial`
- runs `yarn workspace @qni/tutorial build:site`
- uploads `html/` as the Pages artifact
- deploys with `actions/deploy-pages`

- [ ] **Step 2: Document the new root directory roles**

Update `README.md` to explain:

- `html/` is the generated Pages artifact
- `docs/` is reserved for Markdown docs

### Task 4: Verify locally and prepare remote switch

**Files:**

- Verify only

- [ ] **Step 1: Run the migration config check**

Run: `npm run test:pages-config`
Expected: PASS.

- [ ] **Step 2: Run the tutorial site build**

Run: `cd apps/tutorial && bundle exec jekyll build -d ../../html`
Expected: PASS and refresh files under `html/`.

- [ ] **Step 3: Summarize the remaining GitHub setting change**

After the workflow is on `main`, set repository Pages source to GitHub Actions.
Suggested command:
`gh api --method PUT repos/qniapp/qni/pages -f build_type=workflow`

- [ ] **Step 4: Request review**

Request a code review focused on the directory migration, workflow correctness, and local verification evidence.
