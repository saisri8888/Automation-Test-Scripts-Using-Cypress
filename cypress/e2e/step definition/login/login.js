const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("user is on the login page",()=>{
    cy.visit('/login');

})
When("user enters the valid Email address and password",()=>{
    cy.fixture("loginData").then((data) => {
    cy.loginEmailField().clear().type(data.validUser.email);
    cy.loginPassword().clear().type(data.validUser.password, {log: false });

    // cy.loginEmailAddress().clear().type('mpl1234@gmail.com')
    // cy.loginPassword().clear().type('s1234m')
    cy.loginButton().click();
    });
    

})
Then("user should see the Logout button",()=>{
    cy.logoutButtonVisible().should('exist')
})
