import { Meta, StoryObj } from '@storybook/react'

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
} as Meta<typeof LoginFormRedesigned>

type Template = StoryObj<typeof LoginFormRedesigned>

export const Light: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT, true),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123' },
    }),
  ],
}

export const WithError: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT, true),
    StoreDecorator({
      loginForm: { error: 'ERROR' },
    }),
  ],
}

export const Loading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT, true),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123', isLoading: true },
    }),
  ],
}

export const Dark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK, true),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123' },
    }),
  ],
}

export const WithErrorDark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK, true),
    StoreDecorator({
      loginForm: { error: 'ERROR' },
    }),
  ],
}

export const LoadingDark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK, true),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123', isLoading: true },
    }),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE, true),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123' },
    }),
  ],
}

export const WithErrorChoco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE, true),
    StoreDecorator({
      loginForm: { error: 'ERROR' },
    }),
  ],
}

export const LoadingChoco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE, true),
    StoreDecorator({
      loginForm: { username: 'admin', password: '123', isLoading: true },
    }),
  ],
}
