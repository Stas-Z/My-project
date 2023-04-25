import { ComponentMeta, ComponentStory } from '@storybook/react'
import AvatarImg from '../../assets/tests/avatar.png'
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
  src: AvatarImg,
}

export const Small = Template.bind({})
Small.args = {
  size: 50,
  src: AvatarImg,
}
