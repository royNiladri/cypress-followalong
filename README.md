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
```js
cy.get('[data-cy="last-name-chars-left-count"]')
    .as('charsLeftSpan');
```

You can also use results and expect to write tests, but they tend to be more verbose. Also, the `.then` does not imply its a standard promise.
```js
cy.get('@charsLeftSpan')
    .then(span => {
        expect(span.text()).to.equal('15');
    });
```
Move common element aliasing to `beforeEach`. Also, we can move the base URL to `cypress.json` and use the path in tests.


## Acknowledgements
This repository is my follow along of the LinkedIn Learning course [End-to-End JavaScript Testing with Cypress.io](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io/) by [Shaun Wassell](https://www.linkedin.com/public-profile/in/shaun-wassell)