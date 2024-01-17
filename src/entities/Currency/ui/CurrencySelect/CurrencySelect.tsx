import { memo, useCallback, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { ToggleFeatures } from '@/shared/lib/features'
import { DropdownDirection } from '@/shared/types/ui'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { ListBox } from '@/shared/ui/redesigned/Popups'

import { Currency } from '../../model/consts/currencyConsts'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { t } = useTranslation('profile')
  const { className, onChange, value, readonly } = props

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency)
    },
    [onChange],
  )
  const currencyOptions = useMemo(
    () =>
      Object.entries(Currency).map((val) => ({
        value: val[0],
        content: val[1],
      })),
    [],
  )

  const propsList = {
    className,
    value,
    items: currencyOptions,
    onChange: onChangeHandler,
    defaultValue: t('Currency'),
    label: t('Currency'),
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
