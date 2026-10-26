# Introduction composition (#637 phase 2)

The Pages workflow still builds the legacy Jekyll site normally and publishes automatically on main push. Before the existing upload, it builds tutorial commit `a7d6963218cd389b564018335e613008a147eba5` with migration enabled and source-generated WebGPU embeds. The migration header uses selectable colored Qni/Tutorial text, the logo mark and a GitHub icon linking to `https://github.com/qniapp/qni`, without the experimental badge. It stays visible while scrolling, with prose scroll targets clear of the bar. The experimental tutorial retains its separate default URL and navigation.

**Publication dependency:** that exact tutorial commit must be published to `qniapp/qni-tutorial-webgpu` before an approved push of this repository. Checkout must fail if unavailable, never fall back to main. Its `qni-webgpu.ref` pins source `33366e270556c69201da901612cb522b4e18e2ee`; its prebuilt release pin is not used here. Rust follows that source's toolchain (`stable`); Trunk is 0.21.14. The design/prose baseline was tutorial `7aeb59678225fe927b80d2da40997e82c8d0fb41` (deployment run `40139252423`). The subsequently approved `6e0a7af` dependency commit is retrievable from GitHub and adds source attribution/touch regressions without changing lesson content. Local build verification is independent of upstream deployment status and does not trigger deployment.

The initial-breakpoint follow-up advances only the tutorial dependency to `9e9a72129fd69cd30394f66a8c00d63ae13029d3`. Its introduction adds `selected-step="2"`: initialization is semantic column 0, H is 1 and CNOT is 2; comment markers do not count. The unchanged circuit retains its measurement gates, but initially displays the Bell state immediately after CNOT and before either measurement. Readers can still select initialization, H and CNOT using the real step labels. The composed regression verifies initial step 2 and GPU Bell-state readback on both entry URLs at all five widths. The engine remains `33366e2`, with source builds and gestures unchanged. This follow-up does not fix or waive the separately observed Chromium touch-cancellation console interventions.

