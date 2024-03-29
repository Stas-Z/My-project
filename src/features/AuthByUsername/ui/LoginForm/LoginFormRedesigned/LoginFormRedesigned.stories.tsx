import { Meta, StoryObj } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { LoginFormRedesigned } from './LoginFormRedesigned'

export default {
  title: 'features/LoginForm/LoginFormRedesigned',
  component: LoginFormRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof LoginFormRedesigned>

type Template = StoryObj<typeof LoginFormRedesigned>

export const Light: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123' },
    }),
  ],
}

export const WithError: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      loginForm: { error: 'ERROR' },
    }),
  ],
}

export const Loading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123', isLoading: true },
    }),
  ],
}

export const Dark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123' },
    }),
  ],
}

export const WithErrorDark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: { error: 'ERROR' },
    }),
  ],
}

export const LoadingDark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123', isLoading: true },
    }),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123' },
    }),
  ],
}

export const WithErrorChoco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      loginForm: { error: 'ERROR' },
    }),
  ],
}

export const LoadingChoco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123', isLoading: true },
    }),
  ],
}
