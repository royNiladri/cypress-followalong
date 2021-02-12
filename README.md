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

## Common Interactions
- Double click
```js
cy.get('[data-cy="box-1-items-list"] > :nth-child(2)')
    .dblclick();
```
- Checkbox
```js
cy.get('[data-cy="box-2-checkboxes"] > :nth-child(1) input')
    .check();
```
- Dropdown selection
```js
cy.get('[data-cy="box-3-dropdown"]')
    .select('Option Three');
```
- Use trigger for more complicated interactions
```js
cy.get('[data-cy="box-4-items-list"] > :nth-child(2)')
    .trigger('mouseover');
```
For more details check out the [official docs](https://docs.cypress.io/guides/core-concepts/interacting-with-elements.html#Actionability).

## Assertions
Check out the list of assertions from [official docs](https://docs.cypress.io/guides/references/assertions.html#Common-Assertions)

## Automatic Retries
Cypress keeps retrying failing command (not test) till they pass or a timeout occurs (default at 4s). This resolves problems around most flaky tests.

## Debugging
Since it is asynchronous, putting debugger between cypress commands will not have desired effect. Long hand method:
```js
cy.get('[data-cy="box-4-items-list"] > :nth-child(2)')
    .trigger('mouseover')
    .then(() => {
        debugger;
    });
```
Shorthand:
```js
cy.get('[data-cy="box-4-items-list"] > :nth-child(2)')
    .trigger('mouseover')
    .debug();
```
This also sets some variables in the console for easy access, like the `subject`.

## Environment Variables
Check out [official docs](https://docs.cypress.io/guides/guides/environment-variables.html#Setting).
## Cypress Studio
Checkout the [Studio](https://docs.cypress.io/guides/core-concepts/cypress-studio.html#Adding-a-New-Test) feature to interactively add tests.
## Acknowledgements
This repository is my follow along of the LinkedIn Learning course [End-to-End JavaScript Testing with Cypress.io](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io/) by [Shaun Wassell](https://www.linkedin.com/public-profile/in/shaun-wassell)