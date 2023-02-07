
describe('Login iux web', () => {
  it.only('Successfull login', function () {

    cy.viewport(1920, 1080)

    cy.visit('https://staging.iuxmarkets.com/en')
   
    cy.contains('Login')
      .click()

    cy.get('[class="ant-input login"]')
      .type('aoeycisarnsom@gmail.com')
  
    cy.get('[id="password"]')
      .type('Test1234!')
    
    cy.contains('process') 
      .click()

    cy.url('https://staging.iuxmarkets.com/en/wallet')
      .should('include' , '/en/wallet')
    
  })
  it('Incorrect password', function () {

    cy.viewport(1920, 1080)

    cy.visit('https://staging.iuxmarkets.com/en')
   
    cy.contains('Login')
      .click()

    cy.get('[class="ant-input login"]')
      .type('aoeycisarnsom@gmail.com')
  
    cy.get('[id="password"]')
      .type('Test1212!')
    
    cy.contains('process').click()

    cy.url()
      .should('contain', 'https://staging.iuxmarkets.com/en/login')
    cy.get('[class="ant-message"]')
      .should('have.text', 'Wrong password or email')
  })
  it('Empty fields', function () {

    cy.viewport(1920, 1080)

    cy.visit('https://staging.iuxmarkets.com/en')
   
    cy.contains('Login')
      .click()
    
    cy.contains('process') 
      .click()

    cy.url()
      .should('contain', 'https://staging.iuxmarkets.com/en/login')
    cy.get('[class="ant-message"]')
      .should('have.text', 'Wrong password or email')
  })
  it('Credential Login', () => {

    cy.viewport(1920, 1080)
 
    cy.visit('https://staging.iuxmarkets.com/en')
    
    cy.contains('Login')
      .click()

   const credentials = {
     UserType1: {
      login: 'hathaicanok.sarnsom@outlook.com',
      password: 'Test1234!'
     },
     UserType2: {
      login: 'aoeycisarnsom@gmail.com',
      password: 'Test1234!'
     },
     UserType3: {
      login: 'testeriux@outlook.com',
      password: 'Test1234!'
     }
   };
   
   const logInTheUser = (credential) => {
    cy.get('[id="email"]').type(credential.login);
    cy.get('[id="password"]').type(credential.password);
    cy.get('process').click();
   }

  //  it.only('Checks Login', () => {
  //    beforeEach('Log in the user', () => {
  //     cy.visit('https://staging.iuxmarkets.com/en');
  //     cy.get('Login').click()

  //    logInUser(credentials.blocked);
  //     cy.get('[id="passwordError"]').should('contain', 'User blocked');
  //     cy.url().should('not.include', '/en/wallet/account');
  })

})
