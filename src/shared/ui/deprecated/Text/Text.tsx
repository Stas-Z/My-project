import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
  INHERIT = 'inherit',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description The text of the title
   */
  title?: string
  /**
   * @description The text to display
   */
  text?: string
  /**
   * @description The theme of the text. Changes the color
   * @default TextTheme.PRIMARY
   */
  theme?: TextTheme
  /**
   * @description The text alignment
   */
  align?: TextAlign
  /**
   * @description The size of the text
   * @default TextSize.M
   */
  size?: TextSize

  'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
}

/**
 * Use components from "redesigned" folder
 * @deprecated
 */
export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.INHERIT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]

  const classes = [className, cls[theme], cls[align], cls[size]]

  return (
    <div className={classNames(cls.text, {}, classes)}>
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  )
})
