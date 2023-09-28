# Storybook

Storybook is a tool that allows you to develop and test UI components in isolation. In this project, we use Storybook to describe the different use cases for each component in the file next to it.

## Starting Storybook

To start Storybook, run the following command in your terminal:

- `npm run storybook`

## Writing stories

Stories are written in a file with the `.stories.tsx` extension, located next to the component file.

You can learn more about writing stories in the [official Storybook documentation](https://storybook.js.org/docs/7.1/react/writing-stories/introduction)

Here is an example of a story file for the `EditableProfileCard` component in our app:

```tsx
import { Meta, StoryObj } from '@storybook/react'

import { Country } from '@/entities/Country/testing'
import { Currency } from '@/entities/Currency/testing'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { EditableProfileCardForm } from './EditableProfileCardForm'
import { ValidateProfileEror } from '../../model/consts/editableProfileCardConsts'

export default {
  title: 'features/Profile/EditableProfileCardForm',
  component: EditableProfileCardForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof EditableProfileCardForm>

type Template = StoryObj<typeof EditableProfileCardForm>

const data = {
  first: 'Станислав',
  lastname: 'Заболотный',
  age: 38,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
  avatar: 'https://avatars.githubusercontent.com/u/116818633',
}

export const Light: Template = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        readonly: true,
        form: data,
      },
    }),
  ],
}

export const LightEdit: Template = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: data,
      },
    }),
  ],
}

export const LightError: Template = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        validateErrors: [
          ValidateProfileEror.NO_DATA,
          ValidateProfileEror.INCORRECT_USER_DATA,
          ValidateProfileEror.INCORRECT_AGE,
          ValidateProfileEror.INCORRECT_CITY,
          ValidateProfileEror.SERVER_ERROR,
        ],
      },
    }),
  ],
}
```

For shared components, we write stories for every possible scenario and theme. Here is an example of a story file for the `Button` component:

```tsx
import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Button, ButtonSize, ButtonTheme } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: { story: { iframeHeight: '100px', inline: false } },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>

type Template = StoryObj<typeof Button>

export const Primary: Template = {
  args: { children: 'Text' },
}
export const PrimaryDisabled: Template = {
  args: {
    children: 'Text',
    disabled: true,
  },
}

export const PrimaryDark: Template = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const PrimaryDarkDisabled: Template = {
  args: {
    children: 'Text',
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const PrimaryChoco: Template = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const PrimaryChocoDisabled: Template = {
  args: {
    children: 'Text',
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const Clear: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
}

export const ClearDark: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ClearChoco: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const ClearInverted: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
}

export const ClearInvertedDark: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ClearInvertedChoco: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const Outline: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
}

export const OutlineDisabled: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
}

export const OutlineSizeL: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
}

export const OutlineSizeLDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
    disabled: true,
  },
}

export const OutlineSizeXl: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
}

export const OutlineSizeXlDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
    disabled: true,
  },
}

export const OutlineDark: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDarkDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDarkSizeL: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDarkSizeLDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDarkSizeXl: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDarkSizeXlDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineChoco: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const OutlineChocoDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const OutlineChocoSizeL: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const OutlineChocoSizeLDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const OutlineChocoSizeXl: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const OutlineChocoSizeXlDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const BackgroundTheme: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
  },
}

export const BackgroundInverted: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
}

export const Square: Template = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
}

export const SquareSizeL: Template = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
}

export const SquareSizeXl: Template = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
}
```

## Story arguments

### Title

Title describes story name and folder when you run storybook.

Example:

```tsx
export default {
  title: 'entities/Article/ArticleList',
  // ...
} as Meta<typeof ArticlesPage>
```

Title should include layer (shared/entities/features/widgets/pages), slice and name of the component.

### Component

Pass there component for stories to render.

### Parameters

Parameters are a set of static, named metadata about a story, typically used to control the behavior of Storybook features and addons.

You can read more about them [here](https://storybook.js.org/docs/7.1/react/writing-stories/parameters)

### Decorators

A decorator is a way to wrap a story in extra “rendering” functionality.

You can read more about them [here](https://storybook.js.org/docs/7.1/react/writing-stories/decorators)

All decorators are placed in [src/shared/lib/storybook](../src/shared/lib/storybook). You can read more about each of them there.

> **_NOTE:_** In Storybook, the order in which decorators are applied matters. Decorators are applied in reverse order, from the last decorator to the first decorator. This means that the last decorator in the list will be applied first, and the first decorator in the list will be applied last. It’s important to keep this in mind when defining decorators, as the order can affect how your stories are rendered.
