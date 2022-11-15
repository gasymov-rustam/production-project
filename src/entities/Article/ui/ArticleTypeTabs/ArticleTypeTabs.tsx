import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Tab, TabItem, classNames } from '../../../../shared';
import { ArticleType } from '../../model';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (tab: TabItem<ArticleType>) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { value, onChangeType, className = '' } = props;
  const { t } = useTranslation('article');

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      { value: ArticleType.ALL, content: t(ArticleType.ALL) },
      { value: ArticleType.IT, content: t(ArticleType.IT) },
      { value: ArticleType.ECONOMICS, content: t(ArticleType.ECONOMICS) },
      { value: ArticleType.SCIENCE, content: t(ArticleType.SCIENCE) },
    ],
    [t],
  );

  return (
    <Tab
      tabs={typeTabs}
      value={value}
      onTabHandler={onChangeType}
      className={classNames({ additional: [className] })}
    />
  );
});
