/// <reference types="Cypress" />
import * as helper from '../../support/commands'
import * as help from '../../support/newsletter'
beforeEach("adds one product", () => {
    cy.visit("/")
})
describe("tests that sends message to input unsuccessfully", () => {
    context("when miswriting e-mail", () => {
        it("should send blank input unsuccessfully", () => {
            newsletterRejection()
        })

        it("should unsuccessfully miswrites e-mail", () => {
            help.newsletterInputBracket("@gmail.com")
            newsletterRejection()
        })
        it("should write e-mail without comma", () => {
            help.newsletterInputBracket("faked@gmailcom")
            newsletterRejection()
        })
        it("should write e-mail without @", () => {
            help.newsletterInputBracket("fakedgmail.com")
            newsletterRejection()
        })
    })
})

function newsletterRejection() {
    cy.get('[name=submitNewsletter]').click()
        cy.get('.alert').should("have.text"," Newsletter : Invalid email address.")
} 
