import { StoryObj, Meta } from '@storybook/react'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { AppImage } from './AppImage'
import NoImage from '../../../assets/icons/blank-picture.svg'
import UserIcon from '../../../assets/icons/user-filled.svg'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

export default {
  title: 'shared/AppImage',
  component: AppImage,
  decorators: [LokiDelayDecorator()],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AppImage>

type Template = StoryObj<typeof AppImage>

export const ArticleBlank: Template = {
  args: {
    errorFallback: <Icon width={200} height={200} Svg={NoImage} />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const ArticleLoading: Template = {
  args: {
    errorFallback: <Skeleton width={200} height={200} />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const AvatarBlank: Template = {
  args: {
    errorFallback: <Icon width={200} height={200} Svg={UserIcon} />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const AvatarLoading: Template = {
  args: {
    errorFallback: <Skeleton width={200} height={200} border="50%" />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const AvatarDark: Template = {
  args: {
    errorFallback: <Icon width={200} height={200} Svg={UserIcon} />,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const AvatarChoco: Template = {
  args: {
    errorFallback: <Icon width={200} height={200} Svg={UserIcon} />,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
