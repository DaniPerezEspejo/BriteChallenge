/// <reference types="cypress" />

import { onHomePage } from "../../pages/homePage";
import { onHeader } from "../../pages/header";
import { onProfilePage } from "../../pages/profilePage";
import { onTopBoxOfficePage } from "../../pages/topBoxOfficePage";
import { onTopTVShowsPage } from "../../pages/topTVShowsPage";
import { onTitlePage } from "../../pages/titlePage";

describe('Brite Challenge - Imdb testing', () => {

    beforeEach(() => {
        cy.openImdbHomePage();
        onHomePage.acceptCookies(false);
    })

    it('Imdb - Check profile - Search credit section - By role and tag', () => {
        onHeader.search('Nicolas Cage');
        onHeader.clickOnSearchResult(0);
        onProfilePage.clickOnCreditsResult('Actor', 'Upcoming', 'Post-production', 0);
    })

    it('Imdb - Top Box Office section - Rate', () => {
        onHeader.clickOnMenu();
        onHeader.clickOnMenuSectionOption('Top Box Office');
        onTopBoxOfficePage.clickOnItemRateButton(1);
        onTopBoxOfficePage.setRating(5);
        onTopBoxOfficePage.rate();
        cy.assertPath('registration/signin');
    })

    it.only('Imdb - Top 250 TV Shows section - Photo filtering', () => {
        onHeader.clickOnMenu();
        onHeader.clickOnMenuSectionOption('Top 250 TV Shows');
        onTopTVShowsPage.clickOnTvShow('Breaking Bad');
        onTitlePage.clickOnHeaderPhotoButton();
        onTitlePage.clickOnGalleryButton();
        onTitlePage.clickOnGalleryFilterButton();
        onTitlePage.filterPhotosByCustomPerson('Danny Trejo');
        onTitlePage.closeGalleryFilterPrompt();
        onTitlePage.openPhoto(1);
    })
})