describe('textbox with max characters', () => {
    beforeEach(() => {
        cy.visit('/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan');
        cy.get('[data-cy="input-last-name"]')
            .as('lastNameInput');
    })

    it('displays appropriate remaining char count', () => {
        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '15');

        cy.get('@lastNameInput')
            .type('hello');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@lastNameInput')
            .type(' my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');
    })

    it('prevents user from typing more characters than maxlength', () => {
        const inputStr = 'some long string that should not fit';

        cy.get('@lastNameInput')
            .type(inputStr);

        cy.get('@lastNameInput')
            .should('have.attr', 'value', inputStr.substr(0, 15));

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');
    })
})