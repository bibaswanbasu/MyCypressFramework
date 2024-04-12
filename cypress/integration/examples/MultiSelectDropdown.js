/// <reference types="Cypress" />

describe("Assertion for multi select box", () => {
  // it block is treated as testcase
  it("Multi Select Field", () => {
    cy.visit(
      "https://gowarranty.in/buy-extended-warranty/home-appliances/air-conditioner#"
    );

    cy.get("#DevicePrice").type("50000");

    // Handle Select Dropdown
    cy.get("#OEMWarranty").select("18");
    cy.get("#PlanTenure").select("EW-P-330_13171_2");
  });
});
