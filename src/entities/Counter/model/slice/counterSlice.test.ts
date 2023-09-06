import { counterActions, counterReducer } from './counterSlice'
import { CounterSchema } from '../types/counterSchema'

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: CounterSchema = { value: 10 }
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    })
  })
  test('increment', () => {
    const state: CounterSchema = { value: 10 }
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    })
  })
  test('incrementByAmount', () => {
    const state: CounterSchema = { value: 10 }
    expect(counterReducer(state, counterActions.incrementByAmount(5))).toEqual({
      value: 15,
    })
  })
  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    })
  })
})
