const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("User launches the application",()=>{
    cy.visit('/');
    cy.homePageConfirmationMessage().should('be.visible')
})

When("User Clicks on the Contact Us Button",()=>{
    cy.contactUsButton().click()

})

Then("User should able to see the GET IN TOUCH text",()=>{
    cy.url().should('include','/contact_us');
    cy.getInTouchText().should('be.visible');
})

When("User enters the name, email, subject, message and upload file",()=>{
    cy.nameField().clear().type('Neha')
    cy.emailField().clear().type('sre1@gmail.como')
    cy.subjectField().clear().type('requestion on the clothes brands')
    cy.messageField().clear().type('bring more brands and colors in all sections')
    cy.fileUpload().selectFile('cypress/fixtures/Remote Access User Agreement to be filled-Sai sree yalapalli.pdf');
})

When("clicks on the Submit button and Ok button",()=>{
    cy.submitButton().should('be.enabled').click();
    cy.on('window:confirm', () => true);
})

Then("User should able to see the successful message",()=>{
    cy.successMessage().should('be.visible');


})

When("Clicks on the home button and navigate to the home page",()=>{
    cy.homeButton().click();
    cy.url().should('include','/');
    cy.homePageConfirmationMessage().should('be.visible')
})