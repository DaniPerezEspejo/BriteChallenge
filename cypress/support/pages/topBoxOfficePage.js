export class TopBoxOfficePage {
  /** Clicks on Top Box Office movie item from the list rate button, and checks that prompt is displayed for the correct movie
   * @param {number} item Movie item number from Top Box Office list, being 0 the first element
   */
  clickOnItemRateButton(item) {
    cy.get(
      '[data-testid="chart-layout-main-column"] [class="ipc-metadata-list-summary-item"]',
    )
      .eq(item)
      .then((movie) => {
        cy.wrap(movie)
          .find('[class="ipc-title__text"')
          .then((title) => {
            const movieTitle = title.get(0).textContent;

            cy.wrap(movie).find('[data-testid="rate-button"]').click();
            cy.get('[class="ipc-rating-prompt__container"]').should("exist");
            cy.assertElementContainsText(
              '[class="ipc-rating-prompt__content-title"]',
              movieTitle,
            );
          });
      });
  }

  /** Clicks on desired star rating on rating prompt, and checks that it is correctly displayed
   * @param {number} rating Desired rating for a movie
   */
  setRating(rating) {
    const arrayRatingPosition = rating - 1;

    cy.get('[class="ipc-starbar__rating"] button')
      .eq(arrayRatingPosition)
      .click({ force: true });
    cy.assertElementContainsText(
      '[class="ipc-rating-display__rating"]',
      rating.toString(),
    );
  }

  // Clicks on rate button on rating prompt
  rate() {
    cy.get('[class="ipc-rating-prompt__rating-container"] button')
      .contains("Rate")
      .click();
  }
}

export const onTopBoxOfficePage = new TopBoxOfficePage();
