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
    cy.get('[title="My orders"]').click()
}
function openCreditSlipsCategory(){
    cy.get('[title="My credit slips"]').click()
}
function openMyaddressesCategory(){
    cy.get('[title="My addresses"]').click()
}
function openPersonalInfoCategory(){
    cy.get('[title="Manage my personal information"]').click()
}
function authentication(){
    cy.get(".page-heading").should("have.text","Authentication")
}