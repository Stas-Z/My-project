import { StoryObj, Meta } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleListItemRedesigned } from './ArticleListItemRedesigned'
import { ArticleView } from '../../../model/consts/articleConsts'
import { articleMock } from '../../../model/mocks/data'

export default {
  title: 'entities/Article/ArticleListItem/ArticleListItemRedesigned',
  component: ArticleListItemRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof ArticleListItemRedesigned>

type Template = StoryObj<typeof ArticleListItemRedesigned>

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