The quiz-layout follow-up pins the published, unmerged head of [tutorial PR #63](https://github.com/qniapp/qni-tutorial-webgpu/pull/63), `a7d6963218cd389b564018335e613008a147eba5`. The introduction uses a plain quiz heading and body paragraphs for the button instructions, without the gray wrapper. The upstream shared CSS no longer adds the English-only note. The legacy QPU source and generated page do not contain that note; no QPU text removal is needed here. Other upstream pages retain their quiz frames, and the composition still imports only the introduction. The workflow accepts an exact published commit SHA; merging the upstream PR is not required to build it.

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
port=8767 # Choose an unused localhost port.
preview="http://127.0.0.1:$port/qni/"
cp -a html "$work/baseline"
git clone https://github.com/qniapp/qni-tutorial-webgpu.git "$work/tutorial"
git -C "$work/tutorial" checkout --detach a7d6963218cd389b564018335e613008a147eba5
(
  cd "$work/tutorial"
  corepack pnpm install --frozen-lockfile # tutorial packageManager: 9.15.9
  git clone https://github.com/qniapp/qni-webgpu.git .qni-webgpu-source
  git -C .qni-webgpu-source checkout --detach "$(tr -d '\r\n' < qni-webgpu.ref)"
  # Ensure pnpm 9.15.9 is on PATH for the upstream shell build script too.
  QNI_SOURCE_COMMIT="$(git -C .qni-webgpu-source rev-parse HEAD)" \
    bash scripts/fetch-qni-webgpu.sh .qni-webgpu-source
  corepack pnpm run typecheck
  QNI_TUTORIAL_MIGRATION=1 QNI_EMBED_PREBUILT=0 QNI_H_GATE_PREBUILT=0 \
    corepack pnpm run build --outDir .astro/migration-dist
  corepack pnpm exec playwright install chromium
)
mkdir -p "$work/root/qni"
cp -a "$work/baseline/." "$work/root/qni/"
node --test scripts/compose-introduction.test.mjs scripts/check-pages-config.test.mjs
node scripts/compose-introduction.mjs "$work/root/qni" "$work/tutorial/.astro/migration-dist"
python3 -m http.server "$port" --bind 127.0.0.1 --directory "$work/root" > "$work/preview.log" 2>&1 &
echo "Preview PID=$! root=$work/root log=$work/preview.log"
node scripts/check-introduction-preview.mjs "$work/tutorial" "$preview" "$work/evidence"
node scripts/check-introduction-scroll-preview.mjs "$work/tutorial" "$preview" "$work/scroll-evidence"
```

The source-assets CI step explicitly binds `QNI_SOURCE_COMMIT` to the same exact WebGPU ref used for checkout. The engine builder otherwise prefers the consumer repository's `GITHUB_SHA` over its own HEAD. Config regressions reject that parent-SHA substitution; final build acceptance also checks the generated source metadata.

The two CI pnpm setup steps must use separate installation destinations. `pnpm/action-setup` replaces its destination recursively; sharing it deletes the pnpm 10 store that `setup-node` saves after the build. The tutorial uses `~/setup-pnpm-tutorial`, preserving the legacy setup and cache without suppressing cache failures.

Astro's output must share its checkout's filesystem. The upstream asset script builds fresh pinned embed JS/WASM/error modules and its diagnostic app. Composition includes only `index.html`, `_astro/`, `qni-webgpu/`, `qni-favicon.ico`, the three introduction SVGs, and `images/introduction/qni_screenshot_grover.png`. It never copies other routes, the diagnostic app, or all images. Equal existing assets are reused; any differing collision fails before modifying output. Symlinks and file/directory collisions are refused. Only old `index.html` may change.

The command tests cover selection, preservation, differing collision refusal, equal reuse and repeat composition. The browser check requests actual local assets and TOC targets, checks both `/qni/` and `/qni/index.html` at 390px, 700px, 768px, 1024px and 1280px, verifies the colored text wordmark, home/GitHub targets and absence of the experiment badge, verifies the header stays at the top after scrolling at least 1000px with usable home/GitHub hit targets, opens the mobile drawer after scrolling, checks prose targets clear the header, opens menus, follows Next to the real `/qni/qpu.html`, checks its published algorithm-count correction and actual return link, and saves screenshots plus local/external error reports. It uses headless Chromium/SwiftShader, **software WebGPU**, not a physical GPU. A real canvas drag inserts H after H and GPU readback verifies the resulting identity operation; a separate GPU-disabled browser checks the unavailable-adapter guidance, successful dynamic error-module loading and MIME type, and local asset/console/page errors. Orbit responses are recorded separately from local failures. The explicit icon link and HTTP icon MIME/bytes are checked against the legacy ICO SHA-256 (`f2c4bad949b0ec8860fd84b540c014d8745479889f42f67ecdd8e09b4c114ef9`). The rendered icon asset is captured separately; headless screenshots do not verify browser tab chrome. The experimental tutorial keeps its SVG icon. Physical mobile/device acceptance remains a human check.

## Legacy shell integration

The remaining Jekyll pages use a namespaced shell stylesheet, `apps/tutorial/css/tutorial_shell.css`, loaded after `application.css`. The migration header, cream/light palette, 256px desktop sidebar and chapter disclosures match the pinned introduction. Legacy navigation entries remain real links in their original order, with the current page marked and its chapter open. The native mobile dialog retains the Stimulus menu/body/bodyMd targets, sidebar scroll persistence and open chapters; it supports keyboard focus wrapping, Escape, backdrop dismissal, scroll locking and desktop resize closure. The refresh keeps the composition allowlist, lesson prose and circuit definitions unchanged. Its minimal shell follow-up matches the approved prose/note column widths, darker notes and previous/next cards. Header and sidebar geometry already match and need no redesign.

The old favicon is also a source asset, byte-identical to the pinned overlay's favicon. Existing wide static circuit wrappers get horizontal scrolling without resizing their custom elements. A stale phase-gate script targeting a nonexistent circle-notation element was removed; its qubit-circle diagram remains unchanged.

After a fresh legacy build, save that new baseline and compose the pinned introduction over it. Run the existing introduction check and the focused shell regression against the same preview:

```sh
node scripts/check-legacy-shell-preview.mjs "$work/tutorial" "$preview" "$work/shell-evidence"
```

This checks introduction-to-QPU-to-home navigation at 390px, 700px, 768px, 1024px and 1280px, matching prose width, footer card surfaces and header background/geometry, sticky positioning, page overflow, current navigation, dark-OS footer hover contrast, dialog keyboard/focus/backdrop behavior and sidebar scroll restoration after closing and reloading. Hidden panels never overwrite saved scroll positions; Escape saves before the native dialog closes. Sidenote space begins at the same 640px breakpoint as the notes. Shor QFT is also checked at 390px, 700px, 768px and 1024px: its state table keeps aligned headers and scrolls to the last columns, while the existing circuit scrollport contains its absolute output and allows the final operation to be reached without scrolling the page horizontally. Every legacy TOC page is rendered in a fresh browser context and its local source assets requested. Representative desktop/mobile legacy circuit gestures insert H into a live simulator and verify both rendered amplitudes, exercise the operation menu and palette help, and confirm MathJax rendering and Orbit presence. External failures are recorded separately. The legacy mobile pointer menu requires an activation click followed by a second click, also reproduced on the unmodified baseline; this shell change does not redesign circuit interactions. Orbit's external iframe availability and physical touch-device behavior still require separate acceptance. Screenshots cover the transition, scrolled header, navigation, circuit and help.

Compare the composed tree with the newly built baseline, not with pre-shell HTML. Old pages naturally change with the shared shell; only the introduction may differ between that new baseline and its overlay.

## Reviewed refresh evidence

The refresh compares `17dfa8b2e073a07751739e2bbda313aca7405962` with exactly `7aeb59678225fe927b80d2da40997e82c8d0fb41`, fetched from GitHub before changing the pin. The latter includes #38 design and #39 prose corrections. Introduction changes include the lead/section headings, wider diagrams, revised sidenotes, Orbit framing, navigation cards and the embed scroll gate. Content assertions follow upstream's `tests/hajimeni-text-corrections.spec.ts`: Feynman's quotation and 1982 paper/p. 486 citation, transistor-based classical bits, quantum states, roughly 1,000 Grover searches, fault-tolerant hardware qualification for cryptography, simulator spelling and quiz wording. No upstream changes to other lessons are overlaid.

Keep initial live official/tutorial and before-alignment screenshots at all five widths, `upstream.diff` and `comparison-before.json` separate from final evidence. Record the actual evidence directory, preview URL and process ownership in the private release handoff, not as machine-specific paths in this document. `tutorial-pin.diff`, `provenance.json`, build/test logs, `baseline-sha256.json`, `composed-sha256.json`, `migration-sha256.json` and `overlay-comparison.json` identify the exact inputs and output. Of 296 fresh baseline files, only `index.html` differs; 40 allowed files are added and none are missing. Repeat composition is identical. Final screenshots/reports are in `evidence-intro/`, `evidence-shell/` and `evidence-scroll/`; `comparison-after.json` and `*-top-*.png` / `*-footer-*.png` show the shared shell transition. Header/sidebar geometry was already equal; prose widths differed at 700/1024/1280px and legacy footer links lacked the reviewed card treatment. Shell changes address those differences without migrating pages. Legacy Orbit prompt content and its existing iframe color remain unchanged; the introduction's brown iframe and Japanese quiz framing belong to the reviewed upstream introduction.

The initial `7aeb596` source path exposed broken native touch scrolling: the retained `native-reproduction.json` records unchanged scrollY 3747 over the authored canvas, while the live prebuilt tutorial scrolled by 205px. The source dependency review is in `docs/introduction-dependency-review.md`; diagnostic artifacts are listed in the private release handoff. The human approved advancing source to `33366e2`, supplied through exact tutorial `6e0a7af`. A fresh checkout-and-move build now passes the same authored-canvas regression (3747 to 3952), plus first gate drag, horizontal pan/tap and subsequent native scrolling. The build ran with foreign parent `GITHUB_SHA=d1e69326980742c753c71040078ad45b2463a1d6`; the actual browser-loaded module reports WebGPU source `33366e270556c69201da901612cb522b4e18e2ee` and API version 1, not the parent SHA.

The scroll check uses real software WebGPU and browser-dispatched touch input: inactive wheel scroll, activation, keyboard focus/release, first gate deletion without a preliminary activation tap, horizontal panning swipe, subsequent later-step tap and native vertical article scrolling. Panning is proved by tapping the same canvas coordinate before and after the swipe, resetting only selection between the baseline tap and swipe. The recorded selected step changes from 1 to 6; suppressing only the horizontal swipe leaves it at 1 and fails the assertion. That no-pan negative control preserves the authored-circuit and vertical-scroll checks. Its wide-circuit subcase authors deterministic test columns only in browser memory. It does not substitute a runtime or change source circuit definitions. The intro still does not request MathJax; the legacy regression checks actual MathJax rendering. Physical touch devices, physical GPUs and browser tab chrome remain unverified. Local asset/page-error checks and the mouse-path console check pass. Separate native-touch production verification records Chromium passive-listener and non-cancelable-event console interventions; their disposition remains separate from the initial-breakpoint follow-up. The shell report records two aborted external `https://withorbit.com/embed` requests separately; no introduction external request failed in that run. Orbit's external iframe availability is not a local asset guarantee.

Final automated results: 14 composition/config command tests; legacy lint/typecheck/config and full tests (186 common, 1,153 elements, 294 simulator, and 27 Rails tests with 134 assertions); tutorial typecheck, migration test, 35 Node unit tests and 46 Playwright unit tests; all three composed browser checks; Prettier and actionlint. The Rails suite uses an isolated test PostgreSQL database. No prebuilt runtime or diagnostic app is copied into the composition.

## Release checks and limits

Build the legacy baseline freshly from the reconciled published source and lockfile. Do not reuse an older preview baseline after source history changes. Before approval, compare every baseline file's SHA-256 against the composed output: only `index.html` may differ, and additions must be limited to the selection above. Retain manifests, source hashes, preview process ownership, screenshots and test logs outside committed source and include their locations in the handoff. Temporary preview storage is not durable release storage.

Run the six command tests, composed browser check, old-site typecheck/lint/config checks and full `pnpm test:ci`, pinned tutorial typecheck/migration/unit tests, Prettier and actionlint. Verify fresh dependencies and generated assets using the workflow's actual checkout-and-move layout, not just a previously built standalone checkout. Inspect `main...origin/main` before landing, preserve unpublished commits and reconcile the intended source history only under separate approval. Refresh preview evidence if the old source changes.

Passing local checks does not complete #637. Human preview approval, exact-SHA landing approvals for each repository, separate push/publication approval, and production verification are still required. A push to either main can trigger that repository's existing publication. Local verification does not authorize a push, PR, landing or deployment.

Rollback plan, not executed: retain the approved old source/output and provenance; prepare a separate reviewed change that restores the old introduction build (including removal of this overlay), compare the rebuilt legacy output, obtain separate push approval, then verify production. Do not force-push, reset shared main, or overwrite production from an unreviewed local artifact.
