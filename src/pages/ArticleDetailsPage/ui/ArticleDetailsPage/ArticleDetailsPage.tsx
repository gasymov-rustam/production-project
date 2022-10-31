import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';
import { classNames } from '../../../../shared';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className = '' } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames({ cls: cls.ArticlesPage, additional: [className] })}>
      {t('ARTICLE DETAILS PAGE')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
