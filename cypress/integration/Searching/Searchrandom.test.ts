/// <reference types="Cypress" />

beforeEach("", () => {
    cy.visit("/")
})
describe("tests searching functionality", () => {
    context("from Main page",()=>{
        it("should show no results found", () => {
            findRandom()
        })
    })    
})    
function findRandom() {
    cy.get("#search_query_top").type("xyz")
    cy.get(".button-search").click()
    cy.contains("No results were found for your search")

}