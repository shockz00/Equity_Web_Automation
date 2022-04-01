import BasePage from "../BasePage";
/// <reference types="cypress" />
Cypress.config('pageLoadTimeout', 100000)

export default class Logoutpage extends BasePage {

    static success(number, pass, otp) {
        cy.success(number, pass, otp)
    }

    static Logout() {
        cy.Logout()
    }

    static displaysuccesmessages() {
        cy.isVisible("//h3[@class='strong-text']")
    }


}