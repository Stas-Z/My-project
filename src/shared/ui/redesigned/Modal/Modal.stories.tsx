import { StoryObj, Meta } from '@storybook/react'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Modal } from './Modal'

export default {
  title: 'shared/redesigned/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof Modal>

type Template = StoryObj<typeof Modal>

export const Light: Template = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, iste ut obcaecati, esse temporibus et quasi, omnis dolorum eveniet quos eius corrupti nam magni inventore excepturi dolor! Officiis, placeat sed.',
  },
  decorators: [ThemeDecorator(Theme.LIGHT), LokiDelayDecorator()],
}

export const Dark: Template = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, iste ut obcaecati, esse temporibus et quasi, omnis dolorum eveniet quos eius corrupti nam magni inventore excepturi dolor! Officiis, placeat sed.',
  },
  decorators: [ThemeDecorator(Theme.DARK), LokiDelayDecorator()],
}

export const Choco: Template = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, iste ut obcaecati, esse temporibus et quasi, omnis dolorum eveniet quos eius corrupti nam magni inventore excepturi dolor! Officiis, placeat sed.',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE), LokiDelayDecorator()],
}
