/// <reference types="Cypress" />
import * as helper from '../../support/commands'
beforeEach("", () => {
    cy.visit("/")
    helper.openSignin()
})
describe("tests with failing login in", () => {
    context("when miswrites the letters", () => {
        it("should write an e-mail without '.at'", () => {
                cy.get('#email_create').type("random.com")
                submitCreate()
                unsuccessfulAlert()
        })
        it("should write an e-mail without '.com'", () => {
                cy.get('#email_create').type("random@")
                submitCreate()
                unsuccessfulAlert()
        })
        it("should write an e-mail without dot", () => {
               cy.get('#email_create').type("random@")
                submitCreate()
                unsuccessfulAlert()
        }) 
    })
})

function submitCreate() {
    cy.get('#SubmitCreate').click()
}

function unsuccessfulAlert() {
    cy.contains("Invalid email address.")
}