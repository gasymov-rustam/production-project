import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleList } from '../../../../entities/Article';
import { Text } from '../../../../shared';
import { getArticles, getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const { t } = useTranslation();

  if (error) {
    return <Text text={t('AN ERROR OCCURRED WHILE LOADING THE ARTICLE')} />;
  }

  return <ArticleList isLoading={isLoading} view={view} articles={articles} className={className} />;
});
