Feature: Passing with TypeScript
  Scenario: Hello again
    Given I pass

  Scenario: Layout testing
    When I visit the "/" uri
    Then I take a snapshot for visual diffing