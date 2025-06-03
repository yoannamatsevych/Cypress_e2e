describe("Keyboard & Mouse Actions", () => {
    beforeEach(() => {
      cy.clickCard("Actions");
    });

    it('Mouse actions using Cypress events', () => {
       // cy.get('#dropdown-testing').trigger('mouseover')
       cy.get('#dropdown-testing').realHover();
    })

    it('Keyboard Actions', () => {
        cy.visit('https://www.techglobal-training.com/frontend')
        cy.clickCard("HTML Elements");

        cy.get('#text_input1')
        .realClick()
        .realPress('KeyA')
        .realPress('Tab')
        .realPress('KeyB')
        .realPress('ArrowLeft')
        .realPress('KeyR')
        .realPress('{backspace}')
     })
     /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Actions" card
   * Verify that the user is redirected to the Actions page
   * Verify that the first three web elements are present and labeled as "Click on me", "Right-Click on me", and "Double-Click on me"
   * Perform a click action on the first web element labeled "Click on me"
   * Verify that a message appears next to the element stating, "You clicked on a button!"
   * Perform a right-click action on the second web element labeled "Right-Click on me"
   * Verify that the message appears next to the element stating, "You right-clicked on a button!"
   * Perform a double-click action on the third web element labeled "Double-Click on me"
   * Verify that the message appears next to the element stating, "You double-clicked on a button!"
   */

     
     it('Right Click, and Double Click', () => {

        cy.url().then((url) => {
            const actions = url.slice(url.lastIndexOf('/') + 1)

            cy.wrap(actions).should('eq', 'actions')
        })

        const buttonsLabels = ["Click on me", "Right-Click on me", "Double-Click on me"]
        const results = ['You clicked on a button!', 'You right-clicked on a button!', 'You double-clicked on a button!']
        cy.get('#click').realClick();
        cy.get('#right-click').rightclick();
        cy.get('#double-click').dblclick();
        cy.get('[class ^= "Actions_colmn"]').each(($el, index) => {
            if(index === 3) return;
            cy.wrap($el).find('button').should('be.visible')
            .should('have.text', buttonsLabels[index]);

            cy.wrap($el).find('p').should('be.visible')
            .should('have.text', results[index])

        })
     })

     it('Drag and Drop', () => {
            cy.get('#drag_element').drag('#drop_element');
        })

})