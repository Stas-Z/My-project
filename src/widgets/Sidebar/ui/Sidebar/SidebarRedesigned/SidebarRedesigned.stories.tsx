import { Meta, StoryObj } from '@storybook/react'
import { fireEvent, within } from '@storybook/testing-library'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { RedesignedDecorator } from '@/shared/config/storybook/RedesignedDecorator/RedesignedDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { SidebarRedesigned } from './SidebarRedesigned'

export default {
  title: 'widgets/Sidebar/SidebarRedesigned',
  component: SidebarRedesigned,
  decorators: [RedesignedDecorator(true)],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
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
    ThemeDecorator(Theme.LIGHT, true),
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
    ThemeDecorator(Theme.LIGHT, true),
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
    ThemeDecorator(Theme.DARK, true),
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
    ThemeDecorator(Theme.CHOCOLATE, true),
    StoreDecorator({ user: { authData: {} } }),
  ],
}
