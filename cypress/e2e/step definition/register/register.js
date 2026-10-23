const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("User is on the signup page",()=>{
    cy.visit('/signup')
})

When("user enters the name and existing email and clicks on signup button",()=>{
    cy.signupNameField().clear().type('sree');
    cy.signupEmailField().clear().type('mpl1234@gmail.com')
    cy.signupButton().click()
})

Then("User should see the Email Address already exist!",()=>{
    cy.url().should('include','/signup')
    cy.validationMessage().should('be.visible');
    
})