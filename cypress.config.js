const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "mochawesome-report",
      charts: true,
      reportPageTitle: "Cypress Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
