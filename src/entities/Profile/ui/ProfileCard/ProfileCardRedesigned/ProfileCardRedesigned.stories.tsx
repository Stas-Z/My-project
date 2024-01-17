import { Meta, StoryObj } from '@storybook/react'

import { Country } from '@/entities/Country/testing'
import { Currency } from '@/entities/Currency/testing'
import avatar from '@/shared/assets/tests/profilePic.jpg'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ProfileCardRedesigned } from './ProfileCardRedesigned'

export default {
  title: 'entities/ProfileCard/ProfileCardRedesigned',
  component: ProfileCardRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfileCardRedesigned>

type Template = StoryObj<typeof ProfileCardRedesigned>

const data = {
  first: 'Станислав',
  lastname: 'Заболотный',
  age: 38,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
  avatar,
}
export const Light: Template = {
  args: {
    data,
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const EditLight: Template = {
  args: {
    data,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Dark: Template = {
  args: {
    data,
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const DarkEdit: Template = {
  args: {
    data,
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const Choco: Template = {
  args: {
    data,
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}

export const ChocoEdit: Template = {
  args: {
    data,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}

export const Loading: Template = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const LoadingDark: Template = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const LoadingChoco: Template = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}

export const WithError: Template = {
  args: {
    error: 'true',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const WithErrorDark: Template = {
  args: {
    error: 'true',
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const WithErrorChoco: Template = {
  args: {
    error: 'true',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
