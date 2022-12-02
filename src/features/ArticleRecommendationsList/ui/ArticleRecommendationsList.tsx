import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList } from '../../../entities/Article';
import { Text, TextSize, VerticalStack, classNames } from '../../../shared';
import { useArticleRecommendationsList } from '../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (isLoading || error) {
    return null;
  }

  return (
    <VerticalStack gap="8" className={classNames({ additional: [className] })}>
      <Text size={TextSize.L} title={t('RECOMMENDATIONS')} />
      <ArticleList articles={articles} target="_blank" />
    </VerticalStack>
  );
});
