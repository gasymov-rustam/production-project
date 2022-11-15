import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text, TextSize, classNames } from '../../../../shared';
import { Article, ArticleView } from '../../model';
import { ArticleListItem, ArticleListItemSkeleton } from '../ArticleListItem';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
  const { className = '', articles, isLoading, view = ArticleView.SMALL } = props;
  const { t } = useTranslation();

  if (!articles.length) return null;

  const renderList = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} className={cls.card} />
  );

  if (!isLoading && !articles.length) {
    <div className={classNames({ cls: cls.ArticleList, additional: [className, cls[view]] })}>
      <Text text={t('ARTICLES IS NOT DEFINED!')} size={TextSize.L} />
    </div>;
  }

  return (
    <div className={classNames({ cls: cls.ArticleList, additional: [className, cls[view]] })}>
      {articles.map(renderList)}

      {isLoading && getSkeletons(view)}
    </div>
  );
});
