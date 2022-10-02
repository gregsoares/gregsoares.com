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

test.describe('On load, TopNav: ', () => {
  test.describe('NavMenuLinks: ', () => {
    test('should be visible when on desktop viewports', async ({
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
    test('should not be visible when on mobile viewports, but tonav-mobile-button should be visible.', async ({
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
  })
  test.describe('CardSection: ', () => {
    test('should have 3 cards', async ({ page }) => {
      await page.goto('http://localhost:3000')
      const card1 = await page.locator('#card-1')
      const card2 = await page.locator('#card-2')
      const card3 = await page.locator('#card-3')
      expect(card1).toBeVisible()
      expect(card2).toBeVisible()
      expect(card3).toBeVisible()
    })
    test('should have 3 cards with the correct titles & tesxts', async ({
      page,
    }) => {
      await page.goto('http://localhost:3000')
      const card1Title = await page.locator('#card-1-title').textContent()
      const card2Title = await page.locator('#card-2-title').textContent()
      const card3Title = await page.locator('#card-3-title').textContent()
      expect(card1Title).toBe('Awarded Agency')
      expect(card2Title).toBe('Free Revisions')
      expect(card3Title).toBe('Verified Company')
    })
  })
})
test('Clicking mon the topNav Menu Button on Mobile viewport should load dropdown with topNavLinks', async ({
  page,
  viewport,
}) => {
  if (viewport.width < 1023) {
    await page.goto('http://localhost:3000')
    await page.click('#topnav-mobile-button')
    const navMenuLinks = await page.locator('#navMenu-links')
    expect(navMenuLinks).toBeVisible()
  }
})
