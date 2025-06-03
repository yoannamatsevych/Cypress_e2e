/// <reference types="cypress"/>

describe('Assertions', () => {
    beforeEach(() => {
        cy.contains('.card', 'HTML Elements').click();
    })

    it('Practice', () => {
        cy.submitInfoOnFocusSection('y.matsevych@gmail.com', 'Yana');
    })

    it('Child Command', () => {
        cy.get('#register_button').textValidation('Register')
        cy.get('#register_button').logText().textValidation('Register')
        cy.get('#register_button').asserrtAttribute('id')
        cy.get('#register_button').asserrtAttribute('id', 'register_button');
    })

})