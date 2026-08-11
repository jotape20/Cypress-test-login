describe('Login testes', () => {

    beforeEach(() => {
        cy.visit('/')

        cy.title()
          .should('eq', 'Sweet Shop') 

        cy.get('[data-id="1"]')
          .as('iten1')   
    })

it('Visitando a tela de Login', () => {
    cy.loginPage()
  })

it('Realizando Login', () => {
    cy.loginPage()
    cy.realizandoLogin()
  })

it('Login invalido', () => {
    cy.loginPage()
    cy.loginInvalido()
  })

  it.only('Validando itens no carrinho na página de Login', () => {
    cy.get('@iten1').click()
    cy.loginPage()
    cy.realizandoLogin()
    cy.get('#basketItems').should('be.visible')
  })

})
