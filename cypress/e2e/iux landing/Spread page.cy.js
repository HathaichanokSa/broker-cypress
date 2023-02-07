

describe('iux markets spread', () => {

  it('All Spread', () => {

    cy.visit('https://staging.iuxmarket.com/en')

    cy.viewport(1920, 1080)

    cy.contains('Spread')
      .click()

    cy.get('[href="/en/spread"]')
  })
  it.only('All Buy and sell btns', () => { 
    
    cy.visit('/')
    
    cy.contains('Spread')
      .click()

    // cy.log(cy.get('a:contains("Buy")'))

    // cy.get('a:contains("Buy")').should('not.be.visible')
    cy.wait (5000)

    cy.get('#app > div:nth-child(2) > div:nth-child(2) > div > div > a > div > div > div:nth-child(3) > div> div > a:nth-child(2)').each((buyBtn) => {
      cy.log(buyBtn)
      cy.wrap(buyBtn).should('have.attr', 'href', '/en/login')
    })
    // cy.wrap(buyBtn).should('have.attr', 'href', '/en/spread/symbol/analyze/AUDCAD')
    // cy.log(cy.get('a:contains("Sell")'))

    cy.get('a:contains("Sell")').each((sellBtn) => {
      cy.log(sellBtn)
      cy.wrap(sellBtn).should('have.attr', 'href', '/en/login')
    })
  })
  it('Currency Buy and sell btns', () => { 
    
    cy.visit('https://staging.iuxmarkets.com/en/spread/currency')
     
    cy.contains('Currency')
      .click()

    // cy.log(cy.get('a:contains("Buy")'))

    // cy.get('a:contains("Buy")').should('not.be.visible')
    cy.wait (4000)

    cy.get('a:contains("Buy")').each((buyBtn) => {
      cy.log(buyBtn)
      cy.wrap(buyBtn).should('have.attr', 'href', '/en/login')
    })

    cy.log(cy.get('a:contains("Sell")'))

    cy.get('a:contains("Sell")').each((sellBtn) => {
      cy.log(sellBtn)
      cy.wrap(sellBtn).should('have.attr', 'href', '/en/login')
    })
  })
  it('Crypto Buy and sell btns', () => { 
    
    cy.visit('https://staging.iuxmarkets.com/en/spread/crypto')
    
    cy.viewport(1920, 3000)
    
    cy.contains('Crypto')
      .click()

    // cy.log(cy.get('a:contains("Buy")'))

    // cy.get('a:contains("Buy")').should('not.be.visible')
    cy.wait (4000)

    cy.get('a:contains("Buy")').each((buyBtn) => {
      cy.log(buyBtn)
      cy.wrap(buyBtn).should('have.attr', 'href', '/en/login')
    })

    cy.log(cy.get('a:contains("Sell")'))

    cy.get('a:contains("Sell")').each((sellBtn) => {
      cy.log(sellBtn)
      cy.wrap(sellBtn).should('have.attr', 'href', '/en/login')
    })
  })
  it('Index Buy and sell btns', () => { 
    
    cy.visit('https://staging.iuxmarkets.com/en/spread/index')
    
    cy.viewport(1920, 3000)
    
    cy.contains('INDEX')
      .click()

    // cy.log(cy.get('a:contains("Buy")'))

    // cy.get('a:contains("Buy")').should('not.be.visible')
    cy.wait (4000)

    cy.get('a:contains("Buy")').each((buyBtn) => {
      cy.log(buyBtn)
      cy.wrap(buyBtn).should('have.attr', 'href', '/en/login')
    })

    cy.log(cy.get('a:contains("Sell")'))

    cy.get('a:contains("Sell")').each((sellBtn) => {
      cy.log(sellBtn)
      cy.wrap(sellBtn).should('have.attr', 'href', '/en/login')
    })
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

