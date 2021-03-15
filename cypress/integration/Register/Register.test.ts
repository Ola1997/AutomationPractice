/// <reference types="Cypress" />

import * as helper from '../../support/commands'
beforeEach("opens Main webpage", ()=> {
  cy.visit('/')
})
describe("tests related to signing up", () => {
  context("first time", () => {
    it("should create an account", () => {
      initialRegistration()
      detailedRegistration()
    })
  })
})
describe("test attempt to sign in ", () => {
  context("without registering", () => {
    it("should show alert with login failing", () => {
      login()
    })
  })
})

function initialRegistration() {
  cy.get(".login").click()
  emailToCreate()
  cy.get("#SubmitCreate").click()
}

function detailedRegistration() {
  cy.get("#id_gender2").click()
  cy.get("#customer_firstname").type("XYZ")
  cy.get("#customer_lastname").type("ZYX")
  cy.get("#passwd").type("Pass123")
  cy.get("#days").select("31")
  cy.get("#months").select("July")
  cy.get("#years").select("1997")
  cy.get("#firstname").type("Name")
  cy.get("#lastname").type("Surname")
  cy.get("#company").type("POLEX")
  cy.get("#address1").type("Orzeszkowa 4")
  cy.get("#city").type("Orzeszkowa 4")
  cy.get("#id_state").select("Alabama")
  cy.get("#postcode").type("00-000")
  cy.get("#phone_mobile").type("00-000-000-000")
}

function login() {
  helper.openSignin()
  cy.get("#email").type("fake@mail.com")
  cy.get("#passwd").type("Pass123")
  cy.get("#SubmitLogin").click()
  cy.contains("There is 1 error")
}

function emailToCreate() {
  cy.get("#email_create").type("fake1@o2.com")
}
