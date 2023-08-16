import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Page } from './Page'

export default {
  title: 'widgets/Page',
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
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = { children: 'Обертка для сраниц' }
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Choco = Template.bind({})
Choco.args = { children: 'Обертка для сраниц' }
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE), StoreDecorator({})]
