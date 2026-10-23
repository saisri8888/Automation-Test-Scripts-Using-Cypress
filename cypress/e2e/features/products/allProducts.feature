Feature: Add products from multiple categories to cart

    Scenario: User adds one product each from Women, Men, and Kids categories to the cart


        Given user logged into the application

        When user clicks on the products Button
        Then user should able to see ALL PRODUCTS header

        When user selects women product
        Then user able to see the women selected category
        When user selects a women product and adds it to cart
        Then user able to see the Added to cart successful message

        When user navigates back to all products
        And user selects men products
        Then user able to see the men selected category
        When user selects a men product and adds it to cart
        Then user able to see the Added to cart successful message

        When user navigates back to all products
        And user selects kids products
        Then user able to see the kids selected category
        When user selects a kids product and adds it to cart
        Then user able to see the Added to cart successful message

        When user selects view cart
        Then user should see all three selected products in the cart

        When user selects proceed to checkout
        Then user able to see the address detils and selected product details and also verify place order button

        When user selects the place order button
        Then user should able to see the payment header section


