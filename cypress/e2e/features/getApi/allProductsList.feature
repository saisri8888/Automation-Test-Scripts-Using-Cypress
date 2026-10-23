Feature: Verify All Products List API

    Scenario: User Can able to see the ALL Products List

        Given User is ready to call Products API
        When User sends GET request
        Then Response code should be 200 and Products list should not be empty