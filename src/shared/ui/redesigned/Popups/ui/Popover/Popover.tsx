import { ReactNode, memo } from 'react'

import { Popover as HPopover } from '@headlessui/react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { TestProps } from '@/shared/types/tests'
import { DropdownDirection } from '@/shared/types/ui'

import cls from './Popover.module.scss'
import popupCls from '../../styles/popup.module.scss'

interface PopoverProps extends TestProps {
  /**
   * @description additional class.
   */
  className?: string
  /**
   * @description Children of trigger Button component
   */
  trigger: ReactNode
  /**
   * @description Direction of dropdown
   * @default 'bottom_right'
   */
  direction?: DropdownDirection
  /**
   * Popover content
   */
  children: ReactNode
}

export const Popover = memo((props: PopoverProps) => {
  const {
    className,
    trigger,
    direction = 'bottom_right',
    children,
    'data-testid': dataTestId = 'Popover',
  } = props

  return (
    <HPopover
      className={classNames(cls.popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button
        as="div"
        className={popupCls.trigger}
        data-testid={`${dataTestId}.Trigger`}
      >
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(cls.panel, {}, [
          popupCls[direction],
          popupCls.menu,
        ])}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  )
})
