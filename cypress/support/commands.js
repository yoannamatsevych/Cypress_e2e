// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('clickCard', (link) => { 
    cy.contains('.card, [class *="projectCard"]', link).click();
 })

 Cypress.Commands.add('selectDropdown', (locator, option) => {
    cy.get(locator).select(option)
   })
 /**
  * 
  * @param {*} a 
  * @param {*} b 
  * @returns 
  */
 export function add(a,b){
    return a + b
 }
 

 Cypress.Commands.add('checkOptionsAndValidateOthers', (optionToCheck, expectedText) => {
    cy.contains(optionToCheck).find('input').check().should('be.checked')

    expectedText.filter(option => option !== optionToCheck).forEach(uncheckedOption => {
        cy.contains(uncheckedOption).find('input').should('not.be.checked')
    })
} )
/**
 * Create a Cypress Custom Function called 'login'
 * 
 * This function will get 2 arg (email, name)
 * 
 * It will enter the user emailand first name on Focus section and click on the submit button
 */


/** */
Cypress.Commands.add('submitInfoOnFocusSection', (email, name) => {
    cy.get('[data-identifier ^= "Focus"] input').eq(0).type(email);
    cy.get('[data-identifier ^= "Focus"] input').eq(1).clear().type(name);
    cy.get('[data-identifier ^= "Focus"] button').click();

}

)

Cypress.Commands.add('login',  (username, password) => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login_btn').click();
})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

Cypress.Commands.add('logText', {prevSubject: true}, (subject, addOne, addTwo) => {
    const text = subject.text();
    cy.log(text);

    return cy.wrap(subject)
})

//Create a child function that validates the text of the web element

Cypress.Commands.add('haveText', { prevSubject: 'element' }, (subject, expectedText) => {
    // expect(subject.text()).to.equal(expectedText)
    cy.wrap(subject).should('have.text', expectedText)
  })

//

/**
 *  * Create a child custom command that will validate the attribute and the value of previous subject
 * 
 * NOTE: Function must be able handle, bith condition below
 * 
 * asserrtAttribute('target')
 * asserrtAttribute('target', '_blank')
 */
 
  
Cypress.Commands.add('assertAttribute', {prevSubject: true}, (subject, attribute, value = null) => {
   if(value === null){
    cy.wrap(subject).should('have.attr', attribute)
   } else{
    cy.wrap(subject).should('have.attr', attribute, value)
   }
})


//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })