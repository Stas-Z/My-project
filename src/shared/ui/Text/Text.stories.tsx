import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextSize, TextTheme } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const SizeS = Template.bind({})
SizeS.args = {
  size: TextSize.S,
  title: 'Title Sample',
  text: 'Text Sample',
}
export const SizeM = Template.bind({})
SizeM.args = {
  title: 'Title Sample',
  text: 'Text Sample',
}
export const SizeL = Template.bind({})
SizeL.args = {
  title: 'Title Sample',
  text: 'Text Sample',
  size: TextSize.L,
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Title Sample',
}
export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'Text Sample',
}

export const Dark = Template.bind({})
Dark.args = {
  title: 'Title Sample',
  text: 'Text Sample',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = {
  title: 'Title Sample',
  text: 'Text Sample',
}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const Error = Template.bind({})
Error.args = {
  title: 'Title Sample',
  text: 'Text Sample',
  theme: TextTheme.ERROR,
}
