# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Add durable project-specific notes here as they are discovered through real work.

## Toolchain sharp edges

- Prettier version is coupled to eslint: `eslint-plugin-github` (root devDependency) declares
  `prettier` and `eslint-plugin-prettier` as its own regular dependencies, so upgrading prettier
  in isolation leaves eslint running a different prettier. eslint-plugin-github 4.9.x+ is the
  Prettier 3 line (prettier ^3, eslint-plugin-prettier ^5); eslint-plugin-prettier 4.x is
  incompatible with prettier 3's async API. Keep prettier, eslint-plugin-github, pretty-quick,
  and @types/prettier moving together.
- Formatting contracts: `pnpm fix:style` covers only `packages/{common,simulator,elements}/src`
  (per-package config from each package.json `prettier` field); the eslint `prettier/prettier`
  rule covers everything eslint lints; pretty-quick formats staged files only. Files outside
  all three can stay unformatted.
- Running the full validation locally: lint:tutorial and test:www need `bundle install` in
  `apps/tutorial` and `apps/www`; test:www/test:ci need a postgres - see `apps/www/config/database.yml`
  for the `PGHOST`/`PGPORT`/`PGUSER`/`PGPASSWORD` env vars it reads.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
