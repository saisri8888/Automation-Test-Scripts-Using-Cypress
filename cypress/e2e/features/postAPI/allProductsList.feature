Feature: Verify Post All Products API

  Scenario: Verify error message for POST request

    Given User is ready to call Products API
    When User sends POST request
    Then Response code should be 405 and message should be displayed