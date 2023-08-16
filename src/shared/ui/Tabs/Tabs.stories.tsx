import { action } from '@storybook/addon-actions'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Tabs } from './Tabs'

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Light = Template.bind({})
Light.args = {
  tabs: [
    {
      value: 'tab 1',
      content: 'tab 1',
    },
    {
      value: 'tab 2',
      content: 'tab 2',
    },
    {
      value: 'tab 3',
      content: 'tab 3',
    },
  ],
  value: 'tab 2',
  onTabClick: action('onTabClick'),
}

export const Dark = Template.bind({})
Dark.args = {
  tabs: [
    {
      value: 'tab 1',
      content: 'tab 1',
    },
    {
      value: 'tab 2',
      content: 'tab 2',
    },
    {
      value: 'tab 3',
      content: 'tab 3',
    },
  ],
  value: 'tab 2',
  onTabClick: action('onTabClick'),
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = {
  tabs: [
    {
      value: 'tab 1',
      content: 'tab 1',
    },
    {
      value: 'tab 2',
      content: 'tab 2',
    },
    {
      value: 'tab 3',
      content: 'tab 3',
    },
  ],
  value: 'tab 2',
  onTabClick: action('onTabClick'),
}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
