import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { StateSchema } from 'app/providers/StoreProvider'
import { addCommentForArticle } from './addCommentForArticle'

const data = {
  text: 'some comment',
  articleId: '1',
  userId: '1',
}
const state: DeepPartial<StateSchema> = {
  user: { authData: { id: '1' } },
  articleDetails: { data: { id: '1' } },
}

describe('addCommentForArticle.test', () => {
  test('success add article', async () => {
    const thunk = TestAsyncThunk(addCommentForArticle, state)
    thunk.api.post.mockReturnValue(Promise.resolve({ data }))

    const action = await thunk.callThunk('some comment')

    expect(thunk.api.post).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('fulfilled')
    expect(action.payload).toEqual(data)
  })
  test('error no data', async () => {
    const thunk = TestAsyncThunk(addCommentForArticle, state)
    thunk.api.post.mockReturnValue(Promise.resolve({ data }))

    const action = await thunk.callThunk('')
    expect(action.meta.requestStatus).toBe('rejected')
  })

  test('error', async () => {
    const thunk = TestAsyncThunk(addCommentForArticle)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const action = await thunk.callThunk('')
    expect(action.meta.requestStatus).toBe('rejected')
  })
})
