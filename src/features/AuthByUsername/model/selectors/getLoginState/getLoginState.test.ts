import { StateSchema } from '@/app/providers/StoreProvider'

import { getLoginState } from './getLoginState'

describe('getLoginState.test', () => {
  test('should return value', () => {
    const data = {
      username: 'admin',
      password: '123',
      isLoading: true,
      error: undefined,
    }
    const state: DeepPartial<StateSchema> = {
      loginForm: data,
    }

    expect(getLoginState(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    const response = {
      isLoading: false,
      password: '',
      username: '',
    }

    expect(getLoginState(state as StateSchema)).toEqual(response)
  })
})
