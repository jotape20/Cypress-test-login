describe('Cart tests', () => {

    beforeEach(() =>{
        cy.visit('/')
        cy.title()
          .should('eq', 'Sweet Shop')   
        cy.get('[data-id="1"]')
          .as('iten1') 
    })

it('Adicionando item ao carrinho', () =>{
    cy.addToCart()
})    

it('Fazendo uma compra', () =>{
    cy.get('@iten1')
        .click()
    cy.contains('Basket')
        .should('have.text', '1 Basket')
        .click()
    cy.url()
        .should('contains', '/basket')
    cy.get('#name').type('joao')    
    cy.get(':nth-child(2) > #name').type('Viana')
    cy.fixture("Client").then((compra) => {
    cy.get('#email').type(compra.user , {delay: 0})
    cy.get('#address').type(compra.address)    
    cy.get('#zip').type(compra.zip)
    cy.get('#cc-name').type(compra.fullName)
    cy.get('#cc-number').type(compra.cardNumber)
    cy.get('#cc-expiration').type(compra.cardExpiration)
    cy.get('#cc-cvv').type(compra.cardCvv)
    cy.contains('Confirm Order').click()
    cy.contains('Thank you!').should('be.visible')
    })
})  

    
})