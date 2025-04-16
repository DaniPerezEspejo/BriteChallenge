export class Header {

    /** Searchs on header input
     * @param {string} searchTerm String to be typed on header input search component
     */
    search(searchTerm) {
        cy.get('[data-testid="suggestion-search"]').type(searchTerm);
    }

    /** Searchs on header input
     * @param {number} searchResult Result to be clicked on search result array, being 0 the first element
     */
    clickOnSearchResult(searchResult) {
        cy.get('[data-testid="search-result--const"]').eq(searchResult).click();
    }

    // Clicks on header menu burger button
    clickOnMenu() {
        cy.get('#imdbHeader-navDrawerOpen').click();
    }

    /** Clicks on any option inside menu burger button - movies section, searching by text
     * @param {string} option Clickable option inside any of the burger menu sections (movies, Celebs...)
     */
    clickOnMenuSectionOption(option) {
        cy.get('[data-testid="panel-content"] [data-testid="list-container"]').contains(option).click();
    }
}

export const onHeader = new Header();