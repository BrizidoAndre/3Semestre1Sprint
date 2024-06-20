describe('Teste da tela de pesquisa', () => {
  before(() => {
    cy.visit('/')
  })


  it('Redirecionar a minha tela para a tela de busca', () => {
    cy.get("[href='/Search'").click()

    cy.scrollTo('top')
  })

  let musicName = 'Bosun Bill';

  it('Procurar por uma música', () => {
    cy.get("[data-testid='campoBusca']").type(musicName)

    cy.get("[aria-label='music-item']").should('have.length.greaterThan', 0)
  })

  // it("Verificar se existe a musica exata", ()=>{
  //   cy.get("[aria-label='music-item']").contains(musicName).click()
  // cy.get("[aria-label='music-item'").filter(`:container('${musicName}')`).click()
  // })



  it("Clicou no botão de curtir", async () => {
    cy.wait(1500)

    cy.get("[aria-label='music-item']").filter(`:contains('${musicName}')`).then(async (item) => {
      cy.wrap(item).find("[data-testid='icon-button']").first().click()
    })
    
  })
})