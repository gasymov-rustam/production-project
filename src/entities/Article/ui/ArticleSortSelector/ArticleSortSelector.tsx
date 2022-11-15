import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Select, SelectOption, SortOrder, classNames } from '../../../../shared';
import { ArticleSortField } from '../../model';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className = '', onChangeOrder, onChangeSort, order, sort } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      { value: 'asc', content: t('INCREASE') },
      { value: 'desc', content: t('DECREASE') },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED, content: t('BY CREATED') },
      { value: ArticleSortField.TITLE, content: t('BY TITLE') },
      { value: ArticleSortField.VIEWS, content: t('BY VIEWS') },
    ],
    [t],
  );

  return (
    <div className={classNames({ cls: cls.ArticleSortSelector, additional: [className] })}>
      <Select<ArticleSortField> label={t('SORT BY')} options={sortFieldOptions} value={sort} onChange={onChangeSort} />

      <Select label={t('BY')} options={orderOptions} value={order} className={cls.order} onChange={onChangeOrder} />
    </div>
  );
});

/*   const changeSortHandler = useCallback(
      (newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
      },
      [onChangeSort],
    );
  
    const changeOrderHandler = useCallback(
      (newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
      },
      [onChangeOrder],
    ); */
