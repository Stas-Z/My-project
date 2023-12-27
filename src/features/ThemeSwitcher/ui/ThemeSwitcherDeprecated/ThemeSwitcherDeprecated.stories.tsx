import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ThemeSwitcherDeprecated } from './ThemeSwitcherDeprecated'

export default {
  title: 'features/ThemeSwitcher/ThemeSwitcherDeprecated',
  component: ThemeSwitcherDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ThemeSwitcherDeprecated>

type Template = StoryObj<typeof ThemeSwitcherDeprecated>

export const Light: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const Dark: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
}
