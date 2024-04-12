/// <reference types="Cypress" />
import HomePagge from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

describe("Testing from My Framework", function () {
  const homePage = new HomePagge();
  const productPage = new ProductPage();
  let userData;
  before(function () {
    cy.fixture("testData").then((data) => {
      userData = data;
    });
    cy.clearCookies();
  });

  //   after(() => {});

  it("Verify Length of Field", () => {
    cy.visit(Cypress.env("url") + "/angularpractice/");
    // cy.get("form input.form-control").eq(0).type("Pratyush");
    homePage.getNameEditBox().type(userData.name);
    //[[[[SELECT DROPDOWN]]]]
    homePage.getGender().select(userData.gender);
    homePage.getTwoWayDataBinding().should("have.value", userData.name);
    // VALIDATE LENGTH OF the FIELD
    homePage.getNameEditBox().should("have.attr", "minlength", "2");

    homePage.getEntrepreneurRadioButton().should("be.disabled");
  });

  it("E2E_Purchase Functionality", () => {
    cy.visit(Cypress.env("url") + "/angularpractice/");
    // cy.pause();
    homePage.getShopButton().click();

    userData.productName.forEach((element) => {
      cy.selectProduct(element);
    });

    productPage.getCheckOutButton().click();
    productPage.getFinalCheckOutBtn().click();

    productPage.getDeliveryCountry().type("India");
    // cy.pause();
    cy.wait(8000);
    productPage.getCountrySuggestion().click();
    productPage.getAgreeChkBox().click();
    productPage.getPurchaseButton().click();

    productPage.getSuccessMessage().then((element) => {
      const actualMsg = element.text();
      expect(actualMsg.includes("Success!")).to.be.true;
    });
  });

  it("Validate Final Cart Value", () => {
    var sumOfProduct = 0;
    cy.visit(Cypress.env("url") + "/angularpractice/");
    // cy.visit("https://rahulshettyacademy.com/angularpractice/");
    // cy.pause();
    homePage.getShopButton().click();

    userData.productName.forEach((element) => {
      cy.selectProduct(element);
    });

    productPage.getCheckOutButton().click();

    productPage
      .getPriceForEntity()
      .each(($el, index, $list) => {
        var amount = $el.text().split(" ");
        sumOfProduct = Number(sumOfProduct) + Number(amount[1].trim());
      })
      .then(function () {
        cy.log(sumOfProduct);
      });

    productPage.getTotalPrice().then((totalPrice) => {
      const total = totalPrice.text().split(" ");
      const actualSum = Number(total[1].trim());
      expect(sumOfProduct).to.equal(actualSum);
    });

    productPage.getFinalCheckOutBtn().click();

    productPage.getDeliveryCountry().type("India");
    Cypress.config("defaultCommandTimeout", 10000);
    // cy.pause();
    productPage.getCountrySuggestion().click();
    productPage.getAgreeChkBox().click();
    productPage.getPurchaseButton().click();

    productPage.getSuccessMessage().then((element) => {
      const actualMsg = element.text();
      expect(actualMsg.includes("Success!")).to.be.true;
    });
  });
});
