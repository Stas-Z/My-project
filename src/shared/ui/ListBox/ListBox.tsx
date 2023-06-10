import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, ReactNode, memo } from 'react'
import CheckIcon from 'shared/assets/icons/check-20-20.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { HStack } from '../Stack'
import cls from './ListBox.module.scss'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

type DropdownDirection = 'top' | 'bottom'

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
    direction = 'bottom',
    label,
    editing,
  } = props

  return (
    <HStack gap="8">
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
          className={classNames(cls.options, {}, [cls[direction]])}
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
                    [cls.active]: active,
                    [cls.selected]: selected,
                    [cls.disabled]: item.disabled,
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
