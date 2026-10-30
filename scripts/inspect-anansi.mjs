import { chromium } from 'file:///C:/Users/LENOVO/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const browser = await chromium.launch({
  headless: false,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--use-angle=d3d11', '--enable-webgl', '--ignore-gpu-blocklist'],
})
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })
await page.goto('https://anansi-gallery.vercel.app/gallery.html', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.locator('#loading').waitFor({ state: 'hidden', timeout: 120000 })
await page.locator('#guestName').fill('Malik')
await page.locator('#entryForm button[type="submit"]').click()
await page.locator('#avatarDesigner').waitFor({ state: 'visible', timeout: 15000 })
await page.locator('#saveAvatar').evaluate(element => element.click())
await page.locator('#avatarDesigner').waitFor({ state: 'hidden', timeout: 10000 })
await page.waitForTimeout(3000)

const report = async label => {
  const items = await page.locator('button, [role="button"], select, input').evaluateAll(elements => elements.map(element => ({
    tag: element.tagName,
    id: element.id,
    text: element.textContent?.trim().replace(/\s+/g, ' '),
    aria: element.getAttribute('aria-label'),
    visible: !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length),
  })).filter(item => item.visible))
  console.log(`\n${label}\n${JSON.stringify(items, null, 2)}`)
}

await report('GALLERY')
await page.locator('#chatNotifications').evaluate(element => element.click())
await page.waitForTimeout(700)
await page.getByRole('button', { name: /Try an incoming demo invitation/i }).click()
await page.locator('#chatNotifications').filter({ hasText: '1' }).waitFor({ state: 'visible', timeout: 8000 })
await page.waitForTimeout(2500)
await page.locator('#chatNotifications').evaluate(element => element.click())
await page.waitForTimeout(700)
await report('#chatNotifications after invite')
await browser.close()
