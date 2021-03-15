/// <reference types="Cypress" />
import * as helper from '../../support/ShoppingCart'

beforeEach("adds one product", () => {
    helper.addProductToCart()
    })
describe("successful tests of removing products", () => {
    context("from the cart", () => {
        it("should remove the product from the cart", () => {
           helper.removeFromTheCart()
        })
        it("should remove the product from the cart on the main page", () => {
            cy.contains("Cart").trigger('mouseover', {force:true})
            cy.get(".remove_link").click()
        })
    })
})