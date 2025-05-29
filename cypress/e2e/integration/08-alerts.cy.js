describe("Handling Alerts", () => {
    beforeEach(() => {
      cy.clickCard("Alerts");
    });
  
    it("Handling the Warning Alert", () => {

        cy.on('window:alert', (str) => {
            console.log('My warning alert textcontent is:' + str)

            expect(str).to.equal('You are on TechGlobal Training application.')
        })
      
        cy.get('#warning_alert').click();
        cy.get('#confirmation_alert').click();
    })

    it("Handling the Confirmation Alert", () => {

        cy.get('#confirmation_alert').click();

        cy.on('window:confirm', (str) => {
            console.log(`My warning alert text content is: ${str}`)
            expect(str).to.equal('Would you like to stay on TechGlobal Training application?')
            return false;
        })
        
        cy.get('#action').should('have.text', 'You rejected the alert by clicking Cancel.')
    })

    it('Handling Prompt Alert', () => {

            // Clicks cancel for the prompt
    // cy.window().then((win) => {
    //   // Now this below is the window object itself
    //   // win.prompt, win.alert and more

    //   cy.stub(win, "prompt").returns(null);
    // });

    // Clicks cancel for the prompt
    // cy.window().then((win) => {
    //   cy.stub(win, "prompt");

    //   return false;
    // });

    // Clicks okay and sends the prompt through the dialog
    // cy.window().then((win) => {
    //   cy.stub(win, "prompt").returns('TechGlobal school message')
    // });
    

    // cy.window().then((win) => {
    //   cy.stub(win, "prompt").returns('')
    // });

    // cy.window().then((win) => {
    //   cy.stub(win, "prompt").callsFake((message) => {
    //     console.log(message)
    //     expect(message).to.equal('What would you like to say to TechGlobal?')

    //   // return false
    //   // return null
    //   })
    // });

    
        cy.window().then((win) => {
            //Now this below is the window object itself
            // win.prompt, win.alert and more

           // cy.stub(win, 'prompt');
            //return false;

            //cy.stub(win, 'prompt').returns(null)
           // cy.stub(win, 'prompt').returns('Techglobal school message')
           // cy.stub(win, 'prompt').returns('')

           cy.stub(win, 'prompt').callsFake((message) => {
            console.log(message);
            expect(message).to.equal('What would you like to say to TechGlobal?')
            return 'Techglobal school message'
           })
        })

        cy.get('#prompt_alert').click()
    })

})