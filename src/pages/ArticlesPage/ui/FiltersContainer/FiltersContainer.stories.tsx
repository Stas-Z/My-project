import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { FiltersContainer } from './FiltersContainer'

export default {
  title: 'pages/Article/FiltersContainer',
  component: FiltersContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof FiltersContainer>

type Template = StoryObj<typeof FiltersContainer>

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
