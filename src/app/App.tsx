import { Suspense, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { getUserInited, initAuthData } from '@/entities/User'
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/UseTheme/UseTheme'
import { Navbar } from '@/widgets/Navbar'
import { PageLoader } from '@/widgets/PageLoader'
import { Sidebar } from '@/widgets/Sidebar'

import { useAppToolbar } from './lib/useAppToolbar'
import { ErrorBoundary } from './providers/ErrorBoundary'
import { AppRouter } from './providers/router'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited) // Нужно для того чтобы инициализация user'а происходила до отрисовки <AppRouter />

  const toolBar = useAppToolbar()

  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData())
    }
  }, [dispatch, inited])

  if (!inited) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<AppLoaderLayout theme={theme} />}
        off={<PageLoader />}
      />
    )
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div id="app" className={classNames('app_redesigned', {}, [theme])}>
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              content={
                <ErrorBoundary>
                  <AppRouter />
                </ErrorBoundary>
              }
              sidebar={<Sidebar />}
              toolbar={toolBar}
            />
          </Suspense>
        </div>
      }
      off={
        <div id="app" className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
            <Navbar />
            <div id="app" className="content-page">
              <Sidebar />
              <ErrorBoundary>
                <AppRouter />
              </ErrorBoundary>
            </div>
          </Suspense>
        </div>
      }
    />
  )
}

export default App
