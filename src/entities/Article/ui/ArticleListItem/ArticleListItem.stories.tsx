import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleListItem } from './ArticleListItem'
import { articleMock } from '../../mocks/data'
import { ArticleView } from '../../model/consts/articleConsts'

export default {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ArticleListItem>

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <ArticleListItem {...args} />
)

const article = articleMock

export const Grid = Template.bind({})
Grid.args = {
  article,
  view: ArticleView.GRID,
}

export const GridDark = Template.bind({})
GridDark.args = {
  article,
  view: ArticleView.GRID,
}
GridDark.decorators = [ThemeDecorator(Theme.DARK)]

export const GridChoco = Template.bind({})
GridChoco.args = {
  article,
  view: ArticleView.GRID,
}
GridChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const List = Template.bind({})
List.args = {
  article,
  view: ArticleView.LIST,
}

export const ListDark = Template.bind({})
ListDark.args = {
  article,
  view: ArticleView.LIST,
}
ListDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ListChoco = Template.bind({})
ListChoco.args = {
  article,
  view: ArticleView.LIST,
}
ListChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
