import { existsSync, readFileSync } from 'node:fs'

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

const tutorialPackage = JSON.parse(readFileSync('apps/tutorial/package.json', 'utf8'))
const tutorialLayout = readFileSync('apps/tutorial/_layouts/default.html', 'utf8')

assert(
  !tutorialLayout.includes('polyfill.io'),
  'Expected apps/tutorial/_layouts/default.html to stop loading polyfill.io'
)

assert(
  tutorialPackage.scripts.start?.includes('../../html'),
  `Expected apps/tutorial/package.json scripts.start to output to ../../html, got: ${tutorialPackage.scripts.start}`
)
assert(
  typeof tutorialPackage.scripts['build:site'] === 'string',
  'Expected apps/tutorial/package.json to define scripts["build:site"]'
)
assert(
  tutorialPackage.scripts['build:site'].includes('build:site-deps') ||
    tutorialPackage.scripts['build:site'].includes('pnpm --dir ../.. build:site-deps'),
  `Expected apps/tutorial/package.json scripts["build:site"] to prebuild the site dependencies via root build:site-deps, got: ${tutorialPackage.scripts['build:site']}`
)
assert(
  tutorialPackage.scripts['build:site'].includes('bundle exec jekyll build -d ../../html'),
  `Expected apps/tutorial/package.json scripts["build:site"] to build into ../../html, got: ${tutorialPackage.scripts['build:site']}`
)

const workflowPath = '.github/workflows/pages.yml'
assert(existsSync(workflowPath), `Expected ${workflowPath} to exist`)
const workflow = readFileSync(workflowPath, 'utf8')
for (const snippet of [
  'actions/configure-pages',
  'actions/upload-pages-artifact',
  'actions/deploy-pages',
  'path: html',
]) {
  assert(workflow.includes(snippet), `Expected ${workflowPath} to include: ${snippet}`)
}

const introductionStep = workflow.match(
  /      - name: Checkout pinned introduction tutorial\n([\s\S]*?)(?=\n      - name:)/
)?.[1]
assert(
  introductionStep?.match(/^ {10}ref: (.+)$/m)?.[1] === '6e0a7afde78d20d3fc3fc66cfbf37f2a3af63f0b',
  'Pages must use the explicitly reviewed introduction commit, never a moving branch'
)
assert(
  workflow.includes('mv .introduction-tutorial "$directory/tutorial"'),
  'Tutorial and nested WebGPU checkout must move outside the legacy pnpm workspace'
)

// build-embed.sh prefers GITHUB_SHA over git HEAD unless explicitly overridden.
// In this workflow GITHUB_SHA is Qni's commit, not the nested engine's commit.
const engineRef = '${{ steps.webgpu.outputs.ref }}'
const checkoutStep = workflow.match(
  /      - name: Checkout pinned WebGPU source\n([\s\S]*?)(?=\n      - name:)/
)?.[1]
const sourceBuildStep = workflow.match(
  /      - name: Build current pinned WebGPU assets\n([\s\S]*?)(?=\n      - name:)/
)?.[1]
assert(
  checkoutStep?.match(/^ {10}ref: (.+)$/m)?.[1] === engineRef &&
    sourceBuildStep?.match(/^ {10}QNI_SOURCE_COMMIT: (.+)$/m)?.[1] === engineRef,
  'WebGPU source provenance must use the same exact ref for checkout and QNI_SOURCE_COMMIT, never the parent GITHUB_SHA'
)

// action-setup recursively replaces dest, including any setup-node cache stored there.
const pnpmDestinations = [
  ...workflow.matchAll(/uses: pnpm\/action-setup@[^\n]+\n\s+with:\n((?: {10}[^\n]*\n)+)/g),
].map((match) => match[1].match(/^\s+dest:\s*(\S+)/m)?.[1] ?? '~/setup-pnpm')
assert(
  new Set(pnpmDestinations).size === pnpmDestinations.length,
  'Pages pnpm setup destinations must be distinct: a later installer removes the earlier cached store'
)

const prettierIgnore = readFileSync('.prettierignore', 'utf8')
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
assert(prettierIgnore.includes('html/'), 'Expected .prettierignore to ignore html/')
assert(!prettierIgnore.includes('docs/'), 'Expected .prettierignore to stop ignoring root docs/')

assert(existsSync('html/index.html'), 'Expected generated site to live at html/index.html')
assert(
  !existsSync('docs/index.html'),
  'Expected root docs/ to be available for markdown, not generated Pages HTML'
)

console.log('Pages config OK')
