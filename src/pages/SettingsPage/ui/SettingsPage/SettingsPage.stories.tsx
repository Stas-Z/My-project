import { StoryObj, Meta } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import SettingsPage from './SettingsPage'

export default {
  title: 'pages/SettingsPage',
  component: SettingsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof SettingsPage>

type Template = StoryObj<typeof SettingsPage>

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
