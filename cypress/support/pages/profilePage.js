export class ProfilePage {
  /** Searchs on profile page credits section by role, movie status, and item to select
   * @param {string} role Role to look for in Profile - Credits section. I.e.: Actor, Producer or Director
   * @param {string} timeStatus Movie time status to look for in Profile - Credits section. I.e.: Upcoming, Previous
   * @param {string} movieStatus Movie status to look for in Profile - Credits section - Time section. I.e.: Post-production, In Production, Pre-Production...
   * @param {number} item Item to click on after searching in Credits by role and status
   */
  clickOnCreditsResult(role, timeStatus, movieStatus, item) {
    const locator = `accordion-item-${role.toLowerCase()}-${timeStatus.toLowerCase()}-projects`;

    cy.get(`[data-testid=${locator}]`).click();
    cy.get(`#${locator}`).then((results) => {
      cy.wrap(results).contains(movieStatus).eq(item).click();
    });
  }
}

export const onProfilePage = new ProfilePage();
