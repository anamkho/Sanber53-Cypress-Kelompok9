describe('Register Functionality', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  })
    it('Verify Success Regist', () => {
      cy.get('#firstname').type('Sanbercode53')
      cy.get('#lastname').type('Kelompok9')
      cy.get('#email_address').type('sanbercode533@gmail.com')
      cy.get('#password').type('Sanbercodeteam9')
      cy.get('#password-confirmation').type('Sanbercodeteam9')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('.message-success > div').should('contain.text','Thank you for registering with Main Website Store.')
    })
    it('Verify Failed Regist - Email not valid', () => {
      cy.get('#firstname').type('Sanbercode53')
      cy.get('#lastname').type('Kelompok9')
      cy.get('#email_address').type('sanbercodeteam9')
      cy.get('#password').type('Sanbercodeteam')
      cy.get('#password-confirmation').type('Sanbercodeteam')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('#email_address-error').should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com).')
    })
    it('Verify Failed Regist - Email already registered', () => {
      cy.get('#firstname').type('Sanbercode53')
      cy.get('#lastname').type('Kelompok9')
      cy.get('#email_address').type('sanbercodeteam9@gmail.com')
      cy.get('#password').type('Sanbercodeteam9')
      cy.get('#password-confirmation').type('Sanbercodeteam9')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('.message-error > div').should('contain.text','There is already an account with this email address. If you are sure that it is your email address,')
    })
    it('Verify Failed Regist - Password not unique', () => {
      cy.get('#firstname').type('Sanbercode53')
      cy.get('#lastname').type('Kelompok9')
      cy.get('#email_address').type('sanbercode53team9@gmail.com')
      cy.get('#password').type('sanbercode')
      cy.get('#password-confirmation').type('sanbercode')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('#password-error').should('contain.text','Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Verify Failed Regist - Password weak less than 8 character', () => {
      cy.get('#firstname').type('Sanbercode53')
      cy.get('#lastname').type('Kelompok9')
      cy.get('#email_address').type('sanbercode53team9@gmail.com')
      cy.get('#password').type('san')
      cy.get('#password-confirmation').type('san')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('#password-error').should('contain.text','Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    })
    it('Verify Failed Regist - Password confirmation not match', () => {
      cy.get('#firstname').type('Sanbercode53')
      cy.get('#lastname').type('Kelompok9')
      cy.get('#email_address').type('sanbercode2team9@gmail.com')
      cy.get('#password').type('Sanbercode9')
      cy.get('#password-confirmation').type('Sanbercode')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again.')
    })
  })