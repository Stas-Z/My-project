import { ButtonHTMLAttributes, ReactNode, memo } from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export enum ButtonTheme {
  DEFAULT = 'default',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description Button theme. Responsible for button's color and border.
   * @default ButtonTheme.DEFAULT
   */
  theme?: ButtonTheme
  /**
   * @description Flag to make button squared.
   */
  square?: boolean
  /**
   * @description Button size. Responsible for button's text size.
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

/**
 * Use components from "redesigned" folder
 * @deprecated
 */
export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.DEFAULT,
    square,
    size = ButtonSize.M,
    disabled,
    fullWidth,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  }
  const addClass = [className, cls[theme], cls[size]]

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
