

describe('Account page', () => {

  it('Account drop down list', () => {

    cy.visit('/')

    cy.contains('Account').click({force:true}) 
   
    cy.get('[class="sc-hEsumM gohFMj"]')

    cy.contains('Account Overview')
      .should('have.attr' , 'href' , '/en/accounts')

    cy.contains('Standard Account')
      .should('have.attr' , 'href' , '/en/accounts/standard')
    
    cy.contains('Standard Bonus Account')
      .should('have.attr' , 'href' , '/en/accounts/bonus')

    cy.contains('ECN Account')
      .should('have.attr' , 'href' , '/en/accounts/ecn')

    cy.contains('Account Funding')
      .should('have.attr' , 'href' , '/en/accounts/funding')

    cy.contains('Fund Withdrawal')
      .should('have.attr' , 'href' , '/en/accounts/withdrawal')
      
  })
  it('Account Overview page', () => { 

    cy.visit('/')

    cy.contains('Account').click({force:true}) 
   
    cy.get('[class="sc-hEsumM gohFMj"]')

    cy.contains('Account Overview').click()
      .should('have.attr' , 'href' , '/en/accounts')
    
    cy.get('#app > div.bg-black > div > section > div> div > div:nth-child(1) > div > div> a:nth-child(1)')
      .should('have.attr' , 'href' , '/en/login')
     cy.get('#app > div.bg-black > div.bg-black > section > div> div > div:nth-child(1) > div > div> a.mt-4.text-white')
      .should('have.attr' , 'href' , '/en/login')
      // .and('equal' , '/en/login')

    cy.get('#app > div.bg-black > div > section > div> div > div:nth-child(2) > div > div> a:nth-child(1)')
        .should('have.attr' , 'href' , '/en/login')
     cy.get('#app > div.bg-black > div.bg-black > section > div> div > div:nth-child(2) > div > div> a.mt-4.text-white')
       .should('have.attr' , 'href' , '/en/login')
  
    cy.get('#app > div.bg-black > div > section > div> div > div:nth-child(3) > div > div> a:nth-child(1)')
       .should('have.attr' , 'href' , '/en/login')
     cy.get('#app > div.bg-black > div.bg-black > section > div> div > div:nth-child(3) > div > div> a.mt-4.text-white')
      .should('have.attr' , 'href' , '/en/login')

    cy.get('#app > div.bg-black > div > section > div> div > div:nth-child(4) > div > div> a:nth-child(1)')
       .should('have.attr' , 'href' , '/en/login')
     cy.get('#app > div.bg-black > div.bg-black > section > div> div > div:nth-child(4) > div > div> a.mt-4.text-white')
      .should('have.attr' , 'href' , '/en/login')
  })  
  it('Standard Account page', () => { 

    cy.visit('/')

    cy.contains('Account').click({force:true}) 
   
    cy.get('[class="sc-hEsumM gohFMj"]')

    cy.contains('Standard Account').click()
      .should('have.attr' , 'href' , '/en/accounts/standard')
    
    cy.contains('Open Real Account')
     cy.get('#app > div.bg-black > div:nth-child(3) > section.bg-section-dark.py-5 > div > div.w-auto > div > div:nth-child(2) > a')
      .should('have.attr' , 'href' , '/en/wallet/fund')
  })
  it('Standard Bonus Account page', () => { 

    cy.visit('/')

    cy.contains('Account').click({force:true}) 
   
    cy.get('[class="sc-hEsumM gohFMj"]')

    cy.contains('Standard Bonus Account').click()
      .should('have.attr' , 'href' , '/en/accounts/bonus')
    
    cy.contains('Open Real Account')
     cy.get('#app > div.bg-black > div:nth-child(3) > section.bg-section-dark.py-5 > div > div.w-auto > div > div:nth-child(2) > a')
      .should('have.attr' , 'href' , '/en/wallet/fund')
  })
  it('ECN Account page', () => { 

    cy.visit('/')

    cy.contains('Account').click({force:true}) 
   
    cy.get('[class="sc-hEsumM gohFMj"]')

    cy.contains('ECN Account').click()
      .should('have.attr' , 'href' , '/en/accounts/ecn')
    
    cy.contains('Open Real Account')
     cy.get('#app > div.bg-black > div:nth-child(3) > section.bg-section-dark.py-5 > div > div.w-auto > div > div:nth-child(2) > a')
      .should('have.attr' , 'href' , '/en/wallet/fund')
  })
  it('Cent Account page', () => { 

    cy.visit('/')

    cy.contains('Account').click({force:true}) 
   
    cy.get('[class="sc-hEsumM gohFMj"]')

    cy.contains('Cent Account').click()
      .should('have.attr' , 'href' , '/en/accounts/cent')
    
    cy.contains('Open Real Account')
     cy.get('#app > div.bg-black > div:nth-child(3) > section.bg-section-dark.py-5 > div > div.w-auto > div > div:nth-child(2) > a')
      .should('have.attr' , 'href' , '/en/wallet/fund')
  })
  it('Account funding page', () => { 
  cy.visit('/')

  cy.contains('Account').click({force:true}) 
 
  cy.get('[class="sc-hEsumM gohFMj"]')

  cy.contains('Account Funding').click()
    .should('have.attr' , 'href' , '/en/accounts/funding')
  
  cy.contains('Deposit now')
   cy.get('#app > div.bg-black > div:nth-child(3) > section:nth-child(2) > div > div > div.row > div:nth-child(1) > div > a')
    .should('have.attr' , 'href' , '/en/wallet/fund')

  cy.contains('Deposit now')
   cy.get('#app > div.bg-black > div:nth-child(3) > section:nth-child(2) > div > div > div.row > div:nth-child(2) > div > a')
    .should('have.attr' , 'href' , '/en/wallet/fund')

  cy.contains('Deposit now')
   cy.get('#app > div.bg-black > div:nth-child(3) > section:nth-child(2) > div > div > div.row > div:nth-child(3) > div > a')
    .should('have.attr' , 'href' , '/en/wallet/fund')

  cy.contains('Deposit now')
   cy.get('#app > div.bg-black > div:nth-child(3) > section:nth-child(2) > div > div > div.row > div:nth-child(4) > div > a')
    .should('have.attr' , 'href' , '/en/wallet/fund')

  cy.contains('Deposit now')
    cy.get('#app > div.bg-black > div:nth-child(3) > section:nth-child(2) > div > div > div.row > div:nth-child(5) > div > a')
     .should('have.attr' , 'href' , '/en/wallet/fund')
  })
  it('Fund Withdrawal page', () => { 

    cy.visit('/')

    cy.contains('Account').click({force:true}) 
   
    cy.get('[class="sc-hEsumM gohFMj"]')

    cy.contains('Fund Withdrawal').click()
      .should('have.attr' , 'href' , '/en/accounts/withdrawal')
  })
})



    //cy.location('pathname').should('eq', '/en/login')

    // cy.contains('[href="/en/login"]', 'Sell')
    //   .click()

    // cy.visit('https://staging.iuxmarket.com/en/spread')

    // cy.contains('[href="/en/login"]', 'Sell')
    //   .click()


    // const functionToTalktoBuyBtn = (buyBtn) => {
    //   console.debug({ buyBtn })
    //   console.log({ buyBtn })
    //   cy.wrap(buyBtn).click()
    //   cy.location('pathname').should('eq', '/en/login'
    // )}
  
    // const functionToTalktoSellBtn = (sellBtn) => {
    //   console.debug({ sellBtn })
    //   console.log({ sellBtn })
    //   cy.wrap(sellBtn).click()
    //   cy.location('pathname').should('eq', '/en/login'
    // )}



// [0, 1, 2, 3, 4]
// [sellA, sellB, sell]
//function, each
//iteration
//continuous integration and continuous deployment (CI/CD)

