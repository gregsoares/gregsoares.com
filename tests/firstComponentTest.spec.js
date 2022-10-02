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

test('TopHeader should not load with dropdown active', async ({
  page,
  viewport,
}) => {
  await page.goto('http://localhost:3000')
  const logo = await page.locator('#topnav-logo').textContent()
  expect(logo).toBe('GregSoares.com')
  const navMenuContainer = await page.locator('#navMenu-container')

  if (viewport.width > 1023) {
    expect(navMenuContainer).toBeVisible()
  } else {
    const topNavMobileButton = await page.$('#topnav-mobile-button')
    expect(topNavMobileButton).toBeVisible()
    expect(navMenuContainer).toBeHidden()
  }
})

//TODO: test if on desktop navMenu-container should be visible
