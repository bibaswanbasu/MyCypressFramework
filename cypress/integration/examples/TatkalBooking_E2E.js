/// <reference types="Cypress" />
import HomePage from "../pageObjects/TatkalLoginPage";

describe("Tatkal Booking from IRCTC", function () {
  it("Tatkal Booking E2E", () => {
    const homePage = new HomePage();
    cy.visit("https://www.irctc.co.in/nget/train-search");

    homePage.getBurgerButton().click();
    homePage.getLoginButton().click();

    homePage.getUsernameInput().type("bibaswanba");
    homePage.getPasswordInput().type("Bib@swan91");

    homePage
      .getCaptchaImg()
      .should("be.visible")
      .then(() => {
        homePage.getEnterCaptchaButton().scrollIntoView();
        homePage.getEnterCaptchaButton().click();
      });

    // homePage.getLoginWindow().should("not.be.visible");
  });
});
