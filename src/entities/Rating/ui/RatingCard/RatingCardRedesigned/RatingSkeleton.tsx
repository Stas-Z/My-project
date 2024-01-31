import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'

export const RatingSkeleton = (
  <Card max>
    <VStack align="center" gap="8">
      <Skeleton width={280} height={28} border="8px" />
      <Skeleton width={192} height={32} border="8px" />
    </VStack>
  </Card>
)
