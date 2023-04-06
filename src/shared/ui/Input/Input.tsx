import { classNames } from 'shared/lib/classNames/classNames'
import React, {
  InputHTMLAttributes, memo, useEffect, useState,
} from 'react'
import { Omit } from 'react-redux'
import cls from './Input.module.scss'

// Исключаем пропсы которые передаём вторым аргументом.
// Omit<'то что мы забераем','то что мы исключаем'>
type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>

// В InputHTMLAttributes уже есть value и onChange, поэтому их надо исключить через Omit.
// Omit позовляет из типа забрать все пропсы и исключить те, которые нам не нужны.
interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.inputBlock}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          {...otherProps}
        />
      </div>
    </div>
  )
})
