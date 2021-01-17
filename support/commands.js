// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

export function opensMainWebpage() {
    cy.visit("http://automationpractice.com/index.php")
}
export function openContactPage() {
    cy.get('#contact-link > a')
        .click()
}
export function openSignin() {
    cy.get(".login").click()
}
export function openWomenSubpage() {
    cy.visit("http://automationpractice.com/index.php")
    cy.contains('Women').click()
}
export function addToCart() {
    helper.openWomenSubpage()
    cy.get(".ajax_add_to_cart_button").first().click()
}

export function cartContent() {
    cy.contains("Cart").click({
        force: true
    })
}

export function removeFromTheCart() {
    cy.get(".cart_quantity_delete").click()
}