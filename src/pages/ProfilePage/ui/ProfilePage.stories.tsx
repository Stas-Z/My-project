import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarImg from 'shared/assets/tests/avatar.png'
import ProfilePage from './ProfilePage'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
)

export const Light = Template.bind({})
Light.decorators = [
  StoreDecorator({
    profile: {
      readonly: true,
      form: {
        first: 'Станислав',
        lastname: 'Заболотный',
        age: 38,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Moscow',
        username: 'admin',
        avatar: AvatarImg,
      },
    },
  }),
]
export const Dark = Template.bind({})
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      readonly: true,
      form: {
        first: 'Станислав',
        lastname: 'Заболотный',
        age: 38,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Moscow',
        username: 'admin',
        avatar: AvatarImg,
      },
    },
  }),
]