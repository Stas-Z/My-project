import React from 'react'
import { RoutPath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutPath.main,
    Icon: MainIcon,
    text: 'Main Page',
  },
  {
    path: RoutPath.about,
    Icon: AboutIcon,
    text: 'About us',
  },
  {
    path: RoutPath.profile,
    Icon: ProfileIcon,
    text: 'Profile page',
    authOnly: true,
  },
  {
    path: RoutPath.articles,
    Icon: ArticleIcon,
    text: 'Articles Page',
    authOnly: true,
  },
]
