// Page Object du module Login.
// TODO : adapter les sélecteurs au DOM réel (idéalement des attributs data-cy).
class LoginPage {
  path = '/fr/login';

  elements = {
    username: () => cy.get('[data-cy="username"]'),
    password: () => cy.get('[data-cy="password"]'),
    submit: () => cy.get('[data-cy="submit"]'),
    error: () => cy.get('[data-cy="error"]'),
  };

  visit() {
    cy.visit(this.path);
  }

  fillUsername(value) {
    this.elements.username().clear().type(value);
  }

  fillPassword(value) {
    this.elements.password().clear().type(value, { log: false });
  }

  submit() {
    this.elements.submit().click();
  }

  login(username, password) {
    if (username) this.fillUsername(username);
    if (password) this.fillPassword(password);
    this.submit();
  }
}

export default new LoginPage();
