describe('Login Functionality', () => {
  it('Verify Failed Login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('anamkho')
    cy.get('[name="password"]').type('123456')
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})