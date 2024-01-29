import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import CopyIcon from '@/shared/assets/icons/copy.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Code.module.scss'
import { Icon } from '../Icon/Icon'

interface CodeProps {
  className?: string
  text: string
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props
  const { t } = useTranslation()

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Icon clickable onClick={onCopy} Svg={CopyIcon} className={cls.copyBtn} />

      <code>{text}</code>
    </pre>
  )
})
