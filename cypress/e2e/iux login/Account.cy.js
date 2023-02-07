
describe('Account function (Component test)', () => {

  it.only('(Verify account)', () => {
  
    cy.LoginToApplication()
    cy.wait(4000)
    
  
  })
  it('(Verify bank account)', () => {
  
    cy.LoginToApplication()
    cy.wait(4000)
  
  })

  it('Create account first time (Correct)', () => {
  
    cy.LoginToApplication()
    cy.wait(4000)
  
    cy.contains('Standard').click()
      .should('have.attr', 'href' , '/en/wallet/account')
      
    cy.contains('Create Account Now').click()
    cy.get('[class="ant-col ant-col-24"]').first()
      .should('have.value' , '')
    cy.get('[class="ant-col ant-col-24"]').eq(1)
      .should('have.value' , '')
    cy.get('[class="ant-col ant-col-24"]').eq(2)
      .should('have.text' , 'Standard')
        // .invoke('prop', 'disabled', false)
        // div.ant-col.ant-col-24
    cy.get('[class="ant-col ant-col-24"]').eq(3)
      .should('have.text' , 'Leverage').click()

    cy.get('[class="ant-select-item-option-content"]').first().check
    cy.contains('1:1')
    cy.get('[class="ant-select-item-option-content"]').eq(1).check
    cy.contains('1:20')
    cy.get('[class="ant-select-item-option-content"]').eq(2).check
    cy.contains('1:50')
    cy.get('[class="ant-select-item-option-content"]').eq(3).check
    cy.contains('1:100')
    cy.get('[class="ant-select-item-option-content"]').eq(4).check
    cy.contains('1:200')
    cy.get('[class="ant-select-item-option-content"]').eq(5).check
    cy.contains('1:500')
    cy.get('[class="ant-select-item-option-content"]').eq(6).check
    cy.contains('1:1000')
    cy.get('[class="ant-select-item-option-content"]').eq(7).check
    cy.contains('1:2000').click()

    cy.get('[id="password"]').type("Abcd1234")
    cy.get('[id="password_investor"]').type("Abcd4321")
    cy.contains('Confirm').click({force:true})
  })
  it('Create account first time (Incorrect)', () => {
  
    cy.LoginToApplication()
    cy.wait(4000)
  
    cy.contains('Standard').click()
      .should('have.attr', 'href' , '/en/wallet/account')
      
    cy.contains('Create Account Now').click()
    cy.get('[class="ant-col ant-col-24"]').first()
      .should('have.value' , '')
    cy.get('[class="ant-col ant-col-24"]').eq(1)
      .should('have.value' , '')
    cy.get('[class="ant-col ant-col-24"]').eq(2)
      .should('have.text' , 'Standard')
        // .invoke('prop', 'disabled', false)
        // div.ant-col.ant-col-24
    cy.get('[class="ant-col ant-col-24"]').eq(3)
      .should('have.text' , 'Leverage').click()

    cy.get('[class="ant-select-item-option-content"]').first().check
    cy.contains('1:1')
    cy.get('[class="ant-select-item-option-content"]').eq(1).check
    cy.contains('1:20')
    cy.get('[class="ant-select-item-option-content"]').eq(2).check
    cy.contains('1:50')
    cy.get('[class="ant-select-item-option-content"]').eq(3).check
    cy.contains('1:100')
    cy.get('[class="ant-select-item-option-content"]').eq(4).check
    cy.contains('1:200')
    cy.get('[class="ant-select-item-option-content"]').eq(5).check
    cy.contains('1:500')
    cy.get('[class="ant-select-item-option-content"]').eq(6).check
    cy.contains('1:1000')
    cy.get('[class="ant-select-item-option-content"]').eq(7).check
    cy.contains('1:2000').click()

    cy.get('[id="password"]').type("12341234")
      .should('have.text', '')
    cy.get('[id="password_investor"]').type("12344321")
      .should('have.text', '')
    cy.contains('Confirm').click({force:false})
  })
  it('Create account first time (Empty password)', () => {
  
    cy.LoginToApplication()
    cy.wait(4000)
  
    cy.contains('Standard').click()
      .should('have.attr', 'href' , '/en/wallet/account')
      
    cy.contains('Create Account Now').click()
    cy.get('[class="ant-col ant-col-24"]').first()
      .should('have.value' , '')
    cy.get('[class="ant-col ant-col-24"]').eq(1)
      .should('have.value' , '')
    cy.get('[class="ant-col ant-col-24"]').eq(2)
      .should('have.text' , 'Standard')
        // .invoke('prop', 'disabled', false)
        // div.ant-col.ant-col-24
    cy.get('[class="ant-col ant-col-24"]').eq(3)
      .should('have.text' , 'Leverage').click()

    cy.get('[class="ant-select-item-option-content"]').first().check
    cy.contains('1:1')
    cy.get('[class="ant-select-item-option-content"]').eq(1).check
    cy.contains('1:20')
    cy.get('[class="ant-select-item-option-content"]').eq(2).check
    cy.contains('1:50')
    cy.get('[class="ant-select-item-option-content"]').eq(3).check
    cy.contains('1:100')
    cy.get('[class="ant-select-item-option-content"]').eq(4).check
    cy.contains('1:200')
    cy.get('[class="ant-select-item-option-content"]').eq(5).check
    cy.contains('1:500')
    cy.get('[class="ant-select-item-option-content"]').eq(6).check
    cy.contains('1:1000')
    cy.get('[class="ant-select-item-option-content"]').eq(7).check
    cy.contains('1:2000').click()

    cy.get('[id="password"]').click()
      .should('have.text', '')
    cy.get('[id="password_investor"]').click()
      .should('have.text', '')
    cy.contains('Confirm').click({force:false})
  })

  it('(Check account detail)', () => {
  
    cy.LoginToApplication()
    cy.wait(4000)
  
  })
})
// cy.log('readonly')
// cy.get('#verify_user_phone')
//   .should('have.attr', 'readonly')