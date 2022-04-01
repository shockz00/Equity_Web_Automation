// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand();


Cypress.Commands.add('success', (number,pass,otp) =>{
    cy.wait(15000)
    cy.contains('Get started').click();
    //cy.get('h3').should('be.visible');
    cy.get("#accountId").clear()
    cy.get("#accountId").type(number)
    cy.get("#password").clear()
    cy.get("#password").type(pass)
    cy.wait(2000)
    cy.get('button[type="submit"]').click()
    cy.wait(6000)
    cy.get('mat-list-item:nth-child(1) > div > mat-icon').click()
    cy.wait(2000)
    cy.contains('Next').click()
    cy.wait(6000)
    cy.get('div.row.mb-5 > div > input:nth-child(1)').type(otp)
    cy.wait(3000)
    cy.get('.mat-flat-button').click()
    cy.wait(5000)
    cy.get('div:nth-child(2) > div.col-8.product-list-item-label > div').click()
    cy.wait(3000)
    cy.get('div.row.mt-5 > div > button').click()
    cy.get("#mat-input-3").type('1')
    cy.get("#mat-input-5").type('1')
    cy.wait(3000)
    cy.get('div.row.mt-5 > div > button').click()
    cy.wait(3000)

})