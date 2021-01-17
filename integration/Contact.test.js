import * as helper from '../support/commands'

describe("tests the ability to send a message", () => {
    it("checks if message is successfully sent", () => {
        openMainWebpage()
        openContactPage()
        sendMessage()
        successfulAlert()
    })
    it("unsuccessfully sent message", () => {
        helper.opensMainWebpage()
        openContactPage()
    })
})

function openMainWebpage() {
    cy.visit("http://automationpractice.com/index.php")
}

function openContactPage() {
    cy
        .get('#contact-link > a')
        .click()
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