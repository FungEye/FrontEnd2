import urls from "../util/data"

describe('Overview Page Suite', () => {

    const baseUrl = urls.local
    function goTo(url) { cy.visit(baseUrl + url) };

    beforeEach(() => {
        cy.visit(`${baseUrl}/login`)
        cy.get("[data-test='Username']").type("Kamil");
        cy.get("[data-test='Password']").type("qazwsx");
        cy.get("[data-test='Login']").click();
        cy.wait(1000);
        goTo("/overview");
    })

    it('Loads page', () => {
        cy.get(".op-container").should("exist");
        cy.get("#active-grows").should("exist");
        cy.get("#your-boxes").should("exist");
        cy.get("#past-yields").should("exist");
    })

    it("Redirects to dashboard when clicking active grow", () => {
        cy.get(".op-grow").first().click();
        cy.url().should("include", "/dashboard");
    });

    it("Starting a new grow from an empty box", () => {
        cy.get("#your-boxes").click();
        cy.get("[data-test='Start Grow']").click();
        cy.url().should("include", "/mushrooms");
    });
})