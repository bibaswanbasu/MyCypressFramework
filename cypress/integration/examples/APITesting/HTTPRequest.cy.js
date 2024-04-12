/// <reference types="Cypress" />
let userID = 504;
describe("My API Testing With Cypress", () => {
  it("POST call", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: {
        title: "Test Post",
        body: "This is POST call",
        userId: userID,
      },
    })
      .its("status")
      .should("equal", 201);
  });

  it("PUT call", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        title: "Test Put- Updated",
        body: "This is PUT call",
        userId: userID,
        id: 1,
      },
    })
      .its("status")
      .should("equal", 200);
  });

  it("GET request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200);
  });

  it("DELETE call", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    })
      .its("status")
      .should("equal", 200);
  });

  //   it("GET request", () => {
  //     cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
  //       .its("status")
  //       .should("equal", 200);
  //   });
});
