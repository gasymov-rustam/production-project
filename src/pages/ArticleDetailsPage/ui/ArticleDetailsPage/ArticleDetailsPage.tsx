import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '../../../../entities';
import { ArticleRating } from '../../../../features/ArticleRating';
import { ArticleRecommendationsList } from '../../../../features/ArticleRecommendationsList';
import { DynamicModuleLoader, ReducersList, VerticalStack, classNames } from '../../../../shared';
import { PageWrapper } from '../../../../widgets';
import { articleDetailsPageReducer } from '../../model';
import { ArticleDetailsComments } from '../ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className = '' } = props;
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <PageWrapper className={classNames({ cls: cls.ArticlesPage, additional: [className] })}>
        <VerticalStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRating articleId={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VerticalStack>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
