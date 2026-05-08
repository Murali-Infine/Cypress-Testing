Cypress.Commands.add('allProducts', () => {
    cy.fixture('allProduct').then((data) => {
        Cypress.on('uncaught:exception', (err) => {
            console.log('ERROR CAUGHT:', err.message)
            if (err.message.includes('addEventListener')) {
                return false
            }
        })
        cy.contains('All Products', { timeout: 10000 }).click()
        cy.get('#addProductBtn', { timeout: 10000 }).click()
        cy.wait(2000)

        cy.get('body').then($body => {
            cy.log('productName count: ' + $body.find('#productName').length)
        })
       cy.get('#productName').click({force:true})
       //Script ongoing...
    })
})