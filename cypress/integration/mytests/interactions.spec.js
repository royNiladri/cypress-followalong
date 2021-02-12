describe('basic page interactions', () => {
    beforeEach(() => {
        cy.visit('/example-4');
    })

    it('sets header text on double-click', () => {
        cy.get('[data-cy="box-1-items-list"] > :nth-child(2)')
            .dblclick();

        cy.get('[data-cy="box-1-selected-name"]')
            .invoke('text')
            .should('equal', 'Option Two');
    })

    it('displays correct count of seletec textboxes', () => {
        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(1) input')
            .check();

        cy.get('[data-cy="box-2-selected-count"]')
            .invoke('text')
            .should('equal', '1');

        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(3) input')
            .check();

        cy.get('[data-cy="box-2-selected-count"]')
            .invoke('text')
            .should('equal', '2');
    })

    it('display name of selected item', () => {
        cy.get('[data-cy="box-3-dropdown"]')
            .select('Option Three');

        cy.get('[data-cy="box-3-selected-name"]')
            .invoke('text')
            .should('equal', 'Option Three');
    })

    it('should display last mouseovered element', () => {
        cy.get('[data-cy="box-4-items-list"] > :nth-child(2)')
            .trigger('mouseover');

            cy.get('[data-cy="box-4-selected-name"]')
            .invoke('text')
            .should('equal', 'Option Two');
    })
})