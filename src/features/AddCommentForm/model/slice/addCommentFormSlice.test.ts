import { ProfileSchema } from 'features/EditableProfileCard'
import { AddCommentFormSchema } from '../types/AddCommentFormSchema'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from './addCommentFormSlice'

describe('addCommentFormSlice.test', () => {
  test('test setText', () => {
    const state: DeepPartial<AddCommentFormSchema> = {}
    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText('Some comment'),
      ),
    ).toEqual({ text: 'Some comment' })
  })
})
