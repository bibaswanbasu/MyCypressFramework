class ProductPage {
  getCheckOutButton() {
    return cy.get("a.btn-primary");
  }

  getFinalCheckOutBtn() {
    return cy.get("button.btn-success");
  }

  getDeliveryCountry() {
    return cy.get("#country");
  }

  getCountrySuggestion() {
    return cy.get(".suggestions a");
  }

  getAgreeChkBox() {
    return cy.contains("I agree with the");
  }

  getPurchaseButton() {
    return cy.get("input[value='Purchase']");
  }

  getSuccessMessage() {
    return cy.get(".alert");
  }

  getPriceForEntity() {
    return cy.get("tr td:nth-child(4) strong");
  }

  getTotalPrice() {
    return cy.get("tr td:nth-child(5) strong");
  }
}

export default ProductPage;
