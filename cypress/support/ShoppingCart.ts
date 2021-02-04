import * as helper from '../support/commands'

export function popUpAfterAddingToCart(){}

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