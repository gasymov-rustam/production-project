import { memo } from 'react';

import { classNames } from '../../../../shared';
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

  if (!articles.length) return null;

  if (isLoading)
    return (
      <div className={classNames({ cls: cls.ArticleList, additional: [className, cls[view]] })}>
        {getSkeletons(view)}
      </div>
    );

  const renderList = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} className={cls.card} />
  );

  return (
    <div className={classNames({ cls: cls.ArticleList, additional: [className, cls[view]] })}>
      {articles.map(renderList)}
    </div>
  );
});
