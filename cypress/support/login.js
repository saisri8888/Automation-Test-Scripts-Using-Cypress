Cypress.Commands.add("loginEmailAddress",()=>{
    cy.get('[data-qa="login-email"]');
})

Cypress.Commands.add("loginPassword",()=>{
    cy.get('[data-qa="login-password"]');
})

Cypress.Commands.add('loginButton',()=>{
    cy.get('[data-qa="login-button"]');
})
Cypress.Commands.add("logoutButtonVisible",()=>{
    cy.get('a[href="/logout"]',{ timeout: 10000 });
})



Cypress.Commands.add("loginWithValidUser", () => {  
    cy.fixture("loginData").then((data) => {    
        cy.loginEmailAddress().clear().type(data.validUser.email);    
        cy.loginPassword().clear().type(data.validUser.password, { log: false });    
        cy.loginButton().click();  
    });
    
});
 