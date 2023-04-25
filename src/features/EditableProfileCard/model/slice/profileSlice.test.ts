import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ProfileSchema, ValidateProfileEror } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const data = {
  first: 'Станислав',
  lastname: 'Заболотный',
  age: 38,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
}

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true })
  })
  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    })
  })
  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '123' },
    }
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: '12345' }),
      ),
    ).toEqual({ form: { username: '12345' } })
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileEror.SERVER_ERROR],
    }
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    })
  })
  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: undefined,
    }
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      form: data,
      data,
      readonly: true,
      validateErrors: undefined,
    })
  })
})
