describe("My Test Suite", function () {
  it("Drop down handelling", () => {
    //print("Inside my Test");
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#checkbox-example input[type='checkbox']").as("checkboxes");

    //Static Dropdown [can select either optionName, value attribute]
    cy.get("select").select("option2").should("have.value", "option2");

    //Dynamic dropdown
    cy.get("input[placeholder='Type to Select Countries']").type("Ind");

    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "Indonesia") {
        cy.wrap($el).click();
      }
    });

    cy.get("input[placeholder='Type to Select Countries']").should(
      "have.value",
      "Indonesia"
    );
  });
});
