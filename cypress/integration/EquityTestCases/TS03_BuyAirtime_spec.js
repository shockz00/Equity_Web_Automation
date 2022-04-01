import { url } from '../../../config'
///<reference types="cypress"/>
import { otp, mobile_number, max_amount, incorrect_amount, login_number, login_pass, login_otp, amount, sub_login, sub_pass, number, pass } from '../../fixtures/Equity_Credentials.json'
import BuyAirtimePage from '../../Page-Objects/Pages/BuyAirtimePage'




describe('Buy Airtime validation', function () {
    before(function () {
        cy.visit(url)
        cy.success(login_number, login_pass, login_otp)


    })

    it('Buy Airtime validation with min and max amount and success scenario', () => {

        BuyAirtimePage.airtime(incorrect_amount,mobile_number,max_amount,number,pass,amount, mobile_number, otp)


    })

    Cypress.Commands.add('airtime', (incorrect_amount, mobile_number, max_amount) => {
        cy.wait(5000)
        cy.xpath("//span[.='Transact']").click({  multiple: true  })
        cy.wait(20000)
        cy.xpath("//app-transfer-subsection[4]//div[@class='mb-0 text-wrap']").click({ multiple: true, force: true })
        cy.wait(5000)
        cy.get("[placeholder='Select the recipient']").click({ multiple: true, force: true })
        cy.wait(3000)
        cy.xpath("//div[@class='col-8 pt-2']").click({ multiple: true, force: true })
        cy.wait(3000)
        cy.xpath("//mat-list-item[3]//div[@class='col-10']/div[contains(.,'Airtel')]").click({ multiple: true, force: true })
        cy.wait(3000)
        cy.get('#phoneNumber').type(mobile_number, { force: true })
        cy.wait(2000)
        cy.get('.mat-raised-button.col-4').click({ force: true })
        cy.wait(2000)
        cy.xpath("//input[@name='amount']").type(incorrect_amount, { force: true })
        cy.get('.mat-error').should('include.text', 'The amount cannot be less')
        cy.wait(2000)
        cy.xpath("//input[@name='amount']").clear({ force: true })
        cy.wait(2000)
        cy.xpath("//input[@name='amount']").type(max_amount, { force: true })
        cy.get('.mat-error').should('include.text', 'The amount cannot be more')
        cy.wait(2000)
        cy.xpath("//a[9]//div[@class='col-12']").click({ force: true })
        cy.wait(1000)
        cy.xpath("//input[@name='amount']").clear({ force: true })
        cy.xpath("//input[@name='amount']").type(amount, { force: true })
        cy.wait(5000)
        cy.get('.py-1').click({ force: true })
        cy.wait(5000)
        cy.xpath("//span[contains(.,'Confirm')]").click({ force: true })
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
        //cy.xpath("//button[.='Sign me out']").click({ multiple: true, force: true })
        //cy.wait(20000)
    })
})