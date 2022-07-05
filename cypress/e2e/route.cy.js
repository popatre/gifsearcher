/// <reference types="cypress" />

describe("visits localhost url", () => {
    it("connect to url", () => {
        cy.visit("http://localhost:3000");
    });
});
