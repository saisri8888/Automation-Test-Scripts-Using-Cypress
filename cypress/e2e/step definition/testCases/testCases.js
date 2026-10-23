const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("User is on the Home page",()=>{
    cy.visit('/')
    cy.homePageConfirmationMessage().should('be.visible')
})

When("User Clicks on the Test Cases button",()=>{
    cy.testCasesButton().eq(0).click();

})

Then("User should navigate to the test Cases page and see TEST CASES header",()=>{
    cy.url().should('include','/test_cases');
    cy.testcasesHeader().should('be.visible')

}) 