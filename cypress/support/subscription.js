Cypress.Commands.add('scrollToBottom', () => {
    cy.scrollTo('bottom')
})


Cypress.Commands.add('subscriptionheader', () => {
    cy.contains('h2','Subscription')
})

Cypress.Commands.add('subscriptionEmailField', () => {
    cy.get('#susbscribe_email')
})

Cypress.Commands.add('subscriptionButton', () => {
    cy.get('#subscribe')
})


Cypress.Commands.add('subscriptionSuccessfullMessage', () => {
    cy.get('.alert-success.alert')
})