import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  Skeleton,
  Text,
  useAppDispatch,
} from '../../../../shared';
import {
  articleDetailsName,
  articleDetailsReducer,
  fetchArticleById,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model';
import cls from './ArticleDetails.module.scss';

const initialReducers: ReducersList = {
  [articleDetailsName]: articleDetailsReducer,
};

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className = '', id } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border='50%' />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width='100%' height={200} />
        <Skeleton className={cls.skeleton} width='100%' height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text className={cls.error} title={t('AN ERROR OCCURRED WHILE LOADING THE PROFILE')} />
    );
  } else content = <div> {t('ARTICLE DETAILS PAGE')}</div>;

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames({ cls: cls.ArticleDetails, additional: [className] })}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
