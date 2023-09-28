import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { NotificationItem } from './NotificationItem'
import { Notification } from '../../model/types/notifications'

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotificationItem>

type Template = StoryObj<typeof NotificationItem>

const item: Notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
}

export const Light: Template = {
  args: { item },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: { item },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: { item },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
