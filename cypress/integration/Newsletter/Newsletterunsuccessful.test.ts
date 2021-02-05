/// <reference types="Cypress" />
import * as helper from '../../support/commands'
beforeEach("adds one product", () => {
    cy.visit("/")
})
describe("tests that sends message to input unsuccessfully", () => {
    context("when miswriting e-mail", () => {
        it("should send blank input unsuccessfully", () => {
                newsletterRejection()
            })

        it("should unsuccessfully miswrites e-mail", () => {
                cy.get("#newsletter-input").type("@gmail.com")
                newsletterRejection()
        })
        it("should write e-mail without comma", () => {
                cy.get("#newsletter-input").type("faked@gmailcom")
                newsletterRejection()
        })
        it("should write e-mail without @", () => {
                cy.get("#newsletter-input").type("fakedgmail.com")
                newsletterRejection()
        })
    })
})

function newsletterRejection() {
    cy.get('[name=submitNewsletter]').click()
    cy.get('.alert').contains("Newsletter : Invalid email address.")
} 