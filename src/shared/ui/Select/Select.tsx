import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { ChangeEvent, memo, useMemo } from 'react'
import cls from './Select.module.scss'

export interface SelectOption {
  value?: string
  content?: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
  editing?: boolean
}

export const Select = memo((props: SelectProps) => {
  const {
    className, label, options, onChange, value, readonly, editing,
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const optionList = useMemo(
    () => options?.map((opt) => (
      <option className={cls.option} value={opt.value} key={opt.value}>
        {opt.content}
      </option>
    )),
    [options],
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
