
describe('Account function (Component test)', () => {

  it('(Verify account success)', () => {

    cy.LoginToVerifyApp()

    cy.get('#verify_user_first_name')
      .should('contain.text', '')   // can be type new first name 
    cy.get('#verify_user_last_name')
      .should('contain.text', '')   // can be type new last name

    const idCardNumber = '12341234123456';
    cy.get('#verify_user_id_card_number')
      .type(idCardNumber)
      .should('have.value', idCardNumber.substring(0, 13))

    cy.get('#verify_user_job').click()
    cy.get('[class="ant-select-item-option-content"]')
      .should('contain', 'student')
      .and('contain', 'Government officer')
      .and('contain', 'entrepreneur')
      .and('contain', 'employee')
      .and('contain', 'other')

    cy.get('[class="ant-select-item-option-content"]').contains('other').click({ multiple: true })

    cy.get('#verify_user_other').invoke('show')
      .type('tester')

    cy.get('#verify_user_province').click() //can be instead check api
    cy.get('[class="ant-select-item-option-content"]').contains('กรุงเทพมหานคร').click({ multiple: true })

    cy.get('#verify_user_email')
      .should('contain.text', '')  // can't change email

    cy.get('#verify_user_prefix').click()
    cy.get('[class="ant-select-selection-item"]').should('contain', '+66')

    cy.get('#verify_user_phone')
      .type('951234567')
      .should('have.value', '951234567')

    cy.get('#verify_user_birthday').type('2022-11-01{enter}', { force: true })

    // cy.get('#ant-picker ant-picker-focused').then(input => {
    //   cy.wrap(input).click()
    //   cy.get('#ant-picker-cell-inner').contains('12').click()
    //   cy.wrap(input).invoke('prop', 'value').should('contain', '2022-11-12')
    // })
    cy.get('#verify_user_address').type('12345')
    cy.get('#verify_user_post').type('12345')

    // cy.contains(' Choose File.').click()
    // cy.contains(' Choose File.')
    // cy.document().selectFile('Currency.png', { action: 'drag-drop' })
    // .click().invoke('show')
    cy.get('[class="ant-upload"]')
      .attachFile('myfixture.json', { subjectType: 'drag-n-drop' });

  })
  it('Image upload form, can drag and drop image to upload', () => {
    const fileName = 'Currency.png'
    cy.LoginToVerifyApp()
    cy.get('[class="ant-upload"]')
    .attachFile(fileName, { subjectType: 'drag-n-drop' });
    cy.contains(fileName) 
  })
  it.only('Image upload button, can click to upload', () => {
    const fileName = 'Currency.png'
    cy.LoginToVerifyApp() 
    cy.get('input[type="file"]').attachFile(fileName)
    cy.contains(fileName) 
  })
  it('(OTP valification)', () => {

    cy.LoginToVerifyApp()

    cy.get('[class="ant-radio"]').click({ force: true })
    cy.get('[class="ant-modal-content"]').invoke('show')

  })
  it('(Already verify phone number)', () => {

  })

  it('Create account first time (Correct)', () => {

    cy.LoginToApplication()
    cy.wait(5000)

    cy.contains('Standard').click()
      .should('have.attr', 'href', '/en/wallet/account')

    cy.contains('Create Account Now').click()
    cy.get('[class="ant-col ant-col-24"]').first()
      .should('have.value', '')
    cy.get('[class="ant-col ant-col-24"]').eq(1)
      .should('have.value', '')
    cy.get('[class="ant-col ant-col-24"]').eq(2)
      .should('have.text', 'Standard')
    // .invoke('prop', 'disabled', false)
    // div.ant-col.ant-col-24
    cy.get('[class="ant-col ant-col-24"]').eq(3)
      .should('have.text', 'Leverage').click()
    
    //fetch api => provinces[]; [khonkaen, BKK, ...] 76 
    //provinces.map(() => {})
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
    cy.contains('Confirm').click({ force: true })
  })
  it('Create account first time (Incorrect)', () => {

    cy.LoginToApplication()
    cy.wait(4000)

    cy.contains('Standard').click()
      .should('have.attr', 'href', '/en/wallet/account')

    cy.contains('Create Account Now').click()
    cy.get('[class="ant-col ant-col-24"]').first()
      .should('have.value', '')
    cy.get('[class="ant-col ant-col-24"]').eq(1)
      .should('have.value', '')
    cy.get('[class="ant-col ant-col-24"]').eq(2)
      .should('have.text', 'Standard')
    // .invoke('prop', 'disabled', false)
    // div.ant-col.ant-col-24
    cy.get('[class="ant-col ant-col-24"]').eq(3)
      .should('have.text', 'Leverage').click()

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
    cy.contains('Confirm').click({ force: false })
  })
  it('Create account first time (Empty password)', () => {

    cy.LoginToApplication()
    cy.wait(4000)

    cy.contains('Standard').click()
      .should('have.attr', 'href', '/en/wallet/account')

    cy.contains('Create Account Now').click()
    cy.get('[class="ant-col ant-col-24"]').first()
      .should('have.value', '')
    cy.get('[class="ant-col ant-col-24"]').eq(1)
      .should('have.value', '')
    cy.get('[class="ant-col ant-col-24"]').eq(2)
      .should('have.text', 'Standard')
    // .invoke('prop', 'disabled', false)
    // div.ant-col.ant-col-24
    cy.get('[class="ant-col ant-col-24"]').eq(3)
      .should('have.text', 'Leverage').click()

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
    cy.contains('Confirm').click({ force: false })
  })

  it('(Check account detail)', () => {

    cy.LoginToApplication()
    cy.wait(4000)

  })
})
