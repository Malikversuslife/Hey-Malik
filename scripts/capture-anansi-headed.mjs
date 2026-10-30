import { chromium } from 'file:///C:/Users/LENOVO/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'
import fs from 'node:fs/promises'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

const root = process.cwd()
const recordingDir = path.join(root, '.anansi-recordings')
const outputDir = path.join(root, 'public', 'Anansi Gallery Files')
const ffmpeg = path.join(root, '.playwright', 'ffmpeg-1011', 'ffmpeg-win64.exe')
await fs.mkdir(recordingDir, { recursive: true })
await fs.mkdir(outputDir, { recursive: true })

const browser = await chromium.launch({
  headless: false,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: [
    '--use-angle=d3d11',
    '--enable-webgl',
    '--ignore-gpu-blocklist',
    '--disable-background-timer-throttling',
    '--disable-renderer-backgrounding',
    '--window-size=1280,720',
  ],
})

async function capture(name, actions) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: recordingDir, size: { width: 1280, height: 720 } },
  })
  const page = await context.newPage()
  let loaded = false
  for (let attempt = 0; attempt < 3 && !loaded; attempt += 1) {
    try {
      await page.goto('https://anansi-gallery.vercel.app/gallery.html', { waitUntil: 'domcontentloaded', timeout: 60000 })
      loaded = true
    } catch (error) {
      if (attempt === 2) throw error
      await page.waitForTimeout(2500)
    }
  }
  await page.locator('#loading').waitFor({ state: 'hidden', timeout: 120000 })
  const welcome = page.locator('#welcome')
  if (await welcome.isVisible().catch(() => false)) {
    await page.locator('#guestName').fill('Malik')
    await page.locator('#entryForm button[type="submit"]').click()
    await welcome.waitFor({ state: 'hidden', timeout: 15000 })
  }
  const avatarDesigner = page.locator('#avatarDesigner')
  if (await avatarDesigner.isVisible().catch(() => false)) {
    await page.locator('#saveAvatar').evaluate(element => element.click())
    await avatarDesigner.waitFor({ state: 'hidden', timeout: 5000 })
    await welcome.waitFor({ state: 'hidden', timeout: 5000 })
  }
  const keepSeconds = await actions(page)
  const video = page.video()
  await context.close()
  if (!video) throw new Error('Playwright did not return a recording.')
  const rawPath = path.join(recordingDir, `raw-${name}`)
  await video.saveAs(rawPath)
  execFileSync(ffmpeg, ['-y', '-sseof', `-${keepSeconds}`, '-i', rawPath, '-c', 'copy', path.join(outputDir, name)], { stdio: 'ignore' })
}

const clickText = async (page, text) => {
  const target = page.getByText(text, { exact: true }).last()
  await target.waitFor({ state: 'visible', timeout: 15000 })
  await target.evaluate(element => element.click())
}

try {
  await capture('anansi-gallery-entry.webm', async page => {
    await clickText(page, 'Painting room')
    await page.waitForTimeout(9000)
    return 12
  })
  await capture('anansi-gallery-rooms.webm', async page => {
    await clickText(page, 'Upper gallery')
    await page.waitForTimeout(6000)
    await clickText(page, 'Sculpture court')
    await page.waitForTimeout(6000)
    return 15
  })
  await capture('anansi-visit-controls.webm', async page => {
    await page.locator('#avatarButton').evaluate(element => element.click())
    await page.waitForTimeout(3500)
    await page.keyboard.press('Escape')
    await page.locator('#worksButton').evaluate(element => element.click())
    await page.waitForTimeout(3500)
    return 10
  })
} finally {
  await browser.close()
}
