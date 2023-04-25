import { StateSchema } from 'app/providers/StoreProvider'
import { getUserAuthData } from './getUserAuthData'

describe('getUserAuthData.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      user: { authData: { username: '123' } },
    }

    expect(getUserAuthData(state as StateSchema)).toEqual({ username: '123' })
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { user: {} }

    expect(getUserAuthData(state as StateSchema)).toEqual(undefined)
  })
})
