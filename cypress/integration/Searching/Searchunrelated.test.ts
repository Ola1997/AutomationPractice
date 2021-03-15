/// <reference types="Cypress" />

beforeEach("opens main webpage", () => {
    cy.visit("/")
})
describe("tests searching functionality", () => {
    context("from Main page",()=>{
        it("should show no results found", () => {
            validateNoResultsAlert()
        })
    })    
})    
function validateNoResultsAlert() {
    cy.get("#search_query_top").type("xyz")
    cy.get(".button-search").click()
    cy.get(".alert").contains("No results were found for your search")

}