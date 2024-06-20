describe('template spec', () => {

  before(() => {
    cy.visit("/")
  })

  it('Verificar se o header esta visivel', () => {
    cy.get("[aria-label='titleHead']").should("be.visible")
    cy.get("[aria-label='titleHead']").should("contain", 'Good morning')
  })

  it('Verificar itens na listagem de playlist', () => {
    cy.get("[aria-label = 'playlist-item']").should("have.length.greaterThan", 0)
  })

  it('Clicar em algum item da lista, para listar suas musicas', () => {
    cy.wait(3000)
    cy.get("[aria-label = 'playlist-item']").eq(2).click()
    cy.get("[aria-label = 'music-item']").should("have.length.greaterThan", 0)
  });

  it('Clicar em algum item da lista de musicas', () => {
    cy.wait(2000)
    cy.get("[aria-label = 'music-item']").eq(9).click()
    cy.get("[aria-label = 'music-item']").contains("Não Vou Namorar").click()
  });
})