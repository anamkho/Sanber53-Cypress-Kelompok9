class cartPage{
    email = '[name="login[username]"]'
    pwd = '[type="password"]'
    inptPrd = '.input-text'
    shwCart = '.showcart'
    viewUpdtBtn = '.action viewcart'
    editItem = ':nth-child(3) > .item-actions > td > .actions-toolbar > .action-edit'
    editSize = '#option-label-size-143-item-169'
    editClr = '#option-label-color-93-item-53'
 

    clickSignIn(){
        cy.get('#send2').click()
    }
    clickUpdtCart(){
        cy.get('#product-updatecart-button').click()
    }
    
}
export default new cartPage()

