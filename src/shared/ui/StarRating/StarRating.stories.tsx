import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StarRating } from './StarRating'

export default {
  title: 'shared/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StarRating>

const Template: ComponentStory<typeof StarRating> = (args) => (
  <StarRating {...args} />
)

export const Light = Template.bind({})
Light.args = { size: 50 }

export const Dark = Template.bind({})
Dark.args = { size: 50 }
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = { size: 50 }
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
