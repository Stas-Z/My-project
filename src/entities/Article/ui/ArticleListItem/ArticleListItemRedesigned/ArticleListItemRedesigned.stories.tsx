import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleListItemRedesigned } from './ArticleListItemRedesigned'
import { articleMock } from '../../../mocks/data'
import { ArticleView } from '../../../model/consts/articleConsts'

export default {
  title: 'entities/Article/ArticleListItem/ArticleListItemRedesigned',
  component: ArticleListItemRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof ArticleListItemRedesigned>

type Template = StoryObj<typeof ArticleListItemRedesigned>

const article = articleMock

export const Grid: Template = {
  args: {
    article,
    view: ArticleView.GRID,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const GridDark: Template = {
  args: {
    article,
    view: ArticleView.GRID,
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const GridChoco: Template = {
  args: {
    article,
    view: ArticleView.GRID,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}

export const List: Template = {
  args: {
    article,
    view: ArticleView.LIST,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const ListDark: Template = {
  args: {
    article,
    view: ArticleView.LIST,
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const ListChoco: Template = {
  args: {
    article,
    view: ArticleView.LIST,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
