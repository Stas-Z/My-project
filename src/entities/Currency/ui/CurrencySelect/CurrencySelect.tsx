import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback, useMemo } from 'react'
import { Currency } from '../../model/types/currency'

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
    <Select
      className={classNames('', {}, [className])}
      label={t('Currency')}
      options={currencyOptions}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      editing={!readonly}
    />
  )
})
