import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { resolve, join } from 'node:path'
import { mkdir, writeFile } from 'node:fs/promises'

// Use the pinned tutorial's existing Playwright dependency, not a second install.
const [checkout, url, evidence] = process.argv.slice(2)
if (!checkout || !url || !evidence)
  throw new Error(
    'Usage: node scripts/check-introduction-preview.mjs TUTORIAL_CHECKOUT http://127.0.0.1:PORT/qni/ EVIDENCE_DIR'
  )
const base = new URL(url)
assert.equal(base.hostname, '127.0.0.1')
assert.equal(base.pathname, '/qni/')
const { chromium, expect } = createRequire(resolve(checkout, 'package.json'))('@playwright/test')
await mkdir(evidence, { recursive: true })
function observations() {
  return { localFailures: [], localAssets: [], consoleErrors: [], pageErrors: [], external: [] }
}

function observe(page, result) {
  page.on('response', (response) => {
    if (!response.url().startsWith(base.origin)) {
      result.external.push({ url: response.url(), status: response.status() })
    } else {
      if (response.status() >= 400) result.localFailures.push(response.url())
      if (/\.(m?js|wasm|css)$/.test(response.url()))
        result.localAssets.push({
          url: response.url(),
          status: response.status(),
          mime: response.headers()['content-type'],
        })
    }
  })
  page.on('requestfailed', (request) => {
    const failure = { url: request.url(), error: request.failure() }
    if (request.url().startsWith(base.origin)) result.localFailures.push(failure)
    else result.external.push(failure)
  })
  page.on('pageerror', (error) => result.pageErrors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error')
      result.consoleErrors.push({ text: message.text(), location: message.location() })
  })
}

function assertNoLocalErrors(result) {
  assert.deepEqual(result.localFailures, [])
  assert.deepEqual(result.pageErrors, [])
  assert.deepEqual(
    result.consoleErrors.filter(
      (error) => !error.location.url || error.location.url.startsWith(base.origin)
    ),
    []
  )
  for (const asset of result.localAssets) {
    if (/\.m?js$/.test(asset.url)) assert.match(asset.mime, /javascript/, asset.url)
    if (/\.wasm$/.test(asset.url)) assert.match(asset.mime, /application\/wasm/, asset.url)
    if (/\.css$/.test(asset.url)) assert.match(asset.mime, /text\/css/, asset.url)
  }
}

