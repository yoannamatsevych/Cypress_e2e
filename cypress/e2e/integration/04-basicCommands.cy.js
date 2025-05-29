/// <reference types="cypress"/>

describe('Basic Commands', () => {
    beforeEach(() => {
        cy.contains('.card', 'HTML Elements').click();
    })

    it('Navigate to "Sign in" button', () => {
        cy.get('#register_button').click()
        cy.get('.mt-1.is-block').should('have.text', 'You clicked on “Register”');

        cy.get('#signin_button').click()
        cy.get('.mt-1.is-block').should('have.text', 'You clicked on “Sign in”');

        cy.title().should('eq', 'TechGlobal Training | HTML Elements');


    // cy.title().then((title) => {
    //   cy.log(title + ' the text of the title')
    //   cy.log(typeof title + ' data type of the title')
    // })

    // cy.get('.mt-1.is-block').then(($el) => {
    //   cy.log($el + ' this is the text of the web element')
    //   cy.log(typeof $el + ' this is the type')

    //   cy.log($el.text())
    //   cy.log(typeof $el.text())
    // })

    // // cy.get('.mt-1.is-block').should('have.property')
    })


    it("Checkbox & Radio Buttons", () => {
        // .check()
        // This assertion will not work, beacuse '#apple_check' targets <label> web element
        // and this element is not the input itself, it is not possible to get input informaation from it
        // cy.get('#apple_check').click().should('be.checked')
        /**
         * .check() can only be used against :checkbox and :radio
         * Our subject is a: <label id="apple_check" class="checkbox">...</label>
         */
        // cy.get('#apple_check').check()
        // cy.get('#checkbox_1').check()
    
        
        /**
         * 1. Check on the Apple checkbox button
         * 2. Then Validate its checked
         * 3. Uncheck the Apple checkbox button
         * 4. Validate its unchecked
         */

        cy.get('#checkbox_1')
        .check()
        .should('be.checked')
        .uncheck()
        .should('not.be.checked')

          /**
     * 1. Locate the "Java" radio button, and validate its not checked
     * 2. Select Java radio option
     * 3. Validate its checked.
     */

          cy.get('#radio_1_option_1')
          .should('not.be.checked')
          .check()
          .check()
          .should('be.checked')


          cy.get('#checkbox-button-group input').click({multiple:true});

          cy.get('#checkbox-button-group input').each(($el) => {
            cy.wrap($el).check();
          })

      });

      it('Text Input', () => {
        //.type('TechGlobal')
        //.clear()

          /**
     * Locate the text inputs, and send text inside the input,
     * Validate the text you send is inside the input
     * and clear it
     * Validate it is empty
     *
     * .should('have.value', 'value')
     * .should('be.empty')
     */

          const inputs = ['Tech', 'Global']

          const [first, last] = inputs;

          cy.get('[data-identifier="Text Inputs"] input').each(($el, index) => {
            cy.wrap($el)
            .type(inputs[index])
            .should('have.value', inputs[index])
            .clear()
            .should('be.empty')
          })


        cy.get('#text_input1').type('TechGlobal')
        .should('have.value', 'TechGlobal')
        .clear()
        .should('be.empty')

        cy.get('#text_input2').type('TechGlobal')
        .should('have.value', 'TechGlobal')
        .clear()
        .should('be.empty')
      })

      it('Date Inputs', () => {
            cy.get('#date_input1').type('01/01/2020{Enter}')
            cy.get('#date_input2').clear().type('01/01/2020{Esc}')

      })

      it('Dropdowns', () => {
        /*
        if you want to handle the dropdown that is created using <select> you MUST use SELECT method
        */

        cy.get('#company_dropdown1').select('Microsoft').should('have.value', 'Microsoft')

        cy.visit('https://www.techglobal-training.com/frontend/dropdowns');

        cy.get('#shipment_dropdown').click();

        cy.contains('[role="option"]', 'Pick up').click();
      })

})