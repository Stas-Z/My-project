import { action } from '@storybook/addon-actions'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { CommentForm } from './CommentForm'

export default {
  title: 'entities/Comment/CommentForm',
  component: CommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentForm>

const Template: ComponentStory<typeof CommentForm> = (args) => (
  <CommentForm {...args} />
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
