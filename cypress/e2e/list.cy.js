/// <reference types="cypress" />

describe("Main list/ body component", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000").as("Home");
    });

    it("render 10 gif cards on initial load ", () => {
        cy.get("@Home");
        cy.get("[data-cy=list]")
            .find("[data-cy=gif-card]")
            .should("have.length", 10);
    });
    it("renders more gif cards scroll ", () => {
        cy.get("@Home");
        cy.scrollTo(0, 20000);
        cy.wait(500);
        cy.scrollTo(0, 2000);
        cy.get("[data-cy=list]")
            .find("[data-cy=gif-card]")
            .should("have.length", 20);
    });
});
