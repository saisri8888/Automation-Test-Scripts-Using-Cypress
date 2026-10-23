Feature: Verify Logout Functionality

    Scenario: User should able to logout

        Given user is on the login page
        When user enters the valid Email address and password and clicks on the Login button 
        Then user should see the Logout button
        When user clicks on the Logout button
        Then user should be navigated to the login page