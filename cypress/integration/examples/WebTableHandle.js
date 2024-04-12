describe("My Test Suite", function () {
  it("WebTable Handle", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("table[name='courses'] tr td:nth-child(2)").each(
      ($el, index, $list) => {
        const courseName = $el.text();

        if (courseName.includes("Master Selenium Automation")) {
          cy.get("table[name='courses'] tr td:nth-child(2)")
            .eq(index)
            .next()
            .then(function (price) {
              const priceText = price.text();
              cy.log("Price For - " + courseName + ": " + priceText);
              expect(priceText).to.equal("25");
            });
        }
      }
    );
  });
});
