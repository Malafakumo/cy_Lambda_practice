describe("Testing Shadow DOM", function () {

    it("Handing shadow DOM", function () {
        cy.shawdowDomTest()
    })

    it.only("Handing iframes", function () {
        cy.iframeTest()
    })
})

