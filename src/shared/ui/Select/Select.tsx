import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { ChangeEvent, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
  value?: T
  content?: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: SelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
  editing?: boolean
}

const typedMemo: <T>(Component: T) => T = memo

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
  const {
    className, label, options, onChange, value, readonly, editing,
  } = props
  const { t } = useTranslation('profile')
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T)
    }
  }

  const optionList = useMemo(
    () => options?.map((opt) => (
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
