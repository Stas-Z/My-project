import { articlesMock, entitiesMock } from 'entities/Article'
import { fetchArticleRecommendationsList } from '../services/fetchArticleRecommendationsList/fetchArticleRecommendationsList'
import { ArticleRecommendationsListSchema } from '../types/ArticleRecommendationsListSchema'
import { articleRecommendationsListReducer } from './articleRecommendationsListSlice'

const articles = articlesMock
const entities = entitiesMock
const ids = ['1', '2', '3', '4', '5']

describe('articleRecommendationsListSlice.test', () => {
  test('test fetch recommendation articles pending', () => {
    const state: DeepPartial<ArticleRecommendationsListSchema> = {
      isLoading: false,
      error: 'error',
      ids: [],
      entities: {},
    }
    expect(
      articleRecommendationsListReducer(
        state as ArticleRecommendationsListSchema,
        fetchArticleRecommendationsList.pending,
      ),
    ).toEqual({
      isLoading: true,
      error: undefined,
      ids: [],
      entities: {},
    })
  })
  test('test fetch recommendation articles fulfilled', () => {
    const state: DeepPartial<ArticleRecommendationsListSchema> = {
      isLoading: true,
      error: undefined,
    }
    expect(
      articleRecommendationsListReducer(
        state as ArticleRecommendationsListSchema,
        fetchArticleRecommendationsList.fulfilled(articles, ''),
      ),
    ).toEqual({
      isLoading: false,
      entities,
      ids,
      error: undefined,
    })
  })
})
