const { test, expect } = require('@playwright/test')

test('Intro text should load', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const title = await page.innerText('#intro-title')
  const text = await page.innerText('#intro-text')
  expect(title).toBe('Your story starts with us.')
  expect(text).toBe(
    'This is a simple example of a Landing Page you can build using Notus React. It features multiple CSS components based on the Tailwind CSS design system.'
  )
})

test('NavMenuLinks should be visible when on desktop viewports ', async ({
  page,
  viewport,
}) => {
  if (viewport.width > 1023) {
    await page.goto('http://localhost:3000')
    const logo = await page.locator('#topnav-logo').textContent()
    const topNavMobileButton = await page.locator('#topnav-mobile-button')
    const navMenuLinks = await page.locator('#navMenu-links')
    expect(logo).toBe('GregSoares.com')
    expect(navMenuLinks).toBeVisible()
    expect(topNavMobileButton).toBeHidden()
  } else {
  }
})

test('NavMenuLinks should not be visible when on mobile viewports, but tonav-mobile-button should be visible. ', async ({
  page,
  viewport,
}) => {
  if (viewport.width <= 1023) {
    await page.goto('http://localhost:3000')
    const logo = await page.locator('#topnav-logo').textContent()
    const topNavMobileButton = await page.locator('#topnav-mobile-button')
    const navMenuLinks = await page.locator('#navMenu-links')
    expect(logo).toBe('GregSoares.com')
    expect(topNavMobileButton).toBeVisible()
    expect(navMenuLinks).toBeHidden()
  }
})

test('Clicking mon the topNav Menu Button on Mobile viewport should load dropdown with topNavLinks', async ({
  page,
  viewport,
}) => {
  if (viewport.width < 1023) {
    await page.goto('http://localhost:3000')
    await page.locator('#topnav-mobile-button').click()
    const navMenuLinks = await page.locator('#navMenu-links')
    expect(navMenuLinks).toBeVisible()
  }
})
