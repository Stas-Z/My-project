import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { MainLayout } from './MainLayout'

export default {
  title: 'shared/MainLayout',
  component: MainLayout,
  args: {
    content: 'Content',
    header: 'Header',
    sidebar: 'Sidebar',
    toolbar: 'Toolbar',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof MainLayout>

type Template = StoryObj<typeof MainLayout>

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
