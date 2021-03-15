
export function removeFromTheCart() {
    cy.get(".cart_quantity_delete").click()
}
export function addProductToCart() {
    cy.visit("/index.php?id_category=3&controller=category")
      cy.get('.ajax_add_to_cart_button:first').click()
    cy.get(".layer_cart_product").contains("Product successfully added to your shopping cart")
    cy.contains("1 Product")
    cy.contains("Cart").click({
        force: true
    })
}
