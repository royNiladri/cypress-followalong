describe('textbox with max characters', () => {
    it('displays appropriate remaining char count', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-last-name"]')
            .type('hello');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy="input-last-name"]')
            .type(' my friend');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');
    })

    it('prevents user from typing more characters than maxlength', () => {
        cy.visit('http://localhost:3000/example-3');
        const inputStr = 'some long string that should not fit';

        cy.get('[data-cy="input-last-name"]')
            .type(inputStr);

        cy.get('[data-cy="input-last-name"]')
            .should('have.attr', 'value', inputStr.substr(0, 15));

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');
    })
})