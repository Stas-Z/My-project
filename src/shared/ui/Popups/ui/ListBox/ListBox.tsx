import { Fragment, ReactNode, memo } from 'react'

import { Listbox as HListbox } from '@headlessui/react'

import CheckIcon from '@/shared/assets/icons/check-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'

import cls from './ListBox.module.scss'
import { Button, ButtonTheme } from '../../../Button/Button'
import { Icon } from '../../../Icon/Icon'
import { HStack } from '../../../Stack'
import popupCls from '../../styles/popup.module.scss'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  className?: string
  items?: ListBoxItem[]
  value?: string
  defaultValue?: string
  onChange: <T extends string>(value: T) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
  editing?: boolean
}

export const ListBox = memo((props: ListBoxProps) => {
  const {
    className,
    items,
    onChange,
    defaultValue,
    value,
    readonly,
    direction = 'bottom_right',
    label,
    editing,
  } = props

  return (
    <HStack gap="8" className={classNames('', {}, [popupCls.popup])}>
      {label && (
        <span className={classNames('', { [cls.editing]: editing })}>
          {`${label}>`}
        </span>
      )}
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(cls.listBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button as="div">
          <Button disabled={readonly} theme={ButtonTheme.CLEAR}>
            {value ?? defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, [popupCls[direction]])}
        >
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.selected]: selected,
                    [popupCls.disabled]: item.disabled,
                  })}
                >
                  <span>{item.content}</span>
                  {selected && (
                    <HStack as="span" className={cls.iconWrapper}>
                      <Icon Svg={CheckIcon} className={cls.icon} />
                    </HStack>
                  )}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  )
})
