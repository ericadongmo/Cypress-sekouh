const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // URL de base : surchargeable via CYPRESS_BASE_URL ou --config baseUrl=...
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://192.168.110.8',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 8000,
    video: false,
    screenshotOnRunFailure: true,
    env: {
      locale: 'fr',
    },
  },
});
