import { Suspense, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'
import { AppRoutesProps } from '@/shared/types/router'
import { PageLoader } from '@/widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

const renderWithWrapper = (route: AppRoutesProps) => {
  const element = <Suspense fallback="">{route.element}</Suspense>

  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        route.authOnly ? (
          <RequireAuth roles={route.roles}>{element}</RequireAuth>
        ) : (
          element
        )
      }
    />
  )
}

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
  </Suspense>
)

export default memo(AppRouter)
