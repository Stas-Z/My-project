import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

// As a fuction component
export function TestAsyncThunk<Return, Arg, RejectedValue>(
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
) {
  const dispatch: jest.MockedFn<any> = jest.fn()
  const getState: () => StateSchema = jest.fn()
  const callThunk = async (arg: Arg) => {
    const thunkActionCreator = actionCreator(arg)
    const action = await thunkActionCreator(dispatch, getState, undefined)
    return action
  }

  return {
    dispatch,
    getState,
    actionCreator,
    callThunk,
  }
}
