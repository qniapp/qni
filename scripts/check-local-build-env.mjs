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
  toolVersions.includes('node 16.20.2'),
  `Expected .tool-versions to pin node 16.20.2, got: ${toolVersions.join(', ')}`
)
assert(
  toolVersions.includes('ruby 2.7.4'),
  `Expected .tool-versions to pin ruby 2.7.4, got: ${toolVersions.join(', ')}`
)

assert(existsSync('.node-version'), 'Expected root .node-version to exist')
assert(
  read('.node-version') === '16.20.2',
  `Expected .node-version to be 16.20.2, got: ${read('.node-version')}`
)

assert(existsSync('.ruby-version'), 'Expected root .ruby-version to exist')
assert(
  read('.ruby-version') === '2.7.4',
  `Expected .ruby-version to be 2.7.4, got: ${read('.ruby-version')}`
)

assert(existsSync('apps/tutorial/.ruby-version'), 'Expected apps/tutorial/.ruby-version to exist')
assert(
  read('apps/tutorial/.ruby-version') === '2.7.4',
  `Expected apps/tutorial/.ruby-version to be 2.7.4, got: ${read('apps/tutorial/.ruby-version')}`
)

assert(
  existsSync('scripts/install-local-build-env.sh'),
  'Expected scripts/install-local-build-env.sh to exist'
)
assert(existsSync('scripts/full-build-local.sh'), 'Expected scripts/full-build-local.sh to exist')

const rootPackage = JSON.parse(readFileSync('package.json', 'utf8'))
assert(
  rootPackage.scripts['setup:local-build-env'] === 'bash scripts/install-local-build-env.sh',
  'Expected package.json scripts["setup:local-build-env"] to run the local build environment setup script'
)
assert(
  rootPackage.scripts['build:local-full'] === 'bash scripts/full-build-local.sh',
  'Expected package.json scripts["build:local-full"] to run the local full build script'
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

console.log('Local build environment config OK')
