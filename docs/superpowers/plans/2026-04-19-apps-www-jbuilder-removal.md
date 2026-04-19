# apps/www Jbuilder removal Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `apps/www` から未使用の `jbuilder` 依存を保守的に除去し、`/:json` / `svg/:json` の current request path を壊さずに、Jbuilder 非依存であることを focused guard 付きで固定する。

**Architecture:** current local `main` を基点に dedicated worktree を作り、まず `jbuilder` が dependency file にだけ残っている現状と、`/:json` / `svg/:json` が ERB-based request path として成立している現状を baseline として固定する。その後 `apps/www/test/integration/jbuilder_removal_test.rb` で dependency policy・template absence・2 本の request path を guard する failing test を先に書き、`apps/www/Gemfile` / `Gemfile.lock` から `jbuilder` を除去して GREEN にする。最後に apps/www-focused verification、repo-level non-browser verification、reviewer gate、`main` への統合、GitHub Actions 確認、cleanup まで通す。

**Tech Stack:** Rails 7.2.x, Ruby 4.0.2, Bundler, Minitest integration tests, Propshaft, Node.js 20.20.2, pnpm 10.33.0, GitHub Actions

---

## File Structure

### Files likely to change

- `apps/www/Gemfile`: top-level `jbuilder` dependency を削除する
- `apps/www/Gemfile.lock`: `DEPENDENCIES` と resolved gems から `jbuilder` を落とす
- `apps/www/test/integration/jbuilder_removal_test.rb`: dependency policy / template absence / `/:json` + `svg/:json` request continuation を固定する new guard

### Files that may change only if Task 1 で text-only traces が見つかった場合

- `apps/www/README.md`: app-local に Jbuilder 前提の stale wording が実在した場合のみ削除する
- `apps/www/**` の comment-only trace: 同上。runtime code trace が見つかった場合は cleanup に進まず停止して人へ戻す

### Files to inspect/reference only

- `docs/superpowers/specs/2026-04-19-apps-www-jbuilder-removal-design.md`
- `apps/www/config/routes.rb`
- `apps/www/app/controllers/circuits_controller.rb`
- `apps/www/app/controllers/circuit_svg_controller.rb`
- `apps/www/app/views/circuits/show.html.erb`
- `apps/www/app/views/circuit_svg/show.html.erb`
- `apps/www/app/controllers/concerns/jsonnable.rb`
- `apps/www/test/test_helper.rb`
- `apps/www/test/integration/grover_runtime_config_test.rb`
- `apps/www/test/integration/propshaft_config_test.rb`

### Scope guard

今回の implementation diff は **`apps/www/**` に閉じる\*\*。

今回の lane では変更しない。

- `docs/tech-stack.md` など repo 直下 docs
- `apps/tutorial/**`
- `packages/**`
- `.github/workflows/**`
- route / controller / view の broader redesign
- `serviceworker.js` 命名整理や other modernization lane

Task 1 で `apps/www` 内に `jbuilder` / `Jbuilder` trace が見つかった場合、同じ lane で触ってよいのは **README や comment-only trace の小さな整理まで** とする。runtime code usage が見つかった場合は spec 前提が崩れるため、その場で停止して人へ戻す。

---

### Task 1: dedicated worktree と baseline を固定する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-19-apps-www-jbuilder-removal-design.md`
- Reference: `apps/www/Gemfile`
- Reference: `apps/www/Gemfile.lock`
- Reference: `apps/www/config/routes.rb`
- Reference: `apps/www/app/controllers/circuits_controller.rb`
- Reference: `apps/www/app/controllers/circuit_svg_controller.rb`
- Reference: `apps/www/app/views/circuits/show.html.erb`
- Reference: `apps/www/app/views/circuit_svg/show.html.erb`
- Reference: `apps/www/test/integration/grover_runtime_config_test.rb`

- [ ] **Step 1: current local `main` から dedicated worktree を作成する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git switch main
git status --short --branch
BASE_SHA=$(git rev-parse main)
echo "$BASE_SHA" >/tmp/qni-www-jbuilder-base-sha
git worktree add -b feat/www-jbuilder-removal .worktrees/www-jbuilder-removal main
```

Expected: `.worktrees/www-jbuilder-removal` が current local `main` を base に作成され、以後の diff / reviewer target 用に base SHA が `/tmp/qni-www-jbuilder-base-sha` に固定される。

- [ ] **Step 2: worktree で toolchain と依存を揃える**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-jbuilder-removal
mise trust . >/dev/null 2>&1 || true
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'corepack enable >/dev/null 2>&1 || true; corepack prepare pnpm@10.33.0 --activate >/dev/null; pnpm install --frozen-lockfile'
cd /home/yasuhito/Work/qni/.worktrees/www-jbuilder-removal/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: root pnpm deps と `apps/www` の Ruby deps が worktree 上で current main と同条件に揃う。

- [ ] **Step 3: current unwanted state を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-jbuilder-removal
rg -n '^\s*gem\s+["'"']jbuilder["'"']' apps/www/Gemfile
rg -n '^\s{2}jbuilder$|^\s{4}jbuilder \(' apps/www/Gemfile.lock
find apps/www/app/views -name '*.jbuilder' -print
rg -n 'jbuilder|Jbuilder' apps/www --glob '!Gemfile' --glob '!Gemfile.lock' || true
rg -n 'get .svg/\(:json\)|get ./\(:json\)' apps/www/config/routes.rb
rg -n 'class CircuitsController|class CircuitSvgController|valid_json\?' apps/www/app/controllers apps/www/app/controllers/concerns/jsonnable.rb
rg -n 'render\(partial: .circuit_svg.|quantum-simulator|quantum-circuit' apps/www/app/views/circuits/show.html.erb apps/www/app/views/circuit_svg/show.html.erb
test ! -e apps/www/test/integration/jbuilder_removal_test.rb
```

Expected:

- `apps/www/Gemfile` に `jbuilder` 宣言がある
- `apps/www/Gemfile.lock` の `DEPENDENCIES` / resolved gems に `jbuilder` がある
- `find ... '*.jbuilder'` は no output
- `rg -n 'jbuilder|Jbuilder' apps/www --glob '!Gemfile' --glob '!Gemfile.lock'` は no output が理想
- route には `/:json` と `svg/:json` が残っている
- controller / view は ERB-based request path であり Jbuilder DSL ではない
- new test file はまだ無い

- [ ] **Step 4: extra app-local traces があるかを分類する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-jbuilder-removal
EXTRA_TRACES=$(rg -l 'jbuilder|Jbuilder' apps/www --glob '!Gemfile' --glob '!Gemfile.lock' || true)
printf '%s\n' "$EXTRA_TRACES"
```

Expected:

- ideally empty
- empty なら Task 3 の small related cleanup は不要
- `apps/www/README.md` や comment-only trace のみなら Task 3 で一緒に消してよい
- controller / model / view runtime code trace が出たら **この plan では進めず停止** する

- [ ] **Step 5: baseline task は commit しない**

この task は観測のみ。commit しない。

### Task 2: failing guard test を追加して RED を固定する

**Files:**

- Create: `apps/www/test/integration/jbuilder_removal_test.rb`
- Reference: `apps/www/test/integration/grover_runtime_config_test.rb`

- [ ] **Step 1: `apps/www/test/integration/jbuilder_removal_test.rb` を書く**

Create file with this content:

```ruby
# frozen_string_literal: true

require 'test_helper'

class JbuilderRemovalTest < ActionDispatch::IntegrationTest
  test 'apps/www dependency policy no longer declares jbuilder' do
    assert_not gemfile_declares?('jbuilder')
    assert_not_includes lockfile_dependencies, 'jbuilder'
  end

  test 'app views no longer include jbuilder templates' do
    assert_empty Dir.glob(Rails.root.join('app/views/**/*.jbuilder').to_s).sort
  end

  test 'shared circuit path still renders without jbuilder' do
    with_stubbed_layout_asset_tags do
      get circuit_path(json: '{"cols":["H"]}')
    end

    assert_response :success
    assert_select 'quantum-simulator'
  end

  test 'circuit svg path still renders without jbuilder' do
    with_stubbed_layout_asset_tags do
      get circuit_svg_path(json: '{"cols":["H"]}')
    end

    assert_response :success
    assert_select 'quantum-circuit'
  end

  private

  def gemfile_declares?(gem_name)
    Rails.root.join('Gemfile').read.lines.any? do |line|
      line.match?(/^\s*gem\s+["']#{Regexp.escape(gem_name)}["'](?:\s|,)/)
    end
  end

  def lockfile_dependencies
    section = Rails.root.join('Gemfile.lock').read[/^DEPENDENCIES\n(?<deps>(?:\s{2}.+\n)+)/m, :deps].to_s
    section.lines.map { |line| line.strip.split(/\s+/, 2).first }
  end

  def with_stubbed_layout_asset_tags
    ActionView::Base.class_eval do
      alias_method :__jbuilder_test_original_javascript_include_tag, :javascript_include_tag
      alias_method :__jbuilder_test_original_stylesheet_link_tag, :stylesheet_link_tag

      def javascript_include_tag(...)
        '<script src="/assets/application.js"></script>'.html_safe
      end

      def stylesheet_link_tag(...)
        '<link rel="stylesheet" href="/assets/application.css" />'.html_safe
      end
    end

    yield
  ensure
    ActionView::Base.class_eval do
      alias_method :javascript_include_tag, :__jbuilder_test_original_javascript_include_tag
      alias_method :stylesheet_link_tag, :__jbuilder_test_original_stylesheet_link_tag
      remove_method :__jbuilder_test_original_javascript_include_tag
      remove_method :__jbuilder_test_original_stylesheet_link_tag
    end
  end
end
```

- [ ] **Step 2: new guard file の RED を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-jbuilder-removal/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/integration/jbuilder_removal_test.rb'
```

Expected: FAIL。最初の dependency policy test が `Gemfile` / `Gemfile.lock` にまだ `jbuilder` が残っているため落ちる。`/:json` と `svg/:json` request tests は asset-tag stubbing により Jbuilder 以外の理由で false-negative しない。

- [ ] **Step 3: RED task は commit しない**

この task は failing test 追加まで。まだ commit しない。

### Task 3: `jbuilder` を除去し、guard を GREEN にする

**Files:**

- Modify: `apps/www/Gemfile`
- Modify: `apps/www/Gemfile.lock`
- Modify: `apps/www/test/integration/jbuilder_removal_test.rb`（RED で微調整が必要だった場合のみ）
- Optional Modify: `apps/www/README.md`
- Optional Modify: `apps/www/**` comment-only trace

- [ ] **Step 1: `apps/www/Gemfile` から `jbuilder` を削除する**

Remove this line exactly:

```ruby
gem 'jbuilder'
```

他の gem の並び替えや unrelated cleanup はしない。

- [ ] **Step 2: `Gemfile.lock` を sync する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-jbuilder-removal/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle install'
```

Expected: `apps/www/Gemfile.lock` が更新され、`DEPENDENCIES` から `jbuilder` が外れる。

- [ ] **Step 3: lockfile と app-local traces を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-jbuilder-removal
ruby -e 'gemfile = File.read("apps/www/Gemfile"); abort("jbuilder gem declaration remains") if gemfile.lines.any? { |line| line.match?(/^\s*gem\s+["'"']jbuilder["'"'](?:\s|,)/) }; puts "Gemfile OK"'
ruby -e 'lockfile = File.read("apps/www/Gemfile.lock"); deps = lockfile[/^DEPENDENCIES\n(?<deps>(?:\s{2}.+\n)+)/m, :deps].to_s.lines.map { |line| line.strip.split(/\s+/, 2).first }; abort("jbuilder dependency remains in DEPENDENCIES") if deps.include?("jbuilder"); puts "Lockfile DEPENDENCIES OK"'
if rg -n '^\s{4}jbuilder \(' apps/www/Gemfile.lock; then
  echo 'unexpected transitive jbuilder remains in Gemfile.lock'
  exit 1
fi
rg -n 'jbuilder|Jbuilder' apps/www --glob '!Gemfile' --glob '!Gemfile.lock' --glob '!test/integration/jbuilder_removal_test.rb' || true
```

Expected:

- `Gemfile OK`
- `Lockfile DEPENDENCIES OK`
- lockfile resolved gems にも `jbuilder` が残らない
- `apps/www` 内の extra trace は ideally no output
- `apps/www/README.md` や comment-only trace が出た場合だけ次の step で小さく整理する
- runtime code trace が出た場合は **この lane を停止して人へ戻す**

- [ ] **Step 4: Task 1 / Step 4 で text-only trace が見つかっていた場合だけ小さく整理する**

Allowed:

- `apps/www/README.md` の stale wording 削除
- `apps/www/**` の comment-only trace 削除

Not allowed:

- route / controller / view behavior の redesign
- broader JSON semantics cleanup

Expected: `apps/www` 内の Jbuilder mention は dependency files と new guard test file 以外から消える。Task 1 で extra trace が empty だった場合はこの step を skip してよい。

- [ ] **Step 5: new guard file を GREEN にする**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-jbuilder-removal/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/integration/jbuilder_removal_test.rb'
```

Expected: PASS。dependency policy / template absence / `/:json` / `svg/:json` の 4 観点が green になる。

- [ ] **Step 6: removal + guard を commit する**

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-jbuilder-removal
git add apps/www/Gemfile apps/www/Gemfile.lock apps/www/test/integration/jbuilder_removal_test.rb apps/www/README.md
git commit -m "build: remove unused www jbuilder"
```

If `apps/www/README.md` を触っていない場合は、その path を `git add` から外して実行する。comment-only trace を触った場合はその path も同じ commit に追加する。

### Task 4: focused verification・reviewer・integration・cleanup を完了する

**Files:**

- Reference: `docs/superpowers/specs/2026-04-19-apps-www-jbuilder-removal-design.md`
- Reference: `docs/superpowers/plans/2026-04-19-apps-www-jbuilder-removal.md`

- [ ] **Step 1: apps/www-focused verification を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-jbuilder-removal/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/integration/propshaft_config_test.rb test/integration/grover_runtime_config_test.rb test/integration/jbuilder_removal_test.rb'
```

Expected: PASS。new guard に加え、layout / Propshaft / recent Grover lane の integration test も壊れていない。

- [ ] **Step 2: repo-level non-browser verification と diff hygiene を通す**

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-jbuilder-removal
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'pnpm build && pnpm lint && pnpm typecheck && pnpm test:ci'
git diff --check
```

Expected: PASS。user-approved verification B が green で、diff quality も clean。

- [ ] **Step 3: diff boundary が `apps/www/**` に閉じていることを確認する\*\*

Run:

```bash
cd /home/yasuhito/Work/qni/.worktrees/www-jbuilder-removal
BASE_SHA=$(cat /tmp/qni-www-jbuilder-base-sha)
python - <<'PY'
import os, subprocess, sys
base = open('/tmp/qni-www-jbuilder-base-sha').read().strip()
changed = [line for line in subprocess.check_output(['git', 'diff', '--name-only', f'{base}..HEAD'], text=True).splitlines() if line]
unexpected = [path for path in changed if not path.startswith('apps/www/')]
if unexpected:
    print('Unexpected non-apps/www changes:')
    for path in unexpected:
        print(path)
    sys.exit(1)
print('Diff scope OK')
for path in changed:
    print(path)
PY
```

Expected: `Diff scope OK`。changed file list は `apps/www/**` に閉じる。

- [ ] **Step 4: reviewer gate を通す**

Reviewer に必ず渡す context:

- spec path: `docs/superpowers/specs/2026-04-19-apps-www-jbuilder-removal-design.md`
- plan path: `docs/superpowers/plans/2026-04-19-apps-www-jbuilder-removal.md`
- review target: `$(cat /tmp/qni-www-jbuilder-base-sha)..HEAD`
- 必須観点:
  - lane が `apps/www` に閉じているか
  - `/:json` と `svg/:json` の両 guard が入っているか
  - asset-tag stubbing が deterministic で false-negative を減らす設計になっているか
  - route / controller / view redesign に scope creep していないか
  - repo-wide docs sync に広がっていないか

Expected: APPROVED。Issues Found の場合は worktree 内で修正し、Step 1-3 verification を再実行してから reviewer をやり直す。

- [ ] **Step 5: local `main` に fast-forward merge し、canonical path で再確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
git fetch origin
git switch main
git merge --ff-only feat/www-jbuilder-removal
cd /home/yasuhito/Work/qni/apps/www
mise exec node@20.20.2 ruby@4.0.2 -- bash -lc 'ruby -S bundle exec rails test test/integration/propshaft_config_test.rb test/integration/grover_runtime_config_test.rb test/integration/jbuilder_removal_test.rb'
cd /home/yasuhito/Work/qni
git diff --check
```

Expected: PASS。canonical path の `main` でも focused verification と diff hygiene が clean。

- [ ] **Step 6: `origin/main` へ push し、GitHub Actions を確認する**

Run:

```bash
cd /home/yasuhito/Work/qni
git push origin main
HEAD_SHA=$(git rev-parse HEAD)
for workflow in "CI" "Deploy Pages" "CodeQL"; do
  run_id=$(gh run list --limit 20 --json databaseId,workflowName,headSha --branch main --jq ".[] | select(.headSha == \"${HEAD_SHA}\" and .workflowName == \"${workflow}\") | .databaseId" | head -n 1)
  test -n "$run_id"
  gh run watch "$run_id" --exit-status
done
```

Expected: `CI`, `Deploy Pages`, `CodeQL` が対象 headSha で success になる。

- [ ] **Step 7: worktree / branch を cleanup する**

Run:

```bash
cd /home/yasuhito/Work/qni
git worktree remove .worktrees/www-jbuilder-removal
git branch -d feat/www-jbuilder-removal
git rev-list --left-right --count origin/main...HEAD
git status --short --branch
```

Expected: worktree と branch が削除され、`origin/main...HEAD` は `0	0`、working tree clean。
