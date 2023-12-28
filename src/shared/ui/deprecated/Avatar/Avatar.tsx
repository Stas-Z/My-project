import { CSSProperties, useMemo } from 'react'

import UserIcon from '@/shared/assets/icons/user-filled.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Avatar.module.scss'
import { AppImage } from '../../redesigned/AppImage'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

interface AvatarProps {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description Avatar image source.
   */
  src?: string
  /**
   * @description Avatar width and height.
   */
  size?: number
  /**
   * @description An alternative text description of the image.
   */
  alt?: string
  /**
   * @description Boolean flag for inverted color
   */
  fallbackInverted?: boolean
}

/**
 * Use components from "redesigned" folder
 * @deprecated
 */
export const Avatar = (props: AvatarProps) => {
  const { className, size = 100, src, alt, fallbackInverted } = props

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  )

  const fallback = <Skeleton width={size} height={size} border="50%" />
  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      height={size}
      width={size}
      Svg={UserIcon}
    />
  )

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    />
  )
}
