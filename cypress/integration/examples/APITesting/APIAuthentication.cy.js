describe("Authentication Testcases", () => {
  it("Basic Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/basic-auth",
      auth: { user: "postman", pass: "password" },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.authenticated).to.eq(true);
    });
  });

  it("Digest Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/basic-auth",
      auth: { username: "postman", password: "password", method: "digestive" },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.authenticated).to.eq(true);
    });
  });

  //[NOTE: Beaerer token authentication will be part of header, need to provide under headers]
  const token =
    "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";

  it("Bearer Token Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://api.github.com/user/repos",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      console.log(response.body[0].full_name);
    });
  });

  it.only("API Key Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather",
      qs: {
        q: "Darjeeling",
        appid: "ab0a6402a77722d004b22f166d078b11",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      console.log("Temparature is- " + response.body.main.temp);
    });
  });

  it.only("OAuth 2.0 Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather",
      qs: {
        q: "Darjeeling",
        appid: "ab0a6402a77722d004b22f166d078b11",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      console.log("Temparature is- " + response.body.main.temp);
    });
  });
});
