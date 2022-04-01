import { url } from '../../../config'
///<reference types="cypress"/>
import { correct_account,incorrect_maxamount, mobile_number, max_amount, incorrect_amount, login_number, login_pass, login_otp, amount, sub_login, sub_pass } from '../../fixtures/Equity_Credentials.json'
import SendAccountPage from '../../Page-Objects/Pages/SendAccountPage'



describe('Send Account Validation', function () {
    before(function () {
        cy.visit(url)
        cy.success(login_number, login_pass, login_otp)

    })

    it('Send To Another Bank Account validation with min and max amount', () => {

        SendAccountPage.sendaccount(mobile_number,correct_account, incorrect_amount,incorrect_maxamount)
    })

    Cypress.Commands.add('sendaccount', (mobile_number,correct_account,incorrect_amount,incorrect_maxamount) => {
        cy.wait(5000)
        cy.xpath("//span[.='Transact']").click({ force: true })
        cy.wait(2000)
        cy.xpath("//div[5]//div[@class='mb-0 text-wrap']").click({ force: true })
        cy.wait(2000)
        cy.xpath("/html[1]/body[1]/app-root[1]/div[1]/app-dashboard[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[1]/div[1]/app-other-bank-transfer[1]/div[1]/div[2]/div[1]/app-transfer-from[1]/mat-form-field[1]/div[1]/div[1]/div[1]").click({ force: true })
        cy.xpath("//mat-list-item[1]//span[.='Account balance']").click({ force: true })
        cy.wait(2000)
        cy.get("[placeholder='Select the recipient']").click({ force: true })
        cy.wait(3000)
        cy.xpath("//div[@class='row mx-0 ng-star-inserted']//div[@class='col']/div[contains(.,'Phone-linked account')]").click({ force: true })
        cy.xpath("//input[@id='phoneNumber']").type(mobile_number, ({ force: true }))
        cy.wait(3000)
        cy.xpath("//span[.='Continue']").click({ force: true })
        cy.wait(6000)
        cy.xpath("//div[@class='ng-star-inserted']").should('include.text', 'Unable to fetch the customer name')
        cy.wait(3000)
        cy.xpath("//input[@id='phoneNumber']").clear()
        cy.xpath("//mat-icon[@class='mat-icon notranslate material-icons mat-icon-no-color']").click({ force: true })
        cy.wait(1000)
        cy.xpath("//div[@class='row mx-0 ng-star-inserted']//div[@class='col']/div[contains(.,'Another bank account')]").click({ force: true })
        cy.wait(5000)
        cy.xpath("//div[@class='col-md-12']//div[@class='col-12 m-0']/div[contains(.,'ABSA BANK KENYA03')]").click({ force: true })
        /*cy.xpath("//input[@class='ng-valid ng-dirty ng-touched']").type("Bank Of", { force: true })
        cy.wait(2000)
        cy.xpath("//div[@class='col-md-12']//div[@class='col-12 m-0']/div[contains(.,'BANK OF AFRICA19')]").click({ force: true })
        cy.wait(2000)*/
        cy.xpath("//input[@id='accountId']").type(correct_account, { force: true })
        cy.wait(7000)
        cy.xpath("//input[@id='currency-field']").type(incorrect_amount, { force: true })
        cy.get('.mat-error').should('include.text', 'The amount cannot be less')
        cy.wait(2000)
        cy.xpath("//input[@name='amount']").clear({ force: true })
        cy.xpath("//input[@name='amount']").type(incorrect_maxamount, { force: true })
        cy.get('.mat-error').should('include.text', 'The amount cannot be more')
        cy.wait(2000)
    })

    /*it('Send To Another Bank Account scenario should display validation messages',()=>{
       SendAccountPage.displayErrorMessages()
     })*/





    it('Send To Another Bank Account successful scenario ', () => {

        SendAccountPage.Sendaccount(correct_account, amount, mobile_number)

    })

    Cypress.Commands.add('Sendaccount', (correct_account,amount) => {

        cy.wait(5000)
        cy.xpath("//span[.='Transact']").click({ force: true })
        cy.wait(2000)
        cy.xpath("//div[5]//div[@class='mb-0 text-wrap']").click({ force: true })
        cy.wait(3000)
        cy.xpath("/html[1]/body[1]/app-root[1]/div[1]/app-dashboard[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[1]/div[1]/app-other-bank-transfer[1]/div[1]/div[2]/div[1]/app-transfer-from[1]/mat-form-field[1]/div[1]/div[1]/div[1]").click({ force: true })
        cy.xpath("//mat-list-item[1]//span[.='Account balance']").click({ force: true })
        cy.wait(2000)
        cy.get("[placeholder='Select the recipient']").click({ force: true })
        cy.wait(3000)
        cy.xpath("//div[@class='row mx-0 ng-star-inserted']//div[@class='col']/div[contains(.,'Another bank account')]").click({ force: true })
        cy.wait(5000)
        cy.xpath("//input[@class='ng-valid ng-dirty ng-touched']").type("Bank Of", { force: true })
       /* cy.wait(2000)
        cy.xpath("//div[@class='col-md-12']//div[@class='col-12 m-0']/div[contains(.,'BANK OF AFRICA19')]").click({ force: true })
        cy.wait(2000)*/
        cy.xpath("//div[@class='col-md-12']//div[@class='col-12 m-0']/div[contains(.,'ABSA BANK KENYA03')]").click({ force: true })
        cy.wait(2000)
        cy.xpath("//input[@id='accountId']").type(correct_account, { force: true })
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Continue')]").click({ force: true })
        cy.wait(2000)
        cy.xpath("//input[@id='currency-field']").type(amount, { force: true })

        cy.xpath("//button[@class='mat-focus-indicator col-md-3 mr-3 mb-3 mat-flat-button mat-button-base mat-primary']").click({ force: true })
        cy.wait(3000)
        cy.get("div > input:nth-child(1)").type("1", { force: true })
        cy.get("div > input:nth-child(2)").type("2", { force: true })
        cy.get("div > input:nth-child(3)").type("3", { force: true })
        cy.get("div > input:nth-child(4)").type("4", { force: true })
        cy.get("div > input:nth-child(5)").type("5", { force: true })
        cy.get("div > input:nth-child(6)").type("6", { force: true })
        cy.wait(3000)
        cy.get('.mat-flat-button').click({ multiple: true, force: true })
        cy.wait(10000)
        cy.xpath("//span[.='Done']").click({ multiple: true, force: true })
        cy.wait(5000)








    })

})
