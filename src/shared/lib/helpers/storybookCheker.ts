export const storybookCheker = () => {
  if (__PROJECT__ === 'storybook') {
    return true
  }
  return false
}
