import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '../../../../entities';
import { Button, ButtonTheme, RoutePath, classNames } from '../../../../shared';
import { getCanEditArticle } from '../../model';

import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={classNames({ cls: cls.ArticleDetailsPageHeader, additional: [className] })}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('BACK TO LIST')}
      </Button>

      {canEdit && (
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
          {t('EDIT')}
        </Button>
      )}
    </div>
  );
});
