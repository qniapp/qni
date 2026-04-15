#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

mise exec node@20.20.2 ruby@4.0.2 -- bash -lc '
  yarn install --frozen-lockfile
  yarn build
'

mise exec node@20.20.2 ruby@4.0.2 -- bash -lc '
  cd apps/tutorial
  ruby -S bundle _4.0.10_ install
  yarn build:site
'
