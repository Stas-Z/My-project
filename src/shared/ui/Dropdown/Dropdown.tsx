import { Menu } from '@headlessui/react'
import { Fragment, ReactNode, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { DropdownDirection } from 'shared/types/ui'
import AppLink from '../AppLink/AppLink'
import cls from './Dropdown.module.scss'

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
  const {
    className, items, trigger, direction = 'bottom_right',
  } = props

  return (
    <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [cls[direction]])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active })}
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
