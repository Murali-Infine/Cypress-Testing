Cypress.Commands.add('inventoryManagement', () => {
    cy.fixture('allProduct').then((data) => {
        Cypress.on('uncaught:exception', (err) => {
            console.log('ERROR CAUGHT:', err.message)
            if (err.message.includes('addEventListener')) {
                return false
            }
        })
        cy.contains('All Products', { timeout: 10000 }).click()
        cy.get('#category-input', { timeout: 2000 }).click()
        cy.get('#category-dropdown')
            .should('be.visible')
            .contains('.custom-dropdown-item', data.class)
            .click()
        cy.get('#subcategory-input').click()
        cy.get('#subcategory-dropdown')
            .should('be.visible')
            .contains('.custom-dropdown-item', data.subClass)
            .click()
        cy.get('#vendor-filter-input').click()
        cy.get('#vendor-filter-dropdown').should('be.visible')
            .contains('.custom-dropdown-item', data.vendor).click()
        cy.get('#brand-input').click()
        cy.get('#brand-dropdown')
            .should('be.visible')
            .contains('.custom-dropdown-item', data.brand)
            .click({force:true})

    })
})