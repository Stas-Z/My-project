import { StateSchema } from '@/app/providers/StoreProvider'
import { ArticleView, articleMock } from '@/entities/Article/testing'

import { getArticles } from '../slice/articlesPageSlice'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from './articlePageSelectors'

const article = articleMock
const entities = {
  1: article,
  2: article,
}
const allIds = { ids: [1, 2] }

describe('articlePageSelectors.test', () => {
  test('entities, should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { entities, ids: allIds.ids },
    }
    expect(getArticles.selectEntities(state as StateSchema)).toEqual(entities)
  })
  test('ids, should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { entities, ids: allIds.ids },
    }
    expect(getArticles.selectIds(state as StateSchema)).toEqual(allIds.ids)
  })
  test('should return articles', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { entities, ids: allIds.ids },
    }
    expect(getArticles.selectAll(state as StateSchema)).toEqual([
      article,
      article,
    ])
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { entities: {}, ids: [] },
    }

    expect(getArticles.selectAll(state as StateSchema)).toEqual([])
  })
  test('Error, should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { error: 'error' },
    }
    expect(getArticlesPageError(state as StateSchema)).toEqual('error')
  })
  test('Error, should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticlesPageError(state as StateSchema)).toEqual(undefined)
  })
  test('isLoading, should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { isLoading: true },
    }
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true)
  })
  test('isLoading, should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false)
  })
  test('View - GRID, should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { view: ArticleView.GRID },
    }
    expect(getArticlesPageView(state as StateSchema)).toEqual('grid')
  })
  test('View - LIST, should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { view: ArticleView.LIST },
    }
    expect(getArticlesPageView(state as StateSchema)).toEqual('list')
  })
  test('View, should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticlesPageView(state as StateSchema)).toEqual('grid')
  })
})
