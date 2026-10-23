Feature: verify login Functionality

Scenario Outline: Users try to login with valid credentials

Given user is on the login page
When user enter the email "<email>" and password "<password>" and clicks on the login button
Then user should login successfully "<message>"

Examples:
        |email                          |password        |message          |
        |mpl1234@gmail.com              |s1234m          |message          |
        |upataruuuunnn@gmail.com        |nurrat          |message          |
        