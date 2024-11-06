const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    setupNodeEvents(on, config) {
    },
    video: true,
    reporter: 'mochawesome',
    screenshotOnRunFailure: true,
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss',
      screenshots: true,
    },
    screenshotsFolder: 'cypress/screenshots',
  },
});