import { faker, Faker } from "@faker-js/faker"

let abc


before((""), function () {
    cy.fixture('example').then( function (xyz) {
        abc = xyz
    })

})

Cypress.Commands.add("fillTheForm", function () {
        cy.clickElements(abc.inputFormSubmit)
        cy.insertValue(abc.nameField, 'Joseph Doe')
        cy.get(abc.emaiField).eq(1).type('joseph00@yopmail.com')
        cy.insertValue(abc.passwordField, 'joSEph09@')
        .should('have.attr', 'type', 'password')
        cy.insertValue(abc.companyField, 'Joseph and Friends')
        cy.insertValue(abc.websiteField, 'www.josephandfriends.com')
        cy.get(abc.countryOption).select('NG')
        cy.insertValue(abc.cityField, 'Lagos')
        cy.insertValue(abc.address1Field, 'Lekki Conservative')
        cy.insertValue(abc.address2Field, 'Yaba tech')
        cy.insertValue(abc.stateField, 'Lagos State')
        cy.insertValue(abc.zipcodeField, '150009')
        cy.clickElements(abc.submitButton)
})

Cypress.Commands.add("fillFormWithUniqueData", function () {
        cy.clickElements(abc.inputFormSubmit)
        cy.insertValue(abc.nameField, faker.person.fullName())
        cy.get(abc.emaiField).eq(1).type(faker.internet.email({provider: 'yopmail.com'}))
        cy.insertValue(abc.passwordField, faker.internet.password())
        .should('have.attr', 'type', 'password')
        cy.insertValue(abc.companyField, faker.company.name())
        cy.insertValue(abc.websiteField, faker.internet.domainWord())
        cy.get(abc.countryOption).select('NG')
        cy.insertValue(abc.cityField, faker.location.city())
        cy.insertValue(abc.address1Field, faker.location.streetAddress())
        cy.insertValue(abc.address2Field, faker.location.secondaryAddress())
        cy.insertValue(abc.stateField, faker.location.state())
        cy.insertValue(abc.zipcodeField, faker.location.zipCode())
        cy.insertValue(abc.submitButton)
})