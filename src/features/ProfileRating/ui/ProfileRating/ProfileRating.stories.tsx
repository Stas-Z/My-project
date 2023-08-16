import { ComponentMeta, ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import { ProfileRating } from './ProfileRating'

export default {
  title: 'features/Profile/ProfileRating',
  component: ProfileRating,
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?userId=1&profileId=1`,
        method: 'GET',
        status: 200,
        response: [{ rate: 3 }],
      },
    ],
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileRating>

const Template: ComponentStory<typeof ProfileRating> = (args) => (
  <ProfileRating {...args} />
)

export const WithoutRate = Template.bind({})
WithoutRate.args = { profileId: '1' }
WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
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
Light.args = { profileId: '1' }
Light.decorators = [
  StoreDecorator({
    user: { authData: { id: '1' } },
  }),
  withMock,
]
