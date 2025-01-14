import { faker, Faker } from "@faker-js/faker"

let data


before((""), function () {
    cy.fixture('example').then( function (xyz) {
        data = xyz
    })

})


Cypress.Commands.add("shawdowDomTest", function () {
    cy.clickElements(data.shadowDomButton)
    cy.shadowElements().find(data.userName).type(faker.internet.username())
    cy.shadowElements().find(data.email)
    .type(faker.internet.email({provider: 'yopmail.com'}))
    cy.shadowElements().find(data.password).type("passWOrd332")
    cy.shadowElements().find(data.confirmPassword).type("passWOrd332")
    cy.shadowElements().contains('Submit').click()
    
})

Cypress.Commands.add("iframeTest", function () {
    cy.clickElements(data.iframeButton)
    cy.get("#iFrame1")
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
    .find('.rsw-ce').should('be.visible')
    .focus()
    .clear().type('This is the outcome of iframe test')
})