# apps/www Supported Rails Upgrade Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade `apps/www` from Rails 6.1.7.10 to the lowest-risk currently supported Rails target, removing the remaining `PG::Coder.new(hash)` warning without introducing production regressions on `qni-quantum`.

**Architecture:** Treat Rails 7.0 and 7.1 as compatibility baselines, but choose the actual implementation target only after confirming current support posture. Keep the upgrade isolated to `apps/www`, prefer the smallest safe framework step that remains supported, and preserve the current production-first rollback discipline used in the Ruby 4 / Heroku-24 rollout.

**Tech Stack:** Ruby 4.0.2, Rails / Active Record / Sprockets, PostgreSQL, Puma, Heroku, cssbundling-rails, jsbundling-rails, Stimulus, Turbolinks, Grover/Puppeteer, Active Storage (S3)

---

## File map and responsibilities

- `apps/www/Gemfile` — pins the Rails target and related Ruby gem compatibility set
- `apps/www/Gemfile.lock` — resolved dependency graph for the chosen Rails line
- `apps/www/config/application.rb` — Rails defaults strategy and framework-level config
- `apps/www/config/environments/development.rb` — development-only config updates such as web-console compatibility
- `apps/www/config/environments/production.rb` — production runtime behavior, assets, logging, storage
- `apps/www/config/initializers/*` — upgrade shims or framework compatibility adjustments if strictly needed
- `apps/www/config/boot.rb` — early boot requirements already adjusted for Ruby 4; re-check after Rails change
- `apps/www/package.json` — JS/runtime compatibility checkpoints for Rails-adjacent frontend behavior
- `apps/www/app/javascript/*` — verify JS boot path for Turbolinks / Stimulus / UJS compatibility after upgrade
- `apps/www/config/initializers/serviceworker.rb` — current serviceworker-rails routing, now a Rack 3 compatibility hotspot
- `apps/www/app/assets/javascripts/serviceworker.js` — current service worker asset entry to preserve or migrate
- `apps/www/app/assets/javascripts/manifest.json` — current manifest asset entry to preserve or migrate
- `apps/www/app/views/layouts/application.html.erb` — manifest link tag and any related browser-facing references
- `apps/www/Procfile` — production boot command; verify no change required after framework upgrade
- `apps/www/config/puma.rb` — verify Puma config still matches the upgraded framework/runtime expectations
- `apps/www/test/*` — existing regression safety net; extend only if upgrade uncovers uncovered behavior
- `docs/superpowers/runbooks/*` — rollout runbook updates once implementation is approved and executed

## Guardrails

- Keep scope limited to `apps/www`
- Do not change `apps/tutorial`
- Do not add a local monkey patch for `PG::Coder` unless the supported-target upgrade path is rejected during planning validation
- Prefer keeping `config.load_defaults 6.0` during the first framework jump unless a specific supported target requires otherwise
- Separate framework upgrade work from unrelated cleanup
- Require explicit support-posture confirmation before any dependency edits
- Treat service worker delivery as an explicit migration task, because `serviceworker-rails` 0.6.0 is a Rack 3 / Rails 7.2 boot blocker via `rack/file`

### Task 1: Confirm the supported target and lock the execution scope

**Files:**
- Modify: `docs/superpowers/plans/2026-04-13-apps-www-supported-rails-upgrade.md`
- Reference: `docs/superpowers/specs/2026-04-13-apps-www-rails-7-upgrade-design.md`

- [ ] **Step 1: Record the currently supported Rails target before changing code**

Check current Rails support posture using authoritative sources and note the chosen target in this plan before implementation.

Run:
```bash
# gather current support info before touching Gemfile
```

Expected: a written note in this plan or follow-up execution log naming the chosen target. As of 2026-04-13 research, the supported comparison set indicates Rails 7.0 and 7.1 are out of normal support, while Rails 7.2.x, 8.0.x, and 8.1.x are active upstream security lines; therefore the default planning target is **Rails 7.2.x** unless repository-specific blockers force reconsideration.

- [ ] **Step 2: Stop if no acceptable supported target is available**

If research shows there is no low-risk supported path for `apps/www`, stop implementation and return to the user with:
- the blocker
- why it matters on `qni-quantum`
- whether the fallback is a local `PG::Coder` workaround or a broader framework move

- [ ] **Step 3: Commit the planning decision if the plan file changes**

```bash
git add docs/superpowers/plans/2026-04-13-apps-www-supported-rails-upgrade.md
git commit -m "docs: record supported Rails target for apps/www upgrade"
```

### Task 2: Capture a failing warning-focused baseline before changing dependencies

**Files:**
- Reference: `apps/www/Gemfile`
- Reference: `apps/www/config/application.rb`
- Test: `apps/www/test/**/*`

- [ ] **Step 1: Run the current Rails test command and capture the warning baseline**

Run:
```bash
cd apps/www && eval "$(mise activate bash)" && PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres ruby -S bundle exec rails test 2>&1 | tee /tmp/apps-www-rails-upgrade-baseline.log
```

Expected:
- tests pass
- log contains the current `PG::Coder.new(hash)` warning

- [ ] **Step 2: Confirm the warning source matches the framework-level issue**

Run:
```bash
rg -n "PG::Coder.new\(hash\)|postgresql_adapter.rb" /tmp/apps-www-rails-upgrade-baseline.log
```

Expected: output points to Active Record PostgreSQL adapter rather than app code.

- [ ] **Step 3: Commit nothing yet**

This task is evidence gathering only.

### Task 3: Upgrade Rails dependencies to the chosen supported target using TDD-style checkpoints

**Files:**
- Modify: `apps/www/Gemfile`
- Modify: `apps/www/Gemfile.lock`

- [ ] **Step 1: Change only the framework dependency declarations needed for the chosen target**

Start from the smallest necessary Gemfile edit. Prefer targeted version bumps over opportunistic cleanup.

Likely files:
- `apps/www/Gemfile`

Potential example areas:
```ruby
gem 'rails', '...chosen target...'
```

- [ ] **Step 2: Run bundler and capture dependency conflicts before adding compatibility code**

Run:
```bash
cd apps/www && eval "$(mise activate bash)" && ruby -S bundle update rails
```

Expected: either a resolved lockfile or actionable gem conflicts identifying which runtime gems block the upgrade.

- [ ] **Step 3: Resolve only the blocking gem compatibility set**

Update the minimal set of gems needed for the chosen Rails target. Pay special attention to:
- `view_component`
- `serviceworker-rails`
- `grover`
- `better_html`
- `web-console`

- [ ] **Step 4: Re-run bundler until the dependency graph resolves cleanly**

Run:
```bash
cd apps/www && eval "$(mise activate bash)" && ruby -S bundle install
```

Expected: success, with `apps/www/Gemfile.lock` updated for the chosen target.

- [ ] **Step 5: Commit the dependency upgrade once bundler is green**

```bash
git add apps/www/Gemfile apps/www/Gemfile.lock
git commit -m "chore: upgrade apps/www Rails dependencies"
```

### Task 4: Adjust framework configuration with minimal behavior drift

**Files:**
- Modify: `apps/www/config/application.rb`
- Modify: `apps/www/config/environments/development.rb`
- Modify: `apps/www/config/environments/production.rb`
- Modify: `apps/www/config/initializers/*` (only if needed)

- [ ] **Step 1: Run boot once after the dependency upgrade and record the first failing config/runtime issue**

Run:
```bash
cd apps/www && eval "$(mise activate bash)" && SECRET_KEY_BASE=dummy AWS_ACCESS_KEY_ID=dummy AWS_SECRET_ACCESS_KEY=dummy AWS_REGION=us-east-1 RAILS_ENV=production ruby -S bundle exec rails runner 'puts :boot_ok'
```

Expected: either `boot_ok` or the first concrete boot/config error to fix.

- [ ] **Step 2: Apply the smallest config change required for Rails compatibility**

Focus first on known likely items:
- web-console deprecated config replacement in development
- Rails application defaults handling
- environment config names or removed settings
- service worker delivery migration away from `serviceworker-rails` if production boot still fails on Rack 3

Do not change `config.load_defaults 6.0` in the same step unless the chosen target requires it to boot or tests clearly require a behavior change.

- [ ] **Step 3: Re-run the targeted boot command after each config fix**

Run:
```bash
cd apps/www && eval "$(mise activate bash)" && SECRET_KEY_BASE=dummy AWS_ACCESS_KEY_ID=dummy AWS_SECRET_ACCESS_KEY=dummy AWS_REGION=us-east-1 RAILS_ENV=production ruby -S bundle exec rails runner 'puts :boot_ok'
```

Expected: `boot_ok`

- [ ] **Step 4: Commit the config compatibility adjustments**

```bash
git add apps/www/config/application.rb apps/www/config/environments/development.rb apps/www/config/environments/production.rb apps/www/config/initializers
git commit -m "fix: align apps/www config with upgraded Rails"
```

### Task 5: Verify asset and frontend integration paths still work

**Files:**
- Modify: `apps/www/package.json` (if needed)
- Modify: `apps/www/app/javascript/*` (if needed)
- Modify: `apps/www/config/initializers/assets.rb` (if needed)

- [ ] **Step 1: Run the production asset build exactly as the app depends on it**

Run:
```bash
cd apps/www && eval "$(mise activate bash)" && SECRET_KEY_BASE=dummy AWS_ACCESS_KEY_ID=dummy AWS_SECRET_ACCESS_KEY=dummy AWS_REGION=us-east-1 RAILS_ENV=production ruby -S bundle exec rails assets:precompile
```

Expected: success with digested assets generated and no boot-time framework errors.

- [ ] **Step 2: If asset build fails, fix one integration point at a time**

Likely focus order:
1. service worker delivery migration (`serviceworker-rails` replacement/removal)
2. JS boot / entrypoints
3. `@rails/ujs`, `turbolinks`, `stimulus-rails` interactions
4. Sprockets asset declarations

- [ ] **Step 3: Run the app test suite after asset/build fixes**

Run:
```bash
cd apps/www && eval "$(mise activate bash)" && PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres ruby -S bundle exec rails test
```

Expected: passing tests and no `PG::Coder.new(hash)` warning.

- [ ] **Step 4: Commit frontend/asset compatibility changes if any were required**

```bash
git add apps/www/package.json apps/www/app/javascript apps/www/config/initializers/assets.rb
git commit -m "fix: restore apps/www asset compatibility after Rails upgrade"
```

### Task 6: Run full local verification before any deployment

**Files:**
- Modify: only files already touched by prior tasks

- [ ] **Step 1: Run repo-level CI-equivalent verification**

Run:
```bash
cd /home/yasuhito/Work/qni && eval "$(mise activate bash)" && PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres yarn test:ci
```

Expected: PASS

- [ ] **Step 2: Re-run production boot and asset checks**

Run:
```bash
cd apps/www && eval "$(mise activate bash)" && SECRET_KEY_BASE=dummy AWS_ACCESS_KEY_ID=dummy AWS_SECRET_ACCESS_KEY=dummy AWS_REGION=us-east-1 RAILS_ENV=production ruby -S bundle exec rails runner 'puts :boot_ok'
cd /home/yasuhito/Work/qni/apps/www && eval "$(mise activate bash)" && SECRET_KEY_BASE=dummy AWS_ACCESS_KEY_ID=dummy AWS_SECRET_ACCESS_KEY=dummy AWS_REGION=us-east-1 RAILS_ENV=production ruby -S bundle exec rails assets:precompile
```

Expected: both succeed

- [ ] **Step 3: Run diff hygiene checks**

Run:
```bash
cd /home/yasuhito/Work/qni && git diff --check && git status --short
```

Expected: no diff-check errors; only intended files modified.

- [ ] **Step 4: Commit any final local verification-driven fixes**

```bash
git add <exact files>
git commit -m "test: finalize apps/www Rails upgrade verification"
```

### Task 7: Reviewer gate before production deploy

**Files:**
- Reference: changed files in `apps/www`
- Reference: `docs/superpowers/specs/2026-04-13-apps-www-rails-7-upgrade-design.md`
- Reference: this plan file

- [ ] **Step 1: Request focused review for the implementation diff**

Reviewer must specifically check:
- chosen Rails target support posture
- config-default drift risks
- Heroku boot/precompile risks
- Grover/Puppeteer and Active Storage production-path regressions
- whether `PG::Coder.new(hash)` is actually gone in evidence, not just assumed

- [ ] **Step 2: Fix reviewer findings and re-run affected checks**

Only fix items in scope for the upgrade.

- [ ] **Step 3: Commit review-driven fixes**

```bash
git add <exact files>
git commit -m "fix: address Rails upgrade review feedback"
```

### Task 8: Deploy safely to `qni-quantum` with rollback-first discipline

**Files:**
- Modify: `docs/superpowers/runbooks/2026-04-13-qni-quantum-ruby-4-0-2-rollout.md` or a new focused runbook if preferred

- [ ] **Step 1: Capture fresh rollback artifacts before deploy**

Run the same style of preparation used in the Ruby 4 rollout:
- fresh DB backup
- fresh baseline release marker/config if needed
- current release number captured

Expected: a rollback point newer than historic releases.

- [ ] **Step 2: Push the reviewed branch to GitHub and deploy to Heroku**

Run:
```bash
cd /home/yasuhito/Work/qni && HUSKY=0 git push origin <branch>
cd /home/yasuhito/Work/qni && HUSKY=0 git push https://git.heroku.com/qni-quantum.git HEAD:main
```

Expected: successful Heroku build and release.

- [ ] **Step 3: Verify dynos and release state immediately**

Run:
```bash
heroku releases -a qni-quantum -n 5
heroku ps -a qni-quantum
```

Expected: new release current; `web.1` and `web.2` return to `up`.

- [ ] **Step 4: Run production smoke checks**

Run:
```bash
curl -I -L https://qniapp.net/
curl -I -L https://www.qniapp.net/
```

Also verify:
- homepage HTML has no application error
- homepage assets return 200
- `/serviceworker.js` and `/manifest.json` return expected content/status under the migrated delivery approach
- DB-backed + Grover/Puppeteer `/:json` path returns expected metadata such as `og:image`
- warning evidence shows `PG::Coder.new(hash)` is gone

- [ ] **Step 5: Roll back immediately if any production-critical verification fails**

Use the freshly captured rollback release/process rather than relying on stale historical releases.

- [ ] **Step 6: Commit runbook/result updates after the rollout is complete**

```bash
git add docs/superpowers/runbooks
git commit -m "docs: record apps/www Rails upgrade rollout"
```

### Task 9: Merge back to `main` only after GitHub and Heroku are both healthy

**Files:**
- Modify: none required beyond already changed files

- [ ] **Step 1: Re-run final local verification on the merged result if needed**

Run the same verification commands used in Task 6.

- [ ] **Step 2: Merge or fast-forward to `main` and push**

Run:
```bash
git checkout main
git merge --ff-only <branch>
HUSKY=0 git push origin main
```

Expected: GitHub branch state clean and up to date.

- [ ] **Step 3: Verify post-merge automation health**

Check:
- GitHub CI succeeds
- Pages deploy (if triggered) succeeds
- Heroku production remains healthy

- [ ] **Step 4: Clean up branch only after verification is complete**

```bash
git branch -d <branch>
git push origin --delete <branch>
```
