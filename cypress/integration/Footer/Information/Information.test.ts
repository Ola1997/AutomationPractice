/// <reference types="Cypress" />
import * as helper from '../../../support/commands'
beforeEach("opens the main webpage",() => {
    cy.visit('/')
}) 
describe ("tests opening pages from Information category",()=>{
    context("from footer",()=>{
        it("should load 'specials' subpage",()=>{
            openSpecialsSubpage()
        })
        it("should load 'New products' subpage",()=>{
            openNewProductsSubpage()
        })
        it("should load 'Best sellers' subpage",()=>{
            bestSellersSubpage()
        })   
        it("should load 'Our stores' subpage",()=>{
            ourStoresSubpage()
        }) 
        it("should load 'Contact us' subpage",()=>{
            ContactSubpage()
        })
        it("should load 'Terms and conditions of use' subpage",()=>{
            termsAndConditions()
        })
        it("should load 'About us' subpage",()=>{
            abousUsSubpage()
        })
        it("should load 'Sitemap' subpage",()=>{
            sitemapSubpage()
        })
    })
})     
function openSpecialsSubpage(){
    cy.get(".footer-block").contains("Specials").click()
    cy.get(".page-heading").contains("Price drop")
}
function openNewProductsSubpage(){
    cy.get(".footer-block").contains("New products").click()
    cy.get(".page-heading").contains("New products")
}
function bestSellersSubpage(){
    cy.get(".footer-block").contains("Best sellers").click()
    cy.get(".page-heading").contains("Best sellers")
   }
function ourStoresSubpage(){
    cy.get(".footer-block").contains("Our stores").click()
    cy.get(".page-heading").contains("Our store(s)!")
}
function ContactSubpage(){
    cy.get(".footer-block").contains("Contact us").click()
    cy.get(".page-heading").contains("Contact us")
}

function termsAndConditions(){
    cy.get(".footer-block").contains("Terms and conditions of use").click()
    cy.get(".page-heading").contains("Terms and conditions of use")
}
function abousUsSubpage(){
    cy.get(".footer-block").contains("About us").click()
    cy.get(".page-heading").contains("About us")
}
function sitemapSubpage(){
    cy.get(".footer-block").contains("Sitemap").click()
    cy.get(".page-heading").contains("Sitemap")
}
   