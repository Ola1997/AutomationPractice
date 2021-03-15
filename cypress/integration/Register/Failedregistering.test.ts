/// <reference types="Cypress" />
import * as helper from '../../support/commands'
beforeEach("", () => {
    cy.visit("/")
    helper.openSignin()
})
describe("tests with failing login in", () => {
    context("when miswrites the letters", () => {
        it("should write an e-mail without '.at'", () => {
                emailInput("random.com")
                submitCreate()
                unsuccessfulAlert()
        })
        it("should write an e-mail without '.com'", () => {
                emailInput("random@") 
                submitCreate()
                unsuccessfulAlert()
        })
        it("should write an e-mail without dot", () => {
                emailInput("random@com")
                submitCreate()
                unsuccessfulAlert()
        }) 
    })
})

function submitCreate() {
    cy.get('#SubmitCreate').click()
}
function emailInput(phrase:string){
    cy.get('#email_create').type('string')
}

function unsuccessfulAlert() {
    cy.contains("Invalid email address.")
}