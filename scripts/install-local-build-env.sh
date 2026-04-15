#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

mise trust .mise.toml >/dev/null 2>&1 || true

mise install node@16.20.2
mise install ruby@3.3.7

if ! mise where ruby@2.7.4 >/dev/null 2>&1; then
  mise exec ruby@3.3.7 -- bash -lc "CFLAGS='-std=gnu17' mise install ruby@2.7.4"
fi

mise exec node@16.20.2 -- npm install --global yarn@1

if ! mise exec ruby@2.7.4 -- bash -lc 'ruby -S bundle _2.2.29_ -v >/dev/null 2>&1'; then
  mise exec ruby@2.7.4 -- gem install bundler -v 2.2.29 --no-document
fi

mise exec node@16.20.2 ruby@2.7.4 -- bash -lc 'node -v && ruby -v && yarn -v && ruby -S bundle _2.2.29_ -v'
