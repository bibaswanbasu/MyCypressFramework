class LoginPage {
  getBurgerButton() {
    return cy.get(".h_menu_drop_button.hidden-xs");
  }

  getLoginButton() {
    return cy.get(".ng-star-inserted > .search_btn");
  }

  getLoginWindow() {
    return cy.get(".ui-dialog-content");
  }
  getUsernameInput() {
    return cy.get("input[placeholder='User Name']");
  }

  getPasswordInput() {
    return cy.get("input[placeholder='Password']");
  }
  getCaptchaImg() {
    return cy.get(".captcha-img");
  }

  getEnterCaptchaButton() {
    return cy.get("#captcha");
  }

  getBurgerButton() {
    return cy.get(".h_menu_drop_button.hidden-xs");
  }
}
export default LoginPage;
