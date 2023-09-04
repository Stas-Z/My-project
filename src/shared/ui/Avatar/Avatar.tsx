import { CSSProperties, useMemo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Avatar.module.scss'

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
}

export const Avatar = (props: AvatarProps) => {
  const { className, size, src, alt } = props

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  )

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    />
  )
}
