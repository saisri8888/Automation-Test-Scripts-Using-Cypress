Feature: Men product Functionality 

    Scenario: User can able to add the products when selecting Men
    
        Given user logged into the application  
        When user clicks on the products Button 
        Then user should able to see ALL PRODUCTS header

        When user selects men products 
        Then user able to see the men selected category

        When user selects any men product under the jeans category and adds it to cart
        Then user able to see the Added to cart successful message

        When user selects view cart 
        Then user able to see the product details in the cart 

        When user selects proceed to checkout 
        Then user able to see the address detils and selected product details and also verify place order button

        When user selects the place order button
        Then user should able to see the payment header section 

