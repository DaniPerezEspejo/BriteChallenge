export class HomePage {
  // Accepts or rejects cookies based on boolean parameter
  acceptCookies(areCookiesAccepted) {
    cy.get('[data-testid="consent-banner"]').then((cookiesBanner) => {
      const targetButton = areCookiesAccepted
        ? "accept-button"
        : "reject-button";
      cy.wrap(cookiesBanner).find(`[data-testid="${targetButton}"]`).click();
    });
  }
}

export const onHomePage = new HomePage();
