describe('Timeouts', () => {
    beforeEach(() => {
        cy.clickCard(
            'HTML Elements'
        )
    })

    it('Explicit and Inline Timeouts', () => {
        cy.get('#main_heading', {timeout: 10000})

        cy.get('#hello_paragraph', {timeout: 5000}).click({
            timeout: 10000, 
            multiple: true, 
            force: true})
})


// npx cypress run --config defaultCommandTimeout=10000
})


    it('Waits', () => {
        cy.visit(`${Cypress.env('UI_URL')}/frontend`)
        cy.clickCard('Waits')

        cy.get('#red').click();
        cy.get('#box', {timeout: 1000}).should('be.visible');
    })