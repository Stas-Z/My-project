import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Notification } from '../../model/types/notifications'
import { NotificationItem } from './NotificationItem'

export default {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
)

const item: Notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
}

export const Light = Template.bind({})
Light.args = { item }

export const Dark = Template.bind({})
Dark.args = { item }
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = { item }
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]