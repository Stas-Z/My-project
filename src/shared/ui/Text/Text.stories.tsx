import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextTheme } from './Text'

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
export const onlyTitleLight = Template.bind({})
onlyTitleLight.args = {
  title: 'Title Sample',
}
export const onlyTextLight = Template.bind({})
onlyTextLight.args = {
  text: 'Text Sample',
}

export const Dark = Template.bind({})
Dark.args = {
  title: 'Title Sample',
  text: 'Text Sample',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
  title: 'Title Sample',
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
  text: 'Text Sample',
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = {
  title: 'Title Sample',
  text: 'Text Sample',
}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const onlyTitleChoco = Template.bind({})
onlyTitleChoco.args = {
  title: 'Title Sample',
}
onlyTitleChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const onlyTextChoco = Template.bind({})
onlyTextChoco.args = {
  text: 'Text Sample',
}
onlyTextChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const Error = Template.bind({})
Error.args = {
  title: 'Title Sample',
  text: 'Text Sample',
  theme: TextTheme.ERROR,
}
