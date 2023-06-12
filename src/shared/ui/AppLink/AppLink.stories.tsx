import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import AppLink, { AppLinkTheme } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { to: '/' },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
}
export const Dark = Template.bind({})
Dark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const Inverted = Template.bind({})
Inverted.args = {
  children: 'Text',
  theme: AppLinkTheme.INVERTED,
}
export const InvertedDark = Template.bind({})
InvertedDark.args = {
  children: 'Text',
  theme: AppLinkTheme.INVERTED,
}
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const InvertedChoco = Template.bind({})
InvertedChoco.args = {
  children: 'Text',
  theme: AppLinkTheme.INVERTED,
}
InvertedChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const Red = Template.bind({})
Red.args = {
  children: 'Text',
  theme: AppLinkTheme.RED,
}
export const RedDark = Template.bind({})
RedDark.args = {
  children: 'Text',
  theme: AppLinkTheme.RED,
}
RedDark.decorators = [ThemeDecorator(Theme.DARK)]
