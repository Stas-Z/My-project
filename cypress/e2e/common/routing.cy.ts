import { selectByTestsId } from '../../helpers/selectByTestsId'

describe('Routing', () => {
  describe('User is not authorized', () => {
    it('Open main page', () => {
      cy.visit('/')
      cy.get(selectByTestsId('MainPage')).should('exist')
    })
    it('Go to profile page. Redirect to main page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestsId('MainPage')).should('exist')
    })
    it('Redirect. Not found page', () => {
      cy.visit('/prasfafasfsf')
      cy.get(selectByTestsId('NotFoundPage')).should('exist')
    })
  })

  describe('User is authorized', () => {
    beforeEach(() => {
      cy.login()
    })
    it('Open profile page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestsId('ProfilePage')).should('exist')
    })
    it('Open articles page', () => {
      cy.visit('/articles')
      cy.get(selectByTestsId('ArticlesPage')).should('exist')
    })
  })
})
