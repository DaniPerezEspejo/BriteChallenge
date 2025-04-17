export class TopTVShowsPage {
  /** Clicks on a TV Show from the list, searching by name
   * @param {string} name Desired TV Show name
   */
  clickOnTvShow(name) {
    cy.get('[class="ipc-metadata-list-summary-item"]')
      .contains(name)
      .click({ force: true });
  }
}

export const onTopTVShowsPage = new TopTVShowsPage();
