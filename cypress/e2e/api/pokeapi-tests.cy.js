/// <reference types="cypress" />

import { onPokeApi } from "../../support/endpoints/pokeapi";

const backendBaseUrl = Cypress.env("baseServerUrl");

describe("Brite Challenge - Pokeapi testing", () => {
  it("Request Berry endpoint - Request by Id - Valid Id", () => {
    cy.fixture("public-endpoints").then((data) => {
      const berryEndpointData = data.find((d) => d.alias === "getBerry");
      const request = backendBaseUrl + berryEndpointData.endpoint;

      onPokeApi.checkApiBerryEndpoint(request, "1", 200);
    });
  });

  it("Request Berry endpoint - Request by Id - Invalid Id", () => {
    cy.fixture("public-endpoints").then((data) => {
      const berryEndpointData = data.find((d) => d.alias === "getBerry");
      const request = backendBaseUrl + berryEndpointData.endpoint;

      onPokeApi.checkApiBerryEndpoint(request, "invalidId", 404);
    });
  });

  it("Request Berry endpoint - Request by Name - Valid Name", () => {
    cy.fixture("public-endpoints").then((data) => {
      const berryEndpointData = data.find((d) => d.alias === "getBerry");
      const request = backendBaseUrl + berryEndpointData.endpoint;

      onPokeApi.checkApiBerryEndpoint(request, "cheri", 200);
    });
  });

  it("Request Berry endpoint - Request by name - Invalid name", () => {
    cy.fixture("public-endpoints").then((data) => {
      const berryEndpointData = data.find((d) => d.alias === "getBerry");
      const request = backendBaseUrl + berryEndpointData.endpoint;

      onPokeApi.checkApiBerryEndpoint(request, "invalidName", 404);
    });
  });

  it("Request Berry Flavor endpoint - Request spicy ones - Get most potent one - Get berry details ", () => {
    cy.fixture("public-endpoints").then((data) => {
      const berryEndpointData = data.find((d) => d.alias === "getBerry");
      const berryFlavorEndpointData = data.find(
        (d) => d.alias === "getBerryFlavor",
      );

      const requestBerry = backendBaseUrl + berryEndpointData.endpoint;
      const requestBerryFlavor =
        backendBaseUrl + berryFlavorEndpointData.endpoint;

      cy.request(requestBerryFlavor + "spicy").then((response) => {
        expect(response.status).to.eq(200);

        const berries = response.body.berries;
        expect(berries).to.have.length.greaterThan(0);

        const mostPotentBerry = berries.reduce((max, current) => {
          return current.potency > max.potency ? current : max;
        });

        onPokeApi.checkApiBerryEndpoint(
          requestBerry,
          mostPotentBerry.berry.name,
          200,
        );
      });
    });
  });
});
