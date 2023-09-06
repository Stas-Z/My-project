import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { AppImage } from './AppImage'
import NoImage from '../../assets/icons/blank-picture.svg'
import UserIcon from '../../assets/icons/user-filled.svg'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

export default {
  title: 'shared/AppImage',
  component: AppImage,
  decorators: [LokiDelayDecorator()],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppImage>

const Template: ComponentStory<typeof AppImage> = (args) => (
  <AppImage {...args} />
)

export const ArticleBlank = Template.bind({})
ArticleBlank.args = {
  errorFallback: <Icon width={200} height={200} Svg={NoImage} />,
}
export const ArticleLoading = Template.bind({})
ArticleLoading.args = {
  errorFallback: <Skeleton width={200} height={200} />,
}
export const AvatarBlank = Template.bind({})
AvatarBlank.args = {
  errorFallback: <Icon width={200} height={200} Svg={UserIcon} />,
}
export const AvatarLoading = Template.bind({})
AvatarLoading.args = {
  errorFallback: <Skeleton width={200} height={200} border="50%" />,
}

export const AvatarDark = Template.bind({})
AvatarDark.args = {
  errorFallback: <Icon width={200} height={200} Svg={UserIcon} />,
}
AvatarDark.decorators = [ThemeDecorator(Theme.DARK)]

export const AvatarChoco = Template.bind({})
AvatarChoco.args = {
  errorFallback: <Icon width={200} height={200} Svg={UserIcon} />,
}
AvatarChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
