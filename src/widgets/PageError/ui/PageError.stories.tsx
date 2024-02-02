import { StoryObj, Meta } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { PageError } from './PageError'

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof PageError>

type Template = StoryObj<typeof PageError>

export const Deprecated: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const Redesigned: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), NewDesignDecorator],
}
