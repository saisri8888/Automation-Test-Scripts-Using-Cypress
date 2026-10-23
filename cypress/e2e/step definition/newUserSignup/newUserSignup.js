const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");



Given("the new user is on the signup page", ()=>{
     cy.visit("https://automationexercise.com/");
     cy.clickOnTheSignupOrLogin().click();

})
When("the new user enters the name,email address and clicks on signup button",()=>{
    cy.newUserName().clear().type('MPL1234');
    cy.newUserEmailAddress().clear().type('mpl1234@gmail.com');
    cy.signUpButton().click();
})
Then("the user navigate to account creation page",()=>{
    cy.creatingAccountPage().should('be.visible');
})

When("new user fill required details in the account creation page and clicking on the create account button",()=>{
    cy.genderTitle().click();
    cy.newUserPassword().clear().type('s1234m');
    cy.firstName().type('madanapalle');
    cy.lastName().type('Andhra Pradesh');
    cy.userAddress().type('3-81, mpl, ap');
    cy.country().select('India');
    cy.stateField().type('AP');
    cy.city().type('MPL');
    cy.zipcode().type('5712');
    cy.userMobileNumber().type('6785467798');
    cy.createAccountButton().click();
}) 

Then("new user create their account successfully",()=>{
    cy.url().should('include','/account_created');
    cy.accountCreatedPage().should('be.visible');
})