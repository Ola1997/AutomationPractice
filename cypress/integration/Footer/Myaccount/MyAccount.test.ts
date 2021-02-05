/// <reference types="Cypress" />
import * as helper from '../../../support/commands'
beforeEach("opens the main webpage",() => {
    cy.visit('/')
   })
describe ("tests opening pages from My account category",()=>{
    context("from footer",()=>{
        it("should load 'my orders' subpage",()=>{
           openOrdersCategory() 
           authentication()
        })

        it("should load 'my credit slips' subpage",()=>{
            openCreditSlipsCategory()
            authentication()
        })

        it("should load 'my addresses' subpage",()=>{
            openMyaddressesCategory()
            authentication()
        })

        it("should load 'my personal info' subpage",()=>{
            openPersonalInfoCategory()
            authentication()
        })
    })
})

function openOrdersCategory(){
    cy.contains("My orders").click()
}

function openCreditSlipsCategory(){
    cy.contains("My credit slips").click()
}
function openMyaddressesCategory(){
    cy.contains("My addresses").click()
}
function openPersonalInfoCategory(){
    cy.contains("My personal info").click()
}
function authentication(){
    cy.get(".page-heading").should("have.text","Authentication")
}