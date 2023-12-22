import { HTMLAttributes, ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description Card content
   */
  children: ReactNode
  /**
   * @description Card theme. Responsible for card's color and border.
   * @default CardTheme.NORMAL
   */
  theme?: CardTheme
  /**
   * @description Flag to make card width 100%.
   */
  max?: boolean
}

/**
 * Use components from "redesigned" folder
 * @deprecated
 */
export const Card = (props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    max,
    ...otherProps
  } = props

  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [
        className,
        cls[theme],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
