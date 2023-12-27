import { ReactNode, Ref, forwardRef, memo } from 'react'

import { Link, LinkProps } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description AppLink theme. Responsible for AppLink's color.
   * @default AppLinkTheme.PRIMARY
   */
  theme?: AppLinkTheme
  /**
   * @description AppLink content
   */
  children?: ReactNode
}

const AppLink = forwardRef(
  (props: AppLinkProps, ref: Ref<HTMLAnchorElement>) => {
    const {
      to,
      className,
      children,
      theme = AppLinkTheme.PRIMARY,
      ...otherProps
    } = props

    return (
      <Link
        ref={ref}
        to={to}
        className={classNames(cls.appLink, {}, [className, cls[theme]])}
        {...otherProps}
      >
        {children}
      </Link>
    )
  },
)
/**
 * Use components from "redesigned" folder
 * @deprecated
 */
export default memo(AppLink)
