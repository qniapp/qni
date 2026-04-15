#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

mise exec node@16.20.2 ruby@2.7.4 -- bash -lc '
  yarn install --frozen-lockfile
  yarn build
'

mise exec node@16.20.2 ruby@2.7.4 -- bash -lc '
  cd apps/tutorial
  ruby -S bundle _2.2.29_ install
  yarn build:site
'
