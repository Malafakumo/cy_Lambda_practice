
// Import commands.js using ES2015 syntax:
import './commands'

import './input-form'

import './upload-download-file'

import './shadow-dom'

beforeEach('', function () {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
  cy.visit('/')
  
})
