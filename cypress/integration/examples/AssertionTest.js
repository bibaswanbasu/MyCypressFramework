/// <reference types="Cypress" />

describe("Assertions Demo", () => {
  // it block is treated as testcase
  it("Implicit Assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    //should assertion
    cy.url().should("include", "orangehrmlive.com");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.url().should("contain", "orangehrmlive");

    // we can also use multiple should() assertion
    cy.url()
      .should("include", "orangehrmlive.com")
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .should("contain", "orangehrmlive");

    // we can also use multiple and() insteed of should()
    cy.url()
      .should("include", "orangehrmlive.com")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrmlive")
      .and("not.contain", "orangehrmlivee");

    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    cy.get(".orangehrm-login-branding >img").should("be.visible").and("exist");

    cy.get('input[name="username"]').should("be.empty");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="username"]').should("have.value", "Admin");
  });

  it("Explicit Assertion", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get(".orangehrm-login-button").click();

    let expectedName = "manda user";
    cy.get(".oxd-userdropdown-name").then((name) => {
      let actualName = name.text();
      //BDD Style
      expect(expectedName).equal(actualName);

      //TDD Style
      assert.equal(expectedName, actualName);
      assert.notEqual("bibaswan", actualName);
    });
  });
});
