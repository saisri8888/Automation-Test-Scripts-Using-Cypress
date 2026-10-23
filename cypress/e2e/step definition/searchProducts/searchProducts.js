const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("User is on the Home page and clicks on the product button",()=>{
    cy.visit('/')
    cy.productsButton({Timeout:1000}).should('be.visible').click();
})

When("User enters the product name in the search box and click on the search icon",()=>{
    // cy.log("Clicking Products button");
    // cy.productsButton({Timeout:1000}).should('be.visible').click();
    cy.url().should('include','/products')
    cy.searchBoxFiled().clear().type('shirts');
    cy.searchIconButton().click();

})

Then("User should see the Searched product and related products",()=>{
    cy.url().should('include','/products?search=shirts')
    cy.shirtsatTop().should('be.visible')
})