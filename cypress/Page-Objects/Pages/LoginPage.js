import BasePage from "../BasePage"
Cypress.config('pageLoadTimeout', 100000)

export default class LoginPage extends BasePage{

    
    /*static login1(in_username, in_password){
        cy.login1(in_username,in_password)
    }*/
  

    static Login(incorrect_username,incorrect_password){
       cy.Login(incorrect_username,incorrect_password)
    }

    static success(number,pass,otp){
        cy.success(number,pass,otp)
    }

  
    static displayErrorMessages(){
        cy.isVisible("//h3[@class='strong-text']")
    }
  
}
