export class Header {

    /** Searchs on header input
     * @param {string} searchTerm String to be typed on header input search component
     */
    search(searchTerm) {
        cy.get('[data-testid="suggestion-search"]').type(searchTerm);
    }

    /** Searchs on header input
     * @param {number} searchResult Result to be clicked on search result array.
     */
    clickOnSearchResult(searchResult) {
        cy.get('[data-testid="search-result--const"]').eq(searchResult).click();
    }
}

export const onHeader = new Header();