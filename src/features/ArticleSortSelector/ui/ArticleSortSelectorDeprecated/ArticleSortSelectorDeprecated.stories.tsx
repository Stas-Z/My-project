import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleSortSelectorDeprecated } from './ArticleSortSelectorDeprecated'

export default {
  title: 'features/Article/ArticleSortSelector/ArticleSortSelectorDeprecated',
  component: ArticleSortSelectorDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleSortSelectorDeprecated>

type Template = StoryObj<typeof ArticleSortSelectorDeprecated>

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
