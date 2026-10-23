Feature: Verify Contact Us Form Functionality

    Scenario: User should submit the ContactUs form Successfully

        Given User launches the application
        When User Clicks on the Contact Us Button 
        Then User should able to see the GET IN TOUCH text
        When User enters the name, email, subject, message and upload file  
        And  clicks on the Submit button and Ok button 
        Then User should able to see the successful message 
        And Clicks on the home button and navigate to the home page