import {
  ArticleSortFiled,
  ArticleType,
  ArticleView,
  articlesMock,
  entitiesMock,
} from '@/entities/Article/testing'

import { articlesPageActions, articlesPageReducer } from './articlesPageSlice'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticlesPageSchema } from '../types/articlesPageSchema'

const articles = articlesMock
const entities = entitiesMock

const ids = ['1', '2', '3', '4', '5']

describe('articlePageSlice.test', () => {
  test('test fetch articles pending', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: false,
      error: 'error',
    }
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.pending('', { replace: false }, ''),
      ),
    ).toEqual({
      isLoading: true,
      error: undefined,
    })
  })
  test('test fetch articles pending with replace', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: false,
      error: 'error',
      ids,
      entities,
    }
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.pending('', { replace: true }, ''),
      ),
    ).toEqual({
      isLoading: true,
      error: undefined,
      ids: [],
      entities: {},
    })
  })
  test('test fetch articles fulfilled', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      entities,
      ids,
      isLoading: true,
      hasMore: true,
      limit: 4,
      view: ArticleView.LIST,
    }
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.fulfilled(articles, '', {}),
      ),
    ).toEqual({
      isLoading: false,
      entities,
      ids,
      hasMore: true,
      limit: 4,
      view: ArticleView.LIST,
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
  test('test setPage', () => {
    const state: DeepPartial<ArticlesPageSchema> = { page: 1 }
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setPage(2),
      ),
    ).toEqual({ page: 2 })
  })
  test('test setOrder', () => {
    const state: DeepPartial<ArticlesPageSchema> = { order: 'asc' }
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setOrder('desc'),
      ),
    ).toEqual({ order: 'desc' })
  })
  test('test setSort', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      sort: ArticleSortFiled.CREATED,
    }
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setSort(ArticleSortFiled.TITLE),
      ),
    ).toEqual({ sort: ArticleSortFiled.TITLE })
  })
  test('test setSearch', () => {
    const state: DeepPartial<ArticlesPageSchema> = { search: '' }
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setSearch('search test'),
      ),
    ).toEqual({ search: 'search test' })
  })
  test('test setType', () => {
    const state: DeepPartial<ArticlesPageSchema> = { type: ArticleType.ALL }
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setType(ArticleType.IT),
      ),
    ).toEqual({ type: ArticleType.IT })
  })
})