const report = { ...observations(), gpu: {}, gpuDisabled: observations() }
const browser = await chromium.launch({
  args: [
    '--no-sandbox',
    '--enable-unsafe-webgpu',
    '--use-angle=swiftshader',
    '--enable-features=Vulkan',
    '--disable-vulkan-surface',
  ],
})
try {
  const page = await browser.newPage()
  observe(page, report)
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 900 })
    for (const entry of ['/qni/', '/qni/index.html']) {
      await page.goto(base.origin + entry)
      await expect(page.locator('h1')).toHaveText('はじめに')
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        true
      )
      // Includes offscreen/sidenote images and every old TOC target.
      const paths = await page
        .locator('[src], a[href], link[href]')
        .evaluateAll((elements) =>
          elements
            .map((e) => e.getAttribute('src') ?? e.getAttribute('href'))
            .filter((p) => p?.startsWith('/qni/'))
        )
      for (const path of new Set(paths)) {
        const response = await page.request.get(base.origin + path)
        assert.equal(response.status(), 200, path)
        if (/\.(m?js)$/.test(path)) assert.match(response.headers()['content-type'], /javascript/)
        if (/\.wasm$/.test(path))
          assert.match(response.headers()['content-type'], /application\/wasm/)
      }
    }
    const responsiveCircuit = page.locator('qni-webgpu-circuit')
    await responsiveCircuit.scrollIntoViewIfNeeded()
    await expect(responsiveCircuit).toHaveAttribute('data-state', 'running', { timeout: 30000 })
    await responsiveCircuit.screenshot({ path: join(evidence, `circuit-${width}.png`) })
    await page.evaluate(() => scrollTo(0, 0))
    await page.screenshot({
      path: join(evidence, `desktop-or-mobile-${width}.png`),
      fullPage: true,
    })
    if (width === 390) await page.getByRole('button', { name: '目次を開く', exact: true }).click()
    const nav = page.locator(width === 390 ? '.toc-drawer nav' : '.sidebar nav')
    await nav.locator('details').nth(1).locator('summary').click()
    await expect(nav.locator('.toc-unported')).toHaveCount(7)
    await page.screenshot({ path: join(evidence, `menu-${width}.png`) })
    if (width === 390) await page.getByRole('button', { name: '目次を閉じる', exact: true }).click()
    await page.locator('.page-footer-next').click()
    assert.equal(page.url(), base.origin + '/qni/qpu.html')
    await expect(page.locator('h1')).toContainText('QPU')
    await page.locator('a[href="./index.html"]').last().click()
    assert.equal(page.url(), base.origin + '/qni/index.html')
    await expect(page.locator('h1')).toHaveText('はじめに')
  }
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto(base.href)
  const embed = page.locator('qni-webgpu-circuit')
  await embed.scrollIntoViewIfNeeded()
  await expect(embed).toHaveAttribute('data-state', 'running', { timeout: 30000 })
  report.gpu.adapter = await page.evaluate(async () => {
    const { vendor, architecture, device, description } = (await navigator.gpu.requestAdapter())
      .info
    return { vendor, architecture, device, description }
  })
  await expect
    .poll(() => embed.evaluate(async (e) => Array.from(await e.readStateVector()).length))
    .toBe(8)
  // Select H's output before the random measurements: |+0>.
  const box = await embed.locator('canvas').boundingBox()
  await page.mouse.move(box.x + 146, box.y + 274)
  await expect
    .poll(() => embed.evaluate(async (e) => Array.from(await e.readStateVector())))
    .toEqual([Math.fround(Math.SQRT1_2), 0, Math.fround(Math.SQRT1_2), 0, 0, 0, 0, 0])
  report.gpu.before = await embed.evaluate(async (e) => Array.from(await e.readStateVector()))
  await embed.locator('canvas').screenshot({ path: join(evidence, 'software-webgpu-before.png') })
  // Real canvas gesture: insert another H, then select its output. HH = I.
  await page.mouse.move(box.x + 236, box.y + 108)
  await page.mouse.down()
  await page.mouse.move(box.x + 146, box.y + 274, { steps: 30 })
  await page.mouse.up()
  await page.mouse.move(box.x + 202, box.y + 274)
  await expect
    .poll(() =>
      embed.evaluate(async (e) =>
        Array.from(await e.readStateVector(), (n) => Math.round(n * 1e6) / 1e6)
      )
    )
    .toEqual([1, 0, 0, 0, 0, 0, 0, 0])
  report.gpu.after = await embed.evaluate(async (e) => Array.from(await e.readStateVector()))
  await embed.locator('canvas').screenshot({ path: join(evidence, 'software-webgpu-after.png') })
  const wasm = await page.request.get(base.href + 'qni-webgpu/qni-web_bg.wasm')
  assert.equal(wasm.status(), 200)
  assert.match(wasm.headers()['content-type'], /application\/wasm/)
  const unsupportedBrowser = await chromium.launch({ args: ['--no-sandbox', '--disable-gpu'] })
  try {
    const unsupported = await unsupportedBrowser.newPage()
    observe(unsupported, report.gpuDisabled)
    await unsupported.goto(base.href)
    const circuit = unsupported.locator('qni-webgpu-circuit')
    await circuit.scrollIntoViewIfNeeded()
    await expect(circuit).toHaveAttribute('data-error-code', 'gpu-adapter-unavailable')
    const message = circuit.getByRole('region', { name: 'GPU を使えませんでした', exact: true })
    await expect(message).toBeVisible()
    report.unsupportedMessage = await message.innerText()
    await circuit.screenshot({ path: join(evidence, 'gpu-unavailable.png') })
    assertNoLocalErrors(report.gpuDisabled)
    assert.ok(
      report.gpuDisabled.localAssets.some(
        (asset) =>
          asset.url === base.href + 'qni-webgpu/qni-embed-error.mjs' && asset.status === 200
      ),
      'GPU-disabled browser must load the real dynamic error module'
    )
  } finally {
    await unsupportedBrowser.close()
  }
  assertNoLocalErrors(report)
} finally {
  await writeFile(join(evidence, 'browser-report.json'), JSON.stringify(report, null, 2))
  await browser.close()
}
console.log(
  'Composed preview: entry URLs, assets, real legacy navigation, layouts, software WebGPU gesture/readback and unsupported message passed'
)
