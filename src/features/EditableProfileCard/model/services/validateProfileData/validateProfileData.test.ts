import { Country } from '@/entities/Country/testing'
import { Currency } from '@/entities/Currency/testing'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileEror } from '../../consts/editableProfileCardConsts'

const data = {
  first: 'Станислав',
  lastname: 'Заболотный',
  age: 38,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
}

describe('validateProfileData.test', () => {
  test('success', async () => {
    const action = validateProfileData(data)
    expect(action).toEqual([])
  })
  test('without first and last name', async () => {
    const action = validateProfileData({ ...data, first: '', lastname: '' })
    expect(action).toEqual([ValidateProfileEror.INCORRECT_USER_DATA])
  })
  test('without username', async () => {
    const action = validateProfileData({ ...data, username: '' })
    expect(action).toEqual([ValidateProfileEror.INCORRECT_USER_DATA])
  })
  test('incorrect age', async () => {
    const action = validateProfileData({ ...data, age: undefined })
    expect(action).toEqual([ValidateProfileEror.INCORRECT_AGE])
  })
  test('incorrect City', async () => {
    const action = validateProfileData({ ...data, city: undefined })
    expect(action).toEqual([ValidateProfileEror.INCORRECT_CITY])
  })
  test('incorrect all', async () => {
    const action = validateProfileData({})
    expect(action).toEqual([
      ValidateProfileEror.INCORRECT_USER_DATA,
      ValidateProfileEror.INCORRECT_AGE,
      ValidateProfileEror.INCORRECT_CITY,
    ])
  })
})
