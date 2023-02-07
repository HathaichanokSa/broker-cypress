

describe('Tool & Service page', () => {
  it('Tools & Service drop down list', () => {
  
    cy.visit('/')

    cy.contains('Tools & Service').click({force:true}) 
     
    cy.get('[class="sc-hEsumM gohFMj"]')
  
    cy.contains('MetaTrader 5')
      .should('have.attr' , 'href' , '/en/platforms/mt5')
  
    cy.contains('WebTrader 5')
      .should('have.attr' , 'href' , '/en/webterminal/version5')
  
    cy.contains('Forex Calculators')
      .should('have.attr' , 'href' , '/en/help/calculators')
  
    cy.contains('Economic calendar')
      .should('have.attr' , 'href' , '/en/help/economic-calendar')
  
    cy.contains('Payment option')
      .should('have.attr' , 'href' , '/en/payment-option')
  })
  it('MetaTrader 5', () => { 
  
    cy.visit('/')
  
    cy.contains('Tools & Service').click({force:true}) 
     
    cy.get('[class="menu-hover-item d-flex"]')
    cy.contains('MetaTrader 5').click()
      .should('have.attr' , 'href' , '/en/platforms/mt5')
    cy.get('#app > div:nth-child(2) > div > div > div:nth-child(3) > div > section.bg-black.pt-5.pb-5.bg-line > div > div > div> div > div.mt-4 > a')
      .should('have.attr', 'href')
      .and('equal' , 'https://download.mql5.com/cdn/web/iux.markets.limited/mt5/iuxmarkets5setup.exe')

    cy.get('#app > div:nth-child(2) > div > div > div.sub-menu-page > div > div > a:nth-child(2)')
    cy.contains('MT5 Android')
      .should('have.attr' , 'href' , '/en/platforms/mt5/android')
    cy.get('#app > div:nth-child(2) > div > div > div:nth-child(3) > div > section.bg-black.pt-5.pb-5.bg-line > div > div > div> div > div.mt-4 > a')
      .should('have.attr', 'href')
      .and('equal' , 'https://download.mql5.com/cdn/web/iux.markets.limited/mt5/iuxmarkets5setup.exe')      
        
    cy.get('#app > div:nth-child(2) > div > div > div.sub-menu-page > div > div > a:nth-child(3)')
    cy.contains('MT5 iPhone / iPad')
      .should('have.attr' , 'href' , '/en/platforms/mt5/iphone')
    cy.get('#app > div:nth-child(2) > div > div > div:nth-child(3) > div > section.bg-black.pt-5.pb-5.bg-line > div > div > div> div > div.mt-4 > a')
      .should('have.attr', 'href')
      .and('equal' , 'https://download.mql5.com/cdn/web/iux.markets.limited/mt5/iuxmarkets5setup.exe')   

    cy.get('#app > div:nth-child(2) > div > div > div.sub-menu-page > div > div > a:nth-child(4)')
    cy.contains('MT5 Mac')
      .should('have.attr' , 'href' , '/en/platforms/mt5/mac')
    cy.get('#app > div:nth-child(2) > div > div > div:nth-child(3) > div > section.bg-black.pt-5.pb-5.bg-line > div > div > div> div > div.mt-4 > a')
      .should('have.attr', 'href')
      .and('equal' , 'https://download.mql5.com/cdn/web/iux.markets.limited/mt5/iuxmarkets5setup.exe')   
  })  
  it('WebTrader 5', () => { 
  
    cy.visit('/')
  
    cy.contains('Tools & Service').click({force:true}) 
     
    cy.get('[class="sc-hEsumM gohFMj"]')
      
    cy.wait(4000)
    
    cy.contains('WebTrader 5').click()
    cy.url('https://staging.iuxmarkets.com/en/webterminal/version5')
        .should('include' , '/en/webterminal/version5')
  })
  it('Forex calculators/All in one', () => { 
  
    cy.visit('/')
  
    cy.contains('Tools & Service').click({force:true}) 
     
    cy.get('[class="sc-hEsumM gohFMj"]')
  
    cy.contains('Forex Calculators').click()
    .should('have.attr' , 'href' , '/en/help/calculators')

    cy.get('#app > div:nth-child(2) > section.bg-black > div:nth-child(4) > div > div.row.mt-4 > div > div.mb-4.text-center.text-lg-left > div > a')
      .should('have.attr', 'href' , '/en/register')

    cy.get('#app > div:nth-child(2) > section.bg-black > div.sub-menu-page > div > div > a:nth-child(1)')
      .should('have.attr' , 'href' , '/en/help')
    cy.get('#app > div:nth-child(2) > section.bg-black > div.sub-menu-page > div > div > a:nth-child(3)')
      .should('have.attr' , 'href' , '/en/help/economic-calendar')

    cy.get('[class="ant-select-selection-item"]').should('have.length', 5)
      .contains('Metatrader5').click({force:true})
    cy.get('[class="ant-select-item-option-content"]').should('be.visible')

    cy.get('[class="ant-select-selection-item"]').should('have.length', 5)
      .contains('Please select').click({force:true})
    cy.get('[class="ant-select-item-option-content"]')
      .contains('USD').click({force:true})
    
    cy.wait(4000)
    cy.get('[class="ant-select-selection-item"]').should('have.length', 5)
      .contains('Please select').click({force:true})
    cy.get('[class="ant-select-item-option-content"]')
      .contains('AUDUSD.iux').click({force:true})

    cy.get('[class="ant-select-selection-item"]').should('have.length', 5)
      .contains('Please select').click({force:true})
    cy.get('[class="ant-select-item-option-content"]')
      .contains('1:2000').click({force:true})

    cy.get('[class="ant-select-selection-item"]').should('have.length', 5)
      .contains('Please select').click({force:true})
    cy.get('[class="ant-select-item-option-content"]')
      .contains('Standard').click({force:true})

    cy.get('[placeholder="Please Enter value"]')
      .type('0.1')

    cy.contains('CALCULATE').click()
    
    cy.log('readonly')
    cy.get('#app > div:nth-child(2) > section.bg-black > div:nth-child(4) > div > div.row.mt-4 > form > div > div:nth-child(4) > div:nth-child(1) > div > div > div > div > input')
      .should('have.attr', 'readonly')
  })
  it('Forex calculators/Currency', () => { 
  
    cy.visit('/')
  
    cy.contains('Tools & Service').click({force:true}) 
     
    cy.get('[class="sc-hEsumM gohFMj"]')
  
    cy.contains('Forex Calculators').click()
      .should('have.attr' , 'href' , '/en/help/calculators')

    cy.contains('Currency').click()

    cy.get('[class="ant-select-selection-item"]').should('have.length', 3)
      .contains('Metatrader5').click({force:true})
    cy.get('[class="ant-select-item-option-content"]').should('be.visible')

    cy.get('[class="ant-select-selection-item"]')
      .contains('Please select').click({force:true})
    // cy.get('[style="display: flex; flex-direction: column; transform: translateY(63px); position: absolute; left: 0px; right: 0px; top: 0px;"]')
        
    cy.get('[style="height: 608px; position: relative; overflow: hidden;"]').should('be.visible')
    // cy.get('[class="ant-select-item-option-content"]')
    // ({ensureScrollable: true})
    cy.wait(4000)
    cy.get('[class="ant-select-item-option-content"]')
      .contains('AUD').click({force:true})
  })
  it('Eonomic calendar', () => { 
  
    cy.visit('/')
  
    cy.contains('Account').click({force:true}) 
     
    cy.get('[class="sc-hEsumM gohFMj"]')
  
    cy.contains('ECN Account').click()
      .should('have.attr' , 'href' , '/en/accounts/ecn')
      
    cy.contains('Open Real Account')
    cy.get('#app > div.bg-black > div:nth-child(3) > section.bg-section-dark.py-5 > div > div.w-auto > div > div:nth-child(2) > a')
      .should('have.attr' , 'href' , '/en/wallet/fund')
  })
  it('Help Center', () => { 
  
    cy.visit('/')
  
    cy.contains('Tools & Service').click({force:true}) 
     
    cy.get('[class="sc-hEsumM gohFMj"]')

    cy.contains('Forex Calculators').click()
    .should('have.attr' , 'href' , '/en/help/calculators')

    cy.get('#app > div:nth-child(2) > section.bg-black > div.sub-menu-page > div > div > a:nth-child(1)')
  
    cy.contains('Help Center')
      .should('have.attr' , 'href')
      .and('equal' , 'https://iuxmarketsupport.zendesk.com/hc/th') 
  })
  it('Payment option', () => { 
  
    cy.visit('/')
  
    cy.contains('Account').click({force:true}) 
     
    cy.get('[class="sc-hEsumM gohFMj"]')
  
    cy.contains('Cent Account').click()
      .should('have.attr' , 'href' , '/en/accounts/cent')
      
    cy.contains('Open Real Account')
    cy.get('#app > div.bg-black > div:nth-child(3) > section.bg-section-dark.py-5 > div > div.w-auto > div > div:nth-child(2) > a')
      .should('have.attr' , 'href' , '/en/wallet/fund')
    })
  })