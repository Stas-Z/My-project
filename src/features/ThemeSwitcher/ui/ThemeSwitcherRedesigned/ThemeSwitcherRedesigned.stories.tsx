import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ThemeSwitcherRedesigned } from './ThemeSwitcherRedesigned'

export default {
  title: 'features/ThemeSwitcher/ThemeSwitcherRedesigned',
  component: ThemeSwitcherRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ThemeSwitcherRedesigned>

type Template = StoryObj<typeof ThemeSwitcherRedesigned>

export const Light: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}
export const Dark: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK, true)],
}
export const Choco: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
