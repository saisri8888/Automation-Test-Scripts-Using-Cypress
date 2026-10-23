Cypress.Commands.add('productsButton',()=>
    cy.get('a[href="/products"]')
)

Cypress.Commands.add('allProductsHeader',()=>{
    cy.contains('h2','All Products')
})

Cypress.Commands.add('womenCategory',()=>{
    cy.get('a[href="#Women"]')
})

Cypress.Commands.add('dressCategory',()=>{
    cy.get('a[href="/category_products/1"]')    
})

Cypress.Commands.add('headerCheckForDress', () => {
    return cy.get('.breadcrumb .active', { timeout: 10000 })
})

Cypress.Commands.add('maxiDressProduct',()=>{
    cy.contains('p','Rose Pink Embroidered Maxi Dress')
})

Cypress.Commands.add('addToCartButtonOfMaxiDress',()=>{
    cy.get('[data-product-id="38"]')
})

Cypress.Commands.add('addedTocartSuccessMessage',()=>{
    cy.contains('p','Your product has been added to cart.')
})

Cypress.Commands.add('viewCartButton',()=>{
    cy.get('u')
})

Cypress.Commands.add('proceedToCheckoutButton',()=>{
    cy.get('.btn.btn-default.check_out',{timeout:1000})
})

Cypress.Commands.add('priceOfMaxiDress',()=>{
    cy.contains('p','Rs. 2300')
})

Cypress.Commands.add('reviewYourOrder',()=>{
    cy.contains('h2','Review Your Order')
})

Cypress.Commands.add('placeOrderButton',()=>{
    cy.get('a[href="/payment"]')
})

Cypress.Commands.add('paymentHeader',()=>{
    cy.contains('h2','Payment')
})



//men products

Cypress.Commands.add('menProductsButton',()=>{
    cy.get('a[href="#Men"]')
})

Cypress.Commands.add('jeansProducts',()=>{
    cy.get('a[href="/category_products/6"]')
})

Cypress.Commands.add('headerCheckForJeans',()=>{
    cy.get('.breadcrumb .active')
})

Cypress.Commands.add('regularFitStraightJeans',()=>{
    cy.contains('p','Regular Fit Straight Jeans')
})

Cypress.Commands.add('addToCartButtonForRegularFitJeans',()=>{
    cy.get('[data-product-id="35"]')
})
Cypress.Commands.add('priceOFRegularFitstraight',()=>{
    cy.contains('p','Rs. 1200')
})


//kids
Cypress.Commands.add('kidsButton',()=>{
    cy.get('a[href="#Kids"]')
})

Cypress.Commands.add('kidsDressButton',()=>{
    cy.get('a[href="/category_products/4"]')
})


Cypress.Commands.add('kidsDressHeader',()=>{
    cy.get('.breadcrumb .active') 
})

Cypress.Commands.add('topAndShortDressOfKid',()=>{
    cy.contains('p','Sleeves Top and Short - Blue & Pink');
})

Cypress.Commands.add('addToCartButtonForTopAndShirtDress',()=>{
    cy.get('[data-product-id="16"]')//eq[0]
})

Cypress.Commands.add('priceOfTopandShirtDress',()=>{
    cy.contains('p','Rs. 478')
})