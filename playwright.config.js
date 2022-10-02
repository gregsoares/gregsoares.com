const { devices } = require('@playwright/test')

const config = {
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'Desktop Firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'iPhone 11',
      use: {
        ...devices['iPhone 11'],
        viewport: { width: 375, height: 812 },
        isMobile: true,
      },
    },
    {
      name: 'Pixel 2',
      use: {
        ...devices['Pixel 2'],
        viewport: { width: 411, height: 731 },
        isMobile: true,
      },
    },
  ],
  testDir: 'tests',
  testMatch: '**/*.spec.js',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:3000',
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
  },
  reporter: [
    ['list'],
    ['junit', { outputFile: 'test-results.xml' }],
    ['json', { outputFile: 'test-results.json' }],
  ],
}

module.exports = config
