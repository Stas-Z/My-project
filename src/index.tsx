import { ThemeProvider } from 'app/providers/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider'
import App from 'app/App'
import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
)
