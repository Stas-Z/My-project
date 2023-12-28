import { ButtonHTMLAttributes, ReactNode, memo } from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export type ButtonVariant = 'clear' | 'outline'

export type ButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description Button variant. Responsible for button's color and border.
   * @default 'outline'
   */
  variant?: ButtonVariant
  /**
   * @description Flag to make button squared.
   */
  square?: boolean
  /**
   * @description Button size. Responsible for button's text size.
   * @default 'm'
   */
  size?: ButtonSize
  /**
   * @description Flag to disable button.
   */
  disabled?: boolean
  /**
   * @description Button content
   */
  children?: ReactNode
  /**
   * @description Flag to make button's width 100%.
   */
  fullWidth?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'outline',
    square,
    size = 'm',
    disabled,
    fullWidth,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  }
  const addClass = [className, cls[variant], cls[size]]

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(cls.button, mods, addClass)}
      {...otherProps}
    >
      {children}
    </button>
  )
})
