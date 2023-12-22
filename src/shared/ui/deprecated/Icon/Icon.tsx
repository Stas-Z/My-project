import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Icon.module.scss'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description Icon component
   */
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  /**
   * @description Icon color
   */
  inverted?: boolean
}

/**
 * Use components from "redesigned" folder
 * @deprecated
 */
export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted, ...otherProps } = props

  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.icon, {}, [
        className,
      ])}
      {...otherProps}
    />
  )
})
