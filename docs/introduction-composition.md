# Introduction composition (#637 phase 2)

The Pages workflow still builds the legacy Jekyll site normally and publishes automatically on main push. Before the existing upload, it builds tutorial commit `17dfa8b2e073a07751739e2bbda313aca7405962` with migration enabled and source-generated WebGPU embeds. The migration header uses selectable colored Qni/Tutorial text, the logo mark and a GitHub icon linking to `https://github.com/qniapp/qni`, without the experimental badge. It stays visible while scrolling, with prose scroll targets clear of the bar. The experimental tutorial's default build is unchanged.

**Publication dependency:** that exact tutorial commit must be published to `qniapp/qni-tutorial-webgpu` before an approved push of this repository. Checkout must fail if unavailable, never fall back to main. Its `qni-webgpu.ref` pins source `4f4a7f597791868149e9bc3fd8740699190bd54a`; its prebuilt release pin is not used here. Rust follows that source's toolchain (`stable`); Trunk is 0.21.14. Remote Actions execution is not locally verified.

## Build and preview

Use an isolated old-site checkout. Node 22.23.2, Ruby 4.0.2, pnpm 10.33.0, Rust/wasm target and Trunk are required. `build:site` updates tracked generated output; do not commit those files. Save the baseline before composition. Choose a free localhost port.

```sh
corepack pnpm install --frozen-lockfile
(cd apps/tutorial && bundle install)
corepack pnpm --dir apps/tutorial build:site

# Both checkouts MUST be outside the legacy pnpm workspace, including in CI.
# Otherwise pnpm can install the legacy projects and leave Astro/embed deps absent.
# The workflow moves both nested checkouts together into a unique RUNNER_TEMP dir.
work=$(mktemp -d)
cp -a html "$work/baseline"
# Until publication, clone the read-only phase-1 worker repo instead of GitHub.
git clone https://github.com/qniapp/qni-tutorial-webgpu.git "$work/tutorial"
git -C "$work/tutorial" checkout --detach 17dfa8b2e073a07751739e2bbda313aca7405962
(
  cd "$work/tutorial"
  corepack pnpm install --frozen-lockfile # tutorial packageManager: 9.15.9
  git clone https://github.com/qniapp/qni-webgpu.git .qni-webgpu-source
  git -C .qni-webgpu-source checkout --detach "$(tr -d '\r\n' < qni-webgpu.ref)"
  # Ensure pnpm 9.15.9 is on PATH for the upstream shell build script too.
  bash scripts/fetch-qni-webgpu.sh .qni-webgpu-source
  corepack pnpm run typecheck
  QNI_TUTORIAL_MIGRATION=1 QNI_EMBED_PREBUILT=0 QNI_H_GATE_PREBUILT=0 \
    corepack pnpm run build --outDir .astro/migration-dist
  corepack pnpm exec playwright install chromium
)
mkdir -p "$work/root/qni"
cp -a "$work/baseline/." "$work/root/qni/"
node --test scripts/compose-introduction.test.mjs
node scripts/compose-introduction.mjs "$work/root/qni" "$work/tutorial/.astro/migration-dist"
python3 -m http.server 8767 --bind 127.0.0.1 --directory "$work/root" > "$work/preview.log" 2>&1 &
echo "Preview PID=$! root=$work/root log=$work/preview.log"
node scripts/check-introduction-preview.mjs "$work/tutorial" http://127.0.0.1:8767/qni/ "$work/evidence"
```

The two CI pnpm setup steps must use separate installation destinations. `pnpm/action-setup` replaces its destination recursively; sharing it deletes the pnpm 10 store that `setup-node` saves after the build. The tutorial uses `~/setup-pnpm-tutorial`, preserving the legacy setup and cache without suppressing cache failures.

Astro's output must share its checkout's filesystem. The upstream asset script builds fresh pinned embed JS/WASM/error modules and its diagnostic app. Composition includes only `index.html`, `_astro/`, `qni-webgpu/`, `qni-favicon.ico`, the three introduction SVGs, and `images/introduction/qni_screenshot_grover.png`. It never copies other routes, the diagnostic app, or all images. Equal existing assets are reused; any differing collision fails before modifying output. Symlinks and file/directory collisions are refused. Only old `index.html` may change.

The command tests cover selection, preservation, differing collision refusal, equal reuse and repeat composition. The browser check requests actual local assets and TOC targets, checks both `/qni/` and `/qni/index.html` at 1280px/390px, verifies the colored text wordmark, home/GitHub targets and absence of the experiment badge, verifies the header stays at the top after scrolling at least 1000px with usable home/GitHub hit targets, opens the mobile drawer after scrolling, checks prose targets clear the header, opens menus, follows Next to the real `/qni/qpu.html`, checks its published algorithm-count correction and actual return link, and saves screenshots plus local/external error reports. It uses headless Chromium/SwiftShader, **software WebGPU**, not a physical GPU. A real canvas drag inserts H after H and GPU readback verifies the resulting identity operation; a separate GPU-disabled browser checks the unavailable-adapter guidance, successful dynamic error-module loading and MIME type, and local asset/console/page errors. Orbit responses are recorded separately from local failures. The explicit icon link and HTTP icon MIME/bytes are checked against the legacy ICO SHA-256 (`f2c4bad949b0ec8860fd84b540c014d8745479889f42f67ecdd8e09b4c114ef9`). The rendered icon asset is captured separately; headless screenshots do not verify browser tab chrome. The experimental tutorial keeps its SVG icon. Physical mobile/device acceptance remains a human check.

## Legacy shell integration

The remaining Jekyll pages use a namespaced shell stylesheet, `apps/tutorial/css/tutorial_shell.css`, loaded after `application.css`. The migration header, cream/light palette, 256px desktop sidebar and chapter disclosures match the pinned introduction. Legacy navigation entries remain real links in their original order, with the current page marked and its chapter open. The native mobile dialog retains the Stimulus menu/body/bodyMd targets, sidebar scroll persistence and open chapters; it supports keyboard focus wrapping, Escape, backdrop dismissal, scroll locking and desktop resize closure. No introduction pin, composition allowlist, deployment workflow, lesson prose or circuit definitions change.

The old favicon is also a source asset, byte-identical to the pinned overlay's favicon. Existing wide static circuit wrappers get horizontal scrolling without resizing their custom elements. A stale phase-gate script targeting a nonexistent circle-notation element was removed; its qubit-circle diagram remains unchanged.

After a fresh legacy build, save that new baseline and compose the pinned introduction over it. Run the existing introduction check and the focused shell regression against the same preview, using a free port (8768 for this worker):

```sh
node scripts/check-legacy-shell-preview.mjs "$work/tutorial" http://127.0.0.1:8768/qni/ "$work/shell-evidence"
```

This checks introduction-to-QPU-to-home navigation at desktop/mobile sizes, matching header background/geometry, sticky positioning, page overflow, current navigation, dialog keyboard/focus/backdrop behavior and restored sidebar scroll positions. Every legacy TOC page is rendered in a fresh browser context and its local source assets requested. Representative desktop/mobile legacy circuit gestures insert H into a live simulator and verify both rendered amplitudes, exercise the operation menu and palette help, and confirm MathJax rendering and Orbit presence. External failures are recorded separately. The legacy mobile pointer menu requires an activation click followed by a second click, also reproduced on the unmodified baseline; this shell change does not redesign circuit interactions. Orbit's external iframe availability and physical touch-device behavior still require separate acceptance. Screenshots cover the transition, scrolled header, navigation, circuit and help.

Compare the composed tree with the newly built baseline, not with pre-shell HTML. Old pages naturally change with the shared shell; only the introduction may differ between that new baseline and its overlay.

## Release checks and limits

Build the legacy baseline freshly from the reconciled published source and lockfile. Do not reuse an older preview baseline after source history changes. Before approval, compare every baseline file's SHA-256 against the composed output: only `index.html` may differ, and additions must be limited to the selection above. Retain manifests, source hashes, preview process ownership, screenshots and test logs outside committed source and include their locations in the handoff. Temporary preview storage is not durable release storage.

Run the six command tests, composed browser check, old-site typecheck/lint/config checks and full `pnpm test:ci`, pinned tutorial typecheck/migration/unit tests, Prettier and actionlint. Verify fresh dependencies and generated assets using the workflow's actual checkout-and-move layout, not just a previously built standalone checkout. Inspect `main...origin/main` before landing, preserve unpublished commits and reconcile the intended source history only under separate approval. Refresh preview evidence if the old source changes.

Passing local checks does not complete #637. Human preview approval, exact-SHA landing approvals for each repository, separate push/publication approval, and production verification are still required. A push to either main can trigger that repository's existing publication. No push, PR, landing or deployment is part of this worker task.

Rollback plan, not executed: retain the approved old source/output and provenance; prepare a separate reviewed change that restores the old introduction build (including removal of this overlay), compare the rebuilt legacy output, obtain separate push approval, then verify production. Do not force-push, reset shared main, or overwrite production from an unreviewed local artifact.
