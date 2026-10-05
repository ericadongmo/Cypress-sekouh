import LoginPage from '../../pages/LoginPage';

describe('Module Login', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
    LoginPage.visit();
  });

  it("affiche le formulaire de connexion", () => {
    LoginPage.elements.username().should('be.visible');
    LoginPage.elements.password().should('be.visible');
    LoginPage.elements.submit().should('be.visible');
  });

  it('connecte un utilisateur valide', function () {
    LoginPage.login(this.users.valid.username, this.users.valid.password);
    cy.url().should('not.include', '/login');
  });

  it('refuse des identifiants invalides', function () {
    LoginPage.login(this.users.invalid.username, this.users.invalid.password);
    cy.url().should('include', '/login');
    LoginPage.elements.error().should('be.visible');
  });

  it('refuse un formulaire vide', () => {
    LoginPage.submit();
    cy.url().should('include', '/login');
  });
});
