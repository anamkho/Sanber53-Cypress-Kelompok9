import editAddress from "../../../support/pageObject/editAdress"
const editAddressdata = require('../../../fixtures/editAddressdata.json')

describe('Edit Address', () => {
    beforeEach(() => {
      cy.visit('')
    })  

    it('Success Edit Address', () => {
        cy.contains('Sign In').click()
        cy.get(editAddress.email).type(editAddressdata["email"])
        cy.get(editAddress.pw).type(editAddressdata["pw"])
        editAddress.clickSignIn()
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#telephone').dblclick()
        cy.get('#telephone').type(editAddressdata["nohp"])
        cy.get('#street_1').dblclick()
        cy.get('#street_1').type(editAddressdata["jalan1"])
        cy.get('#street_2').dblclick()
        cy.get('#street_2').type(editAddressdata["jalan2"])
        cy.get('#street_3').dblclick()
        cy.get('#street_3').type(editAddressdata["jalan3"])
        cy.get('#city').dblclick()
        cy.get('#city').type(editAddressdata["kota"])
        cy.get('#region_id').select('Hawaii')
        cy.get('#zip').dblclick()
        cy.get('#zip').type(editAddressdata["pos"])
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click
    })
})