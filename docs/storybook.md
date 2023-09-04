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
import { ComponentMeta, ComponentStory } from '@storybook/react'
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
} as ComponentMeta<typeof EditableProfileCardForm>

const Template: ComponentStory<typeof EditableProfileCardForm> = (args) => (
  <EditableProfileCardForm {...args} />
)

const data = {
  first: 'Jhon',
  lastname: 'Smith',
  age: 38,
  currency: Currency.USD,
  country: Country.China,
  city: 'Beijing',
  username: 'admin',
  avatar:
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
}

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({
    profile: {
      readonly: true,
      form: data,
    },
  }),
]

export const LightEdit = Template.bind({})
LightEdit.args = {}
LightEdit.decorators = [
  StoreDecorator({
    profile: {
      form: data,
    },
  }),
]

export const LightError = Template.bind({})
LightError.args = {}
LightError.decorators = [
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
]
```

For shared components, we write stories for every possible scenario and theme. Here is an example of a story file for the `Button` component:

```tsx
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Button, ButtonSize, ButtonTheme } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
}
export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  children: 'Text',
  disabled: true,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Text',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryDarkDisabled = Template.bind({})
PrimaryDarkDisabled.args = {
  children: 'Text',
  disabled: true,
}
PrimaryDarkDisabled.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryChoco = Template.bind({})
PrimaryChoco.args = {
  children: 'Text',
}
PrimaryChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const PrimaryChocoDisabled = Template.bind({})
PrimaryChocoDisabled.args = {
  children: 'Text',
  disabled: true,
}
PrimaryChocoDisabled.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
}
export const ClearDark = Template.bind({})
ClearDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearChoco = Template.bind({})
ClearChoco.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
}
ClearChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
}
export const ClearInvertedDark = Template.bind({})
ClearInvertedDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
}
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearInvertedChoco = Template.bind({})
ClearInvertedChoco.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
}
ClearInvertedChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}
export const OutlineDisabled = Template.bind({})
OutlineDisabled.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
}
export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}
export const OutlineSizeLDisable = Template.bind({})
OutlineSizeLDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
  disabled: true,
}
export const OutlineSizeXl = Template.bind({})
OutlineSizeXl.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}
export const OutlineSizeXlDisable = Template.bind({})
OutlineSizeXlDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
  disabled: true,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
export const OutlineDarkDisable = Template.bind({})
OutlineDarkDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
}
OutlineDarkDisable.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDarkSizeL = Template.bind({})
OutlineDarkSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}
OutlineDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDarkSizeLDisable = Template.bind({})
OutlineDarkSizeLDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
  disabled: true,
}
OutlineDarkSizeLDisable.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDarkSizeXl = Template.bind({})
OutlineDarkSizeXl.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}
OutlineDarkSizeXl.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDarkSizeXlDisable = Template.bind({})
OutlineDarkSizeXlDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
  disabled: true,
}
OutlineDarkSizeXlDisable.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineChoco = Template.bind({})
OutlineChoco.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}
OutlineChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
export const OutlineChocoDisable = Template.bind({})
OutlineChocoDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
}
OutlineChocoDisable.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const OutlineChocoSizeL = Template.bind({})
OutlineChocoSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}
OutlineChocoSizeL.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const OutlineChocoSizeLDisable = Template.bind({})
OutlineChocoSizeLDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
  disabled: true,
}
OutlineChocoSizeLDisable.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const OutlineChocoSizeXl = Template.bind({})
OutlineChocoSizeXl.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}
OutlineChocoSizeXl.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const OutlineChocoSizeXlDisable = Template.bind({})
OutlineChocoSizeXlDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
  disabled: true,
}
OutlineChocoSizeXlDisable.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
}

export const SquareSizeXl = Template.bind({})
SquareSizeXl.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
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
