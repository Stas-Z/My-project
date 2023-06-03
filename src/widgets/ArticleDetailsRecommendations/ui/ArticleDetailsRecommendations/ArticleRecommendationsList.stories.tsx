import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { entitiesMock } from 'entities/Article'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'

export default {
  title: 'widgets/Article/ArticleDetailsRecommendations',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
  <ArticleRecommendationsList {...args} />
)

const entities = entitiesMock
const ids = ['1', '2', '3', '4', '5']

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({
    articleRecommendationsList: { entities, ids },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleRecommendationsList: { entities, ids },
  }),
]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articleRecommendationsList: { entities, ids },
  }),
]
