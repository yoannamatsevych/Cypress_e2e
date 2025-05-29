/// <reference types="cypress"/>


describe('Project01', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/form-elements')
    })
/*
Navigate to https://techglobal-training.com/frontend/form-elements
Validate the heading is “Contact Us”
Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
Validate the email is “info@techglobalschool.com"
Validate the phone number is “(224) 580-2150”
*/

it('Test case 01', () => {
    cy.get('.is-size-3').should('have.text', 'Contact Us');
    cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');
    cy.get('#email').should('have.text', 'info@techglobalschool.com');
    cy.get('#phone-number').should('have.text', '(224) 580-2150');
})

/*
Navigate to https://techglobal-training.com/frontend/form-elements
Validate that the Full name input box is displayed
Validate that the Full name input box is required
Validate that the label of the Full name input box is “Full name *”
Validate that the placeholder of the Full name input box is “Enter your full name”
*/

it('Test case 02', () => {

    cy.get('[placeholder *= "full name"]')
  .should('be.visible')
  .then($el => {
    expect($el).to.have.attr('placeholder', 'Enter your full name');

    // Check if required prop is true
    expect($el.prop('required')).to.be.true;
  });

    cy.get('[for = "name"]').should('have.text', 'Full name *');

})

/*
Navigate to https://techglobal-training.com/frontend/form-elements
Validate the label is “Gender *”
Validate that the Gender is required
Validate the options are “Female”, “Male” and “Prefer not to disclose”
Validate the options are clickable and not selected
Click on the “Male” option and validate it is selected while the others are not selected
Click on the “Female” option and validate it is selected while the others are not selected
*/

it('Test Case 03', () => {
    cy.get('.label').eq(1).should('have.text', 'Gender *');
    cy.get('.radio input').eq(0).should('have.attr', 'required');

    const options = ['Male', 'Female', 'Prefer not to disclose'];
    
    cy.get('[class ^= "radio"]').each(($el, index) => {
        cy.wrap($el).should('have.text', options[index]);
        cy.wrap($el).find('input').should('be.visible')
        .and('be.enabled').and('not.be.checked');

        if($el.text() === 'Male'){
            cy.wrap($el).find('input').check()
            .should('be.checked');
        }
        else if ($el.text() === 'Female'){
            cy.wrap($el).find('input').check()
            .should('be.checked');
        }
    })

    })


    it('Test case 04', () => {
        /*
        Navigate to https://techglobal-training.com/frontend/form-elements
        Validate that the Address input box is displayed
        Validate that the Address input box is not required
        Validate that the label of the Address input box is “Address”
        Validate that the placeholder of the Address input box is “Enter your address*”
        */

        cy.get('.field').eq(2).find('input')
        .should('have.attr', 'placeholder', 'Enter your address')
        .should('be.enabled').should('not.have.attr', 'required');

        cy.get('.field').eq(2).find('label')
        .should('have.text','Address')

    })

    it('Test case 05', () => {
     /*   Navigate to https://techglobal-training.com/frontend/form-elements
    Validate that the Email input box is displayed
    Validate that the Email input box is required
    Validate that the label of the Email input box is “Email *”
    Validate that the placeholder of the Email input box is “Enter your email”
    */
    cy.get('.field').eq(3).find('input')
    .should('have.attr', 'placeholder', 'Enter your email')
    .should('be.enabled').should('have.attr', 'required');

    cy.get('.field').eq(3).find('label')
        .should('have.text','Email *');

    })

    it('Test Case 06', () => {
        /*
    Navigate to https://techglobal-training.com/frontend/form-elements
    Validate that the Phone input box is displayed
    Validate that the Phone input box is not required
    Validate that the label of the Phone input box is “Phone”
    Validate that the placeholder of the Address input box is “Enter your phone number”
        */

    cy.get('.field').eq(4).find('input')
    .should('have.attr', 'placeholder', 'Enter your phone number')
    .should('be.enabled').should('not.have.attr', 'required');

    cy.get('.field').eq(4).find('label')
        .should('have.text','Phone')
    })

    it('Test Case 07', () => {
      /*  Navigate to https://techglobal-training.com/frontend/form-elements
    Validate that the Message text area is displayed
    Validate that the Message text area is not required
    Validate that the label of the Message text area is “Message”
    Validate that the placeholder of the Message text area is “Type your message here…”
    */
    cy.get('.field').eq(5).find('textarea')
    .should('have.attr', 'placeholder', 'Type your message here...')
    .should('be.enabled').should('not.have.attr', 'required');

    cy.get('.field').eq(5).find('label')
        .should('have.text','Message')

    })

    it('Test Case 08', () => {
        /*
        Navigate to https://techglobal-training.com/frontend/form-elements
    Validate the label is “I give my consent to be contacted.”
    Validate that the Consent checkbox is required
    Validate that the Consent checkbox is clickable
    Click on the “I give my consent to be contacted.” checkbox and validate it is selected
    Click on the “I give my consent to be contacted.” checkbox again and validate it is not selected
        */

    cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.')

    cy.get('.checkbox').find('input')
    .should('be.enabled')
    .check()
    .should('be.checked')
    .uncheck()
    .should('not.be.checked')
    .should('have.attr', 'required')
    
    })

    it('Test Case 09', () => {
        /*
        Navigate to https://techglobal-training.com/frontend/form-elements
    Validate the “SUBMIT” button is displayed
    Validate the “SUBMIT” button is clickable
    Validate that the button text is “SUBMIT”
        */
    cy.on('uncaught:exception', () => {
        return false
      })

    cy.get('[type = "submit"]')
    .should('be.visible')
    .should('be.enabled')
    .should('have.text', 'SUBMIT')
    .click();
    })

    it('Test Case 10', () => {
        /*
        Navigate to https://techglobal-training.com/frontend/form-elements
    Enter a first name
    Select a gender
    Enter an address
    Enter an email
    Enter a phone number
    Enter a message
    Select the “I give my consent to be contacted.” checkbox
    Click on the “SUBMIT” button
    Validate the form message “Thanks for submitting!” is displayed under the “SUBMIT” button
        */
    cy.on('uncaught:exception', () => {
        return false
      })

    const inputData = ['Yoanna Matsevych', 'Female', '420 74th St', 'yana.matsevych@outlook.com', '1234563521', 'N/A']

  /*  cy.get('.control').each(($el, index) => {
        if(index === 1) {
            cy.wrap($el).find('label').contains(inputData[index]).find('input').check();
        }
        else if(index === 6 || index === 7) return;
        else if(index === 5){
            cy.wrap($el).find('textarea').type(inputData[index])
        }
        else{
            cy.wrap($el).find('input').type(inputData[index])
        }
    })
*/

    cy.get('.control').then(($el) => {
       

        for(let index = 0; index < inputData.length; index++){
            const ele = $el.eq(index);
            if(index === 1) {
                cy.wrap(ele).find('label').contains(inputData[index]).find('input').check();
            }
            else if(index === 5){
                cy.wrap(ele).find('textarea').type(inputData[index])
            }
            else{
                cy.wrap(ele).find('input').type(inputData[index])
            }
        }
    })

    cy.get('.checkbox').find('input').check()
    .should('be.checked');

    cy.get('[type = "submit"]').click();
    cy.get('.mt-5').should('be.visible')
    .should('have.text', 'Thanks for submitting!')

    })
})



