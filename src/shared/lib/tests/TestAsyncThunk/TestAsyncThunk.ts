import { AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { AxiosStatic } from 'axios'

import { StateSchema } from '@/app/providers/StoreProvider'

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

// As a fuction component
export function TestAsyncThunk<Return, Arg, RejectedValue>(
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
  state?: DeepPartial<StateSchema>,
) {
  const dispatch: jest.MockedFn<any> = jest.fn()
  const getState: () => StateSchema = jest.fn(() => state as StateSchema)

  const api: jest.MockedFunctionDeep<AxiosStatic> = mockedAxios
  const navigate: jest.MockedFn<any> = jest.fn()

  const callThunk = async (arg: Arg) => {
    const thunkActionCreator = actionCreator(arg)
    const action = await thunkActionCreator(dispatch, getState, {
      api,
      navigate,
    })
    return action
  }

  return {
    dispatch,
    getState,
    actionCreator,
    callThunk,
    api,
    navigate,
  }
}
