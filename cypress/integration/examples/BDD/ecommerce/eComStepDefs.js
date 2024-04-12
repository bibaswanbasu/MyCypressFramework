/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePagge from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/ProductPage";

const homePage = new HomePagge();
const productPage = new ProductPage();
var sumOfProduct = 0;
let name;

Given("I open ecommerce page", function () {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

When("I add items to cart", function () {
  homePage.getShopButton().click();

  this.data.productName.forEach((element) => {
    cy.selectProduct(element);
  });

  productPage.getCheckOutButton().click();
});

When("Validate the total prices", function () {
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
});

Then("Select the country submitand verify Thankyou", function () {
  productPage.getFinalCheckOutBtn().click();

  productPage.getDeliveryCountry().type("India");
  Cypress.config("defaultCommandTimeout", 10000);
  // cy.pause();
  cy.wait(10000);
  productPage.getCountrySuggestion().click();
  productPage.getAgreeChkBox().click();
  productPage.getPurchaseButton().click();

  productPage.getSuccessMessage().then((element) => {
    const actualMsg = element.text();
    expect(actualMsg.includes("Success!")).to.be.true;
  });
});

When("I fill the form page", (dataTable) => {
  name = dataTable.rawTable[1][0];
  homePage.getNameEditBox().type(name);
  //[[[[SELECT DROPDOWN]]]]
  homePage.getGender().select(dataTable.rawTable[1][1]);
});

Then("validate the form page", function () {
  cy.log("IN WHEN BLOCK..");
  homePage.getTwoWayDataBinding().should("have.value", name);
  // VALIDATE LENGTH OF the FIELD
  homePage.getNameEditBox().should("have.attr", "minlength", "2");

  homePage.getEntrepreneurRadioButton().should("be.disabled");
});
