export class BornTodayPage {
  // Removes default filter
  removeDefaultFilter() {
    cy.get('[class="ipc-chip-list__scroller"] button').click();
  }

  // Unfolds Birthday search filter
  clickBirthdayFilter() {
    cy.get('[data-testid="accordion-item-birthdayAccordion"]').click();
  }

  // Inputs yesterday date to filter
  inputYesterdayBirthdayDateFilter() {
    var date = new Date();
    date.setDate(date.getDate() - 1);

    const inputDate = date.toISOString().split("T")[0].slice(5);

    cy.get('[data-testid="birthday-input-test-id"]').type(inputDate);
    cy.clickOutside();
  }

  // Clicks on See results button
  clickOnSeeResults() {
    cy.get('[data-testid="adv-search-get-results"]').click();
  }

  /** Clicks on search result name
   * @param {number} item Search result item from the list, being 0 the first element
   */
  clickOnSearchResultName(item) {
    cy.get('[class="ipc-metadata-list-summary-item"]')
      .eq(item)
      .find('[data-testid="nlib-title"] a')
      .click();
  }

  // Unfolds Birth Date search filter
  clickBirthdateFilter() {
    cy.get('[data-testid="accordion-item-birthDateAccordion"]').click();
  }

  // Inputs 40 years ago date to into Birth Date start and end filter
  inputFourtyYearsAgoBirthDateFilter() {
    var date = new Date();
    date.setFullYear(date.getFullYear() - 40);

    const inputDate = date.toISOString().split("T")[0];

    cy.get('[data-testid="birthDate-start"]').type(inputDate);
    cy.get('[data-testid="birthDate-end"]').type(inputDate);
    cy.clickOutside();
  }

  /** Clicks on first link on item description
   * @param {number} item Search result item from the list, being 0 the first element
   */
  clickOnFirstDescriptionLink(item) {
    cy.get('[class="ipc-metadata-list-summary-item"]')
      .eq(item)
      .find('[data-testid="dli-bio"] a')
      .first()
      .click();
  }
}

export const onBornTodayPage = new BornTodayPage();
