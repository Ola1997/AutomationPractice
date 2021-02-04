/// <reference types="cypress" />
import * as helper from '../../support/ShoppingCart'

beforeEach("adds one product", () => {
    cy.visit("/")
    helper.addToCart()
})
describe("tests shopping cart", () => {
    context("having one product in cart",()=>{
        it("should add the product to cart successfully", () => {
            helper.popUpAfterAddingToCart()
            cy.contains("1 Product")
        })
        it("should multiply the quantity of the product", () => {
            cy.contains("1 Product")
            helper.cartContent()
            cy.get(".button-plus").dblclick()
            cy.contains("Your shopping cart contains: 3 Products")

        })
    })
})