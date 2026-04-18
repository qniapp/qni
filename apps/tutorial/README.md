# @qni/tutorial

Source files for the Qni tutorial site published at <https://qniapp.github.io/qni/>.

## Local development

Run these commands from `apps/tutorial/`.

- `pnpm build` builds the tutorial CSS and JavaScript assets.
- `pnpm build:site` builds the required monorepo packages plus the tutorial site, then renders the Jekyll output into the repository root `html/` directory.
- `pnpm start` serves the Jekyll site locally and writes the generated files into `html/`.
