Feature:Verify register Functionality

    Scenario:User should not able to login with existing email

        Given User is on the signup page
        When user enters the name and existing email and clicks on signup button
        Then User should see the Email Address already exist! 