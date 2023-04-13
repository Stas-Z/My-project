import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)
describe('loginByUsername.test', () => {
  test('success login', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = TestAsyncThunk(loginByUsername)
    const action = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue),
    )
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('fulfilled')
    expect(action.payload).toEqual(userValue)
  })
  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = TestAsyncThunk(loginByUsername)
    const action = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(action.meta.requestStatus).toBe('rejected')
    expect(action.payload).toBe('error')
  })
})

// describe('loginByUsername.test', () => {
//   let dispatch: Dispatch
//   let getState: () => StateSchema

//   beforeEach(() => {
//     dispatch = jest.fn()
//     getState = jest.fn()
//   })

//   test('success login', async () => {
//     const userValue = { username: '123', id: '1' }
//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
//     const actionCreator = loginByUsername({ username: '123', password: '123' })
//     const action = await actionCreator(dispatch, getState, undefined)

//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
//     expect(dispatch).toHaveBeenCalledTimes(3)
//     expect(mockedAxios.post).toHaveBeenCalled()
//     expect(action.meta.requestStatus).toBe('fulfilled')
//     expect(action.payload).toEqual(userValue)
//   })
//   test('error login', async () => {
//     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
//     const actionCreator = loginByUsername({ username: '123', password: '123' })
//     const action = await actionCreator(dispatch, getState, undefined)

//     expect(dispatch).toHaveBeenCalledTimes(2)
//     expect(mockedAxios.post).toHaveBeenCalled()
//     expect(action.meta.requestStatus).toBe('rejected')
//     expect(action.payload).toBe('error')
//   })
// })
