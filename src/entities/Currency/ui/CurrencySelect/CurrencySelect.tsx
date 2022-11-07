import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select, classNames } from '../../../../shared';
import { Currency } from '../../model';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.UAH, content: Currency.UAH },
];

export const CurrencySelect = memo(({ className = '', value, onChange, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <Select
      className={classNames({ additional: [className] })}
      label={t('SET CURRENCY')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
