import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Skeleton } from './Skeleton'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
)

export const Circle = Template.bind({})
Circle.args = {
  border: '50%',
  width: 100,
  height: 100,
}

export const DarkCircle = Template.bind({})
DarkCircle.args = {
  border: '50%',
  width: 100,
  height: 100,
}
DarkCircle.decorators = [ThemeDecorator(Theme.DARK)]

export const ChocoCircle = Template.bind({})
ChocoCircle.args = {
  border: '50%',
  width: 100,
  height: 100,
}
ChocoCircle.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const Light = Template.bind({})
Light.args = {
  width: '100%',
  height: 200,
}

export const Dark = Template.bind({})
Dark.args = {
  width: '100%',
  height: 200,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = {
  width: '100%',
  height: 200,
}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
