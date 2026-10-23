const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("user launch the application", () => {
    cy.visit("/");
});

When("user clicks on the loginorsignup button", () => {
    cy.clickOnTheSignupOrLogin().click();
});

Then("user should able to see the New User Signup! header", () => {
    // cy.contains("New User Signup!").should("be.visible");
    cy.url().should('include','/login');
    cy.newUserSignupheader().should('be.visible');
});
