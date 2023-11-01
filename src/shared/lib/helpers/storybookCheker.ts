export const storybookCheker = (action: boolean | undefined) => {
  return __PROJECT__ !== 'storybook' ? action : true
}
