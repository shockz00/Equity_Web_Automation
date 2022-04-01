import { url } from '../../../config'

import BuyGoodsPage from '../../Page-Objects/Pages/BuyGoods'
import { login_number, login_pass, login_otp, incorrect_till, tillnumber, till_inamount, till_maxamount, amount } from '../../fixtures/Equity_Credentials.json'


describe('Buy Goods with validation', () => {
    before(() => {
        cy.visit(url)
        cy.success(login_number, login_pass, login_otp)

    })


    it('Buy Goods validation with min and max amount', () => {

        BuyGoodsPage.buygoods(incorrect_till, tillnumber, login_number, login_pass, till_maxamount, till_inamount)
    })

    Cypress.Commands.add('buygoods', (incorrect_till, tillnumber, till_inamount, till_maxamount) => {
        cy.wait(10000)
        cy.xpath("//span[.='Transact']").click({ force: true })
        cy.wait(6000)
        cy.xpath("//app-transfer-subsection[2]//div[@class='col']/div[contains(.,'Buy goods')]").click({ force: true })
        cy.get("[placeholder='Select the recipient']").click({ force: true })
        cy.xpath("//div[@class='col-9 pt-2 ml-4']").click({ force: true })
        cy.get("[data-placeholder='Enter the till number']").type(incorrect_till, { force: true })
        cy.wait(3000)
        cy.xpath("//span[.='Continue']").click({ force: true })
        cy.wait(3000)
        cy.get('.mat-error').should('include.text', 'It looks like the till number')
        cy.wait(3000)
        cy.get("[data-placeholder='Enter the till number']").clear({ force: true })
        cy.get("[data-placeholder='Enter the till number']").type(tillnumber, { force: true })
        cy.wait(2000)
        cy.xpath("//span[.='Continue']").click({ force: true })
        cy.xpath("//div[@class='col-10']").click({ force: true })
        cy.wait(3000)
        //cy.xpath("//span[.='Continue']").click({ force: true })
        cy.xpath("//input[@name='amount']").type(till_inamount, { force: true })
        cy.wait(1000)
        cy.get('.mat-error').should('include.text', 'The amount cannot be less')
        cy.wait(2000)
        cy.xpath("//input[@name='amount']").clear({ force: true })
        cy.xpath("//input[@name='amount']").type(till_maxamount, { force: true })
        cy.wait(2000)
        cy.get('.mat-error').should('include.text', 'The amount cannot be more')
        cy.wait(2000)
        cy.xpath("//input[@name='amount']").clear({ force: true })

        it('Buy Goods should display validation error messages', () => {

            BuyGoodsPage.displaygoodserror(incorrect_till, login_number, login_pass)
        })

        Cypress.Commands.add('isVisible', selector => {
            //Mocha assertions
            expect(selector).to.contains("'The amount cannot be less'")
        })
    })




    it('Buy Goods successful scenario', () => {

        BuyGoodsPage.Buygoods(tillnumber, amount)

    })
    Cypress.Commands.add('BuyGoods', (tillnumber) => {
        cy.wait(5000)
        /*cy.xpath("//span[.='Transact']").click()
        cy.wait(2000)
        cy.xpath("//app-transfer-subsection[2]//div[@class='col']/div[contains(.,'Buy goods')]").click()
        cy.wait(2000)
        cy.get("[placeholder='Select the recipient']").click()
        cy.wait(2000)
        cy.xpath("//div[@class='col-9 pt-2 ml-4']").click()
        cy.wait(2000)
        cy.get("[data-placeholder='Enter the till number']").type(tillnumber)
        cy.wait(3000)
        cy.xpath("//span[.='Continue']").click()*/
        cy.xpath("//input[@name='amount']").clear({ force: true })
        cy.xpath("//input[@name='amount']").type(amount, { force: true })
        cy.xpath("//button[@class='mat-focus-indicator py-1 px-3 px-sm-0 m-sm-0 w-100 mat-raised-button mat-button-base mat-primary']/span[@class='mat-button-wrapper']").click({ force: true })
        cy.wait(3000)
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
        cy.wait(7000)
        cy.xpath("//span[.='Done']").click({ multiple: true, force: true })
        cy.wait(5000)
    })
})
