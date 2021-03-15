/// <reference types="cypress" />

describe("tests opening pages", () => {
    context("by usage of URL ",()=>{
        it("should open 'Women' page successfully", () => {
            openPage()
        })
        it("should open 'Dresses' page successfully", () => {
            openPage()
        })
        it("should open 'Women' page successfully", () => {
            openPage()
        })
    })
})            

function openPage(){
    const idCategory3 = "/index.php?id_category=3&controller=category"
    const idCategory8 = "index.php?id_category=8&controller=category"
    const idCategory5 = "/index.php?id_category=5&controller=category"
const URLS = [idCategory3, idCategory5, idCategory8]
    cy.url().should('contain',), function () {
        if (true) {
            cy.get('[title="Women"]').should("have.text", "WOMEN ")
        }
        else {
            cy.get('[title="T-shirts"]').should("have.text", "T-shirts ")
        }
    }}