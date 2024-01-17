import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { StickyContentLayout } from './StickyContentLayout'

export default {
  title: 'shared/layouts/StickyContentLayout',
  component: StickyContentLayout,
  args: { left: 'Left', content: 'Content', right: 'Right' },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof StickyContentLayout>

type Template = StoryObj<typeof StickyContentLayout>

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
