const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },

});
