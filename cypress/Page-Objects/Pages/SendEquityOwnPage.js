import BasePage  from "../BasePage";
Cypress.config('pageLoadTimeout', 100000)

export default class SendEquityOwnPage extends BasePage{

  static sendown(incorrect_ownamount,incorrect_maxamount,number,pass){
        cy.sendown(incorrect_ownamount,incorrect_maxamount,number,pass
            )
    }

   /* static senderrormessage(){
        cy.senderrormessage('Invalid Amount')
    }*/

   static Sendown(correct_ownamount,number,pass){
        cy.Sendown(correct_ownamount,number,pass)
    }

 
}