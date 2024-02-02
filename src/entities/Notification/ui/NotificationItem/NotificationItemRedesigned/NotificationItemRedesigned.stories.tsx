import { Meta, StoryObj } from '@storybook/react'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { NotificationItemRedesigned } from './NotificationItemRedesigned'
import { Notification } from '../../../model/types/notifications'

export default {
  title: 'entities/Notification/NotificationItem/NotificationItemRedesigned',
  component: NotificationItemRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof NotificationItemRedesigned>

type Template = StoryObj<typeof NotificationItemRedesigned>

const item: Notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
}

export const Light: Template = {
  args: { item },
  decorators: [ThemeDecorator(Theme.LIGHT), LokiDelayDecorator()],
}

export const Dark: Template = {
  args: { item },
  decorators: [ThemeDecorator(Theme.DARK), LokiDelayDecorator()],
}

export const Choco: Template = {
  args: { item },
  decorators: [ThemeDecorator(Theme.CHOCOLATE), LokiDelayDecorator()],
}
