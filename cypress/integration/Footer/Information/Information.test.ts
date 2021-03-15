/// <reference types="Cypress" />
import * as helper from '../../../support/commands'
beforeEach("opens the main webpage",() => {
    cy.visit('/')
}) 
describe ("tests opening pages from Information category",()=>{
    context("from footer",()=>{
        it("should open 'specials' subpage",()=>{
            openSpecialsSubpage()
        })
        it("should open 'New products' subpage",()=>{
            openNewProductsSubpage()
        })
        it("should open 'Best sellers' subpage",()=>{
            bestSellersSubpage()
        })   
        it("should open 'Our stores' subpage",()=>{
            ourStoresSubpage()
        }) 
        it("should open 'Contact us' subpage",()=>{
            ContactSubpage()
        })
        it("should open 'Terms and conditions of use' subpage",()=>{
            termsAndConditionsSubpage()
        })
        it("should open 'About us' subpage",()=>{
            abousUsSubpage()
        })
        it("should open 'Sitemap' subpage",()=>{
            sitemapSubpage()
        })
    })
})     
function openSpecialsSubpage(){
    cy.get('[title="Specials"]').click()
    cy.get(".page-heading").should("have.text","Price drop")
}
function openNewProductsSubpage(){
    cy.get('[title="New products"]').click()
    cy.get(".page-heading").should("have.text","New products")
}
function bestSellersSubpage(){
    cy.get('[title="Best sellers"]').click()
    cy.get(".page-heading").should("have.text","Best sellers")
   }
function ourStoresSubpage(){
    cy.get('[title="Our stores"]').click()
    cy.get(".page-heading").should("have.text","\n\tOur store(s)!\n")
}
function ContactSubpage(){
    cy.get('[title="Contact us"]').click()
    cy.contains("Contact us")
}

function termsAndConditionsSubpage(){
    cy.get('[title="Terms and conditions of use"]').click()
    cy.get(".page-heading").should("have.text","Terms and conditions of use")
}
function abousUsSubpage(){
    cy.get('[title="About us"]').click()
    cy.get(".page-heading").should("have.text","About us")
}
function sitemapSubpage(){
    cy.get('[title="Sitemap"]').click()
    cy.contains("Sitemap")
}
   