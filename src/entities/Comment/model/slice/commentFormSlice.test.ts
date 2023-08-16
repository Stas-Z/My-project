import { commentFormActions, commentFormReducer } from './commentFormSlice'
import { CommentFormSchema } from '../types/comment'

describe('commentFormSlice.test', () => {
  test('test setText', () => {
    const state: DeepPartial<CommentFormSchema> = {}
    expect(
      commentFormReducer(
        state as CommentFormSchema,
        commentFormActions.setText('Some comment'),
      ),
    ).toEqual({ text: 'Some comment' })
  })
})
