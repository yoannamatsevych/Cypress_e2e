/// <reference types="cypress"/>

// This is describe() test block that holds group of tests
describe('My First Tests', () => {

//This is the test block "it()" that holds individual test
it('Test 2', () => {
    cy.log('TechGlobal 2')
})

it('Test 3', () => {
    cy.log('TechGlobal 3')
})

it('Visit TechGlobal training app homepage', () => {
    cy.visit('https://www.techglobal-training.com')

    cy.reload()

    cy.visit('https://www.techglobal-training.com/frontend')

    cy.go(-1)

    cy.go(1)

    // vypress command does not return anything, so we can not assign something to the variable
    cy.title().should('eq', 'TechGlobal Training | Frontend Practice')

    cy.url().should('contain', 'https://www.techglobal-training.com/frontend')
})


    it('My First Test', () => {
        //expect(true).to.equal(false);
        cy.visit('https://www.techglobal-training.com/');
        cy.get('#logo').click().should('be.visible')
    })
})