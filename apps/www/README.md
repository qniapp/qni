# @qni/www

The source for the [qniapp.net](https://qniapp.net) website.

## Grover / Puppeteer runtime contract

`/:json` requests can attach an optional social image through Grover.
That path stays synchronous, but it is best-effort:

- success: `og:image` is attached to the rendered response
- failure: the request still renders without `og:image`, and a warning is logged

### Runtime knobs

- `GROVER_ENABLED_IN_TEST=1`: enables social image generation while `RAILS_ENV=test` for focused smoke and verification
- `GROVER_EXECUTABLE_PATH`: optional explicit browser binary override
- `PUPPETEER_EXECUTABLE_PATH`: fallback browser binary override when `GROVER_EXECUTABLE_PATH` is unset
- `GROVER_NO_SANDBOX` (for example `GROVER_NO_SANDBOX=1`): when set to a non-empty value, appends `--no-sandbox` to Grover launch args

### Local smoke (success path)

From the repo root:

```bash
cd apps/www
CHROME_BIN=$(command -v google-chrome-stable || command -v google-chrome || command -v chromium-browser || command -v chromium)
test -n "$CHROME_BIN"
RUN_ID=$(date +%s)
TITLE="Grover success smoke ${RUN_ID}"
SMOKE_JSON=$(ruby -rjson -e 'print JSON.generate({ cols: [], title: ARGV[0] })' "$TITLE")
ENCODED=$(ruby -ruri -e 'puts URI.encode_www_form_component(ARGV[0])' "$SMOKE_JSON")
ENCODED_TITLE=$(ruby -ruri -e 'puts URI.encode_www_form_component(ARGV[0])' "$TITLE")
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres RAILS_ENV=test GROVER_ENABLED_IN_TEST=1 GROVER_EXECUTABLE_PATH="$CHROME_BIN" GROVER_NO_SANDBOX=1 ruby -S bundle exec rails db:test:prepare
pnpm build
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres RAILS_ENV=test GROVER_ENABLED_IN_TEST=1 GROVER_EXECUTABLE_PATH="$CHROME_BIN" GROVER_NO_SANDBOX=1 ruby -S bundle exec rails server -p 3101 -b 127.0.0.1 >/tmp/qni-www-grover-success.log 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" >/dev/null 2>&1 || true' EXIT
for _ in $(seq 1 30); do
  curl -fsS http://127.0.0.1:3101/ >/dev/null 2>&1 && break
  sleep 1
done
curl -fsS http://127.0.0.1:3101/$ENCODED -o /tmp/qni-www-grover-success.html
rg -n 'og:image' /tmp/qni-www-grover-success.html
rg -n "$ENCODED_TITLE" /tmp/qni-www-grover-success.html
```

Using a run-unique `TITLE` and JSON payload avoids stale attachment false-passes. Running `pnpm build` first ensures the test server can resolve `application.js` / `application.css` before the smoke request.

### Local smoke (failure path)

From the repo root:

```bash
cd apps/www
RUN_ID=$(date +%s)
TITLE="Grover failure smoke ${RUN_ID}"
SMOKE_JSON=$(ruby -rjson -e 'print JSON.generate({ cols: [], title: ARGV[0] })' "$TITLE")
ENCODED=$(ruby -ruri -e 'puts URI.encode_www_form_component(ARGV[0])' "$SMOKE_JSON")
ENCODED_TITLE=$(ruby -ruri -e 'puts URI.encode_www_form_component(ARGV[0])' "$TITLE")
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres RAILS_ENV=test GROVER_ENABLED_IN_TEST=1 GROVER_EXECUTABLE_PATH=/definitely/missing/chrome GROVER_NO_SANDBOX=1 ruby -S bundle exec rails db:test:prepare
pnpm build
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres RAILS_ENV=test GROVER_ENABLED_IN_TEST=1 GROVER_EXECUTABLE_PATH=/definitely/missing/chrome GROVER_NO_SANDBOX=1 ruby -S bundle exec rails server -p 3102 -b 127.0.0.1 >/tmp/qni-www-grover-failure.log 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" >/dev/null 2>&1 || true' EXIT
for _ in $(seq 1 30); do
  curl -fsS http://127.0.0.1:3102/ >/dev/null 2>&1 && break
  sleep 1
done
curl -fsS http://127.0.0.1:3102/$ENCODED -o /tmp/qni-www-grover-failure.html
if rg -n 'og:image' /tmp/qni-www-grover-failure.html; then
  echo 'unexpected og:image in soft-fail smoke'
  exit 1
fi
rg -n "$ENCODED_TITLE" /tmp/qni-www-grover-failure.html
rg -n 'Circuit social image generation failed' log/test.log
```

This failure smoke intentionally asserts that no `og:image` is rendered, while the warning itself is observed from `log/test.log`.

### CI / Heroku notes

- CI keeps automated coverage focused on config and soft-fail tests; it does not require always-on browser success smoke
- Heroku keeps the existing Puppeteer buildpack and `GROVER_NO_SANDBOX` rollout contract already recorded in the [rollout runbook](../../docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md)
