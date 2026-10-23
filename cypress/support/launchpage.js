Cypress.Commands.add('clickOnTheSignupOrLogin',()=>{
    cy.get('a[href="/login"]')
});

Cypress.Commands.add('newUserSignupheader',()=>{
    cy.contains('h2','New User Signup!')
});
