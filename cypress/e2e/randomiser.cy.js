/// <reference types="cypress" />
describe("Main list/ body component", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000").as("Home");
        cy.get("[data-cy=random-btn]").as("RandomBtn");
    });
    it("random button should navigate to random route when clicked", () => {
        cy.get("@Home");
        cy.get("@RandomBtn").click();
        cy.url("http://localhost:3000/random");
    });
    it("back to trending, returns to home route", () => {
        cy.get("@Home");
        cy.get("@RandomBtn").click();
        cy.url("http://localhost:3000/random");
        cy.get("[data-cy=back-home]").click();
        cy.url("http://localhost:3000/");
    });
});
