import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { UserRole } from '@/entities/User/testing'
import { AvatarDropdown } from './AvatarDropdown'

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  decorators: [
    (Story) => (
      <div style={{ float: 'right' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AvatarDropdown>

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <AvatarDropdown {...args} />
)

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({ user: { authData: { id: '1', roles: [UserRole.ADMIN] } } }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ user: { authData: { id: '1', roles: [UserRole.ADMIN] } } }),
]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({ user: { authData: { id: '1', roles: [UserRole.ADMIN] } } }),
]
