import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Country } from '@/entities/Country/testing'
import { Currency } from '@/entities/Currency/testing'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ProfileCard } from './ProfileCard'

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
const data = {
  first: 'Станислав',
  lastname: 'Заболотный',
  age: 38,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
  avatar: 'https://avatars.githubusercontent.com/u/116818633',
}
export const Light = Template.bind({})
Light.args = {
  data,
  readonly: true,
}

export const EditLight = Template.bind({})
EditLight.args = {
  data,
}

export const Dark = Template.bind({})
Dark.args = {
  data,
  readonly: true,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkEdit = Template.bind({})
DarkEdit.args = {
  data,
}
DarkEdit.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = {
  data,
  readonly: true,
}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const ChocoEdit = Template.bind({})
ChocoEdit.args = {
  data,
}
ChocoEdit.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}

export const LoadingDark = Template.bind({})
LoadingDark.args = {
  isLoading: true,
}
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)]

export const LoadingChoco = Template.bind({})
LoadingChoco.args = {
  isLoading: true,
}
LoadingChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const WithError = Template.bind({})
WithError.args = {
  error: 'true',
}

export const WithErrorDark = Template.bind({})
WithErrorDark.args = {
  error: 'true',
}
WithErrorDark.decorators = [ThemeDecorator(Theme.DARK)]

export const WithErrorChoco = Template.bind({})
WithErrorChoco.args = {
  error: 'true',
}
WithErrorChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
