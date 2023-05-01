import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextSize, TextTheme } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Light = Template.bind({})
Light.args = {
  title: 'Title Sample',
  text: 'Text Sample',
}
export const OnlyTitleLight = Template.bind({})
OnlyTitleLight.args = {
  title: 'Title Sample',
}
export const OnlyTextLight = Template.bind({})
OnlyTextLight.args = {
  text: 'Text Sample',
}

export const SizeL = Template.bind({})
SizeL.args = {
  title: 'Title Sample',
  text: 'Text Sample',
  size: TextSize.L,
}

export const Dark = Template.bind({})
Dark.args = {
  title: 'Title Sample',
  text: 'Text Sample',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Title Sample',
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'Text Sample',
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeLDark = Template.bind({})
SizeLDark.args = {
  title: 'Title Sample',
  text: 'Text Sample',
  size: TextSize.L,
}
SizeLDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = {
  title: 'Title Sample',
  text: 'Text Sample',
}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const OnlyTitleChoco = Template.bind({})
OnlyTitleChoco.args = {
  title: 'Title Sample',
}
OnlyTitleChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const OnlyTextChoco = Template.bind({})
OnlyTextChoco.args = {
  text: 'Text Sample',
}
OnlyTextChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const SizeLChoco = Template.bind({})
SizeLChoco.args = {
  title: 'Title Sample',
  text: 'Text Sample',
  size: TextSize.L,
}
SizeLChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const Error = Template.bind({})
Error.args = {
  title: 'Title Sample',
  text: 'Text Sample',
  theme: TextTheme.ERROR,
}
