Feature: Verifying the search functionality

    Scenario: User can able to search any products

        Given User is on the Home page and clicks on the product button
        When User enters the product name in the search box and click on the search icon
        Then User should see the Searched product and related products
