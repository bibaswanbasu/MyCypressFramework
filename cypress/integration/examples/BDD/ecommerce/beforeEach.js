beforeEach(function () {
  cy.fixture("testData").then((data) => {
    this.data = data;
  });
});

// those before, beforeEach, after, afterEach is mocha keyword it does not support fat operator[ ()=> ]
// so need to change this to function()
