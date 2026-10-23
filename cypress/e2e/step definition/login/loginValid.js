const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// Given user is on the login page

When("user enter the email {string} and password {string} and clicks on the login button",(email,password)=>{
    cy.loginEmailAddress().clear().type(email);
    cy.loginPassword().clear().type(password, { log: false });
    cy.loginButton().click();

})
Then("user should login successfully {string}",(message)=>{
    cy.logoutButtonVisible().should("be.visible");
})
