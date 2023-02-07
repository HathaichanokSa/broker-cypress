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
Cypress.Commands.add('LoginToApplication' , () => {
 
  cy.visit('/')
    
  cy.contains('Login').click()
  
  cy.get('[class="ant-input login"]')
    .type('aoeycisarnsom@gmail.com')
  cy.get('[id="password"]')
    .type('Test1234!')

  cy.contains('process') 
    .click()
})
Cypress.Commands.add('VerifyPhoneAlready' , () => {
 
  cy.visit('/')
    
  cy.contains('Login').click()
  
  cy.get('[class="ant-input login"]')
    .type('testeriux@outlook.com')
  cy.get('[id="password"]')
    .type('Test1234!')

  cy.contains('process') 
    .click()
})
Cypress.Commands.add('LoginToVerifyApp' , (option = {}) => {
  const {delay = 4000} = option

  cy.visit('/')
    
  cy.contains('Login').click()
  
  cy.get('[class="ant-input login"]')
    .type('tester.partneriux@gmail.com')
  cy.get('[id="password"]')
    .type('Test1234!')

  cy.contains('process') 
    .click()

  cy.wait(delay)
})
import 'cypress-file-upload';