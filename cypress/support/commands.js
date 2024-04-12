// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
/// <reference types="Cypress" />

//// <reference types="cypress-xpath" />

const Ajv = require("ajv");

Cypress.Commands.add("selectProduct", (productName) => {
  cy.get("h4.card-title").each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.get("button.btn.btn-info").eq(index).click();
    }
  });
});

Cypress.Commands.add("LoginAPI", () => {
  cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {
    userEmail: "apitest@gmail1.com",
    userPassword: "Practice@001",
  }).then(function (response) {
    expect(response.status).to.eq(200);
    cy.log(response.body.token);
    Cypress.env("token", response.body.token);
    // expect(response.body).to.have.property("Msg", "successfully added");
  });
});

Cypress.Commands.add("GetAddToCartByMenu", () => {
  cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {
    userEmail: "apitest@gmail1.com",
    userPassword: "Practice@001",
  }).then(function (response) {
    expect(response.status).to.eq(200);
    cy.log(response.body.token);
    Cypress.env("token", response.body.token);
    // expect(response.body).to.have.property("Msg", "successfully added");
  });
});

Cypress.Commands.add("validateSchema", (schema, response) => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(response);

  if (!valid) {
    Cypress.log({
      name: "Schema Validation",
      level: "error",
      message: `Schema validation failed: ${JSON.stringify(validate.errors)}`,
    });
  } else {
    Cypress.log({
      name: "Schema Validation",
      level: "pass",
      message: "Schema validation successful",
    });
  }

  expect(valid).to.be.true;
});

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
