describe("My Test Suite", function () {
  it.skip("Tab Handle Check", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // IF it openes a new tab
    cy.get("#opentab").invoke("removeAttr", "target").click();

    // If the browser navigate to completely new domain need to tell cypress the origin
    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      cy.get(".mt-50 h2").should("contain", "Welcome to QAClick Academy");

      cy.go("back");
      cy.go("back");
    });
  });

  it("Child Window Handle Check", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#openwindow").click();
  });
});
