Cypress.Commands.add('loginPage', () => {
    cy.contains('Login')
        .click()
    cy.url()
        .should('contains', '/login')
    cy.get('#exampleInputEmail').as('email')  
    cy.get('#exampleInputPassword').as('senha')  
})

Cypress.Commands.add('realizandoLogin', () => {
    cy.fixture('name').then((usuario) => {
    cy.get('@email')
        .type(usuario.usuario, {delay: 0})
    cy.get('@senha')
        .type(usuario.senha)
    cy.get('#btn_login')
        .click()
    cy.contains('Welcome back')  
        .should('be.visible') 
}) 
Cypress.Commands.add('loginInvalido', () =>{
    cy.fixture("name").then((invalido) => {
    cy.get('@email')
      .type(invalido.userInvalid)
     cy.get('@senha')
      .type(invalido.senhaInvalid)
    cy.get('#btn_login')
      .click()
    cy.get('[class="invalid-feedback invalid-email"]')   
      .should('be.visible')
    })
  })
})        
