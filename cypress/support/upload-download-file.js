import { faker } from "@faker-js/faker"

let abc


before((""), function () {
    cy.fixture('example').then( function (xyz) {
        abc = xyz
    })

})

Cypress.Commands.add("uploadFile", function () {
    cy.clickElements(abc.fileUploadButton)
    cy.intercept('https://www.lambdatest.com/selenium-playground/upload-file-demo')
    cy.get('input[type="file"]').should('exist').attachFile("image.png")
})

Cypress.Commands.add("downloadFile", function () {
    cy.clickElements(abc.downloadFile)
    cy.get(abc.generateButton).should('be.disabled')
    cy.insertValue(abc.enterDataBox, faker.company.buzzPhrase())
    cy.clickElements(abc.generateButton)
    cy.clickElements(abc.downloadButton)
})