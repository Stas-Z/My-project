import { StoryObj, Meta } from '@storybook/react'
import { within, fireEvent } from '@storybook/testing-library'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { SidebarDeprecated } from './SidebarDeprecated'

export default {
  title: 'widgets/Sidebar/SidebarDeprecated',
  component: SidebarDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof SidebarDeprecated>

type Template = StoryObj<typeof SidebarDeprecated>

export const Light: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ user: { authData: {} } }),
  ],
}

export const LightCollpsed: Template = {
  args: {},
  decorators: [
    LokiDelayDecorator(),
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ user: { authData: {} } }),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await fireEvent.click(canvas.getByTestId('sidebar-toggle'))
  },
}

export const LightNoAuth: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
}

export const Dark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
  ],
}

export const DarkNoAuth: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
}

export const Choco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({ user: { authData: {} } }),
  ],
}

export const ChocoNoAuth: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE), StoreDecorator({})],
}
