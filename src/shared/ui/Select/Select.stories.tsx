import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Select } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Select>

type Template = StoryObj<typeof Select>

export const Light: Template = {
  args: {
    label: 'Text Sample',
    options: [
      { value: '1', content: '1' },
      { value: 'a', content: 'a' },
      { value: '+', content: '+' },
    ],
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: {
    label: 'Text Sample',
    options: [
      { value: '1', content: '1' },
      { value: 'a', content: 'a' },
      { value: '+', content: '+' },
    ],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {
    label: 'Text Sample',
    options: [
      { value: '1', content: '1' },
      { value: 'a', content: 'a' },
      { value: '+', content: '+' },
    ],
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
