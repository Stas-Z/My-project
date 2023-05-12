import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Page } from './Page'

export default {
  title: 'shared/Page',
  component: Page,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const Light = Template.bind({})
Light.args = {
  children: 'Обертка для сраниц',
}

export const Dark = Template.bind({})
Dark.args = { children: 'Обертка для сраниц' }
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = { children: 'Обертка для сраниц' }
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
