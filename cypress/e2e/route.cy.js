/// <reference types="cypress" />

describe("test routes", () => {
    it("connect to home", () => {
        cy.visit("http://localhost:3000");
    });
    it("connect to random", () => {
        cy.visit("http://localhost:3000/random");
    });
    it("connect to specific search page", () => {
        cy.visit("http://localhost:3000/cats");
        cy.contains("h1", "Gifs of cats");
    });
});
