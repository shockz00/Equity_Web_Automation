import BasePage  from "../BasePage";
/// <reference types="cypress" />
Cypress.config('pageLoadTimeout', 100000)

export default class BuyAirtimePage extends BasePage{

    

  static airtime(mobile_number,incorrect_amount,number,pass,max_amount,amount,otp){
        cy.airtime(mobile_number,incorrect_amount,number,pass,max_amount,amount,otp)
    }


  /* static displayErrorMessages(){
        cy.isVisible()
    }*/
    
    /*static custom(mobile_number,amount,otp){
        cy.custom(mobile_number,amount,otp)
    }*/

}