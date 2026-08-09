describe('Login testes', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.title()
            .should('eq', 'Sweet Shop')            
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

})