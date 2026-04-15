#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

mise trust .mise.toml >/dev/null 2>&1 || true

mise install node@16.20.2
mise install ruby@4.0.2

mise exec node@16.20.2 -- npm install --global yarn@1.22.22

if ! mise exec ruby@4.0.2 -- bash -lc 'ruby -S bundle _4.0.10_ -v >/dev/null 2>&1'; then
  mise exec ruby@4.0.2 -- gem install bundler -v 4.0.10 --no-document
fi

mise exec node@16.20.2 ruby@4.0.2 -- bash -lc 'node -v && ruby -v && yarn -v && ruby -S bundle _4.0.10_ -v'
