
describe("Test the File Upload", function () {

    it("Verify uploading a pdf file", function () {
        cy.uploadFile()
    })

    it("Verify file download", function () {
        cy.downloadFile()
    })

})