

describe('Markets page', () => {

  it('Markets drop down list', () => {

    cy.visit('/')

    cy.contains('Markets').click({force:true}) 
   
    cy.get('[class="sc-hEsumM gohFMj"]')

    cy.contains('Forex')
      .should('have.attr' , 'href' , '/null/market')

    cy.contains('Futures')
      .should('have.attr' , 'href' , '/null/market/futures')

    cy.contains('Indices')
      .should('have.attr' , 'href' , '/null/market/indices')

    cy.contains('Shares')
      .should('have.attr' , 'href' , '/null/market/sharess')

    cy.contains('Metals')
      .should('have.attr' , 'href' , '/null/market/metals')

    cy.contains('Energies')
      .should('have.attr' , 'href' , '/null/market/energies')
  })
  it('Markets when click into page', () => { 

    cy.visit('/')

    cy.contains('Markets').click({force:true}) 
   
    cy.get('[class="sc-hEsumM gohFMj"]')

    cy.contains('Forex').click()
      .should('have.attr' , 'href' , '/null/market')

    cy.contains('Futures trading').click()
      .should('have.attr' , 'href' , '/en/market/futures')

    cy.contains('Spot indices trading').click()
      .should('have.attr' , 'href' , '/en/market/indices')
    
    cy.contains('Share & Stock trading').click()
      .should('have.attr' , 'href' , '/en/market/sharess')

    cy.contains('Precious metals trading').click()
      .should('have.attr' , 'href' , '/en/market/metals')
    
    cy.contains('Trade CFDs on Energies').click()
      .should('have.attr' , 'href' , '/en/market/energies')

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

