import "./commands";

// Ignore exceptions thrown by local Firefox browser on imdb page.
// For reference: https://docs.cypress.io/app/references/error-messages#Uncaught-exceptions-from-your-application
Cypress.on("uncaught:exception", () => {
  return false;
});
