import { Meta, StoryObj } from '@storybook/react'
import { fireEvent, within } from '@storybook/testing-library'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { PaddingDecorator } from '@/shared/config/storybook/PaddingDecorator/PaddingDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Dropdown } from './Dropdown'
import { Button } from '../../../Button'

export default {
  title: 'shared/deprecated/Popups/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: { story: { iframeHeight: '200px', inline: false } },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [LokiDelayDecorator()],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await fireEvent.click(canvas.getByTestId('Dropdown.Trigger'))
  },
} as Meta<typeof Dropdown>

type Template = StoryObj<typeof Dropdown>

const items = [
  { content: 'first', id: '1' },
  { content: 'second', id: '2' },
  { content: 'third', id: '3' },
]

export const TopLeft: Template = {
  args: {
    trigger: <Button>Open</Button>,
    items,
    direction: 'top_left',
  },
  decorators: [PaddingDecorator(), ThemeDecorator(Theme.LIGHT)],
}

export const TopRight: Template = {
  args: {
    trigger: <Button>Open</Button>,
    items,
    direction: 'top_right',
  },
  decorators: [PaddingDecorator(), ThemeDecorator(Theme.LIGHT)],
}

export const BottomLeft: Template = {
  args: {
    trigger: <Button>Open</Button>,
    items,
    direction: 'bottom_left',
  },
  decorators: [PaddingDecorator(), ThemeDecorator(Theme.LIGHT)],
}

export const BottomRight: Template = {
  args: {
    trigger: <Button>Open</Button>,
    items,
  },
  decorators: [PaddingDecorator(), ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: {
    trigger: <Button>Open</Button>,
    items,
  },
  decorators: [PaddingDecorator(), ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {
    trigger: <Button>Open</Button>,
    items,
  },
  decorators: [PaddingDecorator(), ThemeDecorator(Theme.CHOCOLATE)],
}
