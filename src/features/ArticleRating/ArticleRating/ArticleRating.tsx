import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '../../../entities';
import { Rating } from '../../../entities/Rating';
import { Skeleton } from '../../../shared';
import { useGetArticleRating, useRateArticle } from '../api/articleRatingApi';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });

  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (e) {
        // handle error
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
    [articleId, rateArticleMutation, userData?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <Rating
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      className={className}
      title={t('RATE ARTICLE')}
      feedBackTitle={t('Leave your feedback on the article, it will help improve the quality')}
      hasFeedback
    />
  );
});

export default ArticleRating;
