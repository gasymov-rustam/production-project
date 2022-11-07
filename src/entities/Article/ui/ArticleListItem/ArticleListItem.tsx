import { memo } from 'react';

import { Card, EyeIcon, Icon, Text, TextAlign, classNames } from '../../../../shared';
import { Article, ArticleView } from '../../model';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article?: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className = '', article, view } = props;

  return (
    <div className={classNames({ cls: cls.ArticleListItem, additional: [className, cls[view]] })}>
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
          <Text align={TextAlign.LEFT} text={article?.type.join(', ')} className={cls.types} />
          <Text align={TextAlign.LEFT} text={String(article?.views)} className={cls.views} />
          <Icon Svg={EyeIcon} />
        </div>

        <Text align={TextAlign.LEFT} text={article?.title} className={cls.title} />
      </Card>
    </div>
  );
});
