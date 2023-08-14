import { StateSchema } from '@/app/providers/StoreProvider'
import { Currency } from '@/entities/Currency/testing'
import { Country } from '@/entities/Country/testing'
import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
  test('should work with filled state', () => {
    const data = {
      first: 'Станислав',
      lastname: 'Заболотный',
      age: 38,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    }

    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
