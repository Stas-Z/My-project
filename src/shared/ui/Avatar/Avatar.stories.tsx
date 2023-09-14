import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatar } from './Avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Normal = Template.bind({})
Normal.args = {
  size: 150,
  src: 'assets/avatar.png',
}

export const Small = Template.bind({})
Small.args = {
  size: 50,
  src: 'assets/avatar.png',
}
