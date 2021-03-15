/// <reference types="Cypress" />
import * as helper from '../../support/commands'

beforeEach("opens min webpage", () => {
    cy.visit("/")
})
describe("test searching results", () => {
    context("from Main Page", () => {
        it("should find a product", () => {
            findProduct("Printed Dress")
        })
    })
})

function findProduct(phrase:string) {
    cy.get("#search_query_top").type("string")
    cy.get(".button-search").click()
    cy.get(".product-container").contains("printed dress")

}