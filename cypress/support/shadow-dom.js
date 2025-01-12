import { faker, Faker } from "@faker-js/faker"

let data


before((""), function () {
    cy.fixture('example').then( function (xyz) {
        data = xyz
    })

})


Cypress.Commands.add("shawdowDomTest", function () {
    cy.get("a[href*='/shadow-dom']").click()
    cy.shadowElements().find(data.userName).type(faker.internet.username())
    cy.shadowElements().find(data.email)
    .type(faker.internet.email({provider: 'yopmail.com'}))
    cy.shadowElements().find(data.password).type("passWOrd332")
    cy.shadowElements().find(data.confirmPassword).type("passWOrd332")
    cy.shadowElements().contains('Submit').click()
    
})