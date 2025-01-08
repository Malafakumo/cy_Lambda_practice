
describe('input form submit test', function () {

    it('Verify input form by filling all fields', function () { 
        cy.fillTheForm()
    })


    it('Verify input form with unique details', function () { 
        cy.fillFormWithUniqueData()
    })
})