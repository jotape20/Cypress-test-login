const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
     baseUrl: 'https://sweetshop.netlify.app/'
    //setupNodeEvents(on, config) {
      // implement node event listeners here
    //},
  },
});
