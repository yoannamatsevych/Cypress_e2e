/// <reference types="cypress"/>


describe('CSS Locators', () => {

    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/html-elements')
    })

    it('Understanding CSS Syntax - Locating using tags', () => {
        cy.get('button')
        cy.get('h3');
        cy.get('li');
        cy.get('input');
    })

    it('Understanding CSS syntax - using class and id', () => {
        cy.get('#checkbox-button-group');
        cy.get('.checkbox');

        //class -  is-flex is-flex-direction-column
        cy.get('.is-flex')
        cy.get('.is-flex-direction-column')


       // cy.get('.Yoanna.Yahya.lesia')

      // cy.get('div.Yoanna#repro')

      cy.get('label.checkbox.is-inline#tesla_check');
    })

    it('Understanding CSS - Locating child, descrndant, adjacent web element', () => {

        //Targets direct children of a specific perent element
        cy.get('#checkbox-button-group > h3');
        cy.get('#checkbox-button-group > div > .checkbox > #checkbox_1');
        //Targets element nested anywhere within a specific element

        cy.get('#checkbox-button-group #checkbox_1');

        cy.get('body #microsoft_check');

        cy.get('div #unordered_list')


        //Targets an element immesiately after another specified element at the same level in the hierarchy.

        //Locates the immediate sibling of element
        cy.get('#ordered_list #ordered_list_item1 + li + li');

        //`Locates all the NEXT siblings of #ordered list
        cy.get('#ordered_list #ordered_list_item1 ~ li');

        //Combines multiple selectors into one rule set, allowing you to style
        //different elements with the same set of style

        cy.get('#register_button, #main_header_container')

    })

        it('Locating the web element using Attribute Selector', () =>{
            cy.get('#checkbox-button-group');
            cy.get('.checkbox');
            cy.get('[id = "checkbox-button-group"]')
            cy.get('[class = "checkbox"]')
            cy.get('[data-identifier="Paragraphs"]')

            //Wildcard to target ANY web element
            cy.get('#checkbox-button-group > *')
        })

        it('Dynamic elements', () => {

        //dynamic-elements
        /**
         * @example
         * 
         * <div id="box_asd12d"></>
         * 
         * constains => [id*="box_"]
         * start-with => [id^="box_"]
         * ends-with => [id$="box_"]
         */

        cy.visit('https://www.techglobal-training.com/frontend/dynamic-elements')

        cy.get('[id^="box_1_"]').should('be.visible');
        cy.get('[id^="box_2_"]').should('be.visible');

        cy.get('[id^="box_2_"], [id^="box_1_"]')

        cy.get('[id^="box_"]')

        })

        it('Targeting the web elements using -Psedo Classes', () => {
            cy.get('#ordered_list > li:first-child');
            cy.get('#ordered_list > li:last-child');
            cy.get('#ordered_list > li:nth-child(2)');
    

        cy.get('#microsoft_check input').check();
        cy.get('input:checked');

       // cy.get('button:disable');

        cy.get('input:not(#checkbox_1)');
        cy.get('input:not(input:checked)');

       // cy.get('.checkbox.where(#apple_check, #micrsoft_check)');

        })
})