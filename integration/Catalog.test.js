/// <reference types="Cypress" />
import * as helper from '../support/commands'

describe("tests catalog of products", () => {
    it("filters prices from highest to lowest", () => {
        helper.openWomenSubpage()
        fromHighestToLowest()
    })
    it("filters prices from lowest to highest", () => {
        helper.openWomenSubpage()
        fromLowestToHighest()
    })
    it("shows products in stock", () => {
        helper.openWomenSubpage()
        stockCapacity()
    })
    it('compares products', () => {
        helper.openWomenSubpage()
        compareProducts()
    })

    function fromHighestToLowest() {
        cy.get('#selectProductSort').select("Price: Highest first"); {
            if (
                ".price product-price:first-child()" >
                ".price product-price:last-child()") {
                true
            }
        }
    }

    function fromLowestToHighest() {
        cy
            .get('#selectProductSort')
            .select("Price: Lowest first"); {
            if (
                ".product-price:last-child()" >
                ".product-price:first-child()") {
                true
            }
        }
    }

    function stockCapacity() {
        cy.get('#selectProductSort').select("In stock");
        cy.get(".available-now").contains("In stock");
    }

    function compareProducts() {
        cy.get('.add_to_compare').first().click()
        cy.get('.add_to_compare').last().click()
        if (cy.contains('2')) {
            true
        }
    }
})