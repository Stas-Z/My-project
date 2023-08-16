import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { fetchNextArticlesPage } from './fetchNextArticlesPage'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesPage.test', () => {
  test('success', async () => {
    const thunk = TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 4,
        isLoading: false,
        hasMore: true,
      },
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalled()
  })

  test('fetchArticlesList not called', async () => {
    const thunk = TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })

  test('isLoading - fetchArticlesList not called', async () => {
    const thunk = TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
