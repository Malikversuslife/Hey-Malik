import { chromium } from 'file:///C:/Users/LENOVO/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const base = 'http://127.0.0.1:5173'
const routes = [
  '/?view=product',
  '/?view=branding',
  '/?view=lab',
  '/?view=sandbox',
  '/?view=about',
  '/work/prima',
  '/work/anansi-gallery',
  '/branding/side-b',
  '/branding/finlancer',
  '/lab/ad-astra',
]

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
})

for (const device of [
  { name: 'desktop', viewport: { width: 1440, height: 900 } },
  { name: 'mobile', viewport: { width: 390, height: 844 } },
]) {
  const context = await browser.newContext({ viewport: device.viewport })
  const page = await context.newPage()
  await page.goto(`${base}/?view=product`, { waitUntil: 'networkidle' })
  await page.evaluate(() => sessionStorage.setItem('m:portfolio-entry-seen', 'true'))
  await page.reload({ waitUntil: 'networkidle' })

  for (const route of routes) {
    await page.goto(`${base}${route}`, { waitUntil: 'networkidle' })
    await page.locator('.page-transition-overlay').waitFor({ state: 'detached', timeout: 3000 }).catch(() => undefined)
    const launcher = page.locator('.askmalik-float')
    await launcher.waitFor({ state: 'visible', timeout: 5000 })
    await launcher.click()
    const dialog = page.getByRole('dialog', { name: 'Ask Malik' })
    await dialog.waitFor({ state: 'visible', timeout: 3000 })
    await page.waitForTimeout(750)
    const box = await dialog.boundingBox()
    const close = dialog.getByRole('button', { name: 'Close Ask Malik' })
    const header = dialog.locator('.askpanel-head')
    const closeBox = await close.boundingBox()
    const headerBox = await header.boundingBox()
    const insideViewport = !!box && box.x >= -1 && box.x + box.width <= device.viewport.width + 1
    const closeGap = closeBox && headerBox ? Math.round((headerBox.x + headerBox.width) - (closeBox.x + closeBox.width)) : -1
    const closeAtEnd = closeGap >= 10 && closeGap <= 20
    console.log(`${device.name}\t${route}\topen=${!!box}\tfit=${insideViewport}\tcloseEnd=${closeAtEnd}\tcloseGap=${closeGap}`)
    await close.click()
    await page.waitForTimeout(800)
  }

  await context.close()
}

await browser.close()
