describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'CAKE')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'BUSD')
  })

  it('loads the ETH and tokens', () => {
    cy.visit('/add/ETH/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'ETH')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'CAKE')
  })

  it('loads the WBNB and tokens', () => {
    cy.visit('/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'WBNB')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'CAKE')
  })

  it('does not crash if ETH is duplicated', () => {
    cy.visit('/add/ETH/ETH')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'ETH')
    cy.get('#add-liquidity-input-tokenb').should('not.contain.text', 'ETH')
  })

  it('does not crash if address is duplicated', () => {
    cy.visit('/add/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'CAKE')
    cy.get('#add-liquidity-input-tokenb').should('not.contain.text', 'CAKE')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'QUACK')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'CAKE')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'QUACK')
    cy.visit('/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'BUSD')
    cy.visit('/add/ETH')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'ETH')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82-0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    cy.url().should(
      'contain',
      '/add/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    )
  })

  it('redirects /add/ETH-token to /add/ETH/token', () => {
    cy.visit('/add/ETH-0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82')
    cy.url().should('contain', '/add/ETH/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82')
  })

  it('redirects /add/token-ETH to /add/token/ETH', () => {
    cy.visit('/add/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82-ETH')
    cy.url().should('contain', '/add/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/ETH')
  })

  it('redirects /add/WBNB to /add/WBNB/token', () => {
    cy.visit('/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c-0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82')
    cy.url().should(
      'contain',
      '/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    )
  })

  it('redirects /add/token-WBNB to /add/token/WBNB', () => {
    cy.visit('/add/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82-0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
    cy.url().should(
      'contain',
      '/add/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    )
  })
})
