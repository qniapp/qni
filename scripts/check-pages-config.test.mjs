import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'

const root = fileURLToPath(new URL('../', import.meta.url))
const checker = join(root, 'scripts/check-pages-config.mjs')
const workflowPath = '.github/workflows/pages.yml'
const sourceBinding = 'QNI_SOURCE_COMMIT: ${{ steps.webgpu.outputs.ref }}'

async function fixture(t, change = (workflow) => workflow) {
  const directory = await mkdtemp(join(tmpdir(), 'qni-pages-config-'))
  t.after(() => rm(directory, { recursive: true, force: true }))
  for (const file of [
    'apps/tutorial/package.json',
    'apps/tutorial/_layouts/default.html',
    '.prettierignore',
    'html/index.html',
  ]) {
    await mkdir(dirname(join(directory, file)), { recursive: true })
    await copyFile(join(root, file), join(directory, file))
  }
  await mkdir(dirname(join(directory, workflowPath)), { recursive: true })
  await writeFile(
    join(directory, workflowPath),
    change(await readFile(join(root, workflowPath), 'utf8'))
  )
  return directory
}

function check(cwd) {
  return spawnSync(process.execPath, [checker], {
    cwd,
    encoding: 'utf8',
    // The consumer's Actions SHA must never be treated as the nested engine SHA.
    env: { ...process.env, GITHUB_SHA: 'f'.repeat(40) },
  })
}

test('Pages config binds embed provenance to the checked-out engine despite a foreign parent SHA', async (t) => {
  const result = check(await fixture(t))
  assert.equal(result.status, 0, result.stderr)
})

for (const [name, binding] of [
  ['missing', ''],
  ['parent GitHub SHA', 'QNI_SOURCE_COMMIT: ${{ github.sha }}'],
  ['environment GitHub SHA', 'QNI_SOURCE_COMMIT: ${{ env.GITHUB_SHA }}'],
  ['tutorial SHA', 'QNI_SOURCE_COMMIT: 7aeb59678225fe927b80d2da40997e82c8d0fb41'],
]) {
  test(`Pages config rejects ${name} engine provenance`, async (t) => {
    const result = check(await fixture(t, (workflow) => workflow.replace(sourceBinding, binding)))
    assert.notEqual(result.status, 0)
    assert.match(result.stderr, /WebGPU source provenance/)
  })
}

for (const ref of ['main', '17dfa8b2e073a07751739e2bbda313aca7405962']) {
  test(`Pages config rejects unapproved introduction ref ${ref}`, async (t) => {
    const result = check(
      await fixture(t, (workflow) =>
        workflow.replace('ref: 6e0a7afde78d20d3fc3fc66cfbf37f2a3af63f0b', `ref: ${ref}`)
      )
    )
    assert.notEqual(result.status, 0)
    assert.match(result.stderr, /explicitly reviewed introduction commit/)
  })
}

test('Pages config rejects an engine checkout that does not use the provenance ref', async (t) => {
  const result = check(
    await fixture(t, (workflow) =>
      workflow.replace('ref: ${{ steps.webgpu.outputs.ref }}', 'ref: ${{ github.sha }}')
    )
  )
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /WebGPU source provenance/)
})
