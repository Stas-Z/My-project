import { Suspense, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { getUserInited, initAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/UseTheme/UseTheme'
import { Navbar } from '@/widgets/Navbar'
import { PageLoader } from '@/widgets/PageLoader'
import { Sidebar } from '@/widgets/Sidebar'

import { ErrorBoundary } from './providers/ErrorBoundary'
import { AppRouter } from './providers/router'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited) // Нужно для того чтобы инициализация user'а происходила до отрисовки <AppRouter />

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  if (!inited) {
    return <PageLoader />
  }

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div id="app" className="content-page">
          <Sidebar />
          <ErrorBoundary>{inited && <AppRouter />}</ErrorBoundary>
        </div>
      </Suspense>
    </div>
  )
}

export default App
