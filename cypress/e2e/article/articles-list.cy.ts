describe('A user visits the articles list page ', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(`articles`)
    })
  })
  describe('working with API', () => {
    it('check if articles are loaded successfully', () => {
      cy.getByTestId('ArticleList').should('exist')
      cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })

    it('click on tabs of page filter', () => {
      cy.getByTestId('ArticleList').should('exist')
      cy.getByTestId('Tab.Science').click()
      cy.getByTestId('ArticleListItem').should('exist')
      cy.getByTestId('Tab.Economics').click()
      cy.getByTestId('ArticleListItem').should('exist')
      cy.getByTestId('Tab.IT').click()
      cy.getByTestId('ArticleListItem').should('exist')
    })

    it('test search input', () => {
      cy.createArticle().then((article) => {
        cy.getByTestId('ArticlesPageFilters.Input').type('test')
        cy.getByTestId('ArticlesPageFilters.Input').should('have.value', 'test')
        cy.getByTestId('Article.Paragraph').should('contain', 'Testing Article')
        cy.getByTestId('ArticlesPageFilters.Input').clear()
        cy.removeArticle(article.id)
      })
    })
  })

  describe('Working with fixtures', () => {
    it('Stubbing a response. Articles are loaded with fixture', () => {
      cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
      cy.getByTestId('ArticleList').should('exist')
      cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
  })
})
