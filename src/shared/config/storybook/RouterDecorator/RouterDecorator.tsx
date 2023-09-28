import { Suspense } from 'react'

import { StoryContext, StoryFn } from '@storybook/react'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'

export const RouterDecorator = (
  StoryComponent: StoryFn,
  { parameters: { router } }: StoryContext,
) => {
  if (!router) {
    return (
      <BrowserRouter>
        <StoryComponent />
      </BrowserRouter>
    )
  }
  const { path, route } = router
  return (
    <Suspense fallback="">
      <MemoryRouter initialEntries={[encodeURI(route)]}>
        <Routes>
          <Route path={path} element={<StoryComponent />} />
        </Routes>
      </MemoryRouter>
    </Suspense>
  )
}
