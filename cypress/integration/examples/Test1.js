/// <reference types="Cypress" />

const vegName = "Carrot";
const vegName2 = "Cauliflower";

//Cypress - Spec file
describe("My First Test Suite", function () {
  // it block is treated as testcase
  it("My First Test Case", () => {
    //print("Inside my Test");
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get("form input").type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);
    // we can assign variable using .as method
    cy.get(".products").as("products");

    //get element from parent child chaining[ the scop will be inside products only]
    cy.get("@products").find(".product").should("have.length", 4);

    // cy.get("@products").find(".product").eq(2).contains("+").click();
    // cy.get("@products").find(".product").eq(2).contains("ADD TO CART").click();

    //Iterate all the product using .each() method
    cy.get("@products")
      .find(".product")
      .each(($el, index, $list) => {
        const vegText = $el.find("h4.product-name").text();
        if (vegText.includes(vegName) || vegText.includes(vegName2)) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".brand").as("brandLogo");
    // for non-cypress code it got cinfused, you need to handle that manually
    cy.get("@brandLogo").then(function (logoElement) {
      cy.log(logoElement.text());
      // below console.log is javascript code so need to handle that with promises
      console.log(logoElement.text());
    });

    cy.get("@brandLogo").should("have.text", "GREENKART");

    cy.get(".cart-icon img").click();
    cy.get("button:contains('PROCEED TO CHECKOUT')").click();

    //Validation of Cart Page Table
    cy.get("tbody").should("exist");
    cy.wait(3000);

    //Iterate each row
    cy.get("tbody tr").each(($row, index) => {
      const productName = $row.find("td p.product-name").text();
      const quantity = parseInt($row.find("td p.quantity").text());
      const amount = parseFloat($row.find("td p.amount").first().text());
      const total = parseFloat($row.find("td p.amount").eq(1).text());

      // Calculate expected total price
      const expectedTotalPrice = quantity * amount;

      // Validate actual total price matches expected price
      expect(amount).to.equal(expectedTotalPrice);
    });

    cy.get("button:contains('Place Order')").click();
  });

  it("My Second Test Case", () => {
    //print("Inside my Test");
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get("form input").type("ca");
    cy.get(".products").as("products");

    //Iterate all the product using .each() method
    cy.get("@products")
      .find(".product")
      .each(($el, index, $list) => {
        const vegText = $el.find("h4.product-name").text();
        if (vegText.includes(vegName) || vegText.includes(vegName2)) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    // cy.get("button:contains('PROCEED TO CHECKOUT')").click();

    //Validation of Cart Page Table
    cy.get("tbody").should("exist");
    cy.wait(3000);

    //Iterate each row
    cy.get("tbody tr").each(($row, index) => {
      const productName = $row.find("td p.product-name").text();
      const quantity = parseInt($row.find("td p.quantity").text());
      const amount = parseFloat($row.find("td p.amount").first().text());
      const total = parseFloat($row.find("td p.amount").eq(1).text());

      // Calculate expected total price
      const expectedTotalPrice = quantity * amount;

      // Validate actual total price matches expected price
      expect(amount).to.equal(expectedTotalPrice);
    });

    cy.get("button:contains('Place Order')").click();
  });

  it("Check box handelling", () => {
    //print("Inside my Test");
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#checkbox-example input[type='checkbox']").as("checkboxes");

    // FIRST WAY
    cy.get("@checkboxes").each(($el, index, $list) => {
      cy.wrap($el).check().should("be.checked");
      cy.wrap($el).uncheck().should("not.be.checked");
    });

    //SECOND WAY
    cy.get("@checkboxes").check(["option2", "option3"]);
  });
});
