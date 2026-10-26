import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { resolve, join } from 'node:path'
import { mkdir, writeFile } from 'node:fs/promises'

const [checkout, url, evidence] = process.argv.slice(2)
if (!checkout || !url || !evidence)
  throw new Error(
    'Usage: node scripts/check-legacy-shell-preview.mjs TUTORIAL_CHECKOUT URL EVIDENCE_DIR'
  )
const base = new URL(url)
assert.equal(base.hostname, '127.0.0.1')
assert.equal(base.pathname, '/qni/')
const { chromium, expect } = createRequire(resolve(checkout, 'package.json'))('@playwright/test')
await mkdir(evidence, { recursive: true })
const browser = await chromium.launch({ args: ['--no-sandbox'] })
const report = { external: [], localErrors: [], pages: [] }
function observe(page) {
  page.on('response', (response) => {
    if (response.status() >= 400)
      (response.url().startsWith(base.origin) ? report.localErrors : report.external).push({
        url: response.url(),
        status: response.status(),
      })
  })
  page.on('requestfailed', (request) => {
    const entry = { url: request.url(), error: request.failure() }
    ;(request.url().startsWith(base.origin) ? report.localErrors : report.external).push(entry)
  })
  page.on('console', (message) => {
    if (message.type() !== 'error') return
    const location = message.location()
    const external = location.url && !location.url.startsWith(base.origin)
    ;(external ? report.external : report.localErrors).push({ text: message.text(), location })
  })
  page.on('pageerror', (error) => {
    const external = /https?:\/\//.test(error.stack) && !error.stack.includes(base.origin)
    ;(external ? report.external : report.localErrors).push({ url: page.url(), error: error.stack })
  })
}
try {
  for (const width of [1280, 1024, 768, 700, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } })
    observe(page)
    await page.goto(base.href)
    const reference = await page.getByRole('banner').evaluate((element) => ({
      background: getComputedStyle(element).backgroundColor,
      box: { x: element.getBoundingClientRect().x, height: element.getBoundingClientRect().height },
    }))
    const proseWidth = (await page.locator('.content-with-margin > p').first().boundingBox()).width
    const cardStyle = await page.locator('.page-footer-next').evaluate((element) => {
      const style = getComputedStyle(element)
      return {
        background: style.backgroundColor,
        radius: style.borderRadius,
        padding: style.padding,
      }
    })
    await page.locator('.page-footer-next').click()
    assert.equal(page.url(), new URL('qpu.html', base).href)
    assert.equal(
      (await page.locator('.content-with-margin > p').first().boundingBox()).width,
      proseWidth
    )
    for (const card of await page.locator('footer a').all()) {
      await expect(card).toHaveCSS('background-color', cardStyle.background)
      await expect(card).toHaveCSS('border-radius', cardStyle.radius)
      await expect(card).toHaveCSS('padding', cardStyle.padding)
      await expect(card.locator('.legacy-page-footer-label')).toHaveText(/前へ|次へ/)
    }
    const header = page.getByRole('banner')
    await expect(header).toHaveCSS('background-color', reference.background)
    await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(255, 252, 240)')
    if (width >= 768) assert.equal((await page.locator('aside').boundingBox()).width, 256)
    await page.emulateMedia({ colorScheme: 'dark' })
    await expect(header).toHaveCSS('background-color', 'rgb(255, 252, 240)')
    for (const link of await page.locator('footer a').all()) {
      await link.hover()
      await expect(link).toHaveCSS('color', 'rgb(16, 15, 15)')
      await expect(link.locator('svg')).toHaveCSS('color', 'rgb(32, 94, 166)')
    }
    await page.emulateMedia({ colorScheme: 'light' })
    await page.evaluate(() => scrollTo(0, 0))
    const box = await header.boundingBox()
    assert.equal(box.x, reference.box.x)
    assert.equal(box.height, reference.box.height)
    await expect(header.getByRole('link', { name: 'Qni Tutorial ホーム' })).toBeVisible()
    const nav = page.locator(width < 768 ? 'dialog nav' : 'aside nav')
    if (width < 768) {
      const opener = page.getByRole('button', { name: '目次を開く', exact: true })
      await opener.focus()
      await page.keyboard.press('Enter')
      const dialog = page.getByRole('dialog', { name: '目次', exact: true })
      await expect(dialog).toBeVisible()
      await expect(page.getByRole('button', { name: '目次を閉じる', exact: true })).toBeFocused()
      await expect(page.locator('.legacy-toc-close svg')).toHaveCSS('color', 'rgb(111, 110, 105)')
      await dialog.screenshot({ path: join(evidence, `drawer-${width}.png`) })
      await page.keyboard.press('Shift+Tab')
      assert.equal(
        await dialog.evaluate((element) => element.contains(document.activeElement)),
        true
      )
      await page.keyboard.press('Escape')
      await expect(dialog).not.toBeVisible()
      await expect(opener).toBeFocused()
      await opener.click()
      await page.mouse.click(380, 400)
      await expect(dialog).not.toBeVisible()
      await opener.click()
    }
    await expect(nav.locator('[aria-current="page"]')).toHaveText('QPU とは')
    await nav.screenshot({ path: join(evidence, `navigation-${width}.png`) })
    const links = await nav.locator('a').evaluateAll((elements) => elements.map((e) => e.href))
    if (width < 768) await page.keyboard.press('Escape')
    for (const scroll of [0, 1200]) {
      await page.evaluate((y) => scrollTo(0, y), scroll)
      await expect.poll(async () => (await header.boundingBox()).y).toBe(0)
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        true
      )
      await page.screenshot({ path: join(evidence, `qpu-${width}-${scroll}.png`) })
    }
    if (width < 768) await page.getByRole('button', { name: '目次を開く', exact: true }).click()
    for (const summary of await nav.locator('details > summary').all()) {
      if (!(await summary.evaluate((element) => element.parentElement.open))) await summary.click()
    }
    const scrollArea =
      width < 768 ? page.locator('.legacy-drawer-panel') : page.locator('.legacy-sidebar-body')
    await scrollArea.evaluate((element) => {
      element.scrollTop = 200
    })
    await expect.poll(() => scrollArea.evaluate((element) => element.scrollTop)).toBe(200)
    if (width < 768) {
      if (width === 700)
        await page.getByRole('button', { name: '目次を閉じる', exact: true }).click()
      else await page.keyboard.press('Escape')
      await expect(page.getByRole('dialog', { name: '目次', exact: true })).not.toBeVisible()
    }
    await page.reload()
    if (width < 768) await page.getByRole('button', { name: '目次を開く', exact: true }).click()
    await expect.poll(() => scrollArea.evaluate((element) => element.scrollTop)).toBe(200)
    if (width < 768) await page.keyboard.press('Escape')
    await page.locator('a[href="./index.html"]').last().click()
    await expect(page.locator('h1')).toHaveText('はじめに')
    await page.goto(new URL('qpu.html', base).href)
    await header.getByRole('link', { name: 'Qni Tutorial ホーム' }).click()
    assert.equal(page.url(), base.href)
    // Real legacy circuit gesture, live simulator result, operation menu and prose help.
    await page.goto(new URL('qni_intro.html', base).href)
    const editor = page.locator('circuit-editor').first()
    await editor.scrollIntoViewIfNeeded()
    const writeGate = editor.locator('quantum-circuit write-gate')
    await writeGate.click()
    if (width < 768) {
      // Legacy mobile pointer activation also needs a second click on the unmodified baseline.
      await page.mouse.move(10, 300)
      await writeGate.click()
    }
    await expect(page.locator('.operation-menu')).toBeVisible()
    await page.mouse.click(10, 300)
    await editor.locator('palette-dropzone h-gate').hover()
    await expect(page.getByRole('tooltip').first()).toBeVisible()
    await page.screenshot({ path: join(evidence, `legacy-help-${width}.png`) })
    const source = await editor.locator('palette-dropzone h-gate').boundingBox()
    const target = await editor.locator('circuit-dropzone').nth(1).boundingBox()
    await page.mouse.move(source.x + source.width / 2, source.y + source.height / 2)
    await page.mouse.down()
    await page.mouse.move(target.x + target.width / 2, target.y + target.height / 2, { steps: 30 })
    await page.mouse.up()
    const inserted = editor.locator('quantum-circuit h-gate')
    await expect(inserted).toHaveCount(1)
    const circles = editor.locator('circle-notation .qubit-circle')
    await expect(circles).toHaveCount(2)
    for (const circle of await circles.all())
      await expect(circle).toHaveAttribute('data-amplitude-real', String(Math.SQRT1_2))
    await editor.screenshot({ path: join(evidence, `legacy-circuit-${width}.png`) })
    await page.mouse.click(10, 300)
    await page.goto(new URL('h_gate.html', base).href)
    await expect.poll(() => page.locator('mjx-container').count()).toBeGreaterThan(0)
    await expect(page.locator('orbit-reviewarea')).toHaveCount(1)
    // Orbit is external; retain its network failures separately, never mock success.
    report.external.push({
      width,
      orbitFrames: await page.locator('orbit-reviewarea iframe').count(),
    })
    await page.close()
    if (width === 1280) {
      for (const link of links.filter((link) => !/\/(?:index.html)?$/.test(link))) {
        // Dispose Chromium's workers/third-party frames between circuit-heavy lessons.
        const lessonBrowser = await chromium.launch({ args: ['--no-sandbox'] })
        try {
          const lesson = await lessonBrowser.newPage({ viewport: { width, height: 900 } })
          observe(lesson)
          await lesson.goto(link)
          await expect(lesson.getByRole('banner')).toHaveCSS(
            'background-color',
            reference.background
          )
          await expect(lesson.locator('aside nav [aria-current="page"]')).toHaveCount(1)
          const assets = await lesson
            .locator('[src], link[rel="stylesheet"]')
            .evaluateAll((elements) =>
              elements
                .map((e) => e.src || e.href)
                .filter((href) => href.startsWith(location.origin))
            )
          for (const asset of new Set(assets))
            assert.equal((await lesson.request.get(asset)).status(), 200, asset)
          assert.equal(
            await lesson.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
            true,
            link
          )
          report.pages.push(link)
        } finally {
          await lessonBrowser.close()
        }
      }
    }
  }
  for (const width of [390, 700, 768, 1024]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } })
    observe(page)
    await page.goto(new URL('shor_qft.html', base).href)
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      true,
      `Shor QFT at ${width}px`
    )
    const table = page.locator('.content-with-margin > .w-min')
    const heading = await table.locator(':scope > .mb-2 > div').first().boundingBox()
    const firstState = await table.locator('qubit-circle').first().boundingBox()
    assert.equal(heading.x, firstState.x, 'State table headings stay aligned with their columns')
    await page.screenshot({ path: join(evidence, `shor-qft-${width}.png`) })
    await table.evaluate((element) => {
      element.scrollLeft = element.scrollWidth
    })
    assert.ok(
      await table.evaluate((element) => element.scrollLeft > 0),
      'Wide state table remains scrollable'
    )
    await page.screenshot({ path: join(evidence, `shor-qft-table-end-${width}.png`) })
    const circuit = page.locator('quantum-circuit.mb-40')
    await circuit.scrollIntoViewIfNeeded()
    const lastGate = circuit.locator('measurement-gate').last()
    await lastGate.scrollIntoViewIfNeeded()
    const gateBox = await lastGate.boundingBox()
    assert.ok(
      gateBox.x >= 0 && gateBox.x + gateBox.width <= width,
      'Last circuit operation remains reachable'
    )
    assert.equal(await page.evaluate(() => scrollX), 0)
    await page.screenshot({ path: join(evidence, `shor-qft-circuit-${width}.png`) })
    await page.close()
  }
  assert.deepEqual(report.localErrors, [])
} finally {
  await writeFile(join(evidence, 'report.json'), JSON.stringify(report, null, 2))
  await browser.close()
}
console.log('Composed legacy shell/navigation checks passed')
