import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdtemp, mkdir, writeFile, readFile, readdir, rm, symlink, cp } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { test } from 'node:test'

const command = resolve('scripts/compose-introduction.mjs')
const assets = [
  '_astro/index.js',
  'qni-webgpu/qni-web_bg.wasm',
  'qni-webgpu/qni-embed-error.mjs',
  'favicon.svg',
  'images/bit_capacitor_vs_quantum.svg',
  'images/quantum_search_vs_linear.svg',
  'images/quantum_factoring.svg',
  'images/introduction/qni_screenshot_grover.png',
]

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'qni-compose-test-'))
  t.after(() => rm(root, { recursive: true, force: true }))
  for (const [file, content] of Object.entries({
    'old/index.html': 'old introduction',
    'old/qpu.html': 'real legacy page',
    'new/index.html': '<h1>new introduction</h1>',
    'new/qpu/index.html': 'must not publish',
    'new/app/index.html': 'diagnostic must not publish',
    'new/images/unused.png': 'unused',
    ...Object.fromEntries(assets.map((file) => [`new/${file}`, file])),
  })) {
    await mkdir(join(root, file, '..'), { recursive: true })
    await writeFile(join(root, file), content)
  }
  return root
}

async function snapshot(dir) {
  const files = await readdir(dir, { recursive: true, withFileTypes: true })
  return Object.fromEntries(
    await Promise.all(
      files
        .filter((f) => f.isFile())
        .map(async (f) => {
          const path = join(f.parentPath ?? f.path, f.name)
          return [path.slice(dir.length + 1), (await readFile(path)).toString('hex')]
        })
    )
  )
}

function compose(root) {
  return spawnSync(process.execPath, [command, join(root, 'old'), join(root, 'new')], {
    encoding: 'utf8',
  })
}

test('command replaces only the old introduction and adds selected runtime assets', async (t) => {
  const root = await fixture(t)
  const before = await snapshot(join(root, 'old'))
  const result = compose(root)
  assert.equal(result.status, 0, result.stderr)
  const after = await snapshot(join(root, 'old'))
  assert.equal(await readFile(join(root, 'old/index.html'), 'utf8'), '<h1>new introduction</h1>')
  for (const [file, bytes] of Object.entries(before))
    if (file !== 'index.html') assert.equal(after[file], bytes)
  assert.deepEqual(Object.keys(after).sort(), ['index.html', 'qpu.html', ...assets].sort())
})

test('different asset collision refuses the whole overlay before modifying old output', async (t) => {
  const root = await fixture(t)
  await mkdir(join(root, 'old/images/introduction'), { recursive: true })
  await writeFile(join(root, 'old/images/introduction/qni_screenshot_grover.png'), 'legacy image')
  const before = await snapshot(join(root, 'old'))
  const result = compose(root)
  assert.notEqual(result.status, 0)
  assert.match(
    result.stderr,
    /Asset collision: images\/introduction\/qni_screenshot_grover.png differs/
  )
  assert.deepEqual(await snapshot(join(root, 'old')), before)
})

test('nested migration output is refused even when its directory name starts with dots', async (t) => {
  const root = await fixture(t)
  const nested = join(root, 'old/..migration')
  await cp(join(root, 'new'), nested, { recursive: true })
  const before = await snapshot(join(root, 'old'))
  const result = spawnSync(process.execPath, [command, join(root, 'old'), nested], {
    encoding: 'utf8',
  })
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /separate directories/)
  assert.deepEqual(await snapshot(join(root, 'old')), before)
})

test('missing required assets leave the legacy output unchanged', async (t) => {
  const root = await fixture(t)
  await rm(join(root, 'new/qni-webgpu'), { recursive: true })
  const before = await snapshot(join(root, 'old'))
  assert.notEqual(compose(root).status, 0)
  assert.deepEqual(await snapshot(join(root, 'old')), before)
})

test('a legacy asset directory symlink cannot redirect writes outside the old site', async (t) => {
  const root = await fixture(t)
  await mkdir(join(root, 'outside'))
  await symlink(join(root, 'outside'), join(root, 'old/_astro'))
  const result = compose(root)
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /Asset collision/)
  assert.deepEqual(await readdir(join(root, 'outside')), [])
  assert.equal(await readFile(join(root, 'old/index.html'), 'utf8'), 'old introduction')
})

test('equal assets are reused and composing twice is safe', async (t) => {
  const root = await fixture(t)
  await mkdir(join(root, 'old/images'), { recursive: true })
  await writeFile(join(root, 'old/images/quantum_factoring.svg'), 'images/quantum_factoring.svg')
  assert.equal(compose(root).status, 0)
  const first = await snapshot(join(root, 'old'))
  assert.equal(compose(root).status, 0)
  assert.deepEqual(await snapshot(join(root, 'old')), first)
})
