import { StateSchema } from 'app/providers/StoreProvider'
import { articlesMock, entitiesMock } from 'entities/Article'
import { getArticleRecommendationsList } from '../slices/articleRecommendationsListSlice'
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from './articleRecommendationsSelectors'

const articles = articlesMock
const entities = entitiesMock
const allIds = { ids: [1, 2, 3, 4, 5] }

describe('articleRecommendationsSelectors.test', () => {
  test('entities, should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      articleRecommendationsList: { entities, ids: allIds.ids },
    }
    expect(
      getArticleRecommendationsList.selectEntities(state as StateSchema),
    ).toEqual(entities)
  })
  test('ids, should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      articleRecommendationsList: { entities, ids: allIds.ids },
    }
    expect(
      getArticleRecommendationsList.selectIds(state as StateSchema),
    ).toEqual(allIds.ids)
  })
  test('should return articles', () => {
    const state: DeepPartial<StateSchema> = {
      articleRecommendationsList: { entities, ids: allIds.ids },
    }
    expect(
      getArticleRecommendationsList.selectAll(state as StateSchema),
    ).toEqual(articles)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      articleRecommendationsList: { entities: {}, ids: [] },
    }

    expect(
      getArticleRecommendationsList.selectAll(state as StateSchema),
    ).toEqual([])
  })
  test('Error, should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleRecommendationsList: { error: 'error' },
    }
    expect(getArticleRecommendationsError(state as StateSchema)).toEqual(
      'error',
    )
  })
  test('Error, should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleRecommendationsError(state as StateSchema)).toEqual(
      undefined,
    )
  })
  test('isLoading, should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      articleRecommendationsList: { isLoading: true },
    }
    expect(getArticleRecommendationsIsLoading(state as StateSchema)).toEqual(
      true,
    )
  })
  test('isLoading, should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleRecommendationsIsLoading(state as StateSchema)).toEqual(
      undefined,
    )
  })
})
