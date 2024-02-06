import signinPage from "../../../support/pageObject/signinPage"
import productPage from "../../../support/pageObject/productPage"
import cartPage from "../../../support/pageObject/cartPage"
const cart = require('../../../fixtures/cart.json')


describe('Choose Product Functionality', () => {
    beforeEach(() => {
        cy.visit('')
      })
    it('verify view update cart - not login cart empty ', () => {
      cy.get('.showcart').click()
      cy.get('.subtitle').should('contain.text','You have no items in your shopping cart')
    })

    it.only('verify view update cart - not login add cart', () => {
      cy.get(productPage.inptPrd).type(cart["namaProduk"])
      cy.get(productPage.srcBtn).click()
      cy.get(productPage.prdCart).click()
      cy.get(productPage.inptClr).click()
      cy.get(productPage.inptSize).click()
      cy.get(productPage.inptQty).clear().type(cart["qty"])
      productPage.clickAddCart()
      cy.get(cartPage.shwCart).click({force: true})
      cy.get(cartPage.viewUpdtBtn).click({force: true})
      //cy.url().should('contain', 'https://magento.softwaretestingboard.com/checkout/cart/')
    })

    it('verify view update cart - user have login ', () => {
        cy.contains('Sign In').click()
        cy.get(signinPage.email).type(signInData["valid-data"]["valid-email"])
        cy.get(signinPage.pwd).type(signInData["valid-data"]["valid-pwd"])
        signinPage.clickSignIn()
        cy.url().should('contain','https://magento.softwaretestingboard.com/')
        cy.get(cartPage.shwCart).click()
        cy.get(':nth-child(7) > .secondary > .action > span').click({force: true})
        cy.url().should('contain','https://magento.softwaretestingboard.com/checkout/cart/')
        cy.get(cartPage.editItem).click()
        cy.get(cartPage.editSize).click()
        cy.get(cartPage.editClr).click()
        cartPage.clickUpdtCart()

    })

})