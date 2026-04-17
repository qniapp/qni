#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

mise trust .mise.toml >/dev/null 2>&1 || true

mise install node@20.20.2
mise install ruby@4.0.2

mise exec node@20.20.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true && corepack prepare pnpm@10.33.0 --activate >/dev/null'

if ! mise exec ruby@4.0.2 -- bash -lc 'ruby -S bundle _4.0.10_ -v >/dev/null 2>&1'; then
  mise exec ruby@4.0.2 -- gem install bundler -v 4.0.10 --no-document
fi

mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'node -v && ruby -v && pnpm -v && ruby -S bundle _4.0.10_ -v'
