let currentArticleId = ''

describe('The user visits the article page.', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article) => {
      currentArticleId = article.id
      cy.visit(`articles/${article.id}`)
    })
  })

  afterEach(() => {
    cy.removeArticle(currentArticleId)
  })

  it('Checks the article content', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })

  it('Checks the articles recomendation list', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist')
  })

  it('Leave a comment', () => {
    const newComment = 'text'
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('CommentForm').scrollIntoView()
    cy.addComment(newComment)
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
  })

  it('Leave a rating', () => {
    const newRate = 4
    const newFeedback = 'feedback'

    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(newRate, newFeedback)
    cy.get('[data-selected=true]').should('have.length', newRate)
  })
})
