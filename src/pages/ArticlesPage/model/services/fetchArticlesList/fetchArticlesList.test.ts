import { articlesMock } from '@/entities/Article/testing'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { fetchArticlesList } from './fetchArticlesList'

const data = articlesMock

describe('fetchArticlesList.test', () => {
  test('success', async () => {
    const thunk = TestAsyncThunk(fetchArticlesList, {
      articlesPage: { limit: 9 },
    })
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const action = await thunk.callThunk({})

    expect(thunk.api.get).toHaveBeenCalled()

    expect(action.meta.requestStatus).toBe('fulfilled')
    expect(action.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = TestAsyncThunk(fetchArticlesList)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const action = await thunk.callThunk({})
    expect(action.meta.requestStatus).toBe('rejected')
  })
})
