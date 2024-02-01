import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { AppLoaderLayout } from './AppLoaderLayout'

export default {
  title: 'shared/layouts/AppLoaderLayout',
  component: AppLoaderLayout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AppLoaderLayout>

type Template = StoryObj<typeof AppLoaderLayout>

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
