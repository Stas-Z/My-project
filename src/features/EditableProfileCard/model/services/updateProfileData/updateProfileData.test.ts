import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Profile } from 'entities/Profile'
import { updateProfileData } from './updateProfileData'
import { ValidateProfileEror } from '../../consts/editableProfileCardConsts'

const data: Profile = {
  id: '1',
  first: 'Станислав',
  lastname: 'Заболотный',
  age: 38,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const action = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('fulfilled')
    expect(action.payload).toEqual(data)
  })
  test('error', async () => {
    const thunk = TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const action = await thunk.callThunk()
    expect(action.meta.requestStatus).toBe('rejected')
    expect(action.payload).toEqual([ValidateProfileEror.SERVER_ERROR])
  })
  test('validate error', async () => {
    const thunk = TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
      },
    })
    const action = await thunk.callThunk()
    expect(action.meta.requestStatus).toBe('rejected')
    expect(action.payload).toEqual([ValidateProfileEror.INCORRECT_USER_DATA])
  })
})
