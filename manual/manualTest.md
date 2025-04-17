# Manual Test
 Given the following form:
 ```html
    <label for="tentacles">Number of tentacles (10-100):</label>
    <input type="number" id="tentacles" name="tentacles"
       min="10" max="100">
    <button>Send</button>
  ```
Write all necessary test cases using Gherkin language to make sure the input field is working as expected; valid values will lead to a "Success" message, and invalid to an "Error" message

## Tests cases proposal

**Feature:** Tentacle input validation

As a user\
I want to verify tentacle input is working as expected\
So that only an acceptable amount of tentacles can be sent

**Scenario Outline:** Submit a tentacle amount and verify the response

    Given tentacles input is filled with "<value>" value
    When "Send" button is pressed
    Then the response "<response>" is displayed 

    Examples:
      | value             | response  | notes              |
      | 10                | Success   | Min boundary       |
      | 100               | Success   | Max boundary       |
      | 50                | Success   | Value in range     |
      | 9                 | Error     | Below min boundary |
      | 101               | Error     | Over max boundary  |
      |                   | Error     | Empty              |
      | somanytentacles   | Error     | Not a number test  |
      | 20.5              | Success   | Decimal value      |
      | -5                | Error     | Negative value     |