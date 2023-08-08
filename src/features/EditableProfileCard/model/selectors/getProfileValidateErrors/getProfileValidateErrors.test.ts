import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileEror } from '../../consts/editableProfileCardConsts'

describe('getProfileValidateErrors.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileEror.INCORRECT_AGE,
          ValidateProfileEror.INCORRECT_CITY,
          ValidateProfileEror.INCORRECT_USER_DATA,
        ],
      },
    }

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileEror.INCORRECT_AGE,
      ValidateProfileEror.INCORRECT_CITY,
      ValidateProfileEror.INCORRECT_USER_DATA,
    ])
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
