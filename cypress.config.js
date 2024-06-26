const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "jpikq6",
  defaultCommandTimeout: 20000,
  env: {
    url: "https://rahulshettyacademy.com",
    baseURL: "http://216.10.245.166",
  },

  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/examples/BDD/*.feature", //"**/*.feature",
    // specPattern: "cypress/integration/examples/*.js",
    // specPattern: "cypress/integration/examples/APITesting/*.cy.js",
  },

  retries: {
    runMode: 1,
    // openMode: 0,
  },
});
