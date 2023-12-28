import { Meta, StoryObj } from '@storybook/react'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { NotificationListRedesigned } from './NotificationListRedesigned'
import { Notification } from '../../../model/types/notifications'

const items: Notification[] = [
  {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
  },
  {
    id: '2',
    title: 'Уведомление 2',
    description: 'Произошло какое-то событие',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '3',
    title: 'Уведомление 3',
    description: 'Произошло какое-то событие',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '4',
    title: 'Уведомление 4',
    description: 'Произошло какое-то событие',
  },
  {
    id: '5',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
  },
]

export default {
  title: 'entities/Notification/NotificationList/NotificationListRedesigned',
  component: NotificationListRedesigned,
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: items,
      },
    ],
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotificationListRedesigned>

type Template = StoryObj<typeof NotificationListRedesigned>

export const Light: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT, true),
    StoreDecorator({}),
    LokiDelayDecorator(),
  ],
}

export const Dark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK, true),
    StoreDecorator({}),
    LokiDelayDecorator(),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE, true),
    StoreDecorator({}),
    LokiDelayDecorator(),
  ],
}
