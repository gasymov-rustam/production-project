import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleCodeBlockComponent.module.scss';
import { classNames } from '../../../../shared';

interface ArticleCodeBlockComponentProps {
  className?: string;
  //   block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className = '' } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames({ cls: cls.ArticleCodeBlockComponent, additional: [className] })}>
      {/* <Code text={block.code} /> */}
    </div>
  );
});
