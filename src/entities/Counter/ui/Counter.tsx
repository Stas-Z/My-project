import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)
  const incerement = () => {
    dispatch(counterActions.increment())
  }

  const decerement = () => {
    dispatch(counterActions.decrement())
  }
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        data-testid="increment-btn"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={incerement}
      >
        {t('increment')}
      </Button>
      <Button
        data-testid="decrement-btn"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={decerement}
      >
        {t('decrement')}
      </Button>
    </div>
  )
}