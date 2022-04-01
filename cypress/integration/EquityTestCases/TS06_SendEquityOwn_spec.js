import { url } from '../../../config'
import { incorrect_amount, incorrect_maxamount, correct_ownamount, login_number, login_pass, login_otp } from '../../fixtures/Equity_Credentials.json'
import SendEquityOwnPage from '../../Page-Objects/Pages/SendEquityOwnPage'



describe('Send Money Own Account', () => {
    before(() => {
        cy.visit(url)
        cy.success(login_number, login_pass, login_otp)
    })



    it('Should try to send money to own account validation with min and max amount', () => {

        SendEquityOwnPage.sendown(incorrect_amount, incorrect_maxamount, login_number, login_pass, login_otp)

    })

    Cypress.Commands.add('sendown', (incorrect_ownamount, max_amount) => {
        cy.wait(5000)
        cy.xpath("//span[.='Transact']").click({ force: true })
        cy.wait(2000)
        cy.xpath("//app-transfer-subsection[1]//div[@class='col']/div[contains(.,'Own Equity account')]").click({ force: true })
        cy.wait(8000)
        cy.xpath("/html[1]/body[1]/app-root[1]/div[1]/app-dashboard[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[1]/div[1]/app-transfer-to-self[1]/div[1]/div[2]/div[2]/app-transfer-to[1]/mat-form-field[1]/div[1]/div[1]/div[1]").click({ force: true })
        cy.wait(5000)
        cy.xpath("//mat-list-item[1]//span[.='Account balance']").click({ force: true })
        cy.wait(1000)
        cy.xpath("//input[@name='amount']").type(incorrect_ownamount, { force: true })
        cy.wait(2000)
        cy.get('.mat-error').should('include.text', 'The amount cannot be less')
        cy.wait(2000)
        cy.xpath("//input[@name='amount']").clear({ force: true })
        cy.xpath("//input[@name='amount']").type(max_amount, { force: true })
        cy.get('.mat-error').should('include.text', 'The amount cannot be more')
        cy.wait(2000)
        cy.xpath("//a[9]//div[@class='col-12']").click({ force: true })
        cy.wait(3000)
        // cy.xpath("//button[.='Sign me out']").click({ force: true })
        //cy.wait(20000)





    })

    it('Send to Own Account should display error message'), () => {
        SendEquityOwnPage.senderrormessage()



    }

    it('should try to send money to own account with valid transaction limit', () => {

        SendEquityOwnPage.Sendown(correct_ownamount, login_pass, login_otp, login_number)
    })


    Cypress.Commands.add('Sendown', (correct_ownamount) => {
        cy.wait(5000)
        cy.xpath("//span[.='Transact']").click({ force: true })
        cy.wait(2000)
        cy.xpath("//app-transfer-subsection[1]//div[@class='col']/div[contains(.,'Own Equity account')]").click({ force: true })
        cy.wait(8000)
        cy.xpath("/html[1]/body[1]/app-root[1]/div[1]/app-dashboard[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[1]/div[1]/app-transfer-to-self[1]/div[1]/div[2]/div[2]/app-transfer-to[1]/mat-form-field[1]/div[1]/div[1]/div[1]").click({ force: true })
        cy.wait(5000)
        cy.xpath("//mat-list-item[1]//span[.='Account balance']").click({ force: true })
        cy.wait(1000)
        cy.xpath("//input[@name='amount']").type(correct_ownamount, { force: true })
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Next')]").click({ force: true })
        cy.wait(5000)
        cy.xpath("//span[contains(.,'Confirm')]").click({ force: true })
        cy.wait(10000)
        /*
        cy.xpath("//span[.='Done']").click({force: true})
        cy.wait(5000)
        cy.xpath("//a[9]//div[@class='col-12']").click({force: true})
        cy.wait(1000)
        cy.xpath("//button[.='Sign me out']").click({force: true})
        cy.wait(20000)
    */



    })


})




























