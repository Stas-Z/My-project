import React, { InputHTMLAttributes, memo } from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'

import cls from './Input.module.scss'

// Исключаем пропсы которые передаём вторым аргументом.
// Omit<'то что мы забераем','то что мы исключаем'>
type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>

// В InputHTMLAttributes уже есть value и onChange, поэтому их надо исключить через Omit.
// Omit позовляет из типа забрать все пропсы и исключить те, которые нам не нужны.
interface InputProps extends HTMLInputProps {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description The value in Input
   */
  value?: string | number
  /**
   * @description Callback to change value in input
   */
  onChange?: (value: string) => void
  /**
   * @description Flag to disable Input and to add readonly class
   */
  readonly?: boolean
  /**
   * @description Flag to add additional editing class.
   */
  editing?: boolean
}

/**
 * Use components from "redesigned" folder
 * @deprecated
 */
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    readonly,
    editing,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.editing]: editing,
  }

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.inputBlock}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          readOnly={readonly}
          {...otherProps}
        />
      </div>
    </div>
  )
})
