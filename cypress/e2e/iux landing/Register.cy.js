
describe('iux markets register', () => {
  it('Choose Thailand', () => {

    cy.visit('/')
   
    cy.contains('Open an account')
      .click()

    cy.get('[class="ant-select-selector"]') // get the first react-select input
      .click({force:true}) 

    cy.get ('[class="ant-select-item-option-content"]').contains('Thailand').click()
   
    cy.get('[id="basic_firstname"]')
      .type('Testiux')
      .should('have.value', 'Testiux')
 
    cy.get('[id="basic_lastname"]')
      .type('Thai')
      .should('have.value', 'Thai')
 
    cy.get('[id="basic_email"]')
      .type('testeriux1@gmail.com')
      .should('have.value', 'testeriux1@gmail.com')
 
    cy.get('[id="basic_password"]')
      .type('Test1234!')
      .should('have.value', 'Test1234!')
 
    cy.get('[id="basic_confirmPassword"]')
      .type('Test1234!')
      .should('have.value', 'Test1234!')

    // cy.get('[type="submit"]')
    //   .should
  })
  it('Choose Malaysia', () => {

   cy.visit('/')
   
   cy.contains('Open an account')
     .click()

   cy.get('[class="ant-select-selector"]') // get the first react-select input
     .click({force:true}) 

   cy.get ('[class="ant-select-item-option-content"]').contains('Malaysia').click({multiple:true})
   
   cy.get('[id="basic_firstname"]')
     .type('Testiux')
     .should('have.value', 'Testiux')

   cy.get('[id="basic_lastname"]')
     .type('KL')
     .should('have.value', 'KL')

   cy.get('[id="basic_email"]')
     .type('testeriux1@gmail.com')
     .should('have.value', 'testeriux1@gmail.com')

   cy.get('[id="basic_password"]')
     .type('Test1234!')
     .should('have.value', 'Test1234!')

   cy.get('[id="basic_confirmPassword"]')
     .type('Test1234!')
     .should('have.value', 'Test1234!')
  })
  it('Choose Laos', () => {
 
    cy.visit('/')
    
    cy.contains('Open an account')
      .click()
 
    cy.get('[class="ant-select-selector"]') // get the first react-select input
      .click({force:true}) 
 
    cy.get ('[class="ant-select-item-option-content"]').contains('Laos').click({multiple:true})
    
    cy.get('[id="basic_firstname"]')
      .type('Testiux')
      .should('have.value', 'Testiux')
 
    cy.get('[id="basic_lastname"]')
      .type('Vangvien')
      .should('have.value', 'Vangvien')
 
    cy.get('[id="basic_email"]')
      .type('testeriux1@gmail.com')
      .should('have.value', 'testeriux1@gmail.com')
 
    cy.get('[id="basic_password"]')
      .type('Test1234!')
      .should('have.value', 'Test1234!')
 
    cy.get('[id="basic_confirmPassword"]')
      .type('Test1234!')
      .should('have.value', 'Test1234!')
  })
  it('Choose Indonesia', () => {
 
    cy.visit('/')
    
    cy.contains('Open an account')
      .click()
 
    cy.get('[class="ant-select-selector"]') // get the first react-select input
      .click({force:true}) 
 
    cy.get ('[class="ant-select-item-option-content"]').contains('Indonesia').click({multiple:true})
    
    cy.get('[id="basic_firstname"]')
      .type('Testiux')
      .should('have.value', 'Testiux')
 
    cy.get('[id="basic_lastname"]')
      .type('Bali')
      .should('have.value', 'Bali')
 
    cy.get('[id="basic_email"]')
      .type('testeriux1@gmail.com')
      .should('have.value', 'testeriux1@gmail.com')
 
    cy.get('[id="basic_password"]')
      .type('Test1234!')
      .should('have.value', 'Test1234!')
 
    cy.get('[id="basic_confirmPassword"]')
      .type('Test1234!')
      .should('have.value', 'Test1234!')
  })
  it('Empty field: type and delete , Password do not match', () => {

    cy.visit('/')
    
    cy.contains('Open an account')
      .click()
    
    cy.get('[id="basic_firstname"]')
      .type('Testiux').clear()
      .should('be.visible')
    cy.get('[class="ant-form-item-explain"]')
      .should('have.text' , 'Please enter valuePlease enter only characters')
 
    cy.get('[id="basic_lastname"]')
      .type('Bali').clear()
      .should('be.visible')
    cy.get('#basic > div:nth-child(3) > div> div.ant-form-item-explain > div')
      .should('have.text' , 'Please enter valuePlease enter only characters')
    
    cy.get('[id="basic_email"]')
      .type('testeriux1@gmail.com').clear()
      .should('be.visible')
    cy.get('#basic > div:nth-child(4) > div> div.ant-form-item-explain > div')
    .should('have.text' , 'Please enter value')
 
    cy.get('[id="basic_password"]')
      .type('Test1234!').clear()
      .should('be.visible')
    cy.get('#basic > div:nth-child(5) > div > div.ant-form-item-explain > div:nth-child(1)')
      .should('have.text' , 'Please enter value')
    cy.contains('Set password must have uppercase and lowercase letters, special characters and numbers , minimum 8 characters')
      .should('have.text' , 'Set password must have uppercase and lowercase letters, special characters and numbers , minimum 8 characters')
   
    cy.get('[id="basic_confirmPassword"]')
      .type('Test1234!').clear()
      .should('be.visible') 
    cy.get('#basic > div:nth-child(6) > div> div.ant-form-item-explain > div:nth-child(1)')
      .should('have.text' , 'Please enter value')
    cy.contains('Set password must have uppercase and lowercase letters, special characters and numbers , minimum 8 characters')
      .should('have.text' , 'Set password must have uppercase and lowercase letters, special characters and numbers , minimum 8 characters')
  
    cy.get('[id="basic_password"]')
      .type('Test1234!')
    cy.get('[id="basic_confirmPassword"]')
      .type('Test1234#')
    cy.get('#basic > div:nth-child(6) > div> div.ant-form-item-explain > div')
      .should('have.text' , 'The two passwords that you entered do not match!')

    cy.get('[type="checkbox"]').check()
    cy.get('[type="checkbox"]').uncheck()
    cy.get('#basic > div:nth-child(7) > div > div.ant-form-item-explain > div')
      .should('have.text' , 'Please accept the terms and conditions')

  })
})


