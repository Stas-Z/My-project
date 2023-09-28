import { Meta, StoryObj } from '@storybook/react'
import { within, fireEvent } from '@storybook/testing-library'

import { Notification } from '@/entities/Notification/testing'
import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { PaddingDecorator } from '@/shared/config/storybook/PaddingDecorator/PaddingDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Popover } from './Popover'
import { Button } from '../../../Button/Button'
import { Text } from '../../../Text/Text'

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
  },
  {
    id: '3',
    title: 'Уведомление 3',
    description: 'Произошло какое-то событие',
  },
  {
    id: '4',
    title: 'Уведомление 4',
    description: 'Произошло какое-то событие',
  },
]

const Data = () => (
  <div style={{ width: '230px' }}>
    {items?.map((item) => (
      <Text key={item.id} title={item.title} text={item.description} />
    ))}
  </div>
)

export default {
  title: 'shared/Popups/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [LokiDelayDecorator()],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await fireEvent.click(canvas.getByTestId('Popover.Trigger'))
  },
} as Meta<typeof Popover>

type Template = StoryObj<typeof Popover>

export const TopLeft: Template = {
  args: {
    trigger: <Button>Open</Button>,
    children: <Data />,
    direction: 'top_left',
  },
  decorators: [PaddingDecorator(260, 200), ThemeDecorator(Theme.LIGHT)],
}

export const TopRight: Template = {
  args: {
    trigger: <Button>Open</Button>,
    children: <Data />,
    direction: 'top_right',
  },
  decorators: [PaddingDecorator(260, 200), ThemeDecorator(Theme.LIGHT)],
}

export const BottomLeft: Template = {
  args: {
    trigger: <Button>Open</Button>,
    children: <Data />,
    direction: 'bottom_left',
  },
  decorators: [PaddingDecorator(260, 200), ThemeDecorator(Theme.LIGHT)],
}

export const BottomRight: Template = {
  args: {
    trigger: <Button>Open</Button>,
    children: <Data />,
  },
  decorators: [PaddingDecorator(260, 200), ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: { trigger: <Button>Open</Button>, children: <Data /> },
  decorators: [PaddingDecorator(260, 200), ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: { trigger: <Button>Open</Button>, children: <Data /> },
  decorators: [PaddingDecorator(260, 200), ThemeDecorator(Theme.CHOCOLATE)],
}
