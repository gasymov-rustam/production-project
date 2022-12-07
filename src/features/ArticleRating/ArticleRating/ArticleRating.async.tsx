import { Suspense, lazy } from 'react';

import { Skeleton } from '../../../shared';

import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={140} />}>
    <ArticleRatingLazy {...props} />
  </Suspense>
);
