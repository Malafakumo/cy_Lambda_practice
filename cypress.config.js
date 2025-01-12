const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.lambdatest.com/selenium-playground',
    chromeWebSecurity: false,
    includeShadowDom: true,
    pageLoadTimeout: 80000,
    viewportHeight: 960,
    viewportWidth: 1520,
    defaultCommandTimeout: 20000
  },

  downloadsFolder: "cypress/Downloads"


});
