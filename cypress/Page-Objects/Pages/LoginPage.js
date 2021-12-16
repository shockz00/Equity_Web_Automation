import BasePage from "../BasePage"
Cypress.config('pageLoadTimeout', 100000)

export default class LoginPage extends BasePage{

    
    
  

    static Login(username,password){
       cy.Login(username,password)
    }

    static displayErrorMessages(){
        cy.isVisible('.pl-2 text-left')

    
}
}