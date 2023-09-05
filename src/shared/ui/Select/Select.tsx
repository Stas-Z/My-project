import { ChangeEvent, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { typedMemo } from '@/shared/lib/react/typedMemo/typedMemo'

import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
  value?: T
  content?: string
}

interface SelectProps<T extends string> {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description Label for the Select
   */
  label?: string
  /**
   * @description List of items to render in Select
   */
  options?: SelectOption<T>[]
  /**
   * @description The value of items in Select
   */
  value?: T
  /**
   * @description Callback to change value
   */
  onChange?: (value: T) => void
  /**
   * @description Flag to disable Select and to add readonly class
   */
  readonly?: boolean
  /**
   * @description Flag to add additional editing class.
   */
  editing?: boolean
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
  const { className, label, options, onChange, value, readonly, editing } =
    props
  const { t } = useTranslation('profile')
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T)
    }
  }

  const optionList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content && t(opt.content)}
        </option>
      )),
    [options, t],
  )

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.editing]: editing,
  }

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  )
})
