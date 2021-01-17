import * as helper from '../support/commands'

describe("tests shopping cart", () => {
    it("adds the product to cart successfully", () => {
        addToCart()
        popUpAfterAddingToCart()
        cy.contains("1 Product")
    })
    it("removes the product from the cart", () => {
        addToCart()
        popUpAfterAddingToCart()
        cy.contains("1 Product")
        cartContent()
        removeFromTheCart()
    })
    it("removes the product from the cart on the main page", () => {
        addToCart()
        popUpAfterAddingToCart()
        cy.contains("1 Product")
        helper.opensMainWebpage()
        cy.contains("Cart").trigger('mouseover')
        cy.get(".remove_link").click()
    })
    it("multiplies the quantity of the product", () => {
        addToCart()
        cy.contains("1 Product")
        cartContent()
        cy.get(".button-plus").dblclick()
        cy.contains("Your shopping cart contains: 3 Products")
    })

})

function popUpAfterAddingToCart() {
    cy.contains("Product successfully added to your shopping cart")
    cy.contains("Continue shopping")
}