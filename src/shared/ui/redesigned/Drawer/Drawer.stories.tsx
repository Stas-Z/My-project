import { StoryObj, Meta } from '@storybook/react'

import { AnimationDecorator } from '@/shared/config/storybook/AnimationDecorator/AnimationDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Drawer } from './Drawer'

const data =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, iste ut obcaecati, esse temporibus et quasi, omnis dolorum eveniet quos eius corrupti nam magni inventore excepturi dolor! Officiis, placeat sed.'

export default {
  title: 'shared/deprecated/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [AnimationDecorator()],
} as Meta<typeof Drawer>

type Template = StoryObj<typeof Drawer>

export const Light: Template = {
  args: {
    isOpen: true,
    children: data,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: {
    isOpen: true,
    children: <div style={{ color: '#04ff04' }}>{data}</div>,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {
    isOpen: true,
    children: data,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
