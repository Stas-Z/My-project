import { Meta, StoryObj } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Flex } from './Flex'

export default {
  title: 'shared/redesigned/Flex',
  component: Flex,
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.LIGHT)],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Flex>

type Template = StoryObj<typeof Flex>

export const Row: Template = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
}

export const RowGap4: Template = {
  args: {
    gap: '4',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
}

export const RowGap8: Template = {
  args: {
    gap: '8',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
}

export const RowGap16: Template = {
  args: {
    gap: '16',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
}
export const RowGap24: Template = {
  args: {
    gap: '24',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
}

export const RowGap32: Template = {
  args: {
    gap: '32',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
}

export const RowJustifyBetween: Template = {
  args: {
    justify: 'between',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
}

export const Column: Template = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
}

export const ColumnGap16: Template = {
  args: {
    gap: '16',
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
}
export const ColumnGap24: Template = {
  args: {
    gap: '24',
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
}
export const ColumnAlignStart: Template = {
  args: {
    direction: 'column',
    align: 'start',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
}
export const ColumnAlignEnd: Template = {
  args: {
    direction: 'column',
    align: 'end',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </>
    ),
  },
}
