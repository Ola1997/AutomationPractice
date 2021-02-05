/// <reference types="Cypress" />
import * as helper from '../../../support/commands'
beforeEach("opens Women Page",() => {
    cy.visit('/')
    })
describe ("tests women categories",()=>{
    context("from footer",()=>{
        it("should load the Women subpage",()=>{
        openWomenCategories()
        })
    })
}) 

function openWomenCategories(){
    cy.get(".footer-block").contains("Women").click()
    cy.get(".page-heading").contains("Women")
}
 