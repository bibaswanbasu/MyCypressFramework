class HomePage {
  getNameEditBox() {
    return cy.get("input[name='name']:nth-child(2)");
  }
  getTwoWayDataBinding() {
    return cy.get('input[name="name"]:nth-child(1)');
  }
  getGender() {
    return cy.get("select");
  }
  getEntrepreneurRadioButton() {
    return cy.get("#inlineRadio3");
  }

  getShopButton() {
    return cy.contains("Shop");
  }
}
export default HomePage;
