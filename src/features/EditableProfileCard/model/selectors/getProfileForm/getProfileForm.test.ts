import { StateSchema } from '@/app/providers/StoreProvider'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm.test', () => {
  test('should work with filled state', () => {
    const form = {
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
        form,
      },
    }

    expect(getProfileForm(state as StateSchema)).toEqual(form)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
