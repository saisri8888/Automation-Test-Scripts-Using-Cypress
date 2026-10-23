const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// Given("user is on the login page", () => {
//     cy.visit("/login");
// });

When("user enters email {string} and password {string}", (email, password) => {
    cy.loginEmailAddress().clear().type(email);
    cy.loginPassword().clear().type(password, { log: false });
});

When("user clicks on Login button", () => {
    cy.loginButton().click();
});

Then("user should see {string}", (result) => {
        cy.contains("Your email or password is incorrect!").should("be.visible");
    
});