/// <reference types="cypress"/>

describe('Cypress Selectors', () => {

    it("Practice Web Elements using - get() and constains", () => {

        cy.get('.CardGrids_CardGrids__qDdyI').as('allCards')

        cy.get('@allCards')


        cy.get('.card').first();
        cy.get('.card').last();
        cy.get('.card').eq(8);

       // Locates the element by the  VISUAL text
        cy.contains('HTML Elements')

        //This one tries to find element with "HTML Elements" visual text inside the web element
        //using .card class name
        cy.contains('.card', 'HTML Elements')


        //This will do the same thing as above locatpr in more explicit way
        //it will look for card with HTML Element visible text only inside the class name
        cy.get('@allCards').contains('HTML Elements')
    })

    it('Practise web-elements using find()', () => {
        cy.contains('.card', 'HTML Elements').click();

        //This is an error, its because it is child method
        //cy.find()


        //constains method only targets the web element by Visible texton the UI
        cy.get('div').contains('Paragraph')

        cy.get('#radio-button-group').find('div')
        cy.get('#radio-button-group').find('h3')
    })

    it('Practice Web Elements using - Siblings, Perent and Child', () =>{
        cy.contains('.card', 'HTML Elements').click();

        //next()    => Locates the immediate next sibling of the web element
        cy.get('div').contains('Paragraph').next();

        //nextAll()    => Locates the immediate next siblings of the web element
        cy.get('div').contains('Paragraph').nextAll();

        //prev()    => Locates the immediate prev sibling of the web element
        cy.get('#testing_paragraph').prev();

        //prevAll()    => Locates the immediate prev siblings of the web element
        cy.get('#testing_paragraph').prevAll();

        //Locate the imediate perent of a web element
        cy.get('#testing_paragraph').parent();

        //Locate the all perents of a web element
        cy.get('#testing_paragraph').parents();

        cy.get('#testing_paragraph').parents('.HtmlElements_mainContainer__Fpn6M');

        // Locate the all perents until specific element
        cy.get('#testing_paragraph').parentsUntil('.SubPageLayout_subpageContentWrapper__bJOzr ');

        cy.get('.SubPageLayout_content__KWihT').children();

    })

})