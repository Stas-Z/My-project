import { StateSchema } from '@/app/providers/StoreProvider'
import { getCommentFormError, getCommentFormText } from './commentFormSelectors'

describe('commentFormSelectors.test', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      commentForm: { text: 'some comment' },
    }

    expect(getCommentFormText(state as StateSchema)).toEqual('some comment')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getCommentFormText(state as StateSchema)).toEqual('')
  })
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      commentForm: { error: 'error' },
    }
    expect(getCommentFormError(state as StateSchema)).toEqual('error')
  })
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getCommentFormError(state as StateSchema)).toEqual(undefined)
  })
})
