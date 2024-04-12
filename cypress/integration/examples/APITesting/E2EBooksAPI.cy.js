describe("E2E Automated Testing for Books API", () => {
  const baseURL = "https://simple-books-api.glitch.me";
  let authToken = null;
  let customerName = "Testing Customer";
  //Hooks
  before("Authentication Testcase", () => {
    cy.request({
      method: "POST",
      url: baseURL + "/api-clients/",
      headers: { "Content-Type": "application/json" },
      body: {
        clientName: "TESTCLIENT",
        clientEmail: Math.random().toString(5).substring(2) + "@gmail.com",
      },
    }).then((response) => {
      authToken = response.body.accessToken;
      console.log(authToken);
    });
  });

  before("POST- Order Book With Auth Token", () => {
    cy.request({
      method: "POST",
      url: baseURL + "/orders",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      body: {
        bookId: 1,
        customerName: customerName,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("created", true);
      expect(response.body.created).to.eq(true);
      cy.log("Order ID Created- " + response.body.orderId);
      console.log("Order ID Created- " + response.body.orderId);
    });
  });

  it("GET- Fetch Book Details", () => {
    cy.request({
      method: "GET",
      url: baseURL + "/orders",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      cookies: {
        cookieName: "myCookie",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).has.length(1);
      expect(response.body[0].customerName).to.eq(customerName);
      console.log(response.body[0]);
      cy.log(response.body[0]);
    });
  });
});
