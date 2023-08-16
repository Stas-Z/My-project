import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleList } from './ArticleList'
import { articleMock } from '../../mocks/data'
import { ArticleView } from '../../model/consts/articleConsts'

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => (
  <ArticleList {...args} />
)

const article = articleMock

export const Grid = Template.bind({})
Grid.args = {
  virtualized: true,
  articles: [article, article, article],
  view: ArticleView.GRID,
}
export const GridLoading = Template.bind({})
GridLoading.args = {
  virtualized: true,
  articles: [article, article, article],
  view: ArticleView.GRID,
  isLoading: true,
}

export const GridDark = Template.bind({})
GridDark.args = {
  virtualized: true,
  articles: [article, article, article],
  view: ArticleView.GRID,
}
GridDark.decorators = [ThemeDecorator(Theme.DARK)]

export const GridDarkLoading = Template.bind({})
GridDarkLoading.args = {
  virtualized: true,
  articles: [article, article, article],
  view: ArticleView.GRID,
  isLoading: true,
}
GridDarkLoading.decorators = [ThemeDecorator(Theme.DARK)]

export const GridChoco = Template.bind({})
GridChoco.args = {
  virtualized: true,
  articles: [article, article, article],
  view: ArticleView.GRID,
}
GridChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const GridChocoLoading = Template.bind({})
GridChocoLoading.args = {
  virtualized: true,
  articles: [article, article, article],
  view: ArticleView.GRID,
  isLoading: true,
}
GridChocoLoading.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const List = Template.bind({})
List.args = {
  virtualized: true,
  articles: [article, article, article],
  view: ArticleView.LIST,
}
export const ListLoading = Template.bind({})
ListLoading.args = {
  virtualized: true,
  articles: [article, article, article],
  view: ArticleView.LIST,
  isLoading: true,
}

export const ListDark = Template.bind({})
ListDark.args = {
  virtualized: true,
  articles: [article, article, article],
  view: ArticleView.LIST,
}
ListDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ListDarkLoading = Template.bind({})
ListDarkLoading.args = {
  virtualized: true,
  articles: [article, article, article],
  view: ArticleView.LIST,
  isLoading: true,
}
ListDarkLoading.decorators = [ThemeDecorator(Theme.DARK)]

export const ListChoco = Template.bind({})
ListChoco.args = {
  virtualized: true,
  articles: [article, article, article],
  view: ArticleView.LIST,
}
ListChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const ListChocoLoading = Template.bind({})
ListChocoLoading.args = {
  virtualized: true,
  articles: [article, article, article],
  view: ArticleView.LIST,
  isLoading: true,
}
ListChocoLoading.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
