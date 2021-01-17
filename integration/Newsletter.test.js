import * as helper from '../support/commands'

describe("test Newsletter", () => {
    it("checks correctly joining to newsletter", () => {
        helper.opensMainWebpage()
        joinNewsletter()
        submitButton()
        newsletterConfirmation()
    })
    it("sends blank input unsuccessfully", () => {
        helper.opensMainWebpage()
        submitButton()
        newsletterRejection()
    })
    describe("tests validation of email address", () => {
        it("unsuccessfully miswrites e-mail", () => {
            helper.opensMainWebpage()
            cy.get("#newsletter-input").type("@gmail.com")
            submitButton()
            newsletterRejection()
        })
        it("writes e-mail without comma", () => {
            helper.opensMainWebpage()
            cy.get("#newsletter-input").type("faked@gmailcom")
            submitButton()
            newsletterRejection()
        })
        it("writes e-mail without @", () => {
            helper.opensMainWebpage()
            cy.get("#newsletter-input").type("fakedgmail.com")
            submitButton()
            newsletterRejection()
        })
    })
})

function joinNewsletter() {
    cy
        .get('.inputNew')
        .type("fake@gmail.com")

}

function newsletterConfirmation() {
    cy.get('.alert').invoke("text").should("equal", " Newsletter : This email address is already registered.")
}

function newsletterRejection() {
    cy.get('.alert').invoke("text").should("equal", " Newsletter : Invalid email address.")
}

function submitButton() {
    cy.get('[name=submitNewsletter]').click()
}