/// <reference types="cypress" />

import { onHomePage } from "../../pages/homePage";
import { onHeader } from "../../pages/header";
import { onProfilePage } from "../../pages/profilePage";

describe('Brite Challenge - Imdb testing', () => {

    beforeEach(() => {
        cy.openImdbHomePage();
        onHomePage.acceptCookies(false);
    })

    it('Imdb - Check profile - Search credit section - By role and tag', () => {
        onHeader.search("Nicolas Cage");
        onHeader.clickOnSearchResult(0);
        onProfilePage.clickOnCreditsResult("Actor", "Upcoming", "Post-production", 0);
    })
})