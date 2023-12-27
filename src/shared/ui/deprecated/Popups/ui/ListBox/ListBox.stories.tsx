import { Meta, StoryObj } from '@storybook/react'
import { within, fireEvent } from '@storybook/testing-library'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { PaddingDecorator } from '@/shared/config/storybook/PaddingDecorator/PaddingDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ListBox } from './ListBox'

export default {
  title: 'shared/deprecated/Popups/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [LokiDelayDecorator()],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await fireEvent.click(canvas.getByTestId('ListBox.Button'))
  },
} as Meta<typeof ListBox>

type Template = StoryObj<typeof ListBox>

const people = [
  { value: '1', content: 'Durward' },
  { value: '2', content: 'Kenton' },
  { value: '3', content: 'Therese' },
  { value: '4', content: 'Benedict' },
  { value: '5', content: 'Katelyn' },
]

export const TopLeft: Template = {
  args: {
    label: 'Text Sample',
    value: undefined,
    defaultValue: 'Options',
    items: people,
    direction: 'top_left',
  },
  decorators: [PaddingDecorator(250), ThemeDecorator(Theme.LIGHT)],
}

export const TopRight: Template = {
  args: {
    label: 'Text Sample',
    value: undefined,
    defaultValue: 'Options',
    items: people,
    direction: 'top_right',
  },
  decorators: [PaddingDecorator(250), ThemeDecorator(Theme.LIGHT)],
}

export const BottomLeft: Template = {
  args: {
    label: 'Text Sample',
    value: undefined,
    defaultValue: 'Options',
    items: people,
    direction: 'bottom_left',
  },
  decorators: [PaddingDecorator(250), ThemeDecorator(Theme.LIGHT)],
}

export const BottomRight: Template = {
  args: {
    label: 'Text Sample',
    value: undefined,
    defaultValue: 'Options',
    items: people,
    direction: 'bottom_right',
  },
  decorators: [PaddingDecorator(250), ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: {
    label: 'Text Sample',
    value: undefined,
    defaultValue: 'Options',
    items: people,
    direction: 'bottom_right',
  },
  decorators: [PaddingDecorator(250), ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {
    label: 'Text Sample',
    value: undefined,
    defaultValue: 'Options',
    items: people,
    direction: 'bottom_right',
  },
  decorators: [PaddingDecorator(250), ThemeDecorator(Theme.CHOCOLATE)],
}
