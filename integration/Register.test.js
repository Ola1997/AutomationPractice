/// <reference types="Cypress" />
import * as helper from '../support/commands'

describe("tests related to signing up", () => {
  it("creates an account", () => {
    helper.opensMainWebpage()
    firstRegister()
    submitCreate()
    detailedRegistration()
  })
  describe("checks the correctness of e-mail form", () => {
    it("writes an e-mail without '.at'", () => {
      helper.opensMainWebpage()
      helper.openSignin()
      cy.get('#email_create').type("random.com")
      submitCreate()
      unsuccessfulAlert()
    })
    it("writes an e-mail without '.com'", () => {
      helper.opensMainWebpage()
      helper.openSignin()
      cy.get('#email_create').type("random@")
      submitCreate()
      unsuccessfulAlert()
    })
    it("writes an e-mail without dot", () => {
      helper.opensMainWebpage()
      helper.openSignin()
      cy.get('#email_create').type("random@")
      submitCreate()
      unsuccessfulAlert()
    })
  })
})
describe("test attempt to sign in ", () => {
  it("shows alert with login failing without registering", () => {
    helper.opensMainWebpage()
    helper.openSignin()
    emailToLogin()
    passwordToLogin()
    submitLogin()
    failedSignin()
  })
})



function firstRegister() {
  cy
    .get(".login").click()
  cy
    .get('#email_create')
    .type("fakeaddresss@gmail.com")

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

function emailToCreate() {
  cy.get("#email_create").type("fake1@o2.com")
}

function submitCreate() {
  cy.get('#SubmitCreate').click()
}

function submitLogin() {
  cy.get("#SubmitLogin").click()
}

function unsuccessfulAlert() {
  cy.contains("Invalid email address.")
}

function emailToLogin() {
  cy.get("#email").type("faked@dot.com")
}

function passwordToLogin() {
  cy.get("#passwd").type("1234")
}

function failedSignin() {
  cy.contains("There is 1 error")
}