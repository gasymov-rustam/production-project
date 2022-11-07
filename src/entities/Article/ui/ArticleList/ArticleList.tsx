import { memo } from 'react';

import { classNames } from '../../../../shared';
import { Article, ArticleView } from '../../model';
import { ArticleListItem } from '../ArticleListItem';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className = '', articles, isLoading, view = ArticleView.SMALL } = props;

  if (!articles.length) return null;

  const renderList = (article: Article) => <ArticleListItem key={article.id} article={article} view={view} />;

  return (
    <div className={classNames({ cls: cls.ArticleList, additional: [className] })}>{articles.map(renderList)}</div>
  );
});
