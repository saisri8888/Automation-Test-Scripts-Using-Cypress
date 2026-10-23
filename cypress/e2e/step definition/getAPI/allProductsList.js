const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

let response

Given("User is ready to call Products API",()=>{})

When("User sends GET request",()=>{
    cy.request('GET','https://automationexercise.com/api/productsList').then((res)=>{
        response=res

    })
})
Then("Response code should be 200 and Products list should not be empty",()=>{
    expect(response.status).to.eq(200);

    const data = JSON.parse(response.body); 

    // expect(data.products.length).to.be.greaterThan(0);
    expect(data.products).to.not.be.empty;
})
