import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId'

const data = [
  {
    id: '1',
    text: 'some comment',
    articleId: '1',
    userId: '1',
    user: {
      id: '1',
      username: 'admin',
      password: '123',
      role: 'ADMIN',
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
    },
  },
  {
    id: '2',
    text: 'some comment 2',
    articleId: '1',
    userId: '1',
    user: {
      id: '1',
      username: 'admin',
      password: '123',
      role: 'ADMIN',
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
    },
  },
]

describe('fetchCommentsByArticleId.test', () => {
  test('success', async () => {
    const thunk = TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const action = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('fulfilled')
    expect(action.payload).toEqual(data)
  })
  test('error no data', async () => {
    const thunk = TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))
    const action = await thunk.callThunk('')
    expect(action.meta.requestStatus).toBe('rejected')
  })
  test('error', async () => {
    const thunk = TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const action = await thunk.callThunk('1')
    expect(action.meta.requestStatus).toBe('rejected')
  })
})
