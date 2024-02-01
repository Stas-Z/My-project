import { memo } from 'react'

import { Theme } from '@/shared/const/theme'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import cls from './AppLoaderLayout.module.scss'
import { MainLayout } from '../MainLayout'

interface AppLoaderLayoutProps {
  className?: string
  theme?: Theme
}

export const AppLoaderLayout = memo((props: AppLoaderLayoutProps) => {
  const { className, theme } = props
  return (
    <div
      id="app"
      className={classNames('app_redesigned', {}, [theme, className])}
    >
      <MainLayout
        header={
          <HStack className={cls.header}>
            <Skeleton width={40} height={40} border="50%" />
          </HStack>
        }
        content={
          <VStack gap="16" maxHeight>
            <Skeleton width="70%" height={50} border="16px" />
            <Skeleton width="50%" height={32} border="16px" />
            <Skeleton width="30%" height={32} border="16px" />
            <Skeleton width="80%" height="40%" border="16px" />
            <Skeleton width="80%" height="40%" border="16px" />
          </VStack>
        }
        sidebar={<Skeleton height="100%" width={220} border="32px" />}
      />
    </div>
  )
})
