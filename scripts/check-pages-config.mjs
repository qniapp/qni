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
