import { Country } from '@/entities/Country/testing'
import { Currency } from '@/entities/Currency/testing'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { fetchProfileData } from './fetchProfileData'

const data = {
  first: 'Станислав',
  lastname: 'Заболотный',
  age: 38,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
}

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const action = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('fulfilled')
    expect(action.payload).toEqual(data)
  })
  test('error', async () => {
    const thunk = TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const action = await thunk.callThunk('1')
    expect(action.meta.requestStatus).toBe('rejected')
  })
})
