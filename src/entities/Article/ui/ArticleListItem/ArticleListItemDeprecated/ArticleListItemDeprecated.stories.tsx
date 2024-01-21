import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleListItemDeprecated } from './ArticleListItemDeprecated'
import { articleMock } from '../../../mocks/data'
import { ArticleView } from '../../../model/consts/articleConsts'

export default {
  title: 'entities/Article/ArticleListItem/ArticleListItemDeprecated',
  component: ArticleListItemDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleListItemDeprecated>

type Template = StoryObj<typeof ArticleListItemDeprecated>

const article = articleMock

export const Grid: Template = {
  args: {
    article,
    view: ArticleView.GRID,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const GridDark: Template = {
  args: {
    article,
    view: ArticleView.GRID,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const GridChoco: Template = {
  args: {
    article,
    view: ArticleView.GRID,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const List: Template = {
  args: {
    article,
    view: ArticleView.LIST,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const ListDark: Template = {
  args: {
    article,
    view: ArticleView.LIST,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ListChoco: Template = {
  args: {
    article,
    view: ArticleView.LIST,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
