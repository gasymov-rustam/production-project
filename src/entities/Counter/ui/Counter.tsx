import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, useAppDispatch } from '../../../shared';
import { countersActions, getCounterValue } from '../models';

export const Counter = memo(() => {
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const increment = () => dispatch(countersActions.increment());
  const decrement = () => dispatch(countersActions.decrement());

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button data-testid='increment-btn' onClick={increment}>
        {t('INCREMENT')}
      </Button>
      <Button data-testid='decrement-btn' onClick={decrement}>
        {t('DECREMENT')}
      </Button>
    </div>
  );
});
