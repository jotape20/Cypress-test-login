describe('Login testes', () => {

    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/')
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