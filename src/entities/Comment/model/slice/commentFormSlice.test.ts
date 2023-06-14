import { CommentFormSchema } from '../types/comment'
import { commentFormActions, commentFormReducer } from './commentFormSlice'

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
