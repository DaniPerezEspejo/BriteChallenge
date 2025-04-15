Cypress.Commands.add('openImdbHomePage', () => {
    cy.visit('/');
})

Cypress.Commands.add('elementExists', (selector) => {
    return Cypress.$(selector).length !== 0;
})