import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { action } from '@storybook/addon-actions'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import AddCommentForm from './AddCommentForm'

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
  <AddCommentForm {...args} />
)

export const Light = Template.bind({})
Light.args = { onSendComment: action('onSendComment') }
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = { onSendComment: action('onSendComment') }
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Choco = Template.bind({})
Choco.args = { onSendComment: action('onSendComment') }
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE), StoreDecorator({})]
