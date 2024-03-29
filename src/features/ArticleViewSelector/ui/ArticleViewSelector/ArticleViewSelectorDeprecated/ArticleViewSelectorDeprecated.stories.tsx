import { StoryObj, Meta } from '@storybook/react'

import { ArticleView } from '@/entities/Article/testing'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleViewSelectorDeprecated } from './ArticleViewSelectorDeprecated'

export default {
  title: 'features/Article/ArticleViewSelector/ArticleViewSelectorDeprecated',
  component: ArticleViewSelectorDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleViewSelectorDeprecated>

type Template = StoryObj<typeof ArticleViewSelectorDeprecated>

export const Grid: Template = {
  args: { view: ArticleView.GRID },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const DarkGrid: Template = {
  args: { view: ArticleView.GRID },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ChocoGrid: Template = {
  args: { view: ArticleView.GRID },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const List: Template = {
  args: { view: ArticleView.LIST },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const DarkList: Template = {
  args: { view: ArticleView.LIST },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ChocoList: Template = {
  args: { view: ArticleView.LIST },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
