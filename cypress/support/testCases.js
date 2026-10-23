Cypress.Commands.add('testCasesButton',()=>{
    cy.get('a[href="/test_cases"]')

})

Cypress.Commands.add('testcasesHeader',()=>{

    cy.contains('b','Test Cases')
})