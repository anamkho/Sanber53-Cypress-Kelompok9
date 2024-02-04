const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 2024,
  viewportHeight: 636,
  viewportWidth: 989,

  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});