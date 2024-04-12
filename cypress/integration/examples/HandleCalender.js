/// <reference types="Cypress" />

const vegName = "Carrot";
const vegName2 = "Cauliflower";
const expectedDate = "06/25/2028";

//Cypress - Spec file
describe("My First Test Suite", function () {
  //   it block is treated as testcase
  it("My First Test Case", () => {
    //print("Inside my Test");
    const year = "2022";
    const monthName = "5";
    const date = "18";
    const expectedList = [monthName, date, year];

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.contains("Top Deals").invoke("removeAttr", "target").click();

    cy.get(".react-date-picker__calendar-button").click();
    cy.get("span[class*='react-calendar']").click();
    cy.get("span[class*='react-calendar']").click();
    cy.contains("button", year).click();
    // 1way to click
    cy.get(".react-calendar__year-view__months__month")
      .eq(Number(monthName) - 1)
      .click();
    //another way
    cy.contains("button[class*='react-calendar__month']", date).click();

    // ASSERTION
    cy.get(".react-date-picker__inputGroup__input").each(($el, index) => {
      // If there is any value in value attribute using .invoke() we can get the value
      cy.wrap($el).invoke("val").should("eq", expectedList[index]);
    });
  });
});
