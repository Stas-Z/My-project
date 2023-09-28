import { StoryObj, Meta } from '@storybook/react'
import { within, fireEvent } from '@storybook/testing-library'

import { UserRole } from '@/entities/User/testing'
import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { AvatarDropdown } from './AvatarDropdown'

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  decorators: [LokiDelayDecorator()],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await fireEvent.click(canvas.getByTestId('AvatarDropdown.Trigger'))
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AvatarDropdown>

type Template = StoryObj<typeof AvatarDropdown>

export const Light: Template = {
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ float: 'right' }}>
        <StoryComponent />
      </div>
    ),
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      user: { authData: { id: '1', roles: [UserRole.ADMIN] } },
    }),
  ],
}

export const Dark: Template = {
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ float: 'right' }}>
        <StoryComponent />
      </div>
    ),
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: { authData: { id: '1', roles: [UserRole.ADMIN] } },
    }),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ float: 'right' }}>
        <StoryComponent />
      </div>
    ),
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      user: { authData: { id: '1', roles: [UserRole.ADMIN] } },
    }),
  ],
}
