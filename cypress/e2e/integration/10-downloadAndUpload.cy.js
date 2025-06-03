import path from 'path';

describe("File Download & File Upload", () => {
    beforeEach(() => {
      cy.clickCard("File Download & Upload");
    });

    const fileName = 'SampleText.txt';
    const downloadPath = path.join('cypress/downloads', fileName);

    it('File Download', () => {
        

      cy.log(downloadPath)

       cy.get('#file_download').click();

       cy.readFile(downloadPath);

    })


      /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "File Upload" card
   * Send the path of the file as keys to the "Choose File" input box
   * Click on the "UPLOAD" button
   * Validate the result message equals "You Uploaded 'SampleText.txt'"
   */
    it('File Upload', () => {
      cy.get('#file_upload').selectFile(downloadPath);

      //cy.get('#file_upload').selectFile(downloadPath, downloadPath);
      // cy.get('#file_upload').selectFile(downloadPath, {action: 'drag-drop'});
      cy.get('#file_submit').realClick();

      cy.get('#result').find('div')
      .should('have.text', `You uploaded ${fileName}`);
      //cy.get('#result').find('strong')
      //.should('have.text', 'SampleText.txt');
    })

})