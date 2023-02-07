
describe('Company', () => {
  it('Company drop down list', () => {
  
    cy.visit('/')

    cy.contains('Company').click({force:true}) 
     
    cy.get('[class="sc-tilXH lhajlr"]')
  
    cy.contains('Partnership')
        .should('have.attr' , 'href' , '/en/partner')
  
    cy.contains('Promotions')
        .should('have.attr' , 'href' , '/en/promotion')
  
    cy.contains('Lot Back')
        .should('have.attr' , 'href' , '/en/lotback')
  
    cy.get('#navbar > nav > div > div > div.menuCon > div > ul > li.ant-menu-item.ant-menu-item-only-child.ant-menu-item-selected > div > div.sc-tilXH.lhajlr > div > div:nth-child(4) > a')
     cy.contains('Help Center')
       .should('have.attr', 'href')
       .and('equal' , 'https://iuxmarketsupport.zendesk.com/hc/th')
  
    cy.contains('About Us')
        .should('have.attr' , 'href' , '/en/about-us')
  })
  it('partnership', () => {
  
    cy.visit('/')
  
    cy.contains('Company').click({force:true}) 
       
    cy.get('[class="sc-tilXH lhajlr"]')
    
    cy.contains('Partnership').click()
      .should('have.attr' , 'href' , '/en/partner')
    
    cy.contains('Become our partner').click()
     cy.url('https://staging.iuxmarkets.com/en/login')
       .should('include' , '/en/login')

    cy.visit('/')

    cy.contains('Company').click({force:true}) 
       
    cy.get('[class="sc-tilXH lhajlr"]')
  
    cy.contains('Partnership').click()
      .should('have.attr' , 'href' , '/en/partner')
    
    cy.get('#app > div.bg-black > div.bg-black > section:nth-child(2) > div > div.d-flex.justify-content-center.mt-40 > a')
      .should('have.attr' , 'href') // Be a Marketing Affiliate
      .and('equal' , '/en/formpartner')
 
    cy.get('#what-iux > div > div.row > div:nth-child(1) > div > div.text-center > a')
      .should('have.attr' , 'href') // Learn more 1
      .and('equal' , '/wallet/fund')
 
    cy.get('#what-iux > div > div.row > div:nth-child(2) > div > div.text-center > a')
      .should('have.attr' , 'href') // Learn more 2
      .and('equal' , '/wallet/fund')

    cy.get('#app > div.bg-black > div.bg-black > section:nth-child(6) > div > div:nth-child(4) > a')
      .should('have.attr' , 'href') // Be a Marketing Affiliate
      .and('equal' , '/en/formpartner')

    cy.get('#app > div.bg-black > div.sub-menu-page > div > div > a:nth-child(2)')
     cy.contains('Marketing guideline')
       .should('have.attr' , 'href' , '/en/partner/guildline')

    cy.get('#app > div.bg-black > div.bg-black > section.container.mt-40 > div > div.d-flex.justify-content-center.mt-40 > a')
      .should('have.attr' , 'href') // Be a Marketing Affiliate
      .and('equal' , '/en/formpartner')

    cy.get('#app > div.bg-black > div.sub-menu-page > div > div > a:nth-child(3)')
     cy.contains('Contact Us') // Contact Us
       .should('have.attr' , 'href' , '/en/about-us/contact')
  }) 
  it('Promotions', () => {
  
    cy.visit('/')
  
    cy.contains('Company').click({force:true}) 
       
    cy.get('[class="sc-tilXH lhajlr"]')
    
    cy.contains('Promotions').click()
      .should('have.attr' , 'href' , '/en/promotion')
    
    cy.contains('Get Bonus').click()
     cy.url('https://staging.iuxmarkets.com/en/register')
       .should('include' , '/en/register')
  })
  it('Lot Back', () => {
  
    cy.visit('/')
  
    cy.contains('Company').click({force:true}) 
       
    cy.get('[class="sc-tilXH lhajlr"]')
    
    cy.contains('Lot Back').click()
      .should('have.attr' , 'href' , '/en/lotback')
    
    // cy.contains('Register now').click()
    //  cy.url('https://staging.iuxmarkets.com/en/register')
    //    .should('include' , '/en/register')

    cy.get('#app > div.bg-black > section:nth-child(3) > div > div > div.text-white.text-center.mt-3 > a')
    // TERMS AND CONDITIONS
      .should('have.attr' , 'href' , '/en/about-us/condition')
  })
  it('Help Center', () => {
  
    cy.visit('/')
  
    cy.contains('Company').click({force:true}) 
       
    cy.get('[class="sc-tilXH lhajlr"]')
    
    cy.contains('Help Center')
      .should('have.attr', 'href')
      .and('equal' , 'https://iuxmarketsupport.zendesk.com/hc/th') 
  })
  it.only('About Us', () => {
  
    cy.visit('/')
  
    cy.contains('Company').click({force:true}) 
       
    cy.get('[class="sc-hEsumM gohFMj"]')
    
    cy.contains('About Us').click()
      .should('have.attr', 'href' , '/en/about-us')

    cy.contains('Contact Us').click()
      .should('have.attr', 'href' , '/en/about-us/contact')
    
    cy.contains('Terms and conditions').click()
      .should('have.attr', 'href' , '/en/about-us/condition')

    cy.contains('Terms and conditions(1)') // PDF link 1
      .should('have.attr', 'href' , '/assets/condition-IUX-market-en.pdf')
      
    // cy.readFile('/assets/condition-IUX-market-en.pdf')
    //   .should('eq', 'Terms and conditions(1)')
  
  })
})


  // const workaroundUrl = new URL('https://staging.iuxmarkets.com/en/login');

  // const url = { pathname: workaroundUrl.pathname, search: workaroundUrl.search }

  //   cy.origin(workaroundUrl.origin, { args: { url } }, ({ url }) => {
  //     const { pathname, search } = url;  // destructure the url arg
  //     cy.visit(pathname + search)
  //     cy.log(pathname + search)
  // });