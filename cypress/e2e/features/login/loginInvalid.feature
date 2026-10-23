Feature: Verify Login Functionality

Scenario Outline: User tries to login with invalid credentials

    Given user is on the login page
    When user enters email "<email>" and password "<password>"
    And user clicks on Login button
    Then user should see "<result>"

Examples:
    | email             | password | result |
    | mpl1234@gmail.com | wrong123 | Error  |
    | wrong@gmail.com   | s1234m   | Error  |
    | mpl12345@gmail.com | s1234m   | Error |