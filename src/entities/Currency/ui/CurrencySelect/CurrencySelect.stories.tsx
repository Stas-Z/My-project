import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { CurrencySelect } from './CurrencySelect'
import { Currency } from '../../testing'

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  args: { value: Currency.RUB },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CurrencySelect>

type Template = StoryObj<typeof CurrencySelect>

export const Light: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
export const LightRedesigned: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const DarkRedesigned: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const ChocoRedesigned: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
