import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
import { Notification } from '@/entities/Notification/testing'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text } from '../../../Text/Text'
import { Button } from '../../../Button/Button'
import { Popover } from './Popover'

const items: Notification[] = [
  {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
  },
  {
    id: '2',
    title: 'Уведомление 2',
    description: 'Произошло какое-то событие',
  },
  {
    id: '3',
    title: 'Уведомление 3',
    description: 'Произошло какое-то событие',
  },
  {
    id: '4',
    title: 'Уведомление 4',
    description: 'Произошло какое-то событие',
  },
  {
    id: '5',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
  },
]

const Data = () => (
  <div>
    {items?.map((item) => (
      <Text key={item.id} title={item.title} text={item.description} />
    ))}
  </div>
)

export default {
  title: 'shared/Popups/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const Light = Template.bind({})
Light.args = {
  trigger: <Button>Open</Button>,
  children: <Data />,
}

export const Dark = Template.bind({})
Dark.args = { trigger: <Button>Open</Button>, children: <Data /> }
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = { trigger: <Button>Open</Button>, children: <Data /> }
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
