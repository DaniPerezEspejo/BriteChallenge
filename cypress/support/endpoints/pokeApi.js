export class PokeApi {
  /** Checks getBerry endpoint and verifies response schema
   * @param {string} endpoint Base endpoint to request, with no query params
   * @param {string} queryParams Additional endpoints params (id or name in this case)
   * @param {number} status Expected status
   */
  checkApiBerryEndpoint(endpoint, queryParams, status) {
    cy.request({
      url: endpoint + queryParams,
      failOnStatusCode: false,
    }).then((response) => {
      if (status === 200) {
        expect(response.status).to.eq(200);
        this.checkBerrySchema(response.body);
      }

      if (status === 404) {
        expect(response.status).to.eq(404);
      }
    });
  }

  // Helper function to verify Berry schema
  checkBerrySchema(body) {
    expect(body).to.have.property("id").and.to.be.a("number");
    expect(body).to.have.property("name").and.to.be.a("string");
    expect(body).to.have.property("growth_time").and.to.be.a("number");
    expect(body).to.have.property("size").and.to.be.a("number");
    expect(body).to.have.property("smoothness").and.to.be.a("number");
    expect(body).to.have.property("soil_dryness").and.to.be.a("number");

    expect(body).to.have.property("firmness");
    expect(body.firmness).to.have.property("name").and.to.be.a("string");
    expect(body.firmness).to.have.property("url").and.to.be.a("string");

    expect(body).to.have.property("flavors").and.to.be.an("array");

    if (body.flavors.length > 0) {
      const flavor = body.flavors[0];

      expect(flavor).to.have.property("potency").and.to.be.a("number");
      expect(flavor).to.have.property("flavor");
      expect(flavor.flavor).to.have.property("name").and.to.be.a("string");
      expect(flavor.flavor).to.have.property("url").and.to.be.a("string");
    }

    expect(body).to.have.property("item");
    expect(body.item).to.have.property("name").and.to.be.a("string");
    expect(body.item).to.have.property("url").and.to.be.a("string");
  }
}

export const onPokeApi = new PokeApi();
