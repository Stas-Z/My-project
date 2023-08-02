import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'
import { useTranslation } from 'react-i18next'
import cls from './Code.module.scss'
import { Button, ButtonTheme } from '../Button/Button'
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
      <Button
        onClick={onCopy}
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
        title={t('Copy')}
      >
        <Icon Svg={CopyIcon} height={22} width={22} />
      </Button>
      <code>{text}</code>
    </pre>
  )
})
