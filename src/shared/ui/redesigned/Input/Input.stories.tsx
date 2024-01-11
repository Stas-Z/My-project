import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Input } from './Input'

export default {
  title: 'shared/redesigned/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Input>

type Template = StoryObj<typeof Input>

export const Light: Template = {
  args: {
    placeholder: 'Text Sample',
    value: '123123',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Dark: Template = {
  args: {
    placeholder: 'Text Sample',
    value: '123123',
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const Choco: Template = {
  args: {
    placeholder: 'Text Sample',
    value: '123123',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
