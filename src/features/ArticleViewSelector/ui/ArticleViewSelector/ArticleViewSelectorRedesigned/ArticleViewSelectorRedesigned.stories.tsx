import { StoryObj, Meta } from '@storybook/react'

import { ArticleView } from '@/entities/Article/testing'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleViewSelectorRedesigned } from './ArticleViewSelectorRedesigned'

export default {
  title: 'features/Article/ArticleViewSelector/ArticleViewSelectorRedesigned',
  component: ArticleViewSelectorRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof ArticleViewSelectorRedesigned>

type Template = StoryObj<typeof ArticleViewSelectorRedesigned>

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
