/// <reference types="Cypress" />
import * as helper from '../../support/commands'
import * as help from '../../support/newsletter'
beforeEach("opens Main webpage", () => {
    cy.visit("/")
})
describe("test Newsletter", () => {
    context("when not joined yet", () => {
        it("checks correctly joining to newsletter", () => {
            joiningToNewsletterConfirmed()
        })
    })
})

function joiningToNewsletterConfirmed() {
    help.newsletterInputBracket("fake@gmail.com")
    cy.get('[name=submitNewsletter]').click()
    cy.get('.alert').should("have.text"," Newsletter : Invalid email address.")
}

 