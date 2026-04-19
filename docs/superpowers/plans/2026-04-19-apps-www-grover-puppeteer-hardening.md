# apps/www Grover / Puppeteer hardening Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `apps/www` の Grover / Puppeteer 実行経路を保守的に harden し、`/:json` の同期 social image 生成が失敗してもページ本体は落ちず、local / CI / Heroku 前提の契約を repo 内から追えるようにする。

**Architecture:** current local `main` を基点に dedicated worktree を作り、まず現状の「central config entrypoint が無い」「README に契約が無い」「soft-fail の focused test が無い」状態を baseline として固定する。その後 `apps/www/config/initializers/grover.rb` に runtime contract を集約し、`apps/www/app/models/circuit.rb` で optional な social image 生成だけを soft-fail 境界として救う。最後に `apps/www/README.md` へ local / CI / Heroku の運用契約と smoke 手順を書き、targeted tests・manual smoke・repo-level verification・reviewer gate を通してから `main` に統合する。

**Tech Stack:** Rails 7.2.3.1, Ruby 4.0.2, Grover 1.2.10, Puppeteer ~23.2, Active Storage, PostgreSQL, Node.js 20.20.2, pnpm 10.33.0, Selenium system tests, GitHub Actions, Heroku-24

---

## File Structure

### Files likely to change

- `apps/www/config/initializers/grover.rb`: Grover / Puppeteer runtime contract を一元化する新しい config entrypoint
- `apps/www/app/models/circuit.rb`: sync flow を維持したまま social image 生成を soft-fail 化し、warning ログを残す
- `apps/www/test/integration/grover_runtime_config_test.rb`: config contract と request continuation を検証する focused integration test
- `apps/www/test/models/circuit_test.rb`: `attach_social_image` の soft-fail 挙動を直接検証する model test
- `apps/www/README.md`: local / CI / Heroku contract と manual smoke 手順を app-local に記録する

### Files to inspect/reference only

- `docs/superpowers/specs/2026-04-19-apps-www-grover-puppeteer-hardening-design.md`
- `apps/www/app/controllers/circuits_controller.rb`
- `apps/www/app/views/circuits/show.html.erb`
- `apps/www/Gemfile.lock`
- `apps/www/package.json`
- `apps/www/test/system/circuit_page_test.rb`
- `apps/www/test/test_helper.rb`
- `docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md`
- `docs/tech-stack.md`

### Scope guard

今回の implementation diff で変更してよい path は原則として次のみ。

- `apps/www/config/initializers/grover.rb`
- `apps/www/app/models/circuit.rb`
- `apps/www/test/integration/grover_runtime_config_test.rb`
- `apps/www/test/models/circuit_test.rb`
- `apps/www/README.md`

今回の lane では変更しない。

- `apps/www/package.json`
- `apps/www/Gemfile` / `Gemfile.lock`
- `apps/www/app/controllers/**`
- `apps/www/app/views/**`（`show.html.erb` は参照のみ。optional `og:image` 契約を壊さない）
- `apps/tutorial/**`
- `.github/workflows/**`
- Heroku buildpack / config var の実設定
- `docs/tech-stack.md`（global inventory 更新が本当に必要だと execution 中に判明した場合のみ follow-up として再判断。今回は触らない）

---

### Task 1: dedicated worktree と baseline を固定する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-19-apps-www-grover-puppeteer-hardening-design.md`
- Reference: `apps/www/app/models/circuit.rb`
- Reference: `apps/www/app/controllers/circuits_controller.rb`
- Reference: `apps/www/app/views/circuits/show.html.erb`
- Reference: `apps/www/README.md`
- Reference: `apps/www/package.json`
- Reference: `docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md`

- [ ] **Step 1: current local `main` から dedicated worktree を作成する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git switch main
git status --short --branch
BASE_SHA=$(git rev-parse main)
echo "$BASE_SHA" >/tmp/qni-www-grover-base-sha
git worktree add -b feat/www-grover-puppeteer-hardening .worktrees/www-grover-puppeteer-hardening main
```

Expected: spec / plan の local commit を含む current local `main` を明示的 base にして `.worktrees/www-grover-puppeteer-hardening` が作成される。以後の diff / reviewer target 用に base SHA も `/tmp/qni-www-grover-base-sha` へ固定される。

- [ ] **Step 2: worktree で toolchain と依存を揃える**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening
mise trust . >/dev/null 2>&1 || true
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm install --frozen-lockfile'
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: root pnpm deps と `apps/www` の Ruby deps が worktree 上で揃う。

- [ ] **Step 3: baseline current state を固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening
test ! -e apps/www/config/initializers/grover.rb
if rg -n 'Grover / Puppeteer runtime contract|GROVER_ENABLED_IN_TEST|GROVER_EXECUTABLE_PATH|PUPPETEER_EXECUTABLE_PATH|GROVER_NO_SANDBOX' apps/www/README.md; then
  echo 'unexpected existing Grover runtime contract docs in README'
  exit 1
fi
rg -n 'attach_social_image|generate_social_image|Grover\.new|Rails\.env\.test\?' apps/www/app/models/circuit.rb
rg -n '@circuit\.attach_social_image' apps/www/app/controllers/circuits_controller.rb
rg -n 'meta property="og:image"|social_image\.attached\?' apps/www/app/views/circuits/show.html.erb
rg -n 'grover \(1\.2\.10\)' apps/www/Gemfile.lock
rg -n '"puppeteer": "~23\.2"' apps/www/package.json
rg -n 'GROVER_NO_SANDBOX|jontewks/puppeteer' docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md
```

Expected: central initializer 不在、README 契約不在、current sync path、`og:image` optionality、Grover 1.2.10 / Puppeteer ~23.2、Heroku runbook 上の Puppeteer 前提が確認できる。

- [ ] **Step 4: baseline task は commit しない**

この task は観測のみ。commit しない。

### Task 2: runtime contract の RED test を追加し、`config/initializers/grover.rb` を実装する

**Files:**

- Create: `apps/www/config/initializers/grover.rb`
- Create: `apps/www/test/integration/grover_runtime_config_test.rb`

- [ ] **Step 1: config contract の failing integration test を追加する**

`apps/www/test/integration/grover_runtime_config_test.rb` の最初の test は次の形にする。

```ruby
# frozen_string_literal: true

require 'test_helper'

class GroverRuntimeConfigTest < ActionDispatch::IntegrationTest
  test 'grover runtime config stays centralized' do
    config = Rails.configuration.x.grover

    assert_not_nil config
    assert_equal ENV['GROVER_ENABLED_IN_TEST'] == '1', config.enabled_in_test
    assert_equal(
      ENV['GROVER_EXECUTABLE_PATH'].presence || ENV['PUPPETEER_EXECUTABLE_PATH'].presence,
      config.executable_path
    )
    assert_equal(
      ENV['GROVER_NO_SANDBOX'].present? ? ['--no-sandbox'] : [],
      config.launch_args
    )
  end
end
```

- [ ] **Step 2: RED を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/integration/grover_runtime_config_test.rb'
```

Expected: FAIL。`Rails.configuration.x.grover` が未定義、または期待する contract を満たしていない。

- [ ] **Step 3: `apps/www/config/initializers/grover.rb` に runtime contract を実装する**

最終形:

```ruby
# frozen_string_literal: true

runtime_config = ActiveSupport::OrderedOptions.new
runtime_config.enabled_in_test = ENV['GROVER_ENABLED_IN_TEST'] == '1'
runtime_config.executable_path = ENV['GROVER_EXECUTABLE_PATH'].presence || ENV['PUPPETEER_EXECUTABLE_PATH'].presence
runtime_config.launch_args = []
runtime_config.launch_args << '--no-sandbox' if ENV['GROVER_NO_SANDBOX'].present?

Rails.application.config.x.grover = runtime_config
```

この task では Grover global middleware や version は触らない。contract の source-of-truth は `Rails.application.config.x.grover` に限定する。

- [ ] **Step 4: config contract test を GREEN にする**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/integration/grover_runtime_config_test.rb'
```

Expected: PASS。

- [ ] **Step 5: runtime contract 追加を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening
git add apps/www/config/initializers/grover.rb apps/www/test/integration/grover_runtime_config_test.rb
git commit -m "feat: centralize www grover runtime config"
```

### Task 3: `Circuit#attach_social_image` を soft-fail 化し、request continuation の RED/GREEN を固める

**Files:**

- Modify: `apps/www/app/models/circuit.rb`
- Modify: `apps/www/test/integration/grover_runtime_config_test.rb`
- Create: `apps/www/test/models/circuit_test.rb`
- Reference: `apps/www/app/views/circuits/show.html.erb`

- [ ] **Step 1: `Circuit` soft-fail の failing model test を追加する**

`apps/www/test/models/circuit_test.rb` の test は次の形にする。

```ruby
# frozen_string_literal: true

require 'test_helper'
require 'stringio'

class CircuitTest < ActiveSupport::TestCase
  test 'attach_social_image soft-fails and leaves attachment absent when Grover raises' do
    config = Rails.configuration.x.grover
    original = config.enabled_in_test
    config.enabled_in_test = true
    output = StringIO.new
    logger = ActiveSupport::TaggedLogging.new(ActiveSupport::Logger.new(output))
    circuit = Circuit.new(json: '{"cols":[]}')

    circuit.stub(:generate_social_image, ->(*) { raise Grover::DependencyError, 'missing browser' }) do
      Rails.stub(:logger, logger) do
        assert_nothing_raised do
          circuit.attach_social_image('http://example.test/svg/%7B%7D')
        end
      end
    end

    assert_not circuit.social_image.attached?
    assert_match 'Circuit social image generation failed', output.string
    assert_match 'Grover::DependencyError', output.string
  ensure
    config.enabled_in_test = original
  end
end
```

- [ ] **Step 2: request continuation の failing integration test を追加する**

同じ `apps/www/test/integration/grover_runtime_config_test.rb` に 2 本目の test を追加する。

```ruby
require 'stringio'

class GroverRuntimeConfigTest < ActionDispatch::IntegrationTest
  test 'shared circuit page still renders when social image generation fails' do
    config = Rails.configuration.x.grover
    original = config.enabled_in_test
    config.enabled_in_test = true
    output = StringIO.new
    logger = ActiveSupport::TaggedLogging.new(ActiveSupport::Logger.new(output))
    circuit = Circuit.new(json: '{"cols":["H"],"title":"Grover hardening"}')

    circuit.stub(:generate_social_image, ->(*) { raise Grover::DependencyError, 'missing browser' }) do
      Circuit.stub(:find_or_create_by, circuit) do
        Rails.stub(:logger, logger) do
          get circuit_path(json: circuit.json)
        end
      end
    end

    assert_response :success
    assert_select 'quantum-simulator'
    assert_select 'meta[property="og:image"]', false
    assert_match 'Circuit social image generation failed', output.string
  ensure
    config.enabled_in_test = original
  end
end
```

- [ ] **Step 3: RED を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/models/circuit_test.rb test/integration/grover_runtime_config_test.rb'
```

Expected: FAIL。現状の `Circuit#attach_social_image` は test env で早期 return するだけで、`enabled_in_test` gate も soft-fail rescue も logger も無い。

- [ ] **Step 4: `apps/www/app/models/circuit.rb` に最小実装を入れる**

`Circuit` の最終形は次の構造にする。

```ruby
# frozen_string_literal: true

class Circuit < ApplicationRecord
  SOCIAL_IMAGE_WIDTH = 1200
  SOCIAL_IMAGE_HEIGHT = 630

  has_one_attached :social_image

  validates :json, presence: true
  validate :json_cannot_be_invalid_json_string

  def attach_social_image(circuit_svg_url)
    return if skip_social_image_generation? || social_image.attached?

    social_image.attach(io: StringIO.new(generate_social_image(circuit_svg_url)),
                        filename: 'social_image.png',
                        content_type: 'application/png',
                        identify: false)
  rescue StandardError => error
    log_social_image_failure(error)
  end

  private

  def skip_social_image_generation?
    Rails.env.test? && !Rails.configuration.x.grover.enabled_in_test
  end

  def json_cannot_be_invalid_json_string
    JSON.parse json
  rescue JSON::ParseError
    errors.add :json, 'invalid JSON format'
  end

  def generate_social_image(circuit_svg_url)
    Grover.new(circuit_svg_url,
               **grover_runtime_options,
               viewport: { width: SOCIAL_IMAGE_WIDTH, height: SOCIAL_IMAGE_HEIGHT },
               emulate_media: 'screen',
               landscape: true).to_png
  end

  def grover_runtime_options
    config = Rails.configuration.x.grover

    {}.tap do |options|
      options[:executable_path] = config.executable_path if config.executable_path.present?
      options[:launch_args] = config.launch_args if config.launch_args.any?
    end
  end

  def log_social_image_failure(error)
    Rails.logger.warn(
      "Circuit social image generation failed circuit_id=#{id || 'new'} env=#{Rails.env} error_class=#{error.class} error_message=#{error.message}"
    )
  end
end
```

注意点:

- `show` → `attach_social_image` の同期フローは維持する
- rescue は social image 生成境界の中だけに置く
- `og:image` を出す/出さない view 契約はそのまま利用する
- `Circuit` 本体の validation / JSON parsing は触らない

- [ ] **Step 5: focused tests を GREEN にする**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/models/circuit_test.rb test/integration/grover_runtime_config_test.rb'
```

Expected: PASS。soft-fail と request continuation の focused automated checks が green。

- [ ] **Step 6: runtime hardening を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening
git add apps/www/app/models/circuit.rb apps/www/test/models/circuit_test.rb apps/www/test/integration/grover_runtime_config_test.rb
git commit -m "fix: harden www social image generation"
```

### Task 4: `apps/www/README.md` に local / CI / Heroku contract と smoke 手順を書く

**Files:**

- Modify: `apps/www/README.md`
- Reference: `apps/www/config/initializers/grover.rb`
- Reference: `docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md`

- [ ] **Step 1: RED を content check で固定する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening
if rg -n 'Grover / Puppeteer runtime contract|GROVER_ENABLED_IN_TEST|GROVER_EXECUTABLE_PATH|PUPPETEER_EXECUTABLE_PATH|GROVER_NO_SANDBOX' apps/www/README.md; then
  echo 'README already contains contract docs unexpectedly'
  exit 1
fi
```

Expected: no matches。

- [ ] **Step 2: `apps/www/README.md` を最小の app-local contract doc に更新する**

README の最終形は少なくとも次を含む。

````md
# @qni/www

The source for the [qniapp.net](https://qniapp.net) website.

## Grover / Puppeteer runtime contract

`/:json` pages can attach an optional social image with Grover.
That path stays synchronous, but it is best-effort:

- success: `og:image` is attached and rendered
- failure: the request still renders without `og:image`, and a warning is logged

### Runtime knobs

- `GROVER_ENABLED_IN_TEST=1`: enables social image generation while `RAILS_ENV=test` for focused smoke / verification
- `GROVER_EXECUTABLE_PATH`: optional explicit browser binary override
- `PUPPETEER_EXECUTABLE_PATH`: fallback browser binary override when `GROVER_EXECUTABLE_PATH` is unset
- `GROVER_NO_SANDBOX` (for example `GROVER_NO_SANDBOX=1`): when set to a non-empty value, appends `--no-sandbox` to Grover launch args

### Local smoke (success path)

```bash
cd /path/to/qni/apps/www
CHROME_BIN=$(command -v google-chrome-stable || command -v google-chrome || command -v chromium-browser || command -v chromium)
test -n "$CHROME_BIN"
RUN_ID=$(date +%s)
TITLE="Grover success smoke ${RUN_ID}"
SMOKE_JSON=$(ruby -rjson -e 'print JSON.generate({ cols: [], title: ARGV[0] })' "$TITLE")
ENCODED=$(ruby -ruri -e 'puts URI.encode_www_form_component(ARGV[0])' "$SMOKE_JSON")
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres RAILS_ENV=test GROVER_ENABLED_IN_TEST=1 GROVER_EXECUTABLE_PATH="$CHROME_BIN" GROVER_NO_SANDBOX=1 ruby -S bundle exec rails db:test:prepare
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres RAILS_ENV=test GROVER_ENABLED_IN_TEST=1 GROVER_EXECUTABLE_PATH="$CHROME_BIN" GROVER_NO_SANDBOX=1 ruby -S bundle exec rails server -p 3101 -b 127.0.0.1 >/tmp/qni-www-grover-success.log 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" >/dev/null 2>&1 || true' EXIT
for _ in $(seq 1 30); do
  curl -fsS http://127.0.0.1:3101/ >/dev/null 2>&1 && break
  sleep 1
