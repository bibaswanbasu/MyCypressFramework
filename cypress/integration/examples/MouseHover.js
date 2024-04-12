/// <reference types="Cypress" />

describe("My Test Suite", function () {
  it("WebTable Handle", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // with the help of JQuery can handle that
    //Jquery only apply to its direct child element
    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();

    // Also we cal force click to the element
    cy.contains("Top").click({ force: true });

    //Validate
    cy.url().should("include", "top");
  });
});
