describe('textbox with max characters', () => {
    it('displays appropriate remaining char count', () => {
        cy.visit('http://localhost:3000/example-2');

        cy.get('span')
            .invoke('text')
            .should('equal', '15');

        cy.get('input')
            .type('hello');

        cy.get('span')
            .invoke('text')
            .should('equal', '10');

        cy.get('input')
            .type(' my friend');

        cy.get('span')
            .invoke('text')
            .should('equal', '0');
    })

    it('prevents user from typing more characters than maxlength', () => {
        cy.visit('http://localhost:3000/example-2');
        const inputStr = 'some long string that should not fit';

        cy.get('input')
            .type(inputStr);

        cy.get('input')
            .should('have.attr', 'value', inputStr.substr(0, 15));

        cy.get('span')
            .invoke('text')
            .should('equal', '0');
    })
})