const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// When("user selects women product", () => {
//     cy.womenCategory().click();
//     cy.dressCategory().click({ force: true });
// });

// Then("user able to see the women selected category", () => {
//     cy.url().should('include', '/category_products/1');
//     cy.headerCheckForDress().should('be.visible').and('contain.text', 'Women > Dress');
// });

When("user selects a women product and adds it to cart", () => {
    cy.maxiDressProduct().should('be.visible');
    cy.addToCartButtonOfMaxiDress().first().click();
});


// When("user selects men products", () => {
//     cy.menProductsButton().click();
//     cy.jeansProducts().click({ force: true });
// });

When("user navigates back to all products", () => {
    cy.visit('/products');
});

// Then("user able to see the men selected category", () => {
//     cy.url().should('include', '/category_products/6');

//     cy.headerCheckForJeans()
//         .should('be.visible')
//         .and('contain.text', 'Men > Jeans');
// });

When("user selects a men product and adds it to cart", () => {
    cy.regularFitStraightJeans().should('be.visible');
    cy.addToCartButtonForRegularFitJeans().first().click();
});


When("user selects kids products", () => {
    cy.kidsButton().click();
    cy.kidsDressButton().click({ force: true });
});

Then("user able to see the kids selected category", () => {
    cy.url().should('include', '/category_products/4');

    cy.kidsDressHeader()
        .should('be.visible')
        .and('contain.text', 'Kids > Dress');
});

When("user selects a kids product and adds it to cart", () => {
    cy.topAndShortDressOfKid().should('be.visible');
    cy.addToCartButtonForTopAndShirtDress().eq(0).click();
});


Then("user should see all three selected products in the cart", () => {
    cy.url().should('include', '/view_cart');

    cy.priceOfMaxiDress().should('be.visible');
    cy.priceOFRegularFitstraight().should('be.visible');
    cy.priceOfTopandShirtDress().should('be.visible');
});
