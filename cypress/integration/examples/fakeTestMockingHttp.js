/// <reference types="Cypress" />

describe("Mocking HTTP", function () {
  it("Mocking HTTP Responses", () => {
    cy.visit(Cypress.env("url") + "/angularAppdemo/");

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "BSG",
            aisle: "2302",
          },
        ],
      }
    ).as("bookRetrival");
    // cy.contains("Virtual Library").click();
    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@bookRetrival");

    // Way1: to Validate the text
    cy.get("p").should("have.text", "Oops only 1 Book available");

    // Way2: to Validate the text
    cy.get("p")
      .invoke("text")
      .then((text) => {
        // Use the text variable here, for example, in assertions
        expect(text).to.equal("Oops only 1 Book available");
      });

    // Way3: to Validate the text
    cy.get("p").contains("Oops only 1 Book available");
  });

  // Can validate the UI data with the backend data
  it("Validate UI data with BackEnd", () => {
    cy.visit(Cypress.env("url") + "/angularAppdemo/");

    cy.intercept(
      {
        method: "GET",
        url: Cypress.env("url") + "/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "BSG",
            aisle: "2302",
          },
          {
            book_name: "RestAssured with Java",
            isbn: "BSG",
            aisle: "2302",
          },
        ],
      }
    ).as("bookRetrival");
    // cy.contains("Virtual Library").click();
    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@bookRetrival").then(({ request, response }) => {
      cy.get("tr").should("have.length", response.body.length + 1);
    });
  });

  it("Validate Details for Other Account", () => {
    cy.visit(Cypress.env("url") + "/angularAppdemo/");

    cy.intercept(
      "GET",
      Cypress.env("url") + "/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          Cypress.env("url") + "/Library/GetBook.php?AuthorName=malhotra";

        req.continue((res) => {
          expect(res.statusCode).to.equal(200);
        });
      }
    ).as("dummyRes");

    cy.get("button[class='btn btn-primary']").click();
  });
});
