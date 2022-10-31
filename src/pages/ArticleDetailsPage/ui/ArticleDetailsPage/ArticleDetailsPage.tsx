import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';
import { classNames } from '../../../../shared';
import { ArticleDetails } from '../../../../entities';

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
    </div>
  );
};

export default memo(ArticleDetailsPage);
