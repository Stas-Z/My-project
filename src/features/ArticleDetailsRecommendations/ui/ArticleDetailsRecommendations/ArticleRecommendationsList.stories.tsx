import { ComponentMeta, ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { Theme } from '@/shared/const/theme'
import { articlesMock } from '@/entities/Article/testing'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import ArticleRecommendationsList from './ArticleRecommendationsList'

const articles = articlesMock

export default {
  title: 'features/Article/ArticleDetailsRecommendations',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=4`,
        method: 'GET',
        status: 200,
        response: articles,
      },
    ],
  },
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
  <ArticleRecommendationsList {...args} />
)

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE), StoreDecorator({})]
