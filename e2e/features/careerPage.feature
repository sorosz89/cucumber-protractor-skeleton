Feature: EPAM job searching
  As a Job searcher
  I want to browser through EPAM Job offers by various criteria
  So I can find to best fitting offer for me

  Scenario Outline: Searching for a job - <PositionName>
    Given the career page is opened
    Then the logo should be visible
    
  # Your steps here...    

    Examples:
      | Country | City     | Department                | PositionName              |
      | Hungary | Debrecen | Software Test Engineering | Test Automation Engineer  |
