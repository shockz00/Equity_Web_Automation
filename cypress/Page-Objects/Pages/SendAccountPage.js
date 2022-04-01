import BasePage  from "../BasePage";
/// <reference types="cypress" />
Cypress.config('pageLoadTimeout', 100000)

export default class SendAccountPage extends BasePage{

  static sendaccount(mobile_number,correct_account, incorrect_amount,incorrect_maxamount){
        cy.sendaccount(mobile_number,correct_account, incorrect_amount,incorrect_maxamount)
    }

/*
   static displayErrorMessages(){
        cy.isVisible("'The amount cannot be less'")
    }*/
    
    static Sendaccount(correct_account,amount){
        cy.Sendaccount(correct_account,amount)
    }

}