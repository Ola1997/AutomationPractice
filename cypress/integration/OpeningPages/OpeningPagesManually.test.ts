/// <reference types="cypress" />

import { openWomenSubpage } from "../../support/commands"
beforeEach("opens Main Page",()=>{
    cy.visit("/")
})
describe("tests opening pages", () => {
    context("by clicking",()=>{
        it("should open 'Women' subpage successfully", () => {
           openWomenSubpage() 
        })
        it("should open 'Dresses' subpage successfully", () => {
            openDressesSubpage() 
         })
         it("should open 'T-shirts' subpage successfully", () => {
            openTshirtsSubpage() 
         })
    })
})       
function openDressesSubpage(){
    cy.get('[title="Dresses"]').click()
    cy.get(".cat-name").contains("Dresses")
}
function openTshirtsSubpage(){
    cy.get(".sf-menu>li:last").click()
    cy.get(".cat-name").contains("T-shirts")
}
