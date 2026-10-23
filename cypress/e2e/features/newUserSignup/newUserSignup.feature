Feature: new user signup page functionality

    Scenario: verify the user is able to signup
    
        Given the new user is on the signup page
        When the new user enters the name,email address and clicks on signup button 
        Then the user navigate to account creation page  
        
        When new user fill required details in the account creation page and clicking on the create account button 
        Then new user create their account successfully

        