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

async function saveRecording(context, page, name, keepSeconds) {
  const video = page.video()
  await context.close()
  if (!video) throw new Error(`No recording was produced for ${name}.`)
  const rawPath = path.join(recordingDir, `raw-${name}`)
  await video.saveAs(rawPath)
  execFileSync(ffmpeg, ['-y', '-sseof', `-${keepSeconds}`, '-i', rawPath, '-c', 'copy', path.join(outputDir, name)], { stdio: 'ignore' })
}

async function newRecordedPage() {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: recordingDir, size: { width: 1280, height: 720 } },
  })
  const page = await context.newPage()
  return { context, page }
}

async function gotoWithRetry(page, url) {
  let loaded = false
  for (let attempt = 0; attempt < 3 && !loaded; attempt += 1) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
      loaded = true
    } catch (error) {
      if (attempt === 2) throw error
      await page.waitForTimeout(2500)
    }
  }
}

async function openGallery(page, { finishIdentity = true } = {}) {
  await gotoWithRetry(page, 'https://anansi-gallery.vercel.app/gallery.html')
  await page.locator('#loading').waitFor({ state: 'hidden', timeout: 120000 })
  if (!finishIdentity) return
  await page.locator('#guestName').fill('Malik')
  await page.locator('#entryForm button[type="submit"]').click()
  await page.locator('#avatarDesigner').waitFor({ state: 'visible', timeout: 15000 })
  await page.locator('#saveAvatar').evaluate(element => element.click())
  await page.locator('#avatarDesigner').waitFor({ state: 'hidden', timeout: 10000 })
  await page.locator('#welcome').waitFor({ state: 'hidden', timeout: 10000 })
  await page.waitForTimeout(2500)
}

const click = async (page, selector) => {
  await page.locator(selector).waitFor({ state: 'visible', timeout: 15000 })
  await page.locator(selector).evaluate(element => element.click())
}

async function captureWebsiteHero() {
  const { context, page } = await newRecordedPage()
  await gotoWithRetry(page, 'https://anansi-gallery.vercel.app/catalogue.html#home')
  await page.locator('body').waitFor({ state: 'visible' })
  await page.waitForTimeout(5500)
  await saveRecording(context, page, 'anansi-website-hero.webm', 3)
}

async function captureIdentityCreation() {
  const { context, page } = await newRecordedPage()
  await openGallery(page, { finishIdentity: false })
  await page.waitForTimeout(1000)
  await page.locator('#guestName').fill('Malik')
  await page.waitForTimeout(900)
  await page.locator('#entryForm button[type="submit"]').click()
  await page.locator('#avatarDesigner').waitFor({ state: 'visible', timeout: 15000 })
  await page.waitForTimeout(1200)
  for (const selector of ['#look_outfit', '#look_skin', '#look_hair', '#look_accessory']) {
    const field = page.locator(selector)
    if (await field.isVisible().catch(() => false)) {
      const count = await field.locator('option').count()
      if (count > 1) await field.selectOption({ index: 1 })
      await page.waitForTimeout(850)
    }
  }
  await click(page, '#saveAvatar')
  await page.locator('#avatarDesigner').waitFor({ state: 'hidden', timeout: 10000 })
  await page.waitForTimeout(2200)
  await saveRecording(context, page, 'anansi-identity-creation.webm', 11)
}

async function captureArtworkStory() {
  const { context, page } = await newRecordedPage()
  await openGallery(page)
  await click(page, '#worksButton')
  await page.waitForTimeout(1400)
  const firstWork = page.getByRole('button', { name: /Tidal Intervals \/ 1/i }).last()
  await firstWork.waitFor({ state: 'visible', timeout: 10000 })
  await firstWork.click()
  await page.waitForTimeout(2200)
  const detailContent = page.locator('#detailContent')
  if (await detailContent.isVisible().catch(() => false)) {
    await detailContent.evaluate(element => element.scrollTo({ top: element.scrollHeight, behavior: 'smooth' }))
    await page.waitForTimeout(3800)
  }
  await saveRecording(context, page, 'anansi-artwork-story.webm', 9)
}

async function captureGuestChat() {
  const { context, page } = await newRecordedPage()
  await openGallery(page)
  await click(page, '#chatNotifications')
  await page.waitForTimeout(1000)
  const demoInvite = page.getByRole('button', { name: /Try an incoming demo invitation/i })
  await demoInvite.waitFor({ state: 'visible', timeout: 10000 })
  await demoInvite.click()
  await page.locator('#chatNotifications').filter({ hasText: '1' }).waitFor({ state: 'visible', timeout: 8000 })
  await page.waitForTimeout(700)
  await click(page, '#chatNotifications')
  await page.waitForTimeout(1000)
  const invitation = page.getByRole('button', { name: /^Demo visitor .* Guest conversation .* invitation$/i }).first()
  if (await invitation.isVisible().catch(() => false)) {
    await invitation.click()
    await page.waitForTimeout(900)
  }
  const action = page.getByRole('button', { name: /Accept|Open chat|Reply/i }).first()
  if (await action.isVisible().catch(() => false)) {
    await action.click()
    await page.waitForTimeout(1600)
  }
  const input = page.locator('#chatInput')
  if (await input.isVisible().catch(() => false)) {
    await input.fill('The light in this room is beautiful.')
    await page.waitForTimeout(800)
    await page.locator('#chatForm button').last().click()
    await page.waitForTimeout(3000)
  }
  await saveRecording(context, page, 'anansi-guest-chat.webm', 14)
}

async function captureLingerSequence() {
  const { context, page } = await newRecordedPage()
  await openGallery(page)
  await click(page, '#seatingButton')
  await page.waitForTimeout(2200)
  const seating = page.locator('#seating')
  if (await seating.isVisible().catch(() => false)) {
    await seating.evaluate(dialog => dialog.close())
    await page.waitForTimeout(600)
  }
  await click(page, '#muteMusic')
  await page.waitForTimeout(1600)
  const paintingRoom = page.getByRole('button', { name: 'Painting room', exact: true }).last()
  await paintingRoom.click()
  await page.waitForTimeout(3000)
  await click(page, '#photoButton')
  await page.locator('#photoBooth').waitFor({ state: 'visible', timeout: 10000 })
  await page.waitForTimeout(1000)
  const photoWork = page.locator('#photoWork')
  if (await photoWork.isVisible().catch(() => false)) await photoWork.selectOption({ index: 1 })
  const companion = page.locator('#photoCompanion')
  if (await companion.isVisible().catch(() => false)) await companion.selectOption({ index: 1 })
  await page.waitForTimeout(1000)
  await click(page, '#takePhoto')
  await page.waitForTimeout(3500)
  await saveRecording(context, page, 'anansi-linger-sequence.webm', 14)
}

const captures = {
  hero: captureWebsiteHero,
  identity: captureIdentityCreation,
  artwork: captureArtworkStory,
  chat: captureGuestChat,
  linger: captureLingerSequence,
}
const requestedCapture = process.argv[2]

try {
  if (requestedCapture) {
    if (!captures[requestedCapture]) throw new Error(`Unknown capture: ${requestedCapture}`)
    await captures[requestedCapture]()
  } else {
    for (const capture of Object.values(captures)) await capture()
  }
} finally {
  await browser.close()
}
