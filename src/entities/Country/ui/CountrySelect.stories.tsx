import { Meta, StoryObj } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { CountrySelect } from './CountrySelect'
import { Country } from '../testing'

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  args: { value: Country.Russia },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CountrySelect>

type Template = StoryObj<typeof CountrySelect>

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
  decorators: [ThemeDecorator(Theme.LIGHT), NewDesignDecorator],
}

export const DarkRedesigned: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), NewDesignDecorator],
}

export const ChocoRedesigned: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE), NewDesignDecorator],
}
