import { StoryObj, Meta } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ThemeSwitcherRedesigned } from './ThemeSwitcherRedesigned'

export default {
  title: 'features/ThemeSwitcher/ThemeSwitcherRedesigned',
  component: ThemeSwitcherRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof ThemeSwitcherRedesigned>

type Template = StoryObj<typeof ThemeSwitcherRedesigned>

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
