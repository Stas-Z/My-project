import { act, screen, waitFor } from '@testing-library/react'

import { UserRole } from '@/entities/User/testing'
import {
  getRouteAbout,
  getRouteAdmin,
  getRouteProfile,
} from '@/shared/const/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

import AppRouter from './AppRouter'

describe('app/router/AppRouter', () => {
  test('Страница должна отрендериться', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('Страница не найдена', async () => {
    componentRender(<AppRouter />, {
      route: '/ajsafsfhasikl',
    })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ запрещён (отсутствует роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: { user: { _inited: true, authData: {} } },
    })

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ разрешён (присутствует роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
      },
    })

    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })

  test('Редирект неавторизованного пользователя на главную', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ к закрытой страницы для авторизованного пользователя', async () => {
    await act(() => {
      componentRender(<AppRouter />, {
        route: getRouteProfile('1'),
        initialState: { user: { _inited: true, authData: {} } },
      })
    })
    await waitFor(async () => {
      const page = await screen.findByTestId('ProfilePage')
      expect(page).toBeInTheDocument()
    })
  })
})
