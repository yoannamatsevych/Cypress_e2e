import BasePage from "./BasePage";

class TablePage extends BasePage {
    /* Locators */

    getStaticTableHeaders(){
        return cy.get('#static_table th')
       }


    /* Methods */
}

export default TablePage;