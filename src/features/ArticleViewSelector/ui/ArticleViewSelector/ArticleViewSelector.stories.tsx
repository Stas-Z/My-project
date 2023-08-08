import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleView } from '@/entities/Article'
import { ArticleViewSelector } from './ArticleViewSelector'

export default {
  title: 'features/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleViewSelector>

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
  <ArticleViewSelector {...args} />
)

export const Grid = Template.bind({})
Grid.args = { view: ArticleView.GRID }

export const DarkGrid = Template.bind({})
DarkGrid.args = { view: ArticleView.GRID }
DarkGrid.decorators = [ThemeDecorator(Theme.DARK)]

export const ChocoGrid = Template.bind({})
ChocoGrid.args = { view: ArticleView.GRID }
ChocoGrid.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const List = Template.bind({})
List.args = { view: ArticleView.LIST }

export const DarkList = Template.bind({})
DarkList.args = { view: ArticleView.LIST }
DarkList.decorators = [ThemeDecorator(Theme.DARK)]

export const ChocoList = Template.bind({})
ChocoList.args = { view: ArticleView.LIST }
ChocoList.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
