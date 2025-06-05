class BasePage {

    /* Locators */
    getLogo() {
      return cy.get('#logo')
    }
  
    getExercisesDropdown() {
      return cy.get('dropdown-testing')
    }
  
    getMainHeading() {
      return cy.get('#main_heading')
    }
  
    getMockInterviewsButton() {
      return cy.contains('div', 'Mock Interviews')
    }
  
    /* Methods */
    clickMockInterviewsButton() {
      this.getMockInterviewsButton().click()
    }
  
  }
  
  export default BasePage