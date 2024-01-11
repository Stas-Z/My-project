import { StoryObj, Meta } from '@storybook/react'

import { ArticleSortFiled } from '@/entities/Article/testing'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleSortSelectorRedesigned } from './ArticleSortSelectorRedesigned'

export default {
  title: 'features/Article/ArticleSortSelector/ArticleSortSelectorRedesigned',
  component: ArticleSortSelectorRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { sort: ArticleSortFiled.CREATED, order: 'asc' },
} as Meta<typeof ArticleSortSelectorRedesigned>

type Template = StoryObj<typeof ArticleSortSelectorRedesigned>

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
