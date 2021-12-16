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
Cypress.Commands.add('isVisible', selector =>{
    cy.contains('Get started').click()
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('ShouldExist', selector =>{
    cy.get(selector).should('not.exist')
})


Cypress.Commands.add('Login', (username, password) =>{
    cy.wait(5000)
    cy.contains('Get started').click()
    cy.get('h3').should('be.visible')
    cy.get("#accountId").type(username)
    cy.get("#password").type(password)
    cy.wait(5000)
    //cy.contains('Sign in').click()
    cy.contains('Sign in').click({force:true})
})


