describe("My Test Suite", function () {
  it("Element Visibility Check", () => {
    //print("Inside my Test");
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#displayed-text").should("be.visible");

    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    //Radio Button
    cy.get("[value='radio2']").check().should("be.checked");

    cy.get("#confirmbtn").click();
  });
});
