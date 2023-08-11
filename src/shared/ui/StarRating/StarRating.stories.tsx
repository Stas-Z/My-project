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

export const Star1 = Template.bind({})
Star1.args = { size: 50, selectedStars: 1 }
export const Star2 = Template.bind({})
Star2.args = { size: 50, selectedStars: 2 }
export const Star3 = Template.bind({})
Star3.args = { size: 50, selectedStars: 3 }
export const Star4 = Template.bind({})
Star4.args = { size: 50, selectedStars: 4 }
export const Star5 = Template.bind({})
Star5.args = { size: 50, selectedStars: 5 }

export const Light = Template.bind({})
Light.args = { size: 50 }

export const Dark = Template.bind({})
Dark.args = { size: 50 }
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = { size: 50 }
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
