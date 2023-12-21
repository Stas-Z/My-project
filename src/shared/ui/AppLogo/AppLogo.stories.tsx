import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { AppLogo } from './AppLogo'

export default {
  title: 'shared/AppLogo',
  component: AppLogo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AppLogo>

type Template = StoryObj<typeof AppLogo>

export const Light: Template = {
  args: {},
}

export const Dark: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
