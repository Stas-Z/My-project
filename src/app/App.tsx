import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'
import './styles/index.scss'
import { ErrorBoundary } from './providers/ErrorBoundary'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <ErrorBoundary>
            <AppRouter />
          </ErrorBoundary>
        </div>
      </Suspense>
    </div>
  )
}

export default App
