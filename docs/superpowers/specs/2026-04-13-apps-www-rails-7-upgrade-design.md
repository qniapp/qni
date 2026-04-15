# apps/www Rails 7.x upgrade design

## Summary

This design evaluates the next safe Rails target for `apps/www` after the Ruby 4.0.2 / Heroku-24 rollout. The immediate trigger is the remaining `PG::Coder.new(hash)` warning under Ruby 4, which comes from Rails 6.1.7.10 internals and is already fixed upstream in newer Rails lines.

The goal of this design is not to implement a Rails upgrade yet. It is to decide what the next safe supported Rails target should be for `apps/www`, compare near-term candidates, and document the verification and rollback expectations required before touching production.

## Problem

`apps/www` currently runs on Rails 6.1.7.10 with Ruby 4.0.2. After the Ruby 4 rollout, the remaining runtime warning is:

- `PG::Coder.new(hash) is deprecated. Please use keyword arguments instead!`

The warning originates in `activerecord-6.1.7.10/lib/active_record/connection_adapters/postgresql_adapter.rb`, where Rails 6.1 still rebuilds the PostgreSQL timestamp decoder with a positional hash. Rails 7.0 upstream changed this path to keyword arguments, so the warning is a framework-level compatibility gap rather than an app-level bug.

A local monkey patch may be possible, but it would be a framework-internal override on a production Rails app that was only just stabilized on Ruby 4. Because the warning already has an upstream fix, the safer strategic question is whether to move `apps/www` to a currently supported newer Rails target instead of accumulating internal patches.

## Scope

### In scope

- Evaluate a supported near-term Rails target for `apps/www`, with Rails 7.0 and 7.1 treated as comparison baselines rather than automatic implementation targets
- Compare candidate targets specifically for this repository and deployment model, including current support posture at execution time
- Document the likely code/config/runtime touch points in `apps/www`
- Define the verification and production-smoke expectations for any future implementation plan
- Produce a recommendation for the next implementation plan

### Out of scope

- Implementing the Rails upgrade itself
- Changing `apps/tutorial`
- Changing repository-wide Ruby policy beyond the already-approved Ruby 4.0.2 baseline
- Changing production topology or adding staging infrastructure
- Broad unrelated refactoring

## Current state

`apps/www` currently has these relevant characteristics:

- Rails `~> 6.1`
- Ruby `4.0.2`
- PostgreSQL via `pg`
- Puma 7 runtime on Heroku
- `cssbundling-rails` + `jsbundling-rails` + `sprockets`
- `stimulus-rails`
- `turbolinks`
- `@rails/ujs` in the JavaScript package
- `view_component`
- `serviceworker-rails`
- Grover/Puppeteer-backed rendering path used in production smoke checks
- S3-backed Active Storage in production
- `config.load_defaults 6.0`
- deprecated development config still present: `config.web_console.whitelisted_ips`

This app is deployed to the live Heroku production app `qni-quantum`, so upgrade design must prioritize conservative rollout and clear rollback criteria.

During initial Rails 7.2 execution work, the dependency upgrade itself resolved, but production boot failed because `serviceworker-rails` 0.6.0 requires `rack/file`, which is not available under the Rack 3 path brought in by Rails 7.2. That makes service worker delivery strategy a first-class upgrade concern rather than a minor compatibility cleanup.

## Options considered

### Option A: stay on Rails 6.1 and add a local compatibility patch

#### Pros
- Smallest immediate change surface
- Could remove the warning without touching broader framework behavior

#### Cons
- Fix would override Rails internals locally
- Risk of “warning hidden but upgrade debt worsened”
- Harder to justify long term now that Ruby 4 is already in production
- Leaves `apps/www` on an older major while future Ruby compatibility pressure increases

#### Assessment
This is the fallback option if Rails 7 upgrade investigation shows unacceptable risk, but it is not the preferred direction.

### Option B: upgrade `apps/www` to Rails 7.0 first

#### Pros
- Includes the upstream fix for the `PG::Coder` warning
- Smaller step from 6.1 than 7.1 is likely to be
- Preserves a conservative operational posture after the recent Ruby/Heroku rollout
- Lets us re-baseline on a supported major before deciding on another step

#### Cons
- Still a transitional target rather than the final likely destination
- Requires app/config/gem compatibility work anyway
- May lead to another future Rails step sooner than desired

#### Assessment
This remains a useful compatibility baseline because it contains the upstream fix, but it should not be selected for production execution unless support posture is explicitly accepted.

### Option C: skip to Rails 7.1

#### Pros
- Better medium-term maintenance position than 7.0
- May avoid doing two separate Rails majors in close succession

#### Cons
- Larger compatibility surface than 7.0
- Higher chance of touching app behavior, JS integration, or config defaults in one jump
- Higher rollout risk on the single live production app

#### Assessment
This is worth comparing in the design, but should only be preferred if its additional change surface is small enough to justify skipping 7.0.

### Option D: choose the lowest-risk currently supported target at planning time

#### Pros
- Keeps the production app on a Rails line with normal support coverage
- Avoids spending production rollout effort on an already-aged major/minor line
- Still allows 7.0/7.1 comparison findings to inform expected compatibility work

#### Cons
- May require a larger step than the warning alone would suggest
- Could increase implementation scope beyond the immediate cleanup goal

#### Assessment
This is the preferred strategic frame for a production-first app in 2026.

## Recommendation

Write the implementation plan for the **lowest-risk currently supported Rails target**, using Rails 7.0 and 7.1 as comparison baselines rather than default implementation destinations.

Rationale:

1. The current warning is already fixed upstream in newer Rails lines, and Rails 7.0 demonstrates the specific keyword-argument fix path.
2. The repo has just completed a Ruby 4.0.2 / Heroku-24 stabilization; the next framework move should improve support posture, not only remove one warning.
3. `apps/www` has several integration points that can widen the blast radius:
   - asset build chain
   - Grover/Puppeteer production rendering
   - Active Storage + S3
   - legacy Rails/UJS/Turbolinks-era frontend mix
4. For a single live Heroku production app, choosing a currently supported destination is safer than spending rollout effort on a stopover that may already be outside normal support windows.

## Expected touch points for a future implementation plan

The implementation plan should expect review and possible edits in at least these areas:

- `apps/www/Gemfile`
- `apps/www/Gemfile.lock`
- `apps/www/config/application.rb`
- `apps/www/config/environments/development.rb`
- `apps/www/config/environments/production.rb`
- `apps/www/config/initializers/*`
- `apps/www/bin/*`
- `apps/www/package.json`
- `apps/www/app/javascript/*`
- `apps/www/config/initializers/serviceworker.rb`
- `apps/www/app/assets/javascripts/serviceworker.js`
- `apps/www/app/assets/javascripts/manifest.json`
- `apps/www/app/views/layouts/application.html.erb`
- `apps/www/Procfile`

Potentially also:

- `apps/www/config/puma.rb`
- `apps/www/config/routes.rb`
- `apps/www/test/*`

## Compatibility questions to answer during planning

The implementation plan must explicitly validate these areas rather than assuming the upgrade is mechanical:

0. **Support posture at execution time**
   - Confirm the chosen Rails target is still under normal support when the implementation starts, or explicitly document approved extended-support coverage before proceeding.

1. **Rails defaults strategy**
   - Keep `config.load_defaults 6.0` initially and upgrade behavior later, or move defaults during the same change?
2. **Development config cleanup**
   - Replace deprecated `web_console.whitelisted_ips` with the supported setting as part of the Rails move.
3. **Asset pipeline and bundling**
   - Verify `cssbundling-rails`, `jsbundling-rails`, `sprockets`, and `serviceworker-rails` all behave correctly after the upgrade.
4. **Frontend runtime compatibility**
   - Confirm `turbolinks`, `stimulus-rails`, and `@rails/ujs` usage still boots cleanly.
5. **Service worker delivery strategy**
   - Replace or remove `serviceworker-rails`, which is not Rack 3 compatible in its current form.
   - Compare at least these options:
     - static delivery of `serviceworker.js` / `manifest.json`
     - Rails 7.2 built-in PWA-style delivery
     - a minimal self-owned route/controller/static implementation
   - Prefer the lowest-complexity option that preserves current browser-facing behavior without middleware dependence.
6. **Gem compatibility**
   - Confirm `view_component`, `grover`, `better_html`, and other runtime gems work on the chosen Rails target.
7. **Production integration paths**
   - Verify S3-backed Active Storage, DB-backed circuit rendering, Grover/Puppeteer output, and service worker/manifest delivery still work under production settings.
8. **Heroku deploy behavior**
   - Reconfirm build, release, asset precompile, dyno boot, and rollback behavior on `qni-quantum`.

## Verification requirements for any future implementation

### Local verification

At minimum:

- `bundle install`
- `ruby -S bundle exec rails test`
- `RAILS_ENV=production ruby -S bundle exec rails assets:precompile`
- production boot smoke with the same dummy-secret/AWS env convention already used in this repo
- `PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres yarn test:ci`
- `git diff --check`

### Reviewer gate

- Require focused code review before any production deploy
- Reviewer should look specifically for config-default drift, gem-compatibility risks, and production asset/boot regressions

### Production verification

For any rollout to `qni-quantum`, verify at minimum:

- Heroku build succeeds
- release phase and dyno boot succeed
- `web.1` / `web.2` return to `up`
- `https://qniapp.net/` returns 200
- `https://www.qniapp.net/` returns 200
- homepage HTML does not show application error output
- homepage assets return 200
- `/serviceworker.js` and `/manifest.json` return expected content/status after the chosen delivery migration
- DB-backed and Grover/Puppeteer-backed `/:json` smoke still returns expected metadata such as `og:image`
- the `PG::Coder.new(hash)` warning is no longer present

## Rollback expectation

Because there is no staging app and the rollout model is production-first with short acceptable downtime, any Rails upgrade plan must preserve the same rollback discipline already used for the Ruby 4 rollout:

- capture a fresh DB backup before cutover
- establish a fresh rollback-ready baseline release
- keep rollback instructions explicit in the implementation plan/runbook
- avoid mixing unrelated cleanup with the framework upgrade

## Decision output

This design should lead to one of two outcomes:

1. **Go**: write an implementation plan for upgrading `apps/www` to the chosen currently supported target, with Rails 7.0 and 7.1 comparison notes retained as compatibility references
2. **Stop**: if planning research uncovers high-risk compatibility blockers or no acceptable supported target path, keep Rails 6.1 for now and revisit a smaller local workaround for the `PG::Coder` warning

## Recommendation to carry forward

Proceed to implementation planning for **`apps/www` → the lowest-risk currently supported Rails target`**, using the Rails 7.0 keyword-argument fix as evidence that the warning is resolved upstream and using Rails 7.1 as an intermediate comparison point only if it helps estimate upgrade effort.

That implementation planning must now explicitly include a service worker delivery migration, because the current `serviceworker-rails` setup is a Rails 7.2 / Rack 3 blocker.
