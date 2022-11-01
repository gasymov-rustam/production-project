import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '../../../../entities';
import { CommentList } from '../../../../entities/Comment';
import { Text, classNames } from '../../../../shared';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className = '' } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

  if (!id) {
    return (
      <div className={classNames({ cls: cls.ArticlesPage, additional: [className] })}>
        {t('ARTICLE DETAILS NOT FOUND')}
      </div>
    );
  }

  return (
    <div className={classNames({ cls: cls.ArticlesPage, additional: [className] })}>
      {t('ARTICLE DETAILS PAGE')}
      <ArticleDetails id={id} />

      <Text title={t('COMMENTS')} className={cls.commentTitle} />
      <CommentList
        comments={[
          {
            id: '1',
            text: 'Comment 1',
            user: {
              id: '1',
              userName: 'aaaaa',
              avatar: `https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg`,
            },
          },
          {
            id: '2',
            text: 'Comment 2',
            user: {
              id: '1',
              userName: 'ggggggg',
              avatar: `https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg`,
            },
          },
        ]}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
