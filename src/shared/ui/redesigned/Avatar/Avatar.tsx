import { CSSProperties, useMemo } from 'react'

import UserIcon from '@/shared/assets/icons/user-filled.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Avatar.module.scss'
import { AppImage } from '../../redesigned/AppImage'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'
import { HStack, VStack } from '../Stack'
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
   * @description add username.
   */
  username?: string
  /**
   * @description place username under avatar.
   */
  vertical?: boolean
}

export const Avatar = (props: AvatarProps) => {
  const { className, size = 100, src, alt, username, vertical } = props

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
    if (vertical) {
      return (
        <VStack gap="8" align="center">
          {content}
          <Text text={username} bold className={cls.vertical} />
        </VStack>
      )
    }
    return (
      <HStack gap="8">
        {content}
        <Text text={username} bold />
      </HStack>
    )
  }

  return content
}
