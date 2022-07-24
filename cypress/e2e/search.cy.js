/// <reference types="cypress" />

describe("searchBar", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000").as("Home");
        cy.get("[data-cy=search-bar]").as("SearchBar");
    });
    it("navigates to correct url after searching", () => {
        cy.get("@Home");
        cy.get("@SearchBar").type("cats");
        cy.get("[data-cy=search-btn]").click();
        cy.url().should("eq", "http://localhost:3000/cats");
    });
});
