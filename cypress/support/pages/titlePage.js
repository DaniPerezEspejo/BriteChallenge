export class TitlePage {

    // Navigates to title photo section
    clickOnHeaderPhotoButton() {
        cy.get('[data-testid="hero__photo-link"]').click();
    }

    // Navigates to gallery section located in photo section
    clickOnGalleryButton() {
        cy.get('[data-testid="mv-gallery-button"]').click();      
    }

    // Clicks on photo gallery filter button
    clickOnGalleryFilterButton() {
        cy.get('[data-testid="image-chip-dropdown-test-id"]').click();      
    }

    /** Filters photos by custom person, searching on the prompt selector
     * @param {string} person Desired person to filter by
     * NOTE: Imdb list people in the selector by Name + Amount of pics. The amount of pics can't be known beforehand.
     *       That's why this couldn't be done just as 'cy.get(...).eq(0).select(person)'
     */
    filterPhotosByCustomPerson(person) {
        cy.get('[data-testid="select-dropdown-test-id"]').eq(0).then(selector => {
            cy.wrap(selector).contains(person).then(personOption => {
                const namePlusPicAmount = personOption.get(0).textContent;
                cy.wrap(selector).select(namePlusPicAmount);
            })
        })

        // Wait for new pics to load
        cy.wait(1000);
    }

    // Closes gallery filter prompt
    closeGalleryFilterPrompt() {
        cy.get('[class="ipc-promptable-base__close"] button').click();
    }

    /** Clicks on a photo from the list
     * @param {number} item Photo item number from the list, being 0 the first element
     */
    openPhoto(item) {
        cy.get('[data-testid="sub-section-images"] a').eq(item).click();
    }
}

export const onTitlePage = new TitlePage();