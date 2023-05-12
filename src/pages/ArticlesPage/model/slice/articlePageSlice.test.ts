import { ArticleView, articlesMock, entitiesMock } from 'entities/Article'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticlesPageSchema } from '../types/articlesPageSchema'
import { articlesPageActions, articlesPageReducer } from './articlePageSlice'

const articles = articlesMock
const entities = entitiesMock

const ids = ['1', '2', '3']

describe('articlePageSlice.test', () => {
  test('test fetch articles pending', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: false,
      error: 'error',
    }
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.pending,
      ),
    ).toEqual({
      isLoading: true,
      error: undefined,
    })
  })
  test('test fetch articles fulfilled', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      entities,
      ids,
      isLoading: true,
      hasMore: true,
    }
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.fulfilled(articles, '', { page: 1 }),
      ),
    ).toEqual({
      isLoading: false,
      entities,
      ids,
      hasMore: true,
    })
  })

  test('test setView', () => {
    const state: DeepPartial<ArticlesPageSchema> = { view: ArticleView.GRID }
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setView(ArticleView.LIST),
      ),
    ).toEqual({ view: ArticleView.LIST })
  })
})
