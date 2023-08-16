import { Fragment, ReactNode, memo } from 'react'

import { Menu } from '@headlessui/react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'

import cls from './Dropdown.module.scss'
import AppLink from '../../../AppLink/AppLink'
import popupCls from '../../styles/popup.module.scss'

export interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
  id?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropdownDirection
}

export const Dropdown = memo((props: DropdownProps) => {
  const { className, items, trigger, direction = 'bottom_right' } = props

  return (
    <Menu
      as="div"
      className={classNames(cls.dropdown, {}, [className, popupCls.popup])}
    >
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [popupCls[direction]])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              className={classNames(cls.item, { [popupCls.active]: active })}
              disabled={item.disabled}
            >
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
                key={item.id}
              >
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled} key={item.id}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
})
