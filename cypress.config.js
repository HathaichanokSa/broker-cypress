const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'http://staging.iuxmarket.com/en',
    viewportWidth: 1920,
    viewportHeight: 3000,
  },
});
