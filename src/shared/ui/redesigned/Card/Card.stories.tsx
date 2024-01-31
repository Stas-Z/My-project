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

export const Padding0: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    padding: '0',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}
export const Padding8: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    padding: '8',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}
export const Padding16: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    padding: '16',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}
export const Padding24: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    padding: '24',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Round: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    variant: 'normal',
    border: 'round',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}
export const Partial: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    variant: 'normal',
    border: 'partial',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Normal: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    variant: 'normal',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Light: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    variant: 'light',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}
export const Outlined: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    variant: 'outlined',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const DarkNormal: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    variant: 'normal',
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}
export const DarkLight: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    variant: 'light',
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}
export const DarkOutlined: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    variant: 'outlined',
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const ChocoNormal: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    variant: 'normal',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
export const ChocoLight: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    variant: 'light',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
export const ChocoOutlined: Template = {
  args: {
    children: <Text title="title" text="text - text" />,
    variant: 'outlined',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
