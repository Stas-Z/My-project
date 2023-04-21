import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Avatar } from './Avatar'
import AvatarImg from '../../assets/avatar.png'

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
