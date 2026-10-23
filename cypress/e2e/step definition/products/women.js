const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("user logged into the application", () => {
    cy.visit("/");
    cy.clickOnTheSignupOrLogin().click();
    cy.url().should('include', '/login');
    cy.loginWithValidUser();
    cy.logoutButtonVisible({timeout:1000}).should('be.visible')

});

When("user clicks on the products Button", () => {  
    cy.productsButton().click();

})

Then("user should able to see ALL PRODUCTS header", () => {
    cy.url({ timeout: 10000 }).should('include', '/products');
    cy.allProductsHeader().should('be.visible')

})

When("user selects women product",()=>{
    cy.womenCategory().click();
    cy.dressCategory().click();
   
})

Then("user able to see the women selected category",()=>{
    cy.url({timeout:1000}).should('include','/category_products/1')
    cy.headerCheckForDress().should('contain.text','Women > Dress')
        
})

When("user selects any women product under the dress category and adds it to cart",()=>{
    cy.maxiDressProduct().should('be.visible');
    cy.addToCartButtonOfMaxiDress().eq(0).should('be.visible').click();
})

Then("user able to see the Added to cart successful message",()=>{
    cy.addedTocartSuccessMessage().should('be.visible');
})

When("user selects view cart",()=>{
    cy.viewCartButton().should('be.visible').click()
})

Then("user able to see the product details in the cart",()=>{
    cy.url({ timeout: 10000 }).should('eq','https://automationexercise.com/view_cart')
    cy.proceedToCheckoutButton()
            .should('exist')
            .and('be.visible');
    cy.priceOfMaxiDress().should('be.visible');
    
})

When("user selects proceed to checkout",()=>{
    cy.proceedToCheckoutButton({ timeout: 10000 }).should('be.visible').click();
    cy.url({ timeout: 10000 }).should('include', '/checkout');

})

Then("user able to see the address detils and selected product details and also verify place order button",()=>{
    cy.url({timeout:1000}).should('include','/checkout')
    cy.reviewYourOrder().should('be.visible');
    cy.placeOrderButton().should('be.visible');
    
})

When("user selects the place order button",()=>{
    cy.placeOrderButton().click()
})

Then("user should able to see the payment header section",()=>{
    cy.url().should('include','/payment')
    cy.paymentHeader().should('be.visible')
}) 
