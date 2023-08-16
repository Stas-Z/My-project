import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Country } from '@/entities/Country/testing'
import { Currency } from '@/entities/Currency/testing'
import { Profile } from '@/entities/Profile/testing'
import { $api } from '@/shared/api/api'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

import { EditableProfileCardForm } from './EditableProfileCardForm'
import { profileReducer } from '../../model/slice/profileSlice'

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 35,
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin213',
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: '1', username: 'admin213' },
    },
  },
  asyncReducers: { profile: profileReducer },
}

describe('features/EditableProfileCardForm', () => {
  beforeEach(() => {
    jest.spyOn($api, 'get').mockReturnValue(
      Promise.resolve({
        data: profile,
      }),
    )
  })

  test('Режим readonly должен переключиться', async () => {
    componentRender(<EditableProfileCardForm id="1" />, options)
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    )
    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton'),
    ).toBeInTheDocument()
  })

  test('При отмене значения должны обнуляться', async () => {
    componentRender(<EditableProfileCardForm id="1" />, options)
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    )
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'))
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'))

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user')
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user')

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user')
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('user')

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton'),
    )

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('admin')
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('admin')
  })

  test('Должна появляться ошибка', async () => {
    componentRender(<EditableProfileCardForm id="1" />, options)
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    )
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'))

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    )

    expect(
      screen.getByTestId('EditableProfileCardForm.Error.Paragraph'),
    ).toBeInTheDocument()
  })

  test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
    const mockPutReq = jest.spyOn($api, 'put')

    componentRender(<EditableProfileCardForm id="1" />, options)
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    )

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user')

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    )

    expect(mockPutReq).toHaveBeenCalled()
  })
})
