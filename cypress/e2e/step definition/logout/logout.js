const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// Given("user is on the login page", () => {
//     cy.visit('/login');
// })

When("user enters the valid Email address and password and clicks on the Login button", () => {
    cy.fixture("loginData").then((data) => {
        cy.loginEmailAddress().clear().type(data.validUser.email);
        cy.loginPassword().clear().type(data.validUser.password, { log: false });
        cy.loginButton().click();
    });
})


// Then("user should see the Logout button", () => {
    //    cy.url().should('include','')
//     cy.logoutButtonVisible().should('exist').and('be.visible');
// })

When("user clicks on the Logout button", () => {
    cy.logoutButtonVisible().click();
})

Then("user should be navigated to the login page", () => {
    cy.url().should('include', '/login');
})