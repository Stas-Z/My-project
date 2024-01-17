import { memo, useCallback, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { ToggleFeatures } from '@/shared/lib/features'
import { DropdownDirection } from '@/shared/types/ui'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { ListBox } from '@/shared/ui/redesigned/Popups'

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

  const propsList = {
    className,
    value,
    items: countryOptions,
    onChange: onChangeHandler,
    defaultValue: t('Country'),
    label: t('Country'),
    readonly,
    direction: 'top_right' as DropdownDirection,
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ListBox {...propsList} />}
      off={<ListBoxDeprecated {...propsList} editing={!readonly} />}
    />
  )
})
