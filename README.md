# Brite Challenge
Brite Payments - QA Engineer- Challenge
- [@daniperezespejo](https://www.github.com/DaniPerezEspejo)

## Challenge sections

### Frontend test cases
#### General notes
Spec files can be found in cypress/e2e/frontend folder.\
Additional code is located following page structure in cypress/support/pages folder, along with the usual commands.js and e2e.js cypress files. It has been documented, although depending on usage / company good practices, extra comments and documentation in code could be removed.

#### Launching tests
Launch using default configuration:
```javascript
  npm run cy:open
```
Launch selecting environment (in order to illustrate how this project would work with several environments):
```javascript
  npm run cy:open:prod
```

---

### Backend test cases
#### General notes
Spec files can be found in cypress/e2e/backend folder.\
Additional code is located in cypress/support/endpoints folder, along with the usual commands.js and e2e.js cypress files. It has been documented, although depending on usage / company good practices, extra comments and documentation in code could be removed.
#### Request vs Intercept
For these tests, cy.request() has been used as we are directly invoking the endpoint. It's worth to notice that, in more frontend e2e scenarios in which additional api calls checks needs to be performed, cy.intercept() would have been my preferred option.
#### Fixture notes
Endpoints path are retrieved from a fixture json file, located in cypress/fixtures folder. This has been done to showcase scenarios in which the endpoint path might change. Using a fixture file will make a single source of truth, avoiding several changes on specs and/or code.
#### Launching tests
Same instructions as in frontend tests, including the environment optional parameter.

---

### Manual test case
#### General notes
MD file can be found in manual folder.\
Scenario Outline was selected for this exercise as we have multiple similar entries.\
Please notice we have an unnecesary non used column (notes) that I added just to give a little bit of context to the scenario.

---

### Bug Report
MD file can be found in bug folder.\
A fake screenshot was attached just to illustrate some attachments on the ticket bug report.\
Depending on the company templates or ticketing system used (JIRA, etc...) additional fields could be added.

---
### Final notes
In addition, ESLint and Prettier have been added to the project. Scripts can be found in package.json file.