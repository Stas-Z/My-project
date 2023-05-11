import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { articleMock } from 'entities/Article'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import ArticlesPage from './ArticlesPage'

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
  <ArticlesPage {...args} />
)

const article = articleMock
const entities = {
  1: article,
  2: article,
  3: article,
}
const allIds = { allIds: [1, 2, 3] }

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({ articlesPage: { entities, ids: allIds.allIds } }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ articlesPage: { entities, ids: allIds.allIds } }),
]

export const Choco = Template.bind({})
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({ articlesPage: { entities, ids: allIds.allIds } }),
]
