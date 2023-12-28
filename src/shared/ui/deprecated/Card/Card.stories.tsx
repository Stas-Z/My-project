import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Card, CardTheme } from './Card'
import { Text } from '../Text/Text'

export default {
  title: 'shared/deprecated/Card',
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
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const LightOutlined: Template = {
  args: {
    theme: CardTheme.OUTLINED,
    children: <Text title="title" text="text - text" />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
