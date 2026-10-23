const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// Given("User is on the Home page", () => { })
When("User scrolls down to the footer and enters an email address", () => {
    cy.scrollToBottom();
    cy.subscriptionheader().should('be.visible');
    cy.subscriptionEmailField().clear().type('shree@gmail.com');
    cy.subscriptionButton().click()
})

Then("Subscription success message should be displayed", () => { 
    cy.subscriptionSuccessfullMessage().should('be.visible')
})