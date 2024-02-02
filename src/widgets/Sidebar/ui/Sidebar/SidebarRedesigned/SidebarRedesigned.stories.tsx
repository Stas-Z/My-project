import { Meta, StoryObj } from '@storybook/react'
import { fireEvent, within } from '@storybook/testing-library'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { SidebarRedesigned } from './SidebarRedesigned'

export default {
  title: 'widgets/Sidebar/SidebarRedesigned',
  component: SidebarRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof SidebarRedesigned>

type Template = StoryObj<typeof SidebarRedesigned>

export const Light: Template = {
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ height: '100vh' }}>
        <StoryComponent />
      </div>
    ),
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
  ],
}

export const LightCollpsed: Template = {
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ height: '100vh' }}>
        <StoryComponent />
      </div>
    ),
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
  decorators: [
    (StoryComponent) => (
      <div style={{ height: '100vh' }}>
        <StoryComponent />
      </div>
    ),
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const Dark: Template = {
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ height: '100vh' }}>
        <StoryComponent />
      </div>
    ),
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ height: '100vh' }}>
        <StoryComponent />
      </div>
    ),
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({ user: { authData: {} } }),
  ],
}
