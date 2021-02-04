/// <reference types="Cypress" />
import * as helper from '../../support/ShoppingCart'

beforeEach("adds one product", () => {
    cy.visit("/")
    helper.addToCart()
    helper.popUpAfterAddingToCart()
    cy.contains("1 Product")
})
describe("successful tests of removing products", () => {
    context("from the cart", () => {
        it("should remove the product from the cart", () => {
            helper.cartContent()
            helper.removeFromTheCart()
        })
        it("should remove the product from the cart on the main page", () => {
            cy.contains("Cart").trigger('mouseover', {force:true})
            cy.get(".remove_link").click()
        })
    })
})