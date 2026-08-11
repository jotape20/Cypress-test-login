Cypress.Commands.add('addToCart', () => {
    cy.get('@iten1')
        .click()
    cy.contains('Basket')
        .should('have.text', '1 Basket')
    })