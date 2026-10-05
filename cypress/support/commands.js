// Commande personnalisée : connexion via l'interface
Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/fr/login');
    cy.get('[data-cy="username"]').type(username);
    cy.get('[data-cy="password"]').type(password, { log: false });
    cy.get('[data-cy="submit"]').click();
    cy.url().should('not.include', '/login');
  });
});
