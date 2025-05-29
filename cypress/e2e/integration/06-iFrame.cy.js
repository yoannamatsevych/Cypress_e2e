describe('IFrame', () => {
    beforeEach(() => {
        cy.contains('.card', 'IFrames').click();
    })

    it('IFrames', () => {
        cy.get('#form_frame')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .find('#first_name')
        .type('myName')

        /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Enter "John" into the first name input box
   * Enter "Doe" into the last name input box
   * Click on the "SUBMIT" button
   * Validate the result equals "You entered: John Doe"
   */

    })

    it('Practice01', () => {

        /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Enter "John" into the first name input box
   * Enter "Doe" into the last name input box
   * Click on the "SUBMIT" button
   * Validate the result equals "You entered: John Doe"
   */
        const arr = ['John', 'Doe'];


        cy.get('#form_frame')
        .its('0.contentDocument.body')
        .find('[id $= "name"]')
        .each(($el, index) => {
            cy.wrap($el).type(arr[index])
        })

        cy.get('#form_frame')
        .its('0.contentDocument.body')
        .find('#submit')
        .click();


        cy.get('#result')
        .should('have.text', `You entered: ${arr.join(' ')}`)

        cy.get('#form_frame').then($iframe => {
            const body = $iframe[0].contentDocument.body;
          
            cy.wrap(body).find('#first_name').type('John');
            cy.wrap(body).find('#last_name').type('Doe');
            cy.wrap(body).find('#submit').click();
          });

          cy.get('#result')
        .should('have.text', `You entered: ${arr.join(' ')}`)

          

})

})