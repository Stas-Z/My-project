import { Article } from '../../../src/entities/Article'

const defaultArticle = {
  title: 'Testing Article',
  subtitle: 'Testing Article',
  img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
  views: 1022,
  createdAt: '26.04.2022',
  userId: '1',
  type: ['IT'],
  blocks: [{}],
}

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/articles`,
      headers: { Authorization: 'asdf' },
      body: article ?? defaultArticle,
    })
    .then((resp) => resp.body)
}

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asdf' },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      removeArticle(articleId: string): Chainable<void>
    }
  }
}
