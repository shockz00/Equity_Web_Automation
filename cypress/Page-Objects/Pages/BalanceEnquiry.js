import BasePage from "../BasePage"
Cypress.config('pageLoadTimeout', 100000)

export default class BalanceEnquiryPage extends BasePage {



    static Login(incorrect_username, incorrect_password) {
        cy.Login(incorrect_username, incorrect_password)
    }
   /* static displayErrorMessages() {
        cy.isVisible("//div[@class='pl-2 text-left']")
    }*/

    static Getbalance(accountid) {
        cy.Getbalance(accountid)
    }


}