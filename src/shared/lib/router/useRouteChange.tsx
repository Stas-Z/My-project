import { useEffect, useState } from 'react'

import { matchPath, useLocation } from 'react-router-dom'

import { AppRouterByPathPattern, AppRoutes } from '@/shared/const/router'

export function useRouteChange() {
  const location = useLocation() // Определяем на какой мы странице
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN)

  useEffect(() => {
    Object.entries(AppRouterByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        // Сопоставляем список путей маршрутов с текущим путём страницы на которой мы находимся
        setAppRoute(route) // Если пути совпадают, записываем маршрут
      }
    })
  }, [location.pathname])

  return appRoute
}
