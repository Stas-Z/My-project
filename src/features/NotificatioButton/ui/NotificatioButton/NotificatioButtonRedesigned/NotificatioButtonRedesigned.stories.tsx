import { StoryObj, Meta } from '@storybook/react'
import { within, fireEvent } from '@storybook/testing-library'

import { Notification } from '@/entities/Notification/testing'
import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { NotificatioButtonRedesigned } from './NotificatioButtonRedesigned'

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
  title: 'features/NotificatioButton/NotificatioButtonRedesigned',
  component: NotificatioButtonRedesigned,
  decorators: [LokiDelayDecorator()],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await fireEvent.click(canvas.getByTestId('NotificatioButton.Trigger'))
  },
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
} as Meta<typeof NotificatioButtonRedesigned>

type Template = StoryObj<typeof NotificatioButtonRedesigned>

export const Light: Template = {
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ float: 'right' }}>
        <StoryComponent />
      </div>
    ),
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({}),
  ],
}

export const Dark: Template = {
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ float: 'right' }}>
        <StoryComponent />
      </div>
    ),
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ float: 'right' }}>
        <StoryComponent />
      </div>
    ),
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({}),
  ],
}
