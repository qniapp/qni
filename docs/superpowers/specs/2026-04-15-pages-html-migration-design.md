# Qni Pages html output migration design

## Goal

Free the top-level `docs/` directory for agent-facing Markdown while keeping the tutorial site published at `https://qniapp.github.io/qni/`.

## Current state

- GitHub Pages publishes from `main:/docs` using the legacy branch-based build.
- `apps/tutorial` is the source Jekyll site and currently writes generated HTML into the repository root `docs/` directory.
- The repository root `docs/` directory therefore cannot be used for Markdown specs and plans.

## Chosen approach

1. Rename the generated site directory from `docs/` to `html/`.
2. Update `apps/tutorial` scripts so local Jekyll output also targets `html/`.
3. Add a GitHub Actions Pages workflow that builds `apps/tutorial` and deploys the generated `html/` directory as the Pages artifact.
4. Recreate `docs/` as a Markdown-only directory for agent-facing documents.

## Why this approach

- GitHub Pages branch publishing only supports `/` or `/docs`, so `html/` requires GitHub Actions deployment.
- Keeping generated HTML in `html/` makes the separation between source docs and published site explicit.
- The public URL remains unchanged because Pages deployment source changes, not the site path.

## Verification strategy

- Add a repository-level config check that fails until the tutorial output path, workflow, and root directory layout all match the new design.
- Run the config check before and after the implementation.
- Run the tutorial build workflow locally enough to confirm `html/` is a valid build destination.
