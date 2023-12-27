import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Code } from './Code'

export default {
  title: 'shared/deprecated/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Code>

type Template = StoryObj<typeof Code>

const text =
  'export default {\n' +
  "    title: 'shared/Code',\n" +
  '    component: Code,\n' +
  '    argTypes: {\n' +
  "        backgroundColor: { control: 'color' },\n" +
  '    },\n' +
  '} as ComponentMeta<typeof Code>;\n' +
  '\n' +
  'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
  '\n' +
  'export const Normal = Template.bind({});'

export const Light: Template = {
  args: { text },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: { text },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: { text },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
