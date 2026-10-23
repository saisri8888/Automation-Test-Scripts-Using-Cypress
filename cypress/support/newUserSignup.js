Cypress.Commands.add('newUserName',()=>{
    cy.get('[data-qa="signup-name"]');
})
Cypress.Commands.add('newUserEmailAddress',()=>{
    cy.get('[data-qa="signup-email"]');
})
Cypress.Commands.add('signUpButton',()=>{
    cy.get('[data-qa="signup-button"]');
})

Cypress.Commands.add('creatingAccountPage',()=>{
    cy.contains('b','Enter Account Information');
})

Cypress.Commands.add('genderTitle',()=>{
    cy.get('[id="id_gender2"]');
})

Cypress.Commands.add('newUserPassword',()=>{
    cy.get('[data-qa="password"]');
})

Cypress.Commands.add('firstName',()=>{
    cy.get('[data-qa="first_name"]');
})

Cypress.Commands.add('lastName',()=>{
    cy.get('[data-qa="last_name"]');
})

Cypress.Commands.add('userAddress',()=>{
    cy.get('[data-qa="address"]');
})

Cypress.Commands.add('country',()=>{
    cy.get('[data-qa="country"]');
})

Cypress.Commands.add('stateField',()=>{
    cy.get('[data-qa="state"]');
})

Cypress.Commands.add('city',()=>{
    cy.get('[data-qa="city"]');
})

Cypress.Commands.add('zipcode',()=>{
    cy.get('[data-qa="zipcode"]');
})

Cypress.Commands.add('userMobileNumber',()=>{
    cy.get('[data-qa="mobile_number"]');
})

Cypress.Commands.add('createAccountButton',()=>{
    cy.get('[data-qa="create-account"]');
})

Cypress.Commands.add('accountCreatedPage',()=>{
    cy.contains('h2','Account Created!');
})