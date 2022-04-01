import{ url} from '../../../config'
import {incorrect_acc,incorrect_id, account_number,id_number} from "../../fixtures/Equity_Credentials.json"
import RegistrationPage from '../../Page-Objects/Pages/RegistrationPage' 

describe('Registration', () => {
    before(function(){
       cy.visit(url)
       
    })

cy.pause

    it('register with invalid credentials',()=>{

        RegistrationPage.registration(incorrect_acc,incorrect_id)
    })

    Cypress.Commands.add('registration', (incorrect_acc,incorrect_id) =>{
        cy.wait(20000)
        cy.contains('Get started').click()
        cy.wait(5000)
        cy.get('.mat-stroked-button').click()
        cy.wait(5000)
        cy.get('#country').click()
        cy.get('div:nth-child(2) app-country-select-dropdown-item:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1)').click()
        cy.get('#accountNumber').type(incorrect_acc)
        cy.get('#idNumber').type(incorrect_id)
        cy.wait(5000)
        cy.get('.mat-checkbox-inner-container-no-side-margin').click()
        cy.wait(5000)
        cy.get('.mat-raised-button').click()
        cy.xpath("//div[@class='pl-2 text-left']").should('include.text', 'The details you entered')
    })

})

 /*
    it('should register the user',()=>{

        RegistrationPage.Registration(account_number,id_number)

    })*/