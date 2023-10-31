import { useTranslation } from 'react-i18next'

import { Button, ButtonTheme } from '@/shared/ui/Button'

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/counterSlice'

export const Counter = () => {
  const { t } = useTranslation()
  const counterValue = useCounterValue()
  const { decrement, increment, incrementByAmount } = useCounterActions()

  const handleInc = () => {
    increment()
  }

  const handleDec = () => {
    decrement()
  }
  const handleAddFive = () => {
    incrementByAmount(5)
  }
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        data-testid="increment-btn"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={handleInc}
      >
        {t('increment')}
      </Button>
      <Button
        data-testid="decrement-btn"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={handleDec}
      >
        {t('decrement')}
      </Button>
      <Button
        data-testid="incByAmount-btn"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={handleAddFive}
      >
        {t('add 5')}
      </Button>
    </div>
  )
}
