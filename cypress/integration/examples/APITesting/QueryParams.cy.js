describe("API Testing with Query Param", () => {
  const queryParam = { page: 2 };
  it("Testing with Query Param", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users",
      // to add query parameter we can use 'qs' paramter
      qs: queryParam,
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.status).equal(200);
      expect(response.body.page).to.eq(2);
      expect(response.body.data).has.length(6);
      expect(response.body.data[0]).has.property("id", 7);
    });
  });
});
