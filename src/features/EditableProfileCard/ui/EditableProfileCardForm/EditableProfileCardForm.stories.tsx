import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Country } from '@/entities/Country/testing'
import { Currency } from '@/entities/Currency/testing'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { EditableProfileCardForm } from './EditableProfileCardForm'

export default {
  title: 'features/Profile/EditableProfileCardForm',
  component: EditableProfileCardForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCardForm>

const Template: ComponentStory<typeof EditableProfileCardForm> = (args) => (
  <EditableProfileCardForm {...args} />
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
Light.args = {}
Light.decorators = [
  StoreDecorator({
    profile: {
      readonly: true,
      form: data,
    },
  }),
]

export const LightEdit = Template.bind({})
LightEdit.args = {}
LightEdit.decorators = [
  StoreDecorator({
    profile: {
      form: data,
    },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      readonly: true,
      form: data,
    },
  }),
]

export const DarkEdit = Template.bind({})
DarkEdit.args = {}
DarkEdit.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: data,
    },
  }),
]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    profile: {
      readonly: true,
      form: data,
    },
  }),
]

export const ChocoEdit = Template.bind({})
ChocoEdit.args = {}
ChocoEdit.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    profile: {
      form: data,
    },
  }),
]
