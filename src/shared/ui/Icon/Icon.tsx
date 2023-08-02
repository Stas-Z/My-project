import { CSSProperties, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  inverted?: boolean
  height?: string | number
  width?: string | number
}

export const Icon = memo((props: IconProps) => {
  const {
    className, Svg, inverted, height, width,
  } = props

  const styles: CSSProperties = {
    width,
    height,
  }

  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.icon, {}, [
        className,
      ])}
      style={styles}
    />
  )
})
