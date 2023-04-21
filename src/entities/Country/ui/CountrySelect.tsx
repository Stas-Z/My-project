import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback, useMemo } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { Country } from '../model/types/country'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { t } = useTranslation('profile')
  const {
    className, onChange, value, readonly,
  } = props

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country)
    },
    [onChange],
  )

  const countryOptions = useMemo(
    () => Object.entries(Country).map((val) => ({
      value: val[0],
      content: val[1],
    })),
    [],
  )

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Country')}
      options={countryOptions}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      editing={!readonly}
    />
  )
})
