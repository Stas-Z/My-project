import { CSSProperties, useMemo } from 'react'

import UserIcon from '@/shared/assets/icons/user-filled.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Avatar.module.scss'
import { AppImage } from '../../redesigned/AppImage'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'
import { HStack } from '../Stack'
import { Text } from '../Text'

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
   * @description Username.
   */
  username?: string
}

export const Avatar = (props: AvatarProps) => {
  const { className, size = 100, src, alt, username } = props

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  )

  const fallback = <Skeleton width={size} height={size} border="50%" />
  const errorFallback = <Icon height={size} width={size} Svg={UserIcon} />

  const content = (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    />
  )

  if (username) {
    return (
      <HStack gap="8">
        {content}
        <Text text={username} bold />
      </HStack>
    )
  }

  return content
}
