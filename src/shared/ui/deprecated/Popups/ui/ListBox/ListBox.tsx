import { Fragment, ReactNode, memo, useMemo } from 'react'

import { Listbox as HListbox } from '@headlessui/react'

import CheckIcon from '@/shared/assets/icons/check-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { TestProps } from '@/shared/types/tests'
import { DropdownDirection } from '@/shared/types/ui'

import cls from './ListBox.module.scss'
import { HStack } from '../../../../redesigned/Stack'
import { Button, ButtonTheme } from '../../../Button/Button'
import { Icon } from '../../../Icon/Icon'
import popupCls from '../../styles/popup.module.scss'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps extends TestProps {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description List of items to render in ListBox
   */
  items?: ListBoxItem[]
  /**
   * @description The value of items in ListBox
   */
  value?: string
  /**
   * @description The selected value in listbox
   */
  defaultValue?: string
  /**
   * @description Callback to change value
   */
  onChange: <T extends string>(value: T) => void
  /**
   * @description Flag to disable listbox.
   */
  readonly?: boolean
  /**
   * @description Direction of dropdown
   * @default 'bottom_right'
   */
  direction?: DropdownDirection
  /**
   * @description Label for the ListBox
   */
  label?: string
  /**
   * @description Flag to add additional editing class.
   */
  editing?: boolean
}

/**
 * Use components from "redesigned" folder
 * @deprecated
 */
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
    'data-testid': dataTestId = 'ListBox',
  } = props

  const selectedItem = useMemo(() => {
    return items?.find((item) => item.value === value)
  }, [items, value])

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
          <Button
            disabled={readonly}
            theme={ButtonTheme.CLEAR}
            data-testid={`${dataTestId}.Button`}
          >
            {selectedItem?.content ?? defaultValue}
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
                      <Icon
                        Svg={CheckIcon}
                        className={cls.icon}
                        height={20}
                        width={20}
                      />
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
