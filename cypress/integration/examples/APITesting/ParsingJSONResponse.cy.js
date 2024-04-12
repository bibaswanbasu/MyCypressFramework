describe("Parsing JSON Response", () => {
  const baseURL = "https://fakestoreapi.com";
  it("Parsing Simple JSON", () => {
    cy.request({
      method: "GET",
      url: baseURL + "/products",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0].id).to.eq(1);
      expect(response.body[0].title).to.eq(
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      );
    });
  });

  let totalPrice = 0;
  it.only("Fetching Title and Price for Elements", () => {
    cy.request({
      method: "GET",
      url: baseURL + "/products",
      qs: { limit: 5 },
    }).then((response) => {
      expect(response.status).to.eq(200);
      response.body.forEach((element) => {
        console.log("Price for " + element.title + " => " + element.price);
        totalPrice = totalPrice + element.price;
      });
      expect(totalPrice).to.equal(899.23);
    });
  });
});
