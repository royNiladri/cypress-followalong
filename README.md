# Cypress Follow Along

Cypress is an end to end testing framework like Selenium, and works on a real browser instead of headless browser. Read more about [Cypress.io](https://www.cypress.io/).

## Setup
Depends on NodeJS.
```
npm install --save-dev cypress
npx cypress open 
```
Creates a bunch of example tests to get us familiar with the UI. The test files are at `cypress/integration/examples/*.spec.js`.
My tests are in the folder `cypress/integration/mytests`

`target-app` contains a simple react app to test.