describe("My Test Suite", function () {
  it("Allert Handle Check", () => {
    //print("Inside my Test");
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#alertbtn").click();
    cy.get("[value='Confirm']").click();

    //How to catch the allert text?
    //Browser Event[ window:alert]
    cy.get("#alertbtn").click();

    cy.on("window:alert", (str) => {
      console.log(str);
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.on("window:confirm", (str) => {
      console.log(str);
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });
});
