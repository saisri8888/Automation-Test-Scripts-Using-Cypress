Cypress.Commands.add('searchBoxFiled',()=>{
   return cy.get('#search_product')
})

Cypress.Commands.add('searchIconButton',()=>{
    return cy.get('#submit_search')
})

Cypress.Commands.add('shirtsatTop',()=>{
    cy.get('img[src="/get_product_picture/2"]')
})