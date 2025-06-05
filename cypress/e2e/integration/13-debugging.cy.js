  /**
     * Any debugging method we see here, make sure that you remove them until your debugging is done
     * So it wont stop or delay your execution when your tests are running in the CI/CD
     */

describe('Debugging in Cypress', () => {
    beforeEach(() => {
        cy.clickCard(
            'HTML Elements'
        )
    })

  
    it('cy.wait() - Hard Wait', () => {
        cy.get('#checkbox_1').check();

        cy.wait(10000);

        cy.get('#checkbox_2').check();
})


    it('cy.pause() - Debugging using pause', () => {
        cy.visit(`${Cypress.env('UI_URL')}/frontend`)
        cy.clickCard('Login Function')

        cy.get('#username').type(Cypress.env('UI_USERNAME'))

        cy.pause(10000)

        cy.get('#password').type(Cypress.env('UI_PASSWORD'))

        cy.get('#login_btn').click();

        cy.get('#success_lgn').should('be.visible')
    })

    it('cy.debug() - Debugging using pause', () => {
        cy.visit(`${Cypress.env('UI_URL')}/frontend`)
        cy.clickCard('Login Function')

        cy.get('#username').type(Cypress.env('UI_USERNAME'))
        cy.get('#password').type(Cypress.env('UI_PASSWORD'))

        cy.get('#login_btn').click();

        cy.debug();

        cy.get('#success_lgn').should('be.visible')
    })

    /**
     * Sometimes, the pause vutton of Sources
     */
})