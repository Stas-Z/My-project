describe('A user visits the articles list page ', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(`articles`)
    })
  })

  it('check if articles are loaded successfully', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })
})
