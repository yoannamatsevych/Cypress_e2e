import TablePage from "../../pages/TablePage";


describe('Static Tables', () => {
    beforeEach(() => {
      cy.clickCard('Tables')

      cy.fixture('staticTable.json').then(function (data) {
        this.staticTableHeaders = data.staticTableHeaders;
      })
    })
  
      

    const tablePage = new TablePage();

    /**
     * TEST CASE
     * 
     * Navigate to frontend page and click on the Tables card
     * Validate the headers of the Static Table are "Rank", "Company", "Employees", "Country"
     * 
     * NOTE: Use Page Object modal, and craete necessary page or pages
     * NOTE 2: Also, validate the table headers using Fixture
     */
    it('Verify the headers of the table', () => {
        tablePage.getStaticTableHeaders().each(function ($ele, index){
          expect($ele.text()).to.be.equal(this.staticTableHeaders[index])
        })
    })
  })