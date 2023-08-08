import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ListBox } from '@/shared/ui/Popups'
import { Country } from '../model/consts/countryConsts'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { t } = useTranslation('profile')
  const { className, onChange, value, readonly } = props

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country)
    },
    [onChange],
  )

  const countryOptions = useMemo(
    () =>
      Object.entries(Country).map((val) => ({
        value: val[0],
        content: val[1],
      })),
    [],
  )

  return (
    <ListBox
      className={classNames('', {}, [className])}
      value={value}
      items={countryOptions}
      onChange={onChangeHandler}
      defaultValue={t('Country')}
      label={t('Country')}
      readonly={readonly}
      direction="top_right"
      editing={!readonly}
    />
  )
})
