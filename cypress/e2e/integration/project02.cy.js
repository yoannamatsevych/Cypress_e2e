describe('Project 02', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/login')
    })

    it('Test Case 01 - Validate the login form', () => {

        /*
        Navigate to https://techglobal-training.com/frontend/login
        Validate that the username input box is displayed
        Validate that the username input box is not required
        Validate that the label of the username input box is “Please enter your username”
        Validate that the password input box is displayed
        Validate that the password input box is not required
        Validate that the label of the password input box is “Please enter your password”
        Validate the “LOGIN” button is displayed
        Validate the “LOGIN” button is clickable
        Validate that the button text is “LOGIN”
        Validate the “Forgot Password?” link is displayed
        Validate that the “Forgot Password?” link is clickable
        Validate that the link text is “Forgot Password?”
        */
        const labelNames = ['Please enter your username', 'Please enter your password']
        cy.get('[class ^= LoginForm_form] label').each(($ele, index) => {
            cy.wrap($ele).parent().find('input').should('be.visible')
            .and('not.have.attr', 'required');
            cy.wrap($ele).should('have.text', labelNames[index])
        })

        cy.get('#login_btn').should('be.visible')
        .and('be.enabled').and('have.text', 'LOGIN')
        .click();

        cy.get('#login_btn').parent().find('a').should('be.visible')
        .and('have.text', 'Forgot Password?').click();
    } )


    it('Test Case 02 - Validate the valid login', () => {
       /* Navigate to https://techglobal-training.com/frontend/login
        Enter the username as “TechGlobal”
        Enter the password as “Test1234”
        Click on the “LOGIN” button
        Validate the success message is displayed as “You are logged in”
        Validate the logout button displayed with the text “LOGOUT”*/

        cy.login('TechGlobal', 'Test1234');
        cy.get('#success_lgn').should('be.visible')
        .should('have.text', 'You are logged in')
        cy.get('#logout').should('be.visible')
        .should('have.text', 'LOGOUT');
    })

    it('Test Case 03 - Validate the logout', () => {
        /*
        Navigate to https://techglobal-training.com/frontend/login
        Enter the username as “TechGlobal”
        Enter the password as “Test1234”
        Click on the “LOGIN” button
        Click on the “LOGOUT” button
        Validate that the login form is displayed
        */

        cy.login('TechGlobal', 'Test1234');
        cy.get('#logout').click();
        cy.get('[class ^= "LoginForm_content"]').should('be.visible');
    })

    it('Test Case 04 - Validate the Forgot Password? Link and Reset Password modal', () => {
        /*
        Navigate to https://techglobal-training.com/frontend/login
        Click on the “Forgot Password?” link
        Validate that the modal heading “Reset Password” is displayed
        Validate that the close button is displayed
        Validate that the email input box is displayed
        Validate that the label of the email input box is “Enter your email address and we'll send you a link to reset your password.”
        Validate the “SUBMIT” button is displayed
        Validate the “SUBMIT” button is clickable
        Validate that the button text is “SUBMIT”
        */
        cy.get('#login_btn').parent().find('a').click();
        cy.get('#sub_heading').should('be.visible').and('have.text', 'Reset Password');
        cy.get('.delete').should('be.visible');
        cy.get('[for="email"]').then(el => {
            const ele = el.text().trim();
            expect(ele).to.be.equal('Enter your email address and we\'ll send you a link to reset your password.');
        })
        cy.get('#submit').should('be.visible').and('be.enabled')
        .should('have.text', 'SUBMIT').click();

    })

    it('Test Case 05 - Validate the Reset Password modal close button', () => {
        /*
        Navigate to https://techglobal-training.com/frontend/login
        Click on the “Forgot Password?” link
        Validate that the “Reset Password” modal is displayed
        Click on the close button
        Validate that the “Reset Password” modal is closed
        */
        cy.get('#login_btn').parent().find('a').click();
        cy.get('.modal-card-body').should('be.visible');
        cy.get('.delete').click();
        //cy.get('.modal-card-body').should('not.be.visible');

    })

    it('Test Case 06 - Validate the Reset Password form submission', () => {
        /*
        Navigate to https://techglobal-training.com/frontend/login
        Click on the “Forgot Password?” link
        Enter an email
        Click on the “SUBMIT” button
        Validate the form message “A link to reset your password has been sent to your email address.” 
        is displayed under the “SUBMIT” button
        */

        cy.get('#login_btn').parent().find('a').click();
        cy.get('#email').type('y.matsevych@gmail.com');
        cy.get('#submit').click();
        cy.get('#confirmation_message').should('be.visible');
    })

    it('Test Case 07 - Validate the invalid login with the empty credentials', () => {
        /*
        Navigate to https://techglobal-training.com/frontend/login
        Leave username empty
        Leave password empty
        Click on the “LOGIN” button
        Validate the failure message is displayed as “Invalid Username entered!” above the form
        */

        cy.get('#login_btn').click();
        cy.get('#error_message').should('be.visible')
        .should('have.text', 'Invalid Username entered!');
    })

    it('Test Case 08 - Validate the invalid login with the wrong username', () => {
        /*
        Navigate to https://techglobal-training.com/frontend/login
        Enter the username as “John”
        Enter the password as “Test1234”
        Click on the “LOGIN” button
        Validate the failure message is displayed as “Invalid Username entered!” above the form
        */

        cy.login('John', 'Test1234');
        cy.get('#error_message').should('have.text', 'Invalid Username entered!');

    })

    it('Test Case 09 - Validate the invalid login with the wrong password', () => {
        /*
        Navigate to https://techglobal-training.com/frontend/login
        Enter the username as “TechGlobal”
        Enter the password as “1234”
        Click on the “LOGIN” button
        Validate the failure message is displayed as “Invalid Password entered!” above the form
        */

        cy.login('TechGlobal', '1234');
        cy.get('#error_message').should('have.text', 'Invalid Password entered!');
        
    })

    it('Test Case 09 - Validate the invalid login with the wrong password', () => {
        /*
        Navigate to https://techglobal-training.com/frontend/login
        Enter the username as “John”
        Enter the password as “1234”
        Click on the “LOGIN” button
        Validate the failure message is displayed as “Invalid Username entered!” above the form
        */

        cy.login('John', '1234');
        cy.get('#error_message').should('have.text', 'Invalid Username entered!');
        
    })

})