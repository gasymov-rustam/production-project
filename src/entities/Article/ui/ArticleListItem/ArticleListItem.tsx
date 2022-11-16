import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AppLink,
  Avatar,
  Button,
  ButtonTheme,
  Card,
  EyeIcon,
  Icon,
  RoutePath,
  Text,
  TextAlign,
  classNames,
} from '../../../../shared';
import { Article, ArticleView } from '../../model';
import { ArticleBlockType, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className = '', article, view, target } = props;
  const { t } = useTranslation('article');

  const types = <Text align={TextAlign.LEFT} text={article?.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text align={TextAlign.LEFT} text={String(article?.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );
  console.log('1221121', target);

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find((item) => item.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div className={classNames({ cls: cls.ArticleListItem, additional: [className, cls[view]] })}>
        <Card>
          <div className={cls.header}>
            <Avatar size={30} src={String(article.user?.avatar)} alt={article.user.userName} />
            <Text align={TextAlign.LEFT} text={article.user.userName} className={cls.username} />
            <Text align={TextAlign.LEFT} text={article.createdAt} className={cls.date} />
          </div>

          <Text align={TextAlign.LEFT} text={article.title} className={cls.title} />

          {types}

          <img src={article.img} alt={article.title} decoding="async" loading="lazy" className={cls.img} />

          {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}

          <div className={cls.footer}>
            <AppLink to={RoutePath.article_details + article.id} target={target}>
              <Button theme={ButtonTheme.OUTLINE}>{t('READ MORE')}...</Button>

              {views}
            </AppLink>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      to={RoutePath.article_details + article.id}
      target={target}
      className={classNames({ cls: cls.ArticleListItem, additional: [className, cls[view]] })}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <img
            src={article?.img}
            alt={article?.title}
            width={200}
            height={200}
            decoding="async"
            loading="lazy"
            className={cls.img}
          />

          <Text text={article?.createdAt} className={cls.date} />
        </div>

        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>

        <Text align={TextAlign.LEFT} text={article?.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
