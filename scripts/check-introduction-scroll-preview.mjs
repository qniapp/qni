import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { resolve, join } from 'node:path'
import { mkdir, writeFile } from 'node:fs/promises'

const [checkout, url, evidence] = process.argv.slice(2)
if (!checkout || !url || !evidence)
  throw new Error(
    'Usage: node scripts/check-introduction-scroll-preview.mjs CHECKOUT URL EVIDENCE_DIR'
  )
const base = new URL(url)
assert.equal(base.hostname, '127.0.0.1')
assert.equal(base.pathname, '/qni/')
const { chromium, expect } = createRequire(resolve(checkout, 'package.json'))('@playwright/test')
await mkdir(evidence, { recursive: true })
const browser = await chromium.launch({
  args: [
    '--no-sandbox',
    '--enable-unsafe-webgpu',
    '--use-angle=swiftshader',
    '--enable-features=Vulkan',
    '--disable-vulkan-surface',
  ],
})
const report = { desktop: {}, touch: {}, localErrors: [], external: [] }
function observe(page) {
  page.on('pageerror', (error) => report.localErrors.push(error.message))
  page.on('requestfailed', (request) => {
    const failure = { url: request.url(), error: request.failure() }
    ;(request.url().startsWith(base.origin) ? report.localErrors : report.external).push(failure)
  })
  page.on('response', (response) => {
    if (response.status() >= 400)
      (response.url().startsWith(base.origin) ? report.localErrors : report.external).push({
        url: response.url(),
        status: response.status(),
      })
  })
}
async function start(page) {
  observe(page)
  await page.goto(base.href)
  const embed = page.locator('qni-webgpu-circuit')
  await embed.scrollIntoViewIfNeeded()
  await expect(embed).toHaveAttribute('data-state', 'running', { timeout: 30000 })
  return embed
}
async function position(embed) {
  await embed.evaluate((element) => scrollBy(0, element.getBoundingClientRect().top - 100))
  return embed.locator('canvas').boundingBox()
}
const cols = (embed) =>
  embed.evaluate((element) =>
    element.runner ? JSON.parse(element.runner.circuitJSON()).cols : null
  )
async function swipe(page, from, to) {
  const cdp = await page.context().newCDPSession(page)
  try {
    await cdp.send('Input.dispatchTouchEvent', {
      type: 'touchStart',
      touchPoints: [{ ...from, id: 1 }],
    })
    for (let i = 1; i <= 12; i++) {
      await cdp.send('Input.dispatchTouchEvent', {
        type: 'touchMove',
        touchPoints: [
          {
            x: from.x + ((to.x - from.x) * i) / 12,
            y: from.y + ((to.y - from.y) * i) / 12,
            id: 1,
          },
        ],
      })
      await page.waitForTimeout(25)
    }
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
  } finally {
    await cdp.detach()
  }
  // Allow native touch scrolling/inertia and the GPU frame to settle before
  // another gesture, as in the upstream mobile acceptance helper.
  await page.waitForTimeout(200)
}
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  const embed = await start(page)
  let box = await position(embed)
  const scroll = () => page.evaluate(() => Math.round(scrollY))
  await page.mouse.move(box.x + box.width / 2, box.y + box.height * 0.75)
  const before = await scroll()
  await page.mouse.wheel(0, 300)
  await expect.poll(scroll).toBe(before + 300)
  await expect(embed).not.toHaveAttribute('data-active')
  await expect(embed.locator('.activation-hint')).toHaveClass(/visible/)
  box = await position(embed)
  await page.mouse.click(box.x + box.width - 40, box.y + 160)
  await expect(embed).toHaveAttribute('data-active', '')
  await page.mouse.move(box.x + box.width / 2, box.y + box.height * 0.75)
  const active = await scroll()
  await page.mouse.wheel(0, 300)
  await page.waitForTimeout(500)
  assert.equal(await scroll(), active)
  await page.getByRole('heading', { level: 1 }).click()
  await expect(embed).not.toHaveAttribute('data-active')
  await embed.locator('canvas').focus()
  await expect(embed).toHaveAttribute('data-active', '')
  await page.getByRole('banner').getByRole('link').first().focus()
  await expect(embed).not.toHaveAttribute('data-active')
  report.desktop = { inactiveScroll: before + 300, activeScroll: active, keyboardFocus: true }
  await page.close()

  const context = await browser.newContext({
    viewport: { width: 390, height: 900 },
    hasTouch: true,
    isMobile: true,
  })
  const touch = await context.newPage()
  const circuit = await start(touch)
  box = await position(circuit)
  const original = await cols(circuit)
  // Reproduce on the unchanged authored introduction before any test fixture.
  const nativeBefore = await touch.evaluate(() => scrollY)
  await swipe(
    touch,
    { x: box.x + box.width - 40, y: box.y + 380 },
    { x: box.x + box.width - 40, y: box.y + 160 }
  )
  report.touch.authoredNativeScroll = {
    before: nativeBefore,
    after: await touch.evaluate(() => scrollY),
  }
  await expect.poll(() => touch.evaluate(() => scrollY)).toBeGreaterThan(nativeBefore + 50)
  assert.deepEqual(await cols(circuit), original)
  box = await position(circuit)
  // First gate drag reaches the authored H; no preliminary activation tap.
  const point = (x, y) => ({ x: box.x + x, y: box.y + y })
  await swipe(touch, point(144, 274), point(144, 15))
  await expect.poll(() => cols(circuit)).not.toContainEqual(['H'])
  report.touch.original = original
  report.touch.afterFirstDrag = await cols(circuit)
  await circuit.screenshot({ path: join(evidence, 'touch-first-drag.png') })
  // Deterministic wide circuit exercises horizontal panning without navigating
  // away from the actual composed introduction or substituting the GPU runtime.
  const wide = Array.from({ length: 14 }, (_, i) => (i === 0 ? ['H', 1, 1, 'X'] : ['X']))
  await circuit.evaluate((element, columns) => {
    element.setAttribute('show-state-panel', 'false')
    element.setAttribute('max-wire-count', '4')
    element.setAttribute('palette', '["H","X"]')
    element.setAttribute('selected-step', '0')
    element.setAttribute('circuit', JSON.stringify({ cols: columns }))
  }, wide)
  await expect.poll(() => cols(circuit)).toEqual(wide)
  await expect
    .poll(() =>
      circuit.evaluate(async (element) => {
        if (!element.runner) return null
        return {
          length: (await element.readStateVector()).length,
          step: element.runner.selectedStep(),
        }
      })
    )
    .toEqual({ length: 32, step: 0 })
  await circuit.evaluate(
    () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  )
  box = await position(circuit)
  const beforeSwipe = await touch.evaluate(() => scrollY)
  await circuit.screenshot({ path: join(evidence, 'touch-before-horizontal-swipe.png') })
  await swipe(touch, point(box.width - 40, 295), point(60, 295))
  await circuit.screenshot({ path: join(evidence, 'touch-after-horizontal-swipe.png') })
  // The reviewed mobile contract pans on an empty-area swipe and selects
  // only on the following tap. The old source instead drags its breakpoint.
  await expect.poll(() => circuit.evaluate((element) => element.runner.selectedStep())).toBe(0)
  await touch.touchscreen.tap(point(144, 295).x, point(144, 295).y)
  await expect
    .poll(() => circuit.evaluate((element) => element.runner.selectedStep()))
    .toBeGreaterThan(1)
  assert.equal(await touch.evaluate(() => scrollY), beforeSwipe)
  assert.deepEqual(await cols(circuit), wide)
  await circuit.screenshot({ path: join(evidence, 'touch-horizontal-swipe.png') })
  await swipe(touch, point(box.width - 40, 380), point(box.width - 40, 160))
  await expect.poll(() => touch.evaluate(() => scrollY)).toBeGreaterThan(beforeSwipe + 50)
  assert.deepEqual(await cols(circuit), wide)
  report.touch.afterVerticalScroll = await touch.evaluate(() => scrollY)
  report.touch.beforeVerticalScroll = beforeSwipe
  assert.equal(await touch.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true)
  await touch.screenshot({ path: join(evidence, 'touch-page-scroll.png') })
  await context.close()
  assert.deepEqual(report.localErrors, [])
} finally {
  await writeFile(join(evidence, 'scroll-report.json'), JSON.stringify(report, null, 2))
  await browser.close()
}
console.log(
  'Composed scroll gate: wheel, keyboard, first-touch drag, horizontal swipe and native vertical page scrolling passed'
)
