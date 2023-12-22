import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Modal>

type Template = StoryObj<typeof Modal>

export const Light: Template = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, iste ut obcaecati, esse temporibus et quasi, omnis dolorum eveniet quos eius corrupti nam magni inventore excepturi dolor! Officiis, placeat sed.',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, iste ut obcaecati, esse temporibus et quasi, omnis dolorum eveniet quos eius corrupti nam magni inventore excepturi dolor! Officiis, placeat sed.',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, iste ut obcaecati, esse temporibus et quasi, omnis dolorum eveniet quos eius corrupti nam magni inventore excepturi dolor! Officiis, placeat sed.',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
