import { Link } from 'react-router-dom'
import './styles/index.scss'
import { className } from 'shared/lib/className/className'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/ThemeProvider/router'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={className('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  )
}

export default App
