describe("API Chaining Exp", () => {
  const auth_token =
    "d1ace802f04bf02f9cfaf30ce758dc59661c943a010154a728fb275c27449e32";
  const baseURL = "https://gorest.co.in";

  it("POST Create User", () => {
    let email = "test" + Math.random().toString(5).substring(1) + "@gmail.com";
    let name = "Tenali Ramakrishna";
    let updated_name = "Tenali Radhakrishna";

    cy.request({
      method: "POST",
      url: baseURL + "/public/v2/users",
      body: {
        name: name,
        gender: "male",
        email: email,
        status: "active",
      },
      headers: {
        Authorization: "Bearer " + auth_token,
      },
    })
      .then((response) => {
        expect(response.status).to.equal(201);
        const userId = response.body.id;
        // cy.log(`Created userid- ${userId}`);

        return userId;
      })
      .then((userId) => {
        cy.request({
          method: "GET",
          url: baseURL + `/public/v2/users/${userId}`,
          headers: {
            Authorization: "Bearer " + auth_token,
          },
        }).then((resp) => {
          expect(resp.status).to.equal(200);
          let actualEmail = resp.body.email;
          cy.log("[NOTE] EmailId for userid- " + userId + "- " + actualEmail);
          expect(actualEmail).to.equal(email);
          expect(resp.body.name).to.equal(name);

          cy.request({
            method: "PUT",
            url: baseURL + `/public/v2/users/${userId}`,
            body: {
              name: updated_name,
            },
            headers: {
              Authorization: "Bearer " + auth_token,
            },
          }).then((resp) => {
            expect(resp.status).to.equal(200);
            cy.log("[NOTE] Updated Name- " + resp.body.name);
            expect(resp.body.name).to.equal(updated_name);

            cy.request({
              method: "DELETE",
              url: baseURL + `/public/v2/users/${userId}`,
              headers: {
                Authorization: "Bearer " + auth_token,
              },
            }).then((resp) => {
              expect(resp.status).to.equal(204);
            });
          });
        });
      });
  });
});
