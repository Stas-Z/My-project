import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from 'entities/User'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'
import { ErrorBoundary } from './providers/ErrorBoundary'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited) // Нужно для того чтобы инициализация user'а происходила до отрисовки <AppRouter />

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

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
