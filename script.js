//your JS code here. If required.
() => {
  cy.visit(baseUrl + "/main.html");
  cy.get('#bands', { timeout: 10000 }).should('be.visible');
}
