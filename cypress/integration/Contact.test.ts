/// <reference types="cypress" />

beforeEach("opens Contact Page",() => {
    cy.visit("/")
    openContactPage()
})
describe("tests the ability to send a message", () => {
    context("with usage of all data in form", () => {

            it("should send the message successfully", () => {
                sendMessage()
                successfulAlert()
            })
            it("should fail after sending an empty message", () => {
                cy.get('#submitMessage').click()
                unsuccessfulAlert()
            })
        
    })
})

function openContactPage() {
    cy.get('#contact-link').click()
}

function sendMessage() {
    cy
        .get('#id_contact')
        .select("Customer service");
    cy
        .get('#email')
        .type("fake@gmail.com")
    cy
        .get('#id_order')
        .type("Test")
    cy
        .get('#message')
        .type("This is a testing message")
    cy
        .get('#submitMessage')
        .click()
}

function successfulAlert() {
    cy.get('.alert-success').should('have.text', 'Your message has been successfully sent to our team.')
}
function unsuccessfulAlert(){
    cy.get(".alert-danger").contains('Invalid email address.')
}