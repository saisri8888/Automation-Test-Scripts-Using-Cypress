const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
let response

// Given("User is ready to call Products API",()=>{})

When("User sends POST request",()=>{
    cy.request({
        method:'POST',
        url:'https://automationexercise.com/api/productsList',
        failOnStatusCode:false
    }).then((res)=>{
        response = res
    })
})

Then("Response code should be 405 and message should be displayed",()=>{
    expect(response.status).to.eq(200);
    const data = JSON.parse(response.body);
    expect(data.responseCode).to.eq(405);
    expect(data.message).to.eq('This request method is not supported.');
})