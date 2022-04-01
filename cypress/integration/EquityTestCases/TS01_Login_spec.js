import { url } from '../../../config'
import { login_number, login_pass, login_otp, incorrect_username, incorrect_password } from "../../fixtures/Equity_Credentials.json"
import LoginPage from '../../Page-Objects/Pages/LoginPage'
//import logo from '../../Page-Objects/Components/Logo'


describe('Login Scenario with invalid creds', () => {
    before(function () {
        cy.visit(url)

    })


    it('User should try to login with invalid credentials', () => {

        LoginPage.Login(incorrect_username, incorrect_password)
    })
    Cypress.Commands.add('Login', (incorrect_username,incorrect_password) =>{
        cy.wait(10000)
        cy.contains('Get started').click()
        cy.get('h3').should('be.visible')
        cy.get("#accountId").type(incorrect_username)
        cy.get("#password").type(incorrect_password)
        cy.wait(5000);
        cy.get('button[type="submit"]').click()
    })


    it('User should be able to see display error message with invalid credentials', () => {
        LoginPage.displayErrorMessages()
    })

    Cypress.Commands.add('isVisible',selector=>{
        //Mocha assertions
        cy.xpath(selector).should('be.visible')
    })

})


describe('User Login Scenario success and navigate to app homepage', () => {
    before(function(){
       cy.visit(url)
       
    })
    
    it('should Login to Application',()=>{
       
     
       LoginPage.success(login_number, login_pass,login_otp)
       
       })
 
       Cypress.Commands.add('success', (number,pass,otp) =>{
        cy.wait(15000)
        cy.contains('Get started').click();
        cy.get('h3').should('be.visible');
        cy.get("#accountId").clear()
        cy.get("#accountId").type(number)
        cy.get("#password").clear()
        cy.get("#password").type(pass)
        cy.wait(2000)
        cy.get('button[type="submit"]').click()
        cy.wait(10000)
        cy.get('mat-list-item:nth-child(1) > div > mat-icon').click()
        cy.wait(2000)
        cy.contains('Next').click()
        cy.wait(5000)
        cy.get('div.row.mb-5 > div > input:nth-child(1)').type(otp)
        cy.wait(8000)
        cy.get('.mat-flat-button').click()
        cy.wait(8000)
        cy.get('div:nth-child(2) > div.col-8.product-list-item-label > div').click()
        cy.wait(8000)
        cy.get('div.row.mt-5 > div > button').click()
        cy.get("#mat-input-3").type('1')
        cy.get("#mat-input-5").type('1')
        cy.wait(8000)
        cy.get('div.row.mt-5 > div > button').click()
        cy.wait(8000)
    
    })
 })
  