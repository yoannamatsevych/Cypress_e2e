const { defineConfig } = require("cypress");
require('dotenv').config();


module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  env: {
    UI_URL: process.env.UI_URL,

    UI_USERNAME: process.env.UI_USERNAME,
    UI_PASSWORD: process.env.UI_PASSWORD,
    
    API_ENDPOINT: process.env.API_ENDPOINT
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
