import BasePage  from "../BasePage";
Cypress.config('pageLoadTimeout', 100000)


export default class SendEquityOtherPage extends BasePage{

    static sendother(invalid_sendother,incorrect_amount,number,pass,correct_account){
        cy.sendother(invalid_sendother,incorrect_amount,number,pass,correct_account)
    }



    static Sendother(correct_account,amount){
        cy.Sendother(correct_account,amount)
    }    


}