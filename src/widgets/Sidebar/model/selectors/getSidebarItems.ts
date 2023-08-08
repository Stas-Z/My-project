import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { RoutPath } from '@/shared/config/routeConfig/routeConfig'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import { SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutPath.main,
      Icon: MainIcon,
      text: 'Main',
    },
    {
      path: RoutPath.about,
      Icon: AboutIcon,
      text: 'About us',
    },
  ]

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutPath.profile + userData.id,
        Icon: ProfileIcon,
        text: 'Profile',
        authOnly: true,
      },
      {
        path: RoutPath.articles,
        Icon: ArticleIcon,
        text: 'Articles',
        authOnly: true,
      },
    )
  }

  return sidebarItemsList
})
