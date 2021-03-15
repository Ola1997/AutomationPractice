/// <reference types="Cypress" />
import * as helper from '../support/commands'

beforeEach("get to the catalog page", () => {
    helper.openWomenSubpage()
})
describe("tests catalog of products", () => {
    context("by filtering products", () => {
        it("should filter prices from highest to lowest", () => {
                fromHighestToLowest()
        })
        it("should filter prices from lowest to highest", () => {
                fromLowestToHighest()
        })
        it("should show products in stock", () => {
                stockCapacity()
        })
        it('should compare products', () => {
                compareProducts()
        })
    })
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
        cy.get('.add_to_compare:first').click()
        cy.get('.add_to_compare:last').click()
        if (cy.contains('2')) {
            true
        }
    }
