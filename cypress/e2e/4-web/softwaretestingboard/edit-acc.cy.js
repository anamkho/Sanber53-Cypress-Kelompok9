import editAcc from "../../../support/pageObject/editAcc"
// const editAccData = require('../../../fixtures/')

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it.only('Edit Firstname', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type('jps92774@eqsaucege.com')
    cy.get(editAcc.password).type('Thisisbimil7')
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.firstName).clear().type('Cut')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.successMsg).should('contain.text','You saved the account information.')
  })
  it('Edit Lastname', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type('jps92774@eqsaucege.com')
    cy.get(editAcc.password).type('Thisisbimil7')
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.lastName).clear().type('Nai')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.successMsg).should('contain.text','You saved the account information.')
  })
  it('Edit Email', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type('patriots05@mailboxxx.net')
    cy.get(editAcc.password).type('Thisisbimil7')
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.changeEmailBtn).check()
    cy.get(editAcc.email).clear().type('gingham@khuonghung.com')
    cy.get(editAcc.currPass).type('Thisisbimil7')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.successMsg).should('contain.text','You saved the account information.')
  })
  it('Edit Invalid Email', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type('jps92774@eqsaucege.com')
    cy.get(editAcc.password).type('Thisisbimil7')
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.changeEmailBtn).check()
    cy.get(editAcc.email).clear().type('amigo@5')
    cy.get(editAcc.currPass).type('Thisisbimil7')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.invalidEmailMsg).should('contain.text','Please enter a valid email address.')
  })
  it('Edit Password', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type('fastt123@qqowl.club')
    cy.get(editAcc.password).type('Thisisbimil07')
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.changePassBtn).check()
    cy.get(editAcc.currPass).type('Thisisbimil07')
    cy.get(editAcc.newPass).type('Thisisbimil7')
    cy.get(editAcc.conPass).type('Thisisbimil7')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.successMsg).should('contain.text','You saved the account information.')
  })
  it('Edit Weak Password', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type('jps92774@eqsaucege.com')
    cy.get(editAcc.password).type('Thisisbimil7')
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.changePassBtn).check()
    cy.get(editAcc.currPass).type('Thisisbimil7')
    cy.get(editAcc.newPass).type('amigo')
    cy.get(editAcc.conPass).type('amigo')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.weakPassMsg).should('contain.text','Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
  })
  it('Edit Firstname Null', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type('jps92774@eqsaucege.com')
    cy.get(editAcc.password).type('Thisisbimil7')
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.firstName).clear().type(' ')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.firstnameNullMsg).should('contain.text','This is a required field.')
  })
  it('Edit Lastname Null', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type('jps92774@eqsaucege.com')
    cy.get(editAcc.password).type('Thisisbimil7')
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.lastName).clear().type(' ')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.lastnameNullMsg).should('contain.text','This is a required field.')
  })
  it('Edit Email Null', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type('jps92774@eqsaucege.com')
    cy.get(editAcc.password).type('Thisisbimil7')
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.changeEmailBtn).check()
    cy.get(editAcc.email).clear().type(' ')
    cy.get(editAcc.currPass).type(' ')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.emailNullMsg).should('contain.text','This is a required field.')
  })
  it('Edit Password Null', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type('jps92774@eqsaucege.com')
    cy.get(editAcc.password).type('Thisisbimil7')
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.changePassBtn).check()
    cy.get(editAcc.currPass).type('Thisisbimil7')
    cy.get(editAcc.newPass).type(' ')
    cy.get(editAcc.conPass).type(' ')
    cy.get(editAcc.passNullMsg).should('contain.text','This is a required field.')
  })
  it('Edit All Null', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type('jps92774@eqsaucege.com')
    cy.get(editAcc.password).type('Thisisbimil7')
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.firstName).clear().type(' ')
    cy.get(editAcc.lastName).clear().type(' ')
    cy.get(editAcc.changeEmailBtn).check()
    cy.get(editAcc.email).clear().type(' ')
    cy.get(editAcc.currPass).type(' ')
    cy.get(editAcc.changePassBtn).check()
    cy.get(editAcc.newPass).type(' ')
    cy.get(editAcc.conPass).type(' ')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.nullMsg).should('contain.text','This is a required field.')
  })
  it('Edit All Data', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type('themerg82@clonechatluong.net')
    cy.get(editAcc.password).type('Thisisbimil7')
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.firstName).clear().type('June')
    cy.get(editAcc.lastName).clear().type('Aera')
    cy.get(editAcc.changeEmailBtn).check()
    cy.get(editAcc.email).clear().type('aerajune@clonechatluong.net')
    cy.get(editAcc.currPass).type('Thisisbimil7')
    cy.get(editAcc.changePassBtn).check()
    cy.get(editAcc.newPass).type('Thisisbimil07')
    cy.get(editAcc.conPass).type('Thisisbimil07')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.successMsg).should('contain.text','You saved the account information.')
  })
})  
