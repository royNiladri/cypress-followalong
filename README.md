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

## Selecting Elements
Element tags, names, CSS, id are bad (increasing better, but still bad) as any refactoring or style change can have an impact. Recommended way is to use `data-*` attribute. Some testing frameworks use `data-test-id`, while cypress recommends `data-cy`. I recommend `data-test-id` or something generic so that we wont have framework dependent nomenclature (relevant in the event we have to switch it in future).

Use aliasing for better readability of tests.
