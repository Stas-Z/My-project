import { Meta, StoryObj } from '@storybook/react'

import { ArticleSortFiled } from '@/entities/Article/testing'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticlesFilters } from './ArticlesFilters'

export default {
  title: 'widgets/ArticlesFilters',
  component: ArticlesFilters,
  args: { sort: ArticleSortFiled.TITLE, order: 'desc' },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlesFilters>

type Template = StoryObj<typeof ArticlesFilters>

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
