import { ComponentMeta, ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import ArticleRating from './ArticleRating'

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [{ rate: 3 }],
      },
    ],
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => (
  <ArticleRating {...args} />
)

export const WithoutRate = Template.bind({})
WithoutRate.args = { articleId: '1' }
WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [{}],
    },
  ],
}
WithoutRate.decorators = [
  StoreDecorator({
    user: { authData: { id: '1' } },
  }),
  withMock,
]

export const Light = Template.bind({})
Light.args = { articleId: '1' }
Light.decorators = [
  StoreDecorator({
    user: { authData: { id: '1' } },
  }),
  withMock,
]
