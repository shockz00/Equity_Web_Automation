import BasePage from "../BasePage"
Cypress.config('pageLoadTimeout', 100000)

export default class RegistrationPage extends BasePage{

    static registration(incorrect_acc,incorrect_id){
        cy.registration(incorrect_acc,incorrect_id)
    }

    static Registration(account_number,id_number){
        cy.Registration(account_number,id_number)
    }
}