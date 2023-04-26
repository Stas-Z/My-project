import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { EditableProfileCardHeader } from './EditableProfileCardHeader'

export default {
  title: 'features/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCardHeader>

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
  <EditableProfileCardHeader {...args} />
)

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({
    profile: {
      readonly: true,
    },
  }),
]
export const LightEdit = Template.bind({})
LightEdit.args = {}
LightEdit.decorators = [
  StoreDecorator({
    profile: {
      readonly: false,
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
    },
  }),
]
export const DarkEdit = Template.bind({})
DarkEdit.args = {}
DarkEdit.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      readonly: false,
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
    },
  }),
]
export const ChocoEdit = Template.bind({})
ChocoEdit.args = {}
ChocoEdit.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    profile: {
      readonly: false,
    },
  }),
]
