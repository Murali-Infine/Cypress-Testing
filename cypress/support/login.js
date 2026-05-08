Cypress.Commands.add('loginTest', () => {
  const user = Cypress.env('EMAIL')
  const password = Cypress.env('PASSWORD')
  cy.visit('https://admin.dev.reliablesignsupply.com/login.html')
  cy.log(user)
  cy.get('#email').type(user)
  cy.get('#password').type(password)
  cy.get('#loginButton').click({ force: true })
})