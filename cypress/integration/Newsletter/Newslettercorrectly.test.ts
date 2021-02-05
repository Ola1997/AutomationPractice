/// <reference types="Cypress" />
import * as helper from '../../support/commands'
beforeEach("adds one product", () => {
    cy.visit("/")
})
describe("test Newsletter", () => {
    context("when not joined yet", () => {
        it("checks correctly joining to newsletter", () => {
            joinNewsletter()
            newsletterConfirmation()
        })
    })
})

function joinNewsletter() {
    cy.get("#newsletter-input").type("fake@gmail.com")
    cy.get('[name=submitNewsletter]').click()
}

function newsletterConfirmation() {
    cy.get('.alert').contains(" Newsletter : This email address is already registered.")
} 