import { memo } from 'react'

import AppSvg from '@/shared/assets/icons/app-image.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './AppLogo.module.scss'
import { HStack } from '../../deprecated/Stack'

interface AppLogoProps {
  className?: string
  size?: number
  color?: string
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, size = 50, color = 'black' } = props

  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppSvg
        width={size}
        height={size}
        color={color}
        className={cls.appLogo}
      />
    </HStack>
  )
})
