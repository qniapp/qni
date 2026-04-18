import { existsSync, readFileSync } from 'node:fs'

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function read(path) {
  return readFileSync(path, 'utf8').trim()
}

function assertInOrder(text, snippets, message) {
  let previousIndex = -1
  for (const snippet of snippets) {
    const index = text.indexOf(snippet)
    assert(index !== -1, `${message} (missing snippet: ${snippet})`)
    assert(index > previousIndex, `${message} (out of order around: ${snippet})`)
    previousIndex = index
  }
}

function findTopLevelYamlSectionStart(yaml, sectionName) {
  const match = new RegExp(`(^|\\n)${sectionName}:\\r?\\n`).exec(yaml)
  if (!match) return -1
  return match.index + (match[1] ? match[1].length : 0)
}

assert(existsSync('.tool-versions'), 'Expected root .tool-versions to exist')
assert(existsSync('.mise.toml'), 'Expected root .mise.toml to exist')
const miseToml = readFileSync('.mise.toml', 'utf8')
assert(miseToml.includes('[settings.ruby]'), 'Expected .mise.toml to configure ruby settings')
assert(
  miseToml.includes('compile = false'),
  'Expected .mise.toml to enable precompiled Ruby binaries'
)

const toolVersions = read('.tool-versions')
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
assert(
  toolVersions.includes('node 20.20.2'),
  `Expected .tool-versions to pin node 20.20.2, got: ${toolVersions.join(', ')}`
)
assert(
  toolVersions.includes('ruby 4.0.2'),
  `Expected .tool-versions to pin ruby 4.0.2, got: ${toolVersions.join(', ')}`
)

assert(existsSync('.node-version'), 'Expected root .node-version to exist')
assert(
  read('.node-version') === '20.20.2',
  `Expected .node-version to be 20.20.2, got: ${read('.node-version')}`
)

assert(existsSync('.ruby-version'), 'Expected root .ruby-version to exist')
assert(
  read('.ruby-version') === '4.0.2',
  `Expected .ruby-version to be 4.0.2, got: ${read('.ruby-version')}`
)

assert(existsSync('apps/www/.ruby-version'), 'Expected apps/www/.ruby-version to exist')
assert(
  read('apps/www/.ruby-version') === '4.0.2',
  `Expected apps/www/.ruby-version to be 4.0.2, got: ${read('apps/www/.ruby-version')}`
)

assert(existsSync('apps/tutorial/.ruby-version'), 'Expected apps/tutorial/.ruby-version to exist')
assert(
  read('apps/tutorial/.ruby-version') === '4.0.2',
  `Expected apps/tutorial/.ruby-version to be 4.0.2, got: ${read('apps/tutorial/.ruby-version')}`
)

assert(
  existsSync('scripts/install-local-build-env.sh'),
  'Expected scripts/install-local-build-env.sh to exist'
)
assert(existsSync('scripts/full-build-local.sh'), 'Expected scripts/full-build-local.sh to exist')

const installScript = readFileSync('scripts/install-local-build-env.sh', 'utf8')
assert(
  installScript.includes('ruby@4.0.2'),
  'Expected scripts/install-local-build-env.sh to install ruby@4.0.2'
)
assert(
  installScript.includes('bundler -v 4.0.10') || installScript.includes('bundle _4.0.10_'),
  'Expected scripts/install-local-build-env.sh to provision Bundler 4.0.10'
)

const fullBuildScript = readFileSync('scripts/full-build-local.sh', 'utf8')
assert(
  fullBuildScript.includes('ruby@4.0.2'),
  'Expected scripts/full-build-local.sh to run with ruby@4.0.2'
)

const wwwPackage = JSON.parse(readFileSync('apps/www/package.json', 'utf8'))
const wwwApplicationJs = readFileSync('apps/www/app/javascript/application.js', 'utf8')
const wwwGemfile = readFileSync('apps/www/Gemfile', 'utf8')
const wwwGemfileLock = readFileSync('apps/www/Gemfile.lock', 'utf8')
const wwwLayout = readFileSync('apps/www/app/views/layouts/application.html.erb', 'utf8')
const wwwDatabaseYml = readFileSync('apps/www/config/database.yml', 'utf8')
assert(
  existsSync('apps/www/lib/tasks/pnpm_bundling_overrides.rake'),
  'Expected apps/www pnpm bundling override task file to remain until upstream task detection works with the root lockfile workspace layout'
)
const wwwBundlingOverrides = readFileSync('apps/www/lib/tasks/pnpm_bundling_overrides.rake', 'utf8')
const developmentSectionStart = findTopLevelYamlSectionStart(wwwDatabaseYml, 'development')
const testSectionStart = findTopLevelYamlSectionStart(wwwDatabaseYml, 'test')
const productionSectionStart = findTopLevelYamlSectionStart(wwwDatabaseYml, 'production')
assert(
  developmentSectionStart !== -1 && testSectionStart !== -1 && productionSectionStart !== -1,
  'Expected apps/www/config/database.yml to define development, test, and production sections'
)
assert(
  developmentSectionStart < testSectionStart && testSectionStart < productionSectionStart,
  'Expected apps/www/config/database.yml sections to stay ordered as development, test, production'
)
const defaultDatabaseSection = wwwDatabaseYml.slice(0, developmentSectionStart + 1)
const developmentDatabaseSection = wwwDatabaseYml.slice(
  developmentSectionStart + 1,
  testSectionStart + 1
)
const testDatabaseSection = wwwDatabaseYml.slice(testSectionStart + 1, productionSectionStart + 1)
const productionDatabaseSection = wwwDatabaseYml.slice(productionSectionStart + 1)
assert(
  !wwwApplicationJs.includes("require('@rails/ujs').start()"),
  'Expected apps/www/app/javascript/application.js to stop starting @rails/ujs'
)
assert(
  !wwwApplicationJs.includes("require('turbolinks').start()"),
  'Expected apps/www/app/javascript/application.js to stop starting turbolinks'
)
assert(
  !wwwPackage.dependencies?.['@rails/ujs'] && !wwwPackage.devDependencies?.['@rails/ujs'],
  'Expected apps/www/package.json to stop depending on @rails/ujs'
)
assert(
  !wwwPackage.dependencies?.turbolinks && !wwwPackage.devDependencies?.turbolinks,
  'Expected apps/www/package.json to stop depending on turbolinks'
)
assert(
  !wwwPackage.dependencies?.['@types/turbolinks'] &&
    !wwwPackage.devDependencies?.['@types/turbolinks'],
  'Expected apps/www/package.json to stop depending on @types/turbolinks'
)
assert(
  !wwwGemfile.includes("gem 'turbolinks'"),
  'Expected apps/www/Gemfile to stop depending on turbolinks'
)
assert(
  !wwwGemfileLock.includes('turbolinks ('),
  'Expected apps/www/Gemfile.lock to stop locking turbolinks'
)
assert(
  !wwwLayout.includes('data-turbo-track'),
  'Expected apps/www/app/views/layouts/application.html.erb to stop using data-turbo-track'
)
assert(
  wwwPackage.engines?.node === '20.20.2',
  `Expected apps/www/package.json to pin node 20.20.2, got: ${wwwPackage.engines?.node}`
)
assert(
  wwwGemfile.includes("gem 'selenium-webdriver'"),
  'Expected apps/www/Gemfile to declare selenium-webdriver directly for system tests'
)
assert(
  !wwwGemfile.includes("gem 'webdrivers'"),
  'Expected apps/www/Gemfile to stop depending on the legacy webdrivers gem'
)
assert(
  wwwGemfileLock.includes('    selenium-webdriver ('),
  'Expected apps/www/Gemfile.lock to retain selenium-webdriver for system tests'
)
assert(
  !wwwGemfileLock.includes('\n    webdrivers ('),
  'Expected apps/www/Gemfile.lock to stop locking the legacy webdrivers gem'
)
assert(
  wwwGemfileLock.includes('    jsbundling-rails (1.3.1)'),
  'Expected apps/www/Gemfile.lock to upgrade jsbundling-rails to 1.3.1'
)
assert(
  wwwGemfileLock.includes('    cssbundling-rails (1.4.3)'),
  'Expected apps/www/Gemfile.lock to upgrade cssbundling-rails to 1.4.3'
)
assert(
  testDatabaseSection.includes('host: <%= ENV.fetch("PGHOST", "localhost") %>'),
  'Expected apps/www/config/database.yml test section to default PGHOST to localhost'
)
assert(
  testDatabaseSection.includes('port: <%= ENV.fetch("PGPORT", 5432) %>'),
  'Expected apps/www/config/database.yml test section to default PGPORT to 5432'
)
assert(
  testDatabaseSection.includes('database: qni_test'),
  'Expected apps/www/config/database.yml test section to keep qni_test fixed'
)
assert(
  testDatabaseSection.includes('username: <%= ENV.fetch("PGUSER", "postgres") %>'),
  'Expected apps/www/config/database.yml test section to default PGUSER to postgres'
)
assert(
  testDatabaseSection.includes('password: <%= ENV.fetch("PGPASSWORD", "postgres") %>'),
  'Expected apps/www/config/database.yml test section to default PGPASSWORD to postgres'
)
for (const databaseSection of [
  defaultDatabaseSection,
  developmentDatabaseSection,
  productionDatabaseSection,
]) {
  for (const forbiddenPgEnv of ['PGHOST', 'PGPORT', 'PGDATABASE', 'PGUSER', 'PGPASSWORD']) {
    assert(
      !databaseSection.includes(forbiddenPgEnv),
      `Expected apps/www/config/database.yml to keep ${forbiddenPgEnv} defaults scoped to test only`
    )
  }
}
assert(
  wwwBundlingOverrides.includes("run_www_pnpm_script('build:css', www_root)"),
  'Expected apps/www pnpm bundling override to delegate css:build to the pnpm build:css package script'
)
assert(
  wwwBundlingOverrides.includes("run_www_pnpm_script('build:js', www_root)"),
  'Expected apps/www pnpm bundling override to delegate javascript:build to the pnpm build:js package script'
)
assert(
  !wwwBundlingOverrides.includes('root_bin') &&
    !wwwBundlingOverrides.includes('run_with_root_node_bins'),
  'Expected apps/www pnpm bundling override to stop wiring root node_modules/.bin directly'
)
assert(
  !existsSync('apps/www/pnpm-lock.yaml'),
  'Expected apps/www to keep pnpm lockfile ownership at the workspace root instead of adding a package-local lockfile workaround'
)
const wwwLintScript = wwwPackage.scripts?.lint
assert(typeof wwwLintScript === 'string', 'Expected apps/www/package.json to define a lint script')
for (const ignoredLintTarget of [
  'app/javascript/application.js',
  'app/javascript/**/*.js',
  'app/javascript/controllers/index.js',
  'app/assets/javascripts/*.js',
  'app/assets/javascripts/serviceworker-companion.js',
  'postcss.config.js',
  'rollup.config.js',
  'tailwind.config.js',
]) {
  assert(
    !wwwLintScript.includes(ignoredLintTarget),
    `Expected apps/www lint script to stop targeting ignored file or glob ${ignoredLintTarget}`
  )
}
assert(
  wwwLintScript.includes('app/javascript/controllers/**/*.js'),
  'Expected apps/www lint script to cover controller JavaScript sources'
)
assert(
  wwwLintScript.includes('app/javascript/controllers/**/*.ts'),
  'Expected apps/www lint script to cover controller TypeScript sources'
)
assert(
  wwwLintScript.includes('app/assets/config/*.js'),
  'Expected apps/www lint script to cover asset manifest JavaScript files'
)
assert(
  wwwLintScript.includes('app/assets/javascripts/serviceworker.js'),
  'Expected apps/www lint script to cover the service worker entrypoint'
)
assert(
  !existsSync('apps/www/yarn.lock'),
  'Expected apps/www/yarn.lock to be removed after the pnpm migration'
)
const wwwProcfileDev = readFileSync('apps/www/Procfile.dev', 'utf8')
assert(
  wwwProcfileDev.includes('js: pnpm build --watch'),
  'Expected apps/www/Procfile.dev to start the JS watcher with pnpm'
)
assert(
  wwwProcfileDev.includes('css: pnpm build:css --watch'),
  'Expected apps/www/Procfile.dev to start the CSS watcher with pnpm'
)
assert(!wwwProcfileDev.includes('yarn'), 'Expected apps/www/Procfile.dev to stop using yarn')

const requiredGitInitDefaultBranchEnv = [
  'GIT_CONFIG_COUNT: 1',
  'GIT_CONFIG_KEY_0: init.defaultBranch',
  'GIT_CONFIG_VALUE_0: main',
]

const ciWorkflow = readFileSync('.github/workflows/ci.yml', 'utf8')
assert(
  ciWorkflow.includes('ruby-version: 4.0.2'),
  'Expected CI workflow to use ruby-version: 4.0.2'
)
assert(ciWorkflow.includes('node-version: [20.20.2]'), 'Expected CI workflow to pin Node 20.20.2')
assert(
  ciWorkflow.includes('pnpm/action-setup@v5'),
  'Expected CI workflow to set up pnpm explicitly with the Node 24-compatible pnpm action'
)
assert(
  ciWorkflow.includes('actions/setup-node@v6'),
  'Expected CI workflow to use the latest setup-node major to reduce action-runtime deprecation noise'
)
assert(
  ciWorkflow.includes('POSTGRES_INITDB_ARGS: --auth-host=scram-sha-256 --auth-local=scram-sha-256'),
  'Expected CI workflow to initialize Postgres without trust auth warnings for local or host connections'
)
assert(
  ciWorkflow.includes('--health-cmd "pg_isready -U postgres"'),
  'Expected CI workflow Postgres healthcheck to authenticate as postgres after tightening auth'
)
for (const snippet of requiredGitInitDefaultBranchEnv) {
  assert(
    ciWorkflow.includes(snippet),
    `Expected CI workflow to set ${snippet} to suppress checkout git-init hints`
  )
}
assert(
  ciWorkflow.includes('pnpm install --frozen-lockfile'),
  'Expected CI workflow to install workspace dependencies with pnpm'
)
assert(ciWorkflow.includes('pnpm build'), 'Expected CI workflow to run pnpm build')
assertInOrder(
  ciWorkflow,
  [
    'actions/checkout@v5',
    'pnpm/action-setup@v5',
    'actions/setup-node@v6',
    'pnpm install --frozen-lockfile',
  ],
  'Expected CI workflow to install pnpm before enabling setup-node pnpm cache'
)

const pagesWorkflow = readFileSync('.github/workflows/pages.yml', 'utf8')
assert(
  pagesWorkflow.includes('ruby-version: 4.0.2'),
  'Expected Pages workflow to use ruby-version: 4.0.2'
)
assert(
  pagesWorkflow.includes('pnpm/action-setup@v5'),
  'Expected Pages workflow to set up pnpm explicitly with the Node 24-compatible pnpm action'
)
assert(
  pagesWorkflow.includes('actions/setup-node@v6'),
  'Expected Pages workflow to use the latest setup-node major to reduce action-runtime deprecation noise'
)
for (const snippet of requiredGitInitDefaultBranchEnv) {
  assert(
    pagesWorkflow.includes(snippet),
    `Expected Pages workflow to set ${snippet} to suppress checkout git-init hints`
  )
}
assert(
  pagesWorkflow.includes('pnpm install --frozen-lockfile'),
  'Expected Pages workflow to install workspace dependencies with pnpm'
)
assertInOrder(
  pagesWorkflow,
  [
    'actions/checkout@v5',
    'pnpm/action-setup@v5',
    'actions/setup-node@v6',
    'pnpm install --frozen-lockfile',
  ],
  'Expected Pages workflow to install pnpm before enabling setup-node pnpm cache'
)

const codeqlWorkflow = readFileSync('.github/workflows/codeql-analysis.yml', 'utf8')
assert(
  codeqlWorkflow.includes('actions/checkout@v5'),
  'Expected CodeQL workflow to use actions/checkout@v5'
)
for (const snippet of requiredGitInitDefaultBranchEnv) {
  assert(
    codeqlWorkflow.includes(snippet),
    `Expected CodeQL workflow to set ${snippet} to suppress checkout git-init hints`
  )
}
for (const action of [
  'github/codeql-action/init@v4',
  'github/codeql-action/autobuild@v4',
  'github/codeql-action/analyze@v4',
]) {
  assert(codeqlWorkflow.includes(action), `Expected CodeQL workflow to use ${action}`)
}

const dockerfile = readFileSync('Dockerfile', 'utf8')
assert(dockerfile.includes('ruby-4.0.2.tar.gz'), 'Expected Dockerfile to install Ruby 4.0.2')

const rootPackage = JSON.parse(readFileSync('package.json', 'utf8'))
assert(
  rootPackage.scripts['setup:local-build-env'] === 'bash scripts/install-local-build-env.sh',
  'Expected package.json scripts["setup:local-build-env"] to run the local build environment setup script'
)
assert(
  rootPackage.scripts['build:local-full'] === 'bash scripts/full-build-local.sh',
  'Expected package.json scripts["build:local-full"] to run the local full build script'
)

const installScriptText = readFileSync('scripts/install-local-build-env.sh', 'utf8')
assert(
  installScriptText.includes('pnpm'),
  'Expected scripts/install-local-build-env.sh to install or prepare pnpm'
)

const readme = readFileSync('README.md', 'utf8')
assert(
  readme.includes('./scripts/install-local-build-env.sh'),
  'Expected README.md to document the bootstrap setup script'
)
assert(
  readme.includes('./scripts/full-build-local.sh'),
  'Expected README.md to document the local full build script'
)
assert(readme.includes('pnpm'), 'Expected README.md to mention pnpm')

console.log('Local build environment config OK')