done
curl -fsS http://127.0.0.1:3101/$ENCODED -o /tmp/qni-www-grover-success.html
rg -n 'og:image' /tmp/qni-www-grover-success.html
rg -n "$TITLE" /tmp/qni-www-grover-success.html
```

### Local smoke (failure path)

```bash
cd /path/to/qni/apps/www
RUN_ID=$(date +%s)
TITLE="Grover failure smoke ${RUN_ID}"
SMOKE_JSON=$(ruby -rjson -e 'print JSON.generate({ cols: [], title: ARGV[0] })' "$TITLE")
ENCODED=$(ruby -ruri -e 'puts URI.encode_www_form_component(ARGV[0])' "$SMOKE_JSON")
PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres RAILS_ENV=test GROVER_ENABLED_IN_TEST=1 GROVER_EXECUTABLE_PATH=/definitely/missing/chrome GROVER_NO_SANDBOX=1 ruby -S bundle exec rails db:test:prepare
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
rg -n "$TITLE" /tmp/qni-www-grover-failure.html
rg -n 'Circuit social image generation failed' /tmp/qni-www-grover-failure.log
```

### CI / Heroku notes

- CI keeps automated coverage focused on config + soft-fail tests; it does not require always-on browser success smoke
- Heroku keeps the existing Puppeteer-related buildpack setup and `GROVER_NO_SANDBOX` contract already recorded in the rollout runbook
````

README は app-local contract に集中し、buildpack 名の完全な inventory や secret は runbook へ委譲する。

- [ ] **Step 3: content checks を GREEN にする**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening
rg -n 'Grover / Puppeteer runtime contract|GROVER_ENABLED_IN_TEST|GROVER_EXECUTABLE_PATH|PUPPETEER_EXECUTABLE_PATH|GROVER_NO_SANDBOX' apps/www/README.md
rg -n 'Local smoke \(success path\)|Local smoke \(failure path\)|CI / Heroku notes' apps/www/README.md
```

Expected: required sections が見つかる。

- [ ] **Step 4: README 更新を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening
git add apps/www/README.md
git commit -m "docs: record www grover runtime contract"
```

### Task 5: focused verification・manual smoke・reviewer・統合・cleanup を完了する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-19-apps-www-grover-puppeteer-hardening-design.md`
- Reference: `docs/superpowers/plans/2026-04-19-apps-www-grover-puppeteer-hardening.md`

- [ ] **Step 1: apps/www focused verification を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/models/circuit_test.rb test/integration/grover_runtime_config_test.rb'
```

Expected: PASS。

- [ ] **Step 2: positive local smoke を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc '
  set -euo pipefail
  CHROME_BIN=$(command -v google-chrome-stable || command -v google-chrome || command -v chromium-browser || command -v chromium)
  test -n "$CHROME_BIN"
  RUN_ID=$(date +%s)
  TITLE="Grover success smoke ${RUN_ID}"
  SMOKE_JSON=$(ruby -rjson -e "print JSON.generate({ cols: [], title: ARGV[0] })" "$TITLE")
  ENCODED=$(ruby -ruri -e "puts URI.encode_www_form_component(ARGV[0])" "$SMOKE_JSON")
  PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres RAILS_ENV=test GROVER_ENABLED_IN_TEST=1 GROVER_EXECUTABLE_PATH="$CHROME_BIN" GROVER_NO_SANDBOX=1 ruby -S bundle exec rails db:test:prepare
  trap "kill ${server_pid:-0} >/dev/null 2>&1 || true" EXIT
  PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres RAILS_ENV=test GROVER_ENABLED_IN_TEST=1 GROVER_EXECUTABLE_PATH="$CHROME_BIN" GROVER_NO_SANDBOX=1 ruby -S bundle exec rails server -p 3101 -b 127.0.0.1 >/tmp/qni-www-grover-success.log 2>&1 &
  server_pid=$!
  for _ in $(seq 1 30); do
    curl -fsS http://127.0.0.1:3101/ >/dev/null 2>&1 && break
    sleep 1
  done
  curl -fsS http://127.0.0.1:3101/$ENCODED -o /tmp/qni-www-grover-success.html
  rg -n "og:image" /tmp/qni-www-grover-success.html
  rg -n "$TITLE" /tmp/qni-www-grover-success.html
'
```

Expected: PASS。`/:json` route は 200 で返り、run-unique success smoke 用 HTML に `og:image` と title の両方が含まれる。

- [ ] **Step 3: failure local smoke を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc '
  set -euo pipefail
  RUN_ID=$(date +%s)
  TITLE="Grover failure smoke ${RUN_ID}"
  SMOKE_JSON=$(ruby -rjson -e "print JSON.generate({ cols: [], title: ARGV[0] })" "$TITLE")
  ENCODED=$(ruby -ruri -e "puts URI.encode_www_form_component(ARGV[0])" "$SMOKE_JSON")
  PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres RAILS_ENV=test GROVER_ENABLED_IN_TEST=1 GROVER_EXECUTABLE_PATH=/definitely/missing/chrome GROVER_NO_SANDBOX=1 ruby -S bundle exec rails db:test:prepare
  trap "kill ${server_pid:-0} >/dev/null 2>&1 || true" EXIT
  PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres RAILS_ENV=test GROVER_ENABLED_IN_TEST=1 GROVER_EXECUTABLE_PATH=/definitely/missing/chrome GROVER_NO_SANDBOX=1 ruby -S bundle exec rails server -p 3102 -b 127.0.0.1 >/tmp/qni-www-grover-failure.log 2>&1 &
  server_pid=$!
  for _ in $(seq 1 30); do
    curl -fsS http://127.0.0.1:3102/ >/dev/null 2>&1 && break
    sleep 1
  done
  curl -fsS http://127.0.0.1:3102/$ENCODED -o /tmp/qni-www-grover-failure.html
  if rg -n "og:image" /tmp/qni-www-grover-failure.html; then
    echo "unexpected og:image in soft-fail smoke"
    exit 1
  fi
  rg -n "$TITLE" /tmp/qni-www-grover-failure.html
  rg -n "Circuit social image generation failed" /tmp/qni-www-grover-failure.log
'
```

Expected: PASS。`/:json` route は 200 で返り、run-unique failure smoke 用 HTML に `og:image` は出ず、server log に warning が残る。

- [ ] **Step 4: repo-level non-browser verification と diff hygiene を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening
BASE_SHA=$(cat /tmp/qni-www-grover-base-sha)
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'pnpm build && pnpm lint && pnpm typecheck && pnpm test:ci'
git diff --name-only "$BASE_SHA"..HEAD
git diff --check
```

Expected: PASS。diff は `apps/www/**` に閉じ、repo-level non-browser verification も green。browser success path は Step 2 の manual smoke でのみ確認する。

- [ ] **Step 5: reviewer gate を通す**

Reviewer には次を必ず渡す。

- spec: `docs/superpowers/specs/2026-04-19-apps-www-grover-puppeteer-hardening-design.md`
- plan: `docs/superpowers/plans/2026-04-19-apps-www-grover-puppeteer-hardening.md`
- review target: `$(cat /tmp/qni-www-grover-base-sha)..HEAD`
- 必須観点:
  - Puppeteer upgrade lane に scope creep していないか
  - sync `show -> attach_social_image` flow を壊していないか
  - failure が request 全体に漏れないか
  - `og:image` optionality が維持されているか
  - README の contract が code と矛盾していないか

Expected: APPROVED。issue が出たら同じ worktree で修正し、full diff で再 review する。

- [ ] **Step 6: local `main` へ統合して canonical path で再検証する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git switch main
git merge --ff-only feat/www-grover-puppeteer-hardening
cd /home/yasuhito/Work/qni/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/models/circuit_test.rb test/integration/grover_runtime_config_test.rb'
cd /home/yasuhito/Work/qni
git diff --check
```

Expected: PASS。canonical path の `main` でも focused verification と diff hygiene が clean。

- [ ] **Step 7: push・GitHub Actions・cleanup を完了する**

Run:

```bash
cd /home/yasuhito/Work/qni
git push origin main
HEAD_SHA=$(git rev-parse HEAD)
for _ in $(seq 1 30); do
  run_id=$(gh run list --limit 30 --json databaseId,workflowName,headSha --branch main --jq ".[] | select(.headSha == \"${HEAD_SHA}\" and .workflowName == \"CI\") | .databaseId" | head -n 1)
  if [ -n "$run_id" ]; then
    gh run watch "$run_id" --exit-status
    break
  fi
  sleep 5
done
if [ -z "${run_id:-}" ]; then
  echo "missing GitHub Actions run for CI"
  exit 1
fi
git worktree remove /home/yasuhito/Work/qni/.worktrees/www-grover-puppeteer-hardening
git branch -d feat/www-grover-puppeteer-hardening
git rev-list --left-right --count origin/main...HEAD
git status --short --branch
```

Expected: CI が green、worktree / branch cleanup 完了、`main == origin/main`、working tree clean。

```

```
