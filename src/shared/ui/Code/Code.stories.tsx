import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Code } from './Code'

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

const text = 'export default {\n'
  + "    title: 'shared/Code',\n"
  + '    component: Code,\n'
  + '    argTypes: {\n'
  + "        backgroundColor: { control: 'color' },\n"
  + '    },\n'
  + '} as ComponentMeta<typeof Code>;\n'
  + '\n'
  + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
  + '\n'
  + 'export const Normal = Template.bind({});'

export const Light = Template.bind({})
Light.args = {
  text,
}

export const Dark = Template.bind({})
Dark.args = { text }
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = { text }
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
