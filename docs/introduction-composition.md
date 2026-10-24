# Introduction composition (#637 phase 2)

The Pages workflow still builds the legacy Jekyll site normally and publishes automatically on main push. Before the existing upload, it builds tutorial commit `217a691d88ff4ec4a2a02d5235f065ade7d91527` with migration enabled and source-generated WebGPU embeds. The experimental tutorial's default build is unchanged.

**Publication dependency:** that exact tutorial commit must be published to `qniapp/qni-tutorial-webgpu` before an approved push of this repository. Checkout must fail if unavailable, never fall back to main. Its `qni-webgpu.ref` pins source `4f4a7f597791868149e9bc3fd8740699190bd54a`; its prebuilt release pin is not used here. Rust follows that source's toolchain (`stable`); Trunk is 0.21.14. Remote Actions execution is not locally verified.

## Build and preview

Use an isolated old-site checkout. Node 22.23.2, Ruby 4.0.2, pnpm 10.33.0, Rust/wasm target and Trunk are required. `build:site` updates tracked generated output; do not commit those files. Save the baseline before composition. Choose a free localhost port.

```sh
corepack pnpm install --frozen-lockfile
(cd apps/tutorial && bundle install)
corepack pnpm --dir apps/tutorial build:site

# An external temporary directory keeps builds/screenshots out of source.
work=$(mktemp -d)
cp -a html "$work/baseline"
# Until publication, clone the read-only phase-1 worker repo instead of GitHub.
git clone https://github.com/qniapp/qni-tutorial-webgpu.git "$work/tutorial"
git -C "$work/tutorial" checkout --detach 217a691d88ff4ec4a2a02d5235f065ade7d91527
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

Astro's output must share its checkout's filesystem. The upstream asset script builds fresh pinned embed JS/WASM/error modules and its diagnostic app. Composition includes only `index.html`, `_astro/`, `qni-webgpu/`, `favicon.svg`, the three introduction SVGs, and `images/introduction/qni_screenshot_grover.png`. It never copies other routes, the diagnostic app, or all images. Equal existing assets are reused; any differing collision fails before modifying output. Symlinks and file/directory collisions are refused. Only old `index.html` may change.

The command tests cover selection, preservation, differing collision refusal, equal reuse and repeat composition. The browser check requests actual local assets and TOC targets, checks both `/qni/` and `/qni/index.html` at 1280px/390px, opens menus, follows Next to the real `/qni/qpu.html` and its actual return link, and saves screenshots plus local/external error reports. It uses headless Chromium/SwiftShader, **software WebGPU**, not a physical GPU. A real canvas drag inserts H after H and GPU readback verifies the resulting identity operation; a separate GPU-disabled browser checks the unavailable-adapter guidance and dynamically imported error module. Orbit responses are recorded separately from local failures. Physical mobile/device acceptance remains a human check.

## Local evidence and release limits

The first phase-2 preview used old source `88fa11396e91b13a6545332600a7131a6c2ec491`, the exact tutorial pin above, and its source embed pin. All 293 baseline files were compared by SHA-256: only `index.html` changed, 41 selected files were added. Index SHA-256 was `174446379359dbd1dab14a85de24cb1cc52523fdb57b7aba34528859e430aa3e`. Evidence, manifests, build logs and the localhost preview are outside source at `/tmp/qni-637-compose/`; the preview root is `preview/`, process ownership is in `preview.pid`, server log is `preview.log`, screenshots and browser report are in `evidence/`. Temporary storage is not durable release storage.

Local checks passed: six composition command tests; the composed browser check; old-site typecheck, lint, Pages/local-build config checks and full `pnpm test:ci`; pinned tutorial typecheck, migration regression and unit tests; Prettier and actionlint. The old full suite needed an isolated PostgreSQL cluster rather than the unrelated localhost database. Its socket/data/logs are under `/tmp/qni-637-compose/pgsocket`, `pgdata` and `postgres.log` (socket-only port 55467, owned by this worker). No shared database was altered. GitHub returned 404 for the tutorial pin during verification, so remote publication remains a prerequisite, not a completed check.

Local main includes three unpublished documentation commits (`95131fc0`, `ae0abf19`, `88fa1139`). Observed remote main was `c034bfd39020137750cda1ac004461ddcb4ef76c` and has a separate history since the common base. Neither main nor those remote changes were integrated or overwritten here. Before landing/publication, reconcile the intended source history under separate approval, review all pending differences and refresh preview evidence if the old source changes.

Passing local checks does not complete #637. Human preview approval, exact-SHA landing approvals for each repository, separate push/publication approval, and production verification are still required. A push to either main can trigger that repository's existing publication. No push, PR, landing or deployment is part of this worker task.

Rollback plan, not executed: retain the approved old source/output and provenance; prepare a separate reviewed change that restores the old introduction build (including removal of this overlay), compare the rebuilt legacy output, obtain separate push approval, then verify production. Do not force-push, reset shared main, or overwrite production from an unreviewed local artifact.
