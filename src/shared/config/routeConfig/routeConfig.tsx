import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

// Расширяем RouteProps флагом authOnly, для проверки авторизации пользователя
export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',

  NOT_FOUND = 'not_found', // последний
}

export const RoutPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',

  [AppRoutes.NOT_FOUND]: '*', // последний
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutPath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutPath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutPath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutPath.not_found,
    element: <NotFoundPage />, // последний
  },
}
