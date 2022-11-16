import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from '../../../../shared';
import { PageWrapper } from '../../../../widgets';

import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <PageWrapper className={classNames({ cls: cls.ArticleEditPage, additional: [className] })}>
      {isEdit ? t('EDIT ARTICLE WITH ID = ') + id : t('CREATE NEW ARTICLE')}
    </PageWrapper>
  );
});

export default ArticleEditPage;
