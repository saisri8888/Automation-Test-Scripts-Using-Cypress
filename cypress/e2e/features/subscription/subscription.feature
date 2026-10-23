Feature: Verify Subscription in Home Page Functionality

    Scenario: user can subscribe from home page
        
        Given User is on the Home page
        When User scrolls down to the footer and enters an email address
        Then Subscription success message should be displayed