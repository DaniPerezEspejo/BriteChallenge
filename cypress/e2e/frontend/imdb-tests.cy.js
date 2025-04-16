/// <reference types="cypress" />

import { onHomePage } from "../../support/pages/homePage";
import { onHeader } from "../../support/pages/header";
import { onProfilePage } from "../../support/pages/profilePage";
import { onTopBoxOfficePage } from "../../support/pages/topBoxOfficePage";
import { onTopTVShowsPage } from "../../support/pages/topTVShowsPage";
import { onTitlePage } from "../../support/pages/titlePage";
import { onBornTodayPage } from "../../support/pages/bornTodayPage";

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

    it('Imdb - Top 250 TV Shows section - Photo filtering', () => {
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

    it('Imdb - Born Today - Yesterday celebrities', () => {
        onHeader.clickOnMenu();
        onHeader.clickOnMenuSectionOption('Born Today');
        onBornTodayPage.removeDefaultFilter();
        onBornTodayPage.clickBirthdayFilter();
        onBornTodayPage.inputYesterdayBirthdayDateFilter();
        onBornTodayPage.clickOnSeeResults();
        onBornTodayPage.clickOnSearchResultName(2);
        cy.screenshot();
    })

    it('Imdb - Born Today - 40 years ago celebrities', () => {
        onHeader.clickOnMenu();
        onHeader.clickOnMenuSectionOption('Born Today');
        onBornTodayPage.removeDefaultFilter();
        onBornTodayPage.clickBirthdateFilter();
        onBornTodayPage.inputFourtyYearsAgoBirthDateFilter();
        onBornTodayPage.clickOnSeeResults();
        onBornTodayPage.clickOnFirstDescriptionLink(0);
        cy.screenshot();
    })
})