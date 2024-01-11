import { HTMLAttributes, ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Card.module.scss'

export type CardVariant = 'normal' | 'outlined' | 'light'
export type CardPadding = '0' | '8' | '16' | '24'
export type CardBorder = 'round' | 'default'

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
   * @default 'normal'
   */
  variant?: CardVariant
  /**
   * @description Flag to make card width 100%.
   */
  max?: boolean
  /**
   * @description Sets padding.
   * @default '8'
   */
  padding?: CardPadding
  /**
   * @description Sets border-radius.
   * @default 'default'
   */
  border?: CardBorder
}
const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
}

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    max,
    padding = '8',
    border = 'default',
    ...otherProps
  } = props

  const paddingClass = mapPaddingToClass[padding]
  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [
        className,
        cls[variant],
        cls[paddingClass],
        cls[border],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
