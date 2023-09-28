import { Meta, StoryObj } from '@storybook/react'

import { Country } from '@/entities/Country/testing'
import { Currency } from '@/entities/Currency/testing'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { EditableProfileCardForm } from './EditableProfileCardForm'
import { ValidateProfileEror } from '../../model/consts/editableProfileCardConsts'

export default {
  title: 'features/Profile/EditableProfileCardForm',
  component: EditableProfileCardForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof EditableProfileCardForm>

type Template = StoryObj<typeof EditableProfileCardForm>

const data = {
  first: 'Станислав',
  lastname: 'Заболотный',
  age: 38,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
  avatar: 'https://avatars.githubusercontent.com/u/116818633',
}

export const Light: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        readonly: true,
        form: data,
      },
    }),
  ],
}

export const LightEdit: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        form: data,
      },
    }),
  ],
}

export const LightError: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        validateErrors: [
          ValidateProfileEror.NO_DATA,
          ValidateProfileEror.INCORRECT_USER_DATA,
          ValidateProfileEror.INCORRECT_AGE,
          ValidateProfileEror.INCORRECT_CITY,
          ValidateProfileEror.SERVER_ERROR,
        ],
      },
    }),
  ],
}

export const Dark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        readonly: true,
        form: data,
      },
    }),
  ],
}

export const DarkEdit: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: data,
      },
    }),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      profile: {
        readonly: true,
        form: data,
      },
    }),
  ],
}

export const ChocoEdit: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      profile: {
        form: data,
      },
    }),
  ],
}
