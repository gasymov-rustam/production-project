import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  Avatar,
  CalendarIcon,
  DynamicModuleLoader,
  EyeIcon,
  HorizontalStack,
  Icon,
  ReducersList,
  Skeleton,
  Text,
  TextAlign,
  TextSize,
  VerticalStack,
  classNames,
  useAppDispatch,
  useInitialEffect,
} from '../../../../shared';
import {
  ArticleBlock,
  articleDetailsName,
  articleDetailsReducer,
  fetchArticleById,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model';
import { ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent';

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

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;

      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;

      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;

      default:
        return null;
    }
  }, []);

  useInitialEffect(() => dispatch(fetchArticleById(id)));

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = <Text className={cls.error} title={t('AN ERROR OCCURRED WHILE LOADING THE PROFILE')} />;
  } else
    content = (
      <>
        <HorizontalStack justify="center" className={cls.avatarWrapper}>
          <Avatar size={200} src={String(article?.img)} className={cls.avatar} alt={String(article?.title)} />
        </HorizontalStack>

        <VerticalStack gap="4" max>
          <Text
            size={TextSize.L}
            align={TextAlign.LEFT}
            title={article?.title}
            text={article?.subtitle}
            className={cls.title}
          />

          <HorizontalStack gap="8" className={cls.articleInfo}>
            <Icon Svg={EyeIcon} className={cls.icon} />
            <Text align={TextAlign.LEFT} text={String(article?.views)} />
          </HorizontalStack>

          <HorizontalStack gap="8" className={cls.articleInfo}>
            <Icon Svg={CalendarIcon} className={cls.icon} />

            <Text align={TextAlign.LEFT} text={String(article?.createdAt)} />
          </HorizontalStack>
        </VerticalStack>

        {article?.blocks.map(renderBlock)}
      </>
    );

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <VerticalStack gap="16" max className={classNames({ cls: cls.ArticleDetails, additional: [className] })}>
        {content}
      </VerticalStack>
    </DynamicModuleLoader>
  );
});
