
describe('Login Test', () => {
  it('passes', () => {
    // cy.visit('https://admin.dev.reliablesignsupply.com/login.html')
        cy.visit('https://admin.dev.reliablesignsupply.com/dashboard.html')
    // cy.get('#email').type('muralinithish17@gmail.com')
    // cy.get('#password').type('Murali@123')
    // cy.get('#loginButton').click({force:true})
    cy.contains('All Products').click()
    cy.get('#addProductBtn').click()
    cy.contains('button', '×').click()
  })
})