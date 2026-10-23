Feature: verify Login Functionality

    Scenario: User should able to login
    
        Given user is on the login page 
        When user enters the valid Email address and password
        Then user should see the Logout button

