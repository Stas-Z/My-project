import { StoryObj, Meta } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { UiDesingSwitcher } from './UiDesingSwitcher'

export default {
  title: 'features/UiDesingSwitcher',
  component: UiDesingSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof UiDesingSwitcher>

type Template = StoryObj<typeof UiDesingSwitcher>

export const LightDeprecated: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const DarkDeprecated: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ChocoDeprecated: Template = {
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
