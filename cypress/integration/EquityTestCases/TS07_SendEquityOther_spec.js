import { url } from '../../../config'
import { incorrect_amount, incorrect_maxamount,invalid_sendother, correct_account, mobile_number, amount, login_number, login_pass, login_otp } from '../../fixtures/Equity_Credentials.json'
import SendEquityOtherPage from '../../Page-Objects/Pages/SendEquityOtherPage'



describe('sendother', () => {
        before(() => {
                cy.visit(url)
                cy.success(login_number, login_pass, login_otp)
        })



        it('should try to send money to other account with invalid account number and invalid transactional limit', () => {

                SendEquityOtherPage.sendother(invalid_sendother, correct_account, incorrect_amount, incorrect_maxamount, login_number, login_otp, login_pass, correct_account)
        })

        Cypress.Commands.add('sendother', (invalid_sendother, correct_account, incorrect_amount, incorrect_maxamount) => {

                cy.wait(5000)
                cy.xpath("//span[.='Transact']").click({ force: true })
                cy.wait(2000)
                cy.xpath("//app-transfer-subsection[1]//div[@class='col']/div[contains(.,'Another Equity account')]").click({ force: true })
                cy.wait(1000)
                cy.get(" [placeholder='Select the recipient']").click({ force: true })
                cy.wait(1000)
                cy.xpath("//div[@class='col-9 pt-2 ml-2']").click({ force: true })
                cy.wait(1000)
                cy.get("[placeholder='Enter their account or mobile number']").type(invalid_sendother, { force: true })
                cy.wait(2000)
                cy.xpath("//span[.='Continue']").click({ force: true })
                cy.xpath("//div[@class='ng-star-inserted']").should('include.text', 'The account or mobile number you entered is incorrect')
                cy.wait(2000)
                cy.get("[placeholder='Enter their account or mobile number']").clear({ force: true })
                cy.wait(2000)
                cy.get("[placeholder='Enter their account or mobile number']").type(correct_account, { force: true })
                cy.wait(2000)
                cy.xpath("//span[.='Continue']").click({ force: true })
                cy.wait(3000)
                cy.xpath("//input[@name='amount']").type(incorrect_amount, { force: true })
                cy.get('.mat-error').should('include.text', 'The amount cannot be less')
                cy.wait(2000)
                cy.xpath("//input[@name='amount']").clear({ force: true })
                cy.xpath("//input[@name='amount']").type(incorrect_maxamount, { force: true })
                cy.get('.mat-error').should('include.text', 'The amount cannot be more')
                cy.wait(2000)
                cy.xpath("//a[9]//div[@class='col-12']").click({ multiple: true, force: true })

                //cy.xpath("//button[.='Sign me out']").click({ multiple: true, force: true })
                //cy.wait(20000)

        })





        it('Send Account Successful scenario', () => {

                SendEquityOtherPage.Sendother(correct_account, amount, login_number, login_otp, login_pass)
        })


        Cypress.Commands.add('Sendother', (correct_account, amount) => {

                cy.wait(5000)
                cy.xpath("//span[.='Transact']").click({ force: true })
                cy.wait(2000)
                cy.xpath("//app-transfer-subsection[1]//div[@class='col']/div[contains(.,'Another Equity account')]").click({ force: true })
                cy.wait(2000)
                cy.get(" [placeholder='Select the recipient']").click({ force: true })
                cy.wait(2000)
                cy.xpath("//div[@class='col-9 pt-2 ml-2']").click({ force: true })
                cy.wait(2000)
                cy.get("[placeholder='Enter their account or mobile number']").type(correct_account, { force: true })
                cy.wait(2000)
                cy.xpath("//span[.='Continue']").click({ force: true })
                cy.wait(2000)
                cy.xpath("//input[@name='amount']").type(amount, { force: true })
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Send money')]").click({ force: true })
                cy.wait(5000)
                cy.xpath("//span[contains(.,'Confirm')]").click({ force: true })
                cy.wait(6000)
                cy.get("div > input:nth-child(1)").type("1", { force: true })
                cy.get("div > input:nth-child(2)").type("2", { force: true })
                cy.get("div > input:nth-child(3)").type("3", { force: true })
                cy.get("div > input:nth-child(4)").type("4", { force: true })
                cy.get("div > input:nth-child(5)").type("5", { force: true })
                cy.get("div > input:nth-child(6)").type("6", { force: true })
                cy.wait(3000)
                cy.get('.mat-flat-button').click({ multiple: true, force: true })
                cy.wait(8000)
                cy.xpath("//span[.='Done']").click({ multiple: true, force: true })
                cy.wait(3000)
                //cy.xpath("//button[.='Sign me out']").click({ multiple: true, force: true })
               //cy.wait(20000)




        })
})