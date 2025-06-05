import LoginPage from "../../pages/LoginPage";

describe("Login Page Test", () => {
  beforeEach(() => {
   // let username;
   // let password;
    cy.clickCard("Login Function");

    cy.fixture('example.json').then(function (data) {
        this.username = data.username; //global.username, globalThis.username
        this.password = data.password;
    })
  });

  const loginPage = new LoginPage();

  it("Login without POM", () => {
    cy.get("#username").type(Cypress.env("UI_USERNAME"));

    cy.get("#password").type(Cypress.env("UI_PASSWORD"));

    cy.get("#login_btn").click();

    cy.get("#success_lgn").should("be.visible");
  });

  it("Login with POM", function(){
    loginPage.userLogin(this.username, this.password);
    loginPage.getSuccessMessage().should("be.visible");
  });

  /**
   * 1. Navigate to Login Project Page
   * 2. Enter the wrong username and the password
   * 3. Validate error message is "Invalid Username entered!"
   */

  it('Login with POM - Negative', () => {
    loginPage.userLogin('John', 'Doe');
    loginPage.getErrorMessage().should('be.visible');
  })
});