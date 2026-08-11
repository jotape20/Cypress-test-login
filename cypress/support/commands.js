Cypress.Commands.add('loginPage', () => {
    cy.contains('Login')
        .click()
    cy.url()
        .should('contains', '/login')
    cy.get('#exampleInputEmail').as('email')  
    cy.get('#exampleInputPassword').as('senha')  
})

Cypress.Commands.add('realizandoLogin', () => {
    cy.fixture('Client').then((usuario) => {
    cy.get('@email')
        .type(usuario.user, {delay: 0})
    cy.get('@senha')
        .type(usuario.password)
    cy.get('#btn_login')
        .click()
    cy.contains('Welcome back')  
        .should('be.visible') 
}) 
Cypress.Commands.add('loginInvalido', () =>{
    cy.fixture('Client').then((invalido) => {
    cy.get('@email')
      .type(invalido.userInvalid)
     cy.get('@senha')
      .type(invalido.passInvalid)
    cy.get('#btn_login')
      .click()
    cy.get('[class="invalid-feedback invalid-email"]')   
      .should('be.visible')
    })
  })
})        
