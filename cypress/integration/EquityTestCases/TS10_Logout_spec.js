import { url } from '../../../config'
import { login_number, login_pass, login_otp, incorrect_username, incorrect_password } from "../../fixtures/Equity_Credentials.json"
import Logoutpage from '../../Page-Objects/Pages/Logoutpage'
import LoginPage from '../../Page-Objects/Pages/LoginPage'
//import logo from '../../Page-Objects/Components/Logo'




describe('Logout Scenario', () => {
    before(() => {
        cy.visit(url)
        //cy.success(login_number,login_pass,login_otp)
    })

    it('It should allow user to Login to the application', () => {


        LoginPage.success(login_number, login_pass, login_otp)

    })

    Cypress.Commands.add('success', (number, pass, otp) => {
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
        cy.wait(5000)
        cy.get('.mat-flat-button').click()
        cy.wait(5000)
        cy.get('div:nth-child(2) > div.col-8.product-list-item-label > div').click()
        cy.wait(5000)
        cy.get('div.row.mt-5 > div > button').click()
        cy.get("#mat-input-3").type('1')
        cy.get("#mat-input-5").type('1')
        cy.wait(5000)
        cy.get('div.row.mt-5 > div > button').click()
        cy.wait(5000)

    })

    it('It should logout the user successfully ', () => {

        Logoutpage.Logout()


    })

    Cypress.Commands.add('Logout', () => {

        cy.wait(5000)
        cy.xpath("//span[.='Transact']").click({ force: true })
        cy.wait(2000)
        cy.xpath("//span[.='Borrow']").click({ force: true })
        cy.wait(3000)
        //cy.xpath("//span[.='Invest']").click({ force: true })
        //cy.wait(3000)
        cy.xpath("//a[9]//div[@class='col-12']").click({ force: true })
        cy.wait(1000)
        cy.xpath("//button[.='Sign me out']").click({ force: true })
        cy.wait(20000)
        cy.get('h3').should('be.visible')


    })

    it('User logout Success confirmation', () => {
        Logoutpage.displaysuccesmessages()
    })

    Cypress.Commands.add('isVisible', selector => {
        cy.xpath(selector).should('be.visible')
    })
})
