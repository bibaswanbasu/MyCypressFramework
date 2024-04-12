// const neatCSV = require("neat-csv");
describe("API Testing", function () {
  beforeEach(() => {
    cy.viewport(1500, 1000); // Replace with desired dimensions
  });

  it("POST request Validation", () => {
    cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
      name: "Learn Cyprass by BB2",
      isbn: "bbd",
      aisle: "28005",
      author: "John foe",
    }).then(function (response) {
      cy.log(response.body);
      // expect(response.body).to.have.property("Msg", "successfully added");
      //   expect(response.statusCode).to.eq(200);
    });
  });

  it("Login using JWT token", () => {
    cy.LoginAPI().then(function () {
      cy.visit("https://rahulshettyacademy.com/client/", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });

      cy.get(".card-body > button:last-of-type").eq(1).click();
      cy.get("button[routerlink*='cart']").click();
      cy.contains("Checkout").click();
      cy.get('[placeholder="Select Country"]').type("India");

      cy.get(".ta-results button").each(($el, index, $list) => {
        cy.log($el.text());
        if ($el.text() == " India") {
          cy.wrap($el).click();
        }
      });

      cy.contains("Place Order").click();
      cy.contains("Click To Download Order Details in CSV").click();
      cy.wait(2000);

      // neatCSV(text);
    });
  });
});
