/// <reference types="Cypress" />
import * as helper from '../../support/commands'

beforeEach("adds one product", () => {
    cy.visit("/")
})
describe("test searching results", () => {
    context("", () => {
        it("should find a product", () => {
            findProduct()
        })
    })
})

function findProduct() {
    cy.get("#search_query_top").type("Printed Dress")
    cy.get(".button-search").click()
    cy.contains("Printed Dress")

}