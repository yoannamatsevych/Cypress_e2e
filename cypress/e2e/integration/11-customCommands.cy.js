/// <reference types="cypress"/>

describe('Assertions', () => {
    beforeEach(() => {
        cy.contains('.card', 'HTML Elements').click();
    })

    it('Parent command', () => {
        /* Parent Command */
    // cy.get()
    // cy.url()
    // cy.title()
    // cy.visit()
    // cy.window()
    // cy.on()

    cy.selectDropdown('#company_dropdown1', 'Apple')

    cy.submitInfoOnFocusSection('techglobal@tech.com', 'global')
    })

    it('Practice', () => {
        cy.submitInfoOnFocusSection('y.matsevych@gmail.com', 'Yana');
    })

    it('Child Command', () => {
    /* Child Commands */
    // .should()
    // .find()
    // All the action commands

    cy.get('#main_heading').logText()

    cy.get('#main_heading').haveText('HTML Elements')

    cy.get('#main_heading').logText().haveText('HTML Elements')

    cy.get('#main_heading').assertAttribute('id')
    cy.get('#main_heading').assertAttribute('id', 'main_heading')

        //cy.log(Cypress.env('UI_URL', 'https://qa.www.techglobal-training.com/'))
        cy.log(Cypress.env('UI_URL'))
    })

})