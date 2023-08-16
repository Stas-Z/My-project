import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { initArticlesPage } from './initArticlesPage'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')
const searchParams = new URLSearchParams(
  'sort=createdAt&order=asc&search=&type=All',
)

describe('initArticlesPage.test', () => {
  test('success', async () => {
    const thunk = TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    })

    await thunk.callThunk(searchParams)

    expect(thunk.dispatch).toBeCalledTimes(7)
    expect(fetchArticlesList).toHaveBeenCalled()
  })

  test('initArticlesPage not called', async () => {
    const thunk = TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: true,
      },
    })

    await thunk.callThunk(searchParams)

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
