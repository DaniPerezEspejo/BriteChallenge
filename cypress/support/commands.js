// Navigates to project base url
Cypress.Commands.add('openImdbHomePage', () => {
    cy.visit('/');
})

/** Asserts certain text contains locator inner text
 * @param {string} selector Selector to use for cypress to get a certain element
 * @param {string} text Text that should contain selector inner text
 */
Cypress.Commands.add('assertElementContainsText', (selector, text) => {
    cy.get(selector).then(promptTitle => {
        expect(text).to.contain(promptTitle.get(0).textContent);
    })
})

/** Asserts current url contains certain path
 * @param {string} path Path to be container in current url
 */
Cypress.Commands.add('assertPath', (path) => {
    cy.location('pathname').should('contain', path);
})