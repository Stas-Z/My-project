import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { NotificationItemDeprecated } from './NotificationItemDeprecated'
import { Notification } from '../../../model/types/notifications'

export default {
  title: 'entities/Notification/NotificationItem/NotificationItemDeprecated',
  component: NotificationItemDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotificationItemDeprecated>

type Template = StoryObj<typeof NotificationItemDeprecated>

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
