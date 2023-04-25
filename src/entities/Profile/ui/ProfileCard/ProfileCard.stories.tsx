import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ProfileCard } from './ProfileCard'
import AvatarImg from '../../../../shared/assets/tests/avatar.png'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Light = Template.bind({})
Light.args = {
  data: {
    first: 'Станислав',
    lastname: 'Заболотный',
    age: 38,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: AvatarImg,
  },
  readonly: true,
}

export const EditLight = Template.bind({})
EditLight.args = {
  data: {
    first: 'Станислав',
    lastname: 'Заболотный',
    age: 38,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: AvatarImg,
  },
}

export const Dark = Template.bind({})
Dark.args = {
  data: {
    first: 'Станислав',
    lastname: 'Заболотный',
    age: 38,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: AvatarImg,
  },
  readonly: true,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkEdit = Template.bind({})
DarkEdit.args = {
  data: {
    first: 'Станислав',
    lastname: 'Заболотный',
    age: 38,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: AvatarImg,
  },
}
DarkEdit.decorators = [ThemeDecorator(Theme.DARK)]

export const isLoading = Template.bind({})
isLoading.args = {
  isLoading: true,
}

export const isLoadingDark = Template.bind({})
isLoadingDark.args = {
  isLoading: true,
}
isLoadingDark.decorators = [ThemeDecorator(Theme.DARK)]

export const withError = Template.bind({})
withError.args = {
  error: 'true',
}

export const withErrorDark = Template.bind({})
withErrorDark.args = {
  error: 'true',
}
withErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
