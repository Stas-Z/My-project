import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ListBox } from 'shared/ui/Popups'
import { Currency } from '../../model/consts/currencyConsts'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { t } = useTranslation('profile')
  const {
    className, onChange, value, readonly,
  } = props

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency)
    },
    [onChange],
  )
  const currencyOptions = useMemo(
    () => Object.entries(Currency).map((val) => ({
      value: val[0],
      content: val[1],
    })),
    [],
  )

  return (
    <ListBox
      className={classNames('', {}, [className])}
      value={value}
      items={currencyOptions}
      onChange={onChangeHandler}
      defaultValue={t('Currency')}
      label={t('Currency')}
      readonly={readonly}
      direction="top_right"
      editing={!readonly}
    />
  )
})
