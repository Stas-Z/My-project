import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import cls from './ArticleListItemRedesigned.module.scss'
import { ArticleView } from '../../../model/consts/articleConsts'
import { ArticleListItemSkeletonProps } from '../ArticleListItemSkeleton'

export const ArticleListItemSkeletonRedesigned = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props

    if (view === ArticleView.LIST) {
      return (
        <div
          className={classNames(cls.articleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card className={cls.card} padding="24">
            <VStack gap="16" max>
              <HStack gap="8" max>
                <Skeleton height={30} width={30} border="50%" />
                <Skeleton width={150} height={16} border="8px" />
              </HStack>
              <Skeleton width="50%" height={40} border="20px" />
              <Skeleton width="50%" height={28} border="14px" />
              <Skeleton height={420} className={cls.skeletonImg} />
              <div className={cls.footer}>
                <Skeleton width={200} height={36} border="13px" />
              </div>
            </VStack>
          </Card>
        </div>
      )
    }

    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Card className={cls.card} border="round" padding="0">
          <Skeleton height={140} width={250} className={cls.img} />
          <VStack className={cls.info} gap="8">
            <Skeleton
              height={24}
              width="100%"
              className={cls.skeletonTitle}
              border="7px"
            />
            <Skeleton
              height={24}
              width="50%"
              className={cls.skeletonTitle}
              border="7px"
            />
            <VStack className={cls.footer} gap="4" max>
              <HStack justify="between" max>
                <Skeleton width={89} height={21} border="7px" />
                <Skeleton width={67} height={21} border="7px" />
              </HStack>
              <HStack gap="4" className={cls.userInfo}>
                <Skeleton width={32} height={32} border="50%" />
                <Skeleton width={45} height={21} border="7px" />
              </HStack>
            </VStack>
          </VStack>
        </Card>
      </div>
    )
  },
)
