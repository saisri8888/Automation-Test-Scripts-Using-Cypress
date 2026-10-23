Cypress.Commands.add('signupNameField',()=>{
    cy.get('[data-qa="signup-name"]')
})


Cypress.Commands.add('signupEmailField',()=>{
    cy.get('[data-qa="signup-email"]')
})

Cypress.Commands.add('signupButton',()=>{
    cy.get('[data-qa="signup-button"]')
})

Cypress.Commands.add('validationMessage',()=>{
    cy.contains('p','Email Address already exist!')
})