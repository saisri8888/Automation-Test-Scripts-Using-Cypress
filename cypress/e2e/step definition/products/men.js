const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// When("user clicks on the products Button",()=>{
//     cy.productsButton().click();

// })

// Then("user should able to see ALL PRODUCTS header",()=>{
//     cy.url().should('include', '/products');
//     cy.allProductsHeader().should('be.visible');

// })

When("user selects men products",()=>{
    cy.menProductsButton().click()
    cy.jeansProducts().click()

})

Then("user able to see the men selected category",()=>{
    cy.url().should('include','/category_products/6')
    cy.headerCheckForJeans().should('contains.text','Men > Jeans')
})

When("user selects any men product under the jeans category and adds it to cart",()=>{
    cy.regularFitStraightJeans().should('be.visible');
    cy.addToCartButtonForRegularFitJeans().eq(0).click()

})

// Then("user able to see the Added to cart successful message",()=>{
//     cy.addedTocartSuccessMessage().should('be.visible');

// })

// When("user selects view cart",()=>{
//     cy.viewCartButton().click();

// })

// Then("user able to see the product details in the cart",()=>{
//     cy.url().should('eq','https://automationexercise.com/view_cart');
//     cy.proceedToCheckoutButton().should('be.visible');
//     cy.priceOFRegularFitstraight().should('be.visible')
// })

// When("user selects proceed to checkout",()=>{
//     cy.proceedToCheckoutButton().click();
// })

// Then("user able to see the address detils and selected product details and also verify place order button",()=>{
//     cy.reviewYourOrder().should('be.visible');
//     cy.placeOrderButton().should('be.visible');
//     cy.url().should('eq','https://automationexercise.com/checkout');
// })

// When("user selects the place order button",()=>{
//     cy.placeOrderButton().click();

// })

// Then("user should able to see the payment header section",()=>{
//     cy.url().should('eq','https://automationexercise.com/payment')
//     cy.paymentHeader().should('be.visible')

// }) 