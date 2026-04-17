import { existsSync, readFileSync } from 'node:fs'

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function read(path) {
  return readFileSync(path, 'utf8').trim()
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
assert(
  wwwPackage.engines?.node === '20.20.2',
  `Expected apps/www/package.json to pin node 20.20.2, got: ${wwwPackage.engines?.node}`
)

const ciWorkflow = readFileSync('.github/workflows/ci.yml', 'utf8')
assert(
  ciWorkflow.includes('ruby-version: 4.0.2'),
  'Expected CI workflow to use ruby-version: 4.0.2'
)
assert(ciWorkflow.includes('node-version: [20.20.2]'), 'Expected CI workflow to pin Node 20.20.2')
assert(
  ciWorkflow.includes('pnpm/action-setup@v4'),
  'Expected CI workflow to set up pnpm explicitly'
)
assert(
  ciWorkflow.includes('pnpm install --frozen-lockfile'),
  'Expected CI workflow to install workspace dependencies with pnpm'
)
assert(ciWorkflow.includes('pnpm build'), 'Expected CI workflow to run pnpm build')

const pagesWorkflow = readFileSync('.github/workflows/pages.yml', 'utf8')
assert(
  pagesWorkflow.includes('ruby-version: 4.0.2'),
  'Expected Pages workflow to use ruby-version: 4.0.2'
)
assert(
  pagesWorkflow.includes('pnpm/action-setup@v4'),
  'Expected Pages workflow to set up pnpm explicitly'
)
assert(
  pagesWorkflow.includes('pnpm install --frozen-lockfile'),
  'Expected Pages workflow to install workspace dependencies with pnpm'
)

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
