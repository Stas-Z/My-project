import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { SidebarRedesigned } from './SidebarRedesigned'

export default {
  title: 'widgets/Sidebar/SidebarRedesigned',
  component: SidebarRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof SidebarRedesigned>

type Template = StoryObj<typeof SidebarRedesigned>

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
