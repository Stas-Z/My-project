import { Meta, StoryObj } from '@storybook/react'

import AvatarImg from '@/shared/assets/tests/avatar.png'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Avatar } from './Avatar'

export default {
  title: 'shared/redesigned/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Avatar>

type Template = StoryObj<typeof Avatar>

export const Normal: Template = {
  args: {
    size: 150,
    src: AvatarImg,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Small: Template = {
  args: {
    size: 50,
    src: AvatarImg,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Default: Template = {
  args: {
    size: 150,
    src: '',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}
