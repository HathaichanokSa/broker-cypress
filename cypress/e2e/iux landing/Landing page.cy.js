

describe('iux markets landing page', () => {

  it('START WITH $30 FREE', () => {

    cy.visit('/')

    cy.contains('START WITH $30 FREE')
      .click()
    cy.location('href').should('include', '/en/register')
  })
  it('assert buy and sell symbols', () => {

    cy.visit('/')

    // cy.log(cy.get('a:contains("Buy")'))
    // cy.get('a:contains("Buy")').should('not.be.visible')
    cy.log(cy.get('a:contains("Buy")'))

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
  it('IOS and Android link for mobile app', () => {
    cy.visit('/')
  
    cy.get('#app > div:nth-child(2) > section:nth-child(8) > div> div.text-white.fs-16.text-center.pr-2.pl-2.mt-4 > a:nth-child(1)')
    cy.contains('IOS')
      .should('have.attr', 'href')
      .and('equal' , 'https://apps.apple.com/th/app/iuxmarket/id1548113628?l=th')

    cy.get('#app > div:nth-child(2) > section:nth-child(8) > div> div.text-white.fs-16.text-center.pr-2.pl-2.mt-4 > a:nth-child(2)')
    cy.contains('Android')
        .should('have.attr', 'href')
        .and('equal' , 'https://play.google.com/store/apps/details?id=com.iuxmarket.app')
  })
  it('See our payment button', () => {

    cy.visit('/')

    cy.contains('See our payment').click()
    cy.get('[href="/en/payment-option"]')
      .should('have.attr', 'href', '/en/payment-option') 
  })
  it('Download MetaTrader', () => {

    cy.visit('/')

    cy.wait(4000)

    cy.get('[href="/en/platforms/mt5"]')
      .should('have.attr', 'href', '/en/platforms/mt5')
    
  })
  it('Trade with spread 0.0 pips button', () => {

    cy.visit('/')

    cy.wait(4000)
    cy.contains('Trade with Spread 0.0 pips').click()
    cy.url('https://staging.iuxmarket.com/en/register')
       .should('include' , '/en/register')
  })
  it('TRY A FREE DEMO', () => {

    cy.visit('/')

    cy.wait(4000)
    cy.contains('TRY A FREE DEMO').click()
    cy.url('https://staging.iuxmarket.com/en/register')
       .should('include' , '/en/register')
  })
  it('Footer', () => {

    cy.visit('/')
    cy.viewport(1920, 5000)
 
    cy.get('[type="link"]')
    cy.contains('About Us')
      .should('have.attr', 'href', '/en/about-us')

    cy.get('[type="link"]')
    cy.contains('Contact us')
      .should('have.attr', 'href', '/en/about-us/contact')
  
    cy.get('[type="link"]')
    cy.contains('Terms and Conditions')
      .should('have.attr', 'href', '/en/about-us/condition')

    cy.get('[type="link"]')
    cy.contains('Privacy of data security')
      .should('have.attr', 'href', '/en/about-us/security')
    
    cy.get('[type="link"]')
    cy.contains('Policy of security')
      .should('have.attr', 'href', '/en/about-us/policy')
  })
  it('Social link', () => {

    cy.visit('/')

    cy.get('#app > div:nth-child(2) > section:nth-child(11) > div > div > div.col-md-3.p-0-important > div > div:nth-child(1) > a')
      .should('have.attr', 'href')
      .and('equal' , 'https://www.instagram.com/iuxmarkets/')

    cy.get('#app > div:nth-child(2) > section:nth-child(11) > div > div > div.col-md-3.p-0-important > div > div:nth-child(2) > a')
      .should('have.attr', 'href')
      .and('equal' , 'https://www.facebook.com/IUXMarkets/')

    cy.get('#app > div:nth-child(2) > section:nth-child(11) > div > div > div.col-md-3.p-0-important > div > div:nth-child(3) > a')
      .should('have.attr', 'href')
      .and('equal' , 'https://www.linkedin.com/company/iux-market/')
    
    cy.get('#app > div:nth-child(2) > section:nth-child(11) > div > div > div.col-md-3.p-0-important > div > div:nth-child(4) > a')
      .should('have.attr', 'href')
      .and('equal' , 'https://www.youtube.com/channel/UCX3pPxa1vp7mRp0wObzXXcA')
  })
})
// const workaroundUrl = new URL('https://apps.apple.com/th/app/iuxmarket/id1548113628?l=th');

// const url = { pathname: workaroundUrl.pathname, search: workaroundUrl.search }

// cy.origin(workaroundUrl.origin, { args: { url } }, ({ url }) => {
//   const { pathname, search } = url;  // destructure the url arg
//   cy.visit(pathname + search)
// });