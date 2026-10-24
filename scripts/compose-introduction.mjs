import { lstat, readdir, readFile, mkdir, copyFile } from 'node:fs/promises'
import { resolve, join, dirname, relative, sep } from 'node:path'

// Deliberately select one page, not the tutorial's other routes or diagnostic app.
const selected = [
  'index.html',
  '_astro',
  'qni-webgpu',
  'favicon.svg',
  'images/bit_capacitor_vs_quantum.svg',
  'images/quantum_search_vs_linear.svg',
  'images/quantum_factoring.svg',
  'images/introduction/qni_screenshot_grover.png',
]

async function compose() {
  if (process.argv.length !== 4)
    throw new Error('Usage: node scripts/compose-introduction.mjs OLD_SITE MIGRATION_DIST')
  const [site, migration] = process.argv.slice(2).map((path) => resolve(path))
  if (
    [relative(site, migration), relative(migration, site)].some(
      (path) => path !== '..' && !path.startsWith(`..${sep}`)
    )
  ) {
    throw new Error('Old site and migration output must be separate directories')
  }
  for (const root of [site, migration]) {
    if (!(await lstat(root)).isDirectory()) throw new Error(`Not a directory: ${root}`)
  }
  if (!(await lstat(join(site, 'index.html'))).isFile())
    throw new Error('Old site index.html is required')
  const files = []
  async function collect(file) {
    const source = join(migration, file)
    const stat = await lstat(source)
    if (stat.isDirectory()) {
      const children = await readdir(source)
      if (!children.length) throw new Error(`Empty required asset directory: ${file}`)
      for (const child of children) await collect(join(file, child))
    } else if (stat.isFile()) files.push(file)
    else throw new Error(`Only regular files/directories are allowed: ${source}`)
  }
  for (const file of selected) await collect(file)
  // Preflight every collision before changing even the introduction.
  const additions = []
  for (const file of files) {
    const parts = file.split('/')
    for (let i = 1; i < parts.length; i++) {
      const parent = join(site, ...parts.slice(0, i))
      const stat = await lstat(parent).catch((error) => {
        if (error.code !== 'ENOENT') throw error
      })
      if (stat && !stat.isDirectory())
        throw new Error(`Asset collision: ${parent} is not a directory`)
    }
    const destination = join(site, file)
    const stat = await lstat(destination).catch((error) => {
      if (error.code !== 'ENOENT') throw error
    })
    if (stat) {
      if (!stat.isFile()) throw new Error(`Asset collision: ${file} is not a regular file`)
      if (
        file !== 'index.html' &&
        !(await readFile(destination)).equals(await readFile(join(migration, file)))
      ) {
        throw new Error(
          `Asset collision: ${file} differs from the legacy output; refusing to overwrite`
        )
      }
    } else additions.push(file)
  }
  for (const file of [...additions, 'index.html']) {
    await mkdir(dirname(join(site, file)), { recursive: true })
    await copyFile(join(migration, file), join(site, file))
  }
  console.log(
    `Composed introduction into ${site}; added ${additions.length} files; other legacy files unchanged`
  )
}

compose().catch((error) => {
  console.error(error.message)
  process.exitCode = 1
})
