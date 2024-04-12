describe("API Chaining Exp", () => {
  const baseURL = "https://jsonplaceholder.typicode.com";
  let postId = 0;
  it("GET all the ID", () => {
    cy.request({
      method: "GET",
      url: baseURL + "/posts",
    })
      .then((response) => {
        expect(response.status).to.be.equal(200);
        postId = response.body[5].id;
        console.log(`POST ID Fetched- ${postId}`);

        return postId;
      })
      .then((postid) => {
        cy.request({
          method: "GET",
          url: baseURL + "/comments",
          qs: { postId: postid },
        }).then((resp) => {
          expect(resp.status).to.be.equal(200);
          expect(resp.body).to.have.length(5);

          const responseBody = resp.body;
          //   console.log("BODY- " + responseBody);
          //   Iterate through each object in the response and check if postId equals 1
          responseBody.forEach((item) => {
            expect(item.postId).to.eq(postid);
          });
        });
      });
  });
});
