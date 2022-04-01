import { url } from '../../../config'
import { login_number, login_pass, login_otp, incorrect_username, incorrect_password, otp, accountid, number, pass } from '../../fixtures/Equity_Credentials.json'
import BalanceEnquiryPage from '../../Page-Objects/Pages/BalanceEnquiry'
import LoginPage from '../../Page-Objects/Pages/LoginPage'

describe('User should recieve error message - Get Balance with Validation ', () => {
    before(() => {
        cy.visit(url)
        //cy.Login(incorrect_username,incorrect_password)

    })


    it('User should try to login with invalid credentials', () => {

        LoginPage.Login(incorrect_username, incorrect_password)
    })
    
    Cypress.Commands.add('Login', (incorrect_username, incorrect_password) => {
        cy.wait(10000)
        cy.contains('Get started').click()
        cy.get('h3').should('be.visible')
        cy.get("#accountId").type(incorrect_username)
        cy.get("#password").type(incorrect_password)
        cy.wait(5000);
        cy.get('button[type="submit"]').click()
        cy.wait(10000)

    })
/*
    it('User should be able to see display error message with invalid credentials', () => {
        LoginPage.displayErrorMessages()
    })

    Cypress.Commands.add('isVisible', selector => {
        //Mocha assertions
        expect(selector).to.contains("'Sorry, these details aren't familiar to us, please take a look and try again'")
    })*/



})




describe('Balance Enquiry', () => {
    before(() => {
        cy.visit(url)
        cy.success(login_number,login_pass,login_otp)
    })


    it('User should be able to fetch balance successfully', () => {
        BalanceEnquiryPage.Getbalance(accountid)
    })

    Cypress.Commands.add('Getbalance', () =>{

        cy.wait(5000)
    // cy.xpath("//div[@class='col-6 col-md-5']/div[@class='row']/div[contains(.,'You have')]").should('include.text', 'You have')
    cy.xpath("//button[@class='ng-star-inserted']").click({ force: true })
    cy.wait(3000)
    cy.xpath("//button[@class='ng-star-inserted']").click({ force: true })
    cy.wait(5000)

    
    })

})



