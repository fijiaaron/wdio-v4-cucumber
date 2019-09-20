#The question always is, what are we testing and how can we do it in the most efficient way.
#Here, the goal is to test the rendering of the data in our mobile app on a max of 2 properties aka page objects
#That will make sure that this works for all of the pages
#The second goal is to test that data is coming back correctly. These are API tests.
#They can be written as cucumber tests, but should not use the UI and wdio

#Helpful Resouces:
#1. BDD 101 from Andy Night: https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/

Feature: Are the Cleaning Values of the Settings page of a property working as expected
  @hilton @pseudocode
  Scenario: Cleaning Values page renders data correctly for small property
    Given the user opens the Hilton mobile app
    When the user opens the Cleaning Values setting of the Memphis property
    Then the page will display the correct room types

  @hilton @pseudocode
  Scenario: Cleaning Values page renders data correctly for large property
    Given the user opens the Hilton mobile app
    When the user opens the Cleaning Values setting of the New York property
    Then the page will display the correct room types
