import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Card } from './Card'
import { Text } from '../Text/Text'

export default {
  title: 'shared/redesigned/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Card>

type Template = StoryObj<typeof Card>

export const Light: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Dark: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const Choco: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
