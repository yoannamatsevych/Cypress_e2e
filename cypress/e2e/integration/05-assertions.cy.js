/// <reference types="cypress"/>

describe('Assertions', () => {
    beforeEach(() => {
        cy.contains('.card', 'HTML Elements').click();
    })

    it('Default Assertions', () => {
        cy
        //There is a default assertion
        //that this button must exist in the DOM before processing
        .get('#register_button')
        //since Cypress internally checks if the web element in the dom tree or not
        //we do not really need to do below assertion, but it recommanded to do it
        .should('be.visible')
        //before we issuing the click, the button must be 'actionable'
        //it can not be covered, disablr, or hidden from the view
        .click()


        //cy.get('[data-identifier="Focus & Blur & AutoFill"] > button').click();
    })

    it('Implicit Assertions', () => {
        cy.get('#main_heading').should('be.visible')

        //Using implisit assertions, assertions will not fail right away, instead
        //it waits specific amount of time and retries again and again
        //and if condition is still false, it fails 

        //this is wrong because web element can not be visible to String
        //cy.get('#main_heading').should('eq', 'HTML Elements')

        cy.get('#main_heading').should('have.text', 'HTML Elements')
        cy.get('#main_heading').should('contain.text', 'Elements')
        cy.get('#main_heading').should('include.text', 'Elements')
       
        //it will fail
        //cy.get('#main_heading').should('include', 'Elements')
        //cy.get('#main_heading').should('contain', 'Elements')

        cy.title().should('eq', 'TechGlobal Training | HTML Elements')
        /**
         * IMPORTANT NOTE
         * 
         * Chainers li eq, include, MUST NOT be used afainst the WEb ELEMENT, Web elements comes as a direct object
         * and you must use chainrs like 'have.text', 'include.text' as an assertion
         * 
         * @example
         * cy.get('#main_heading').should('eq', 'HTML Elements') => WRONG
         * cy.get('#main_heading').should('include', 'Elements') => WRONG
         * Why ? it's because when we use 'eq' chainers, we do not really specify what we want from the web element
         * 
         */

        cy.get('#main_heading').then(($el) => {
            cy.log(typeof $el)

            const ele = $el.text()
            cy.log(typeof ele)

            cy.wrap(ele).should('eq', 'HTML Elements')

        })

        cy.get('#main_heading').should('have.attr', 'id')
        cy.get('#main_heading').should('have.attr', 'id', 'main_heading')


        cy.get('#checkbox_1').should('have.attr', 'type', 'checkbox')

        //have.length - how many elements locator returns 
        cy.get('[data-identifier*="e"]').should('have.length', 7)
        cy.get('[data-identifier*="e"]').should('have.length.greaterThan', 6)
        cy.get('[data-identifier*="e"]').should('have.length.gte', 7)
        
        cy.get('[data-identifier*="e"]').should('have.length.lessThan', 8)
        cy.get('[data-identifier*="e"]').should('have.length.lte', 8)

        //be.enabled check if element is interactible
        cy.get('#checkbox_1').should('be.enabled')

        //have.value checks if input like text, textarea, email, password or dropdown has the given value
        cy.get('#text_input1').type('TechGlobal').should('have.value', 'TechGlobal')

        //be.checked checks if Input type of radiobotton
        cy.get('#checkbox_1').check().should('be.checked')

        cy.get('#main_heading').should('have.css', 'color')


         // Using and() you can do multiple assertions against the web element
    cy.get("#main_heading")
    .should("have.css", "color", "rgb(105, 105, 105)")
    .and("have.text", "HTML Elements")
    .and("be.visible");

  /**
   * 1. Navigate to "https://www.techglobal-training.com/frontend/dynamic-tables"
   * 2. Click on Add Product Button > Model Opens
   * 3. Close the model and validate model is not visible
   */

  cy.visit('https://www.techglobal-training.com/frontend/dynamic-tables');
  cy.get('#add_product_btn').click();
  cy.get('.modal').should('be.visible');
  cy.get('.delete').click();
  cy.get('.modal').should('not.exist')
    })



    it('Explicit Assertion', () => {
        expect(true).to.equal(true);

        expect('TechGlobal').to.equal('TechGlobal');

        cy.get('#main_heading').then(($el) => {
            //$el => is now JQuery Wrapped Object <element>
            cy.log($el);
            expect($el).to.eq($el);

            cy.log($el.text())
            cy.log($el.text().length)
            cy.log($el.length) // it will return how many elements is here - 1 in our situation 
            cy.log($el.attr('id'))

           expect($el.text()).to.eq('HTML Elements');

           cy.wrap($el.text()).should('eq', 'HTML Elements') // convert it back to cypress element
           cy.wrap($el).should('have.text', 'HTML Elements')

           expect($el).to.exist
           expect($el).to.be.visible

           expect($el).to.have.length(1)
           expect($el).to.have.length.above(0)



           // cy.wrap(el) ===  cy.get('#main_heading') - this is same

        })

/*
*NOTE : invoke() or without the invoke is preference. Has perfomance difference or benefit one over another 

Only advantage of retrieving the property of web element using .then() directly without invoke is
it gived user flexibility to access multiple properties
*//
        cy.get('#main_heading').invoke('text').then((text) => {
            // el - already text
            cy.log(typeof text);

            cy.log(text.toUpperCase().trim())

            expect(text).equal('HTML Elements')
            expect(text).to.equal('HTML Elements')
            expect(text).to.eq('HTML Elements')
            expect(text).to.equal('HTML Elements')
            expect(text).to.include('Elements')

        })
    })

    it('each() - interacting with multiple web elements', () => {
        const arr = ['Hello World!', 'I like automation testing!']

        for(let i = 0; i < arr.length; i++){
            cy.get('[data-identifier="Paragraphs"] > p')
            .eq(i).should('have.text', arr[i])
        }

        cy.get('[data-identifier="Paragraphs"] > p').each(($el, index) => {
            cy.log(index)
            cy.log($el.text())

            cy.wrap($el).should('have.text', arr[index])
            .and('be.visible')
            .and('have.length', 1)
        }) 


         /**
     * 1. On the Html Elements page
     * 2. From the "Headings" section, locate both "Programming Languages" and "Automation Tools" web elements
     * 3. Validate their texts with expected text
     * 4. Validate these elements are visible.
     */


         const headings = ["Programming Languages", "Automation Tools"]
        cy.get('[data-identifier="Headings"] > h4').each(($el, index) => {
            cy.log(index)
            cy.log($el.text())

            cy.wrap($el).should('be.visible')
            .and('have.text', headings[index])
        })

        
         /**
     * 1. On the Html Elements page
     * 2. From the "Checkboxes" section, locate all checkboxes
     * 3. Validate their texts with expected text
     * 4. Validate checkboxes are visible, and enabled
     */
        const checkboxLabel = ['Apple', 'Microsoft', 'Tesla']

        cy.get('[id *="checkbox-button"] div').each(($el, index) => {
            cy.log(index);
            cy.log($el.text());
            cy.wrap($el).find('label').should('have.text', checkboxLabel[index])
            cy.wrap($el).find('input').should('be.visible')
            .and('be.enabled')
            
        })
    })
        
       it('Assertion practices', () => {
          /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     *
     * 3. From the "Text Inputs" section
     * 4. Validate text input 1 and text input 2 is enabled
     * 5. Validate text input 1 and text input 2 is not required
     * 6. Enter your name and last name
     */

          const names = ['Yoanna', 'Matsevych']
        cy.get('[id ^= "text_input"]').each(($el, index) => {
            cy.wrap($el).type(names[index])
            .should('be.enabled')
            .and('not.have.attr', 'required')

            expect($el.prop('required')).to.be.false;



             /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     *
     * 3. From the "Date Inputs" section
     * 4. Validate date input 1 and date input 2 is enabled
     * 5. Validate date input 1 and date input 2 is is not required
     * 6. Enter dates for both date input 1 and date input 2
     * 7. Validate value is changed to given dates.
     */

             const dates = ['01/01/2002', '01/08/2022']

             cy.get('[id ^= "date_input"]').each(($el, index) => {
                cy.wrap($el).clear().type(dates[index] + '{Enter}')
                .should('have.value', dates[index])
                .should('be.enabled')
                .should('not.have.attr', 'required')
              
               
             })
    /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     *
     * 3. From the "Dropdowns" section
     * 4. Validate dropdown 1 and dropdown 2 is enabled
     * 6. Enter Microsoft for dropdown 1 and Apple for dropdown 2
     * 7. Validate options are selected
     */


    const dropdown = ['Microsoft', 'Apple']
    
    cy.get('[id ^= "company_dropdown"]').each(($el, index) => {
        cy.wrap($el).select(dropdown[index]).should('be.enabled')
        .should('have.value', dropdown[index])
    })
       })

    })

})