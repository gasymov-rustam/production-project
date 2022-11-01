import { memo } from 'react';
import cls from './ArticleCodeBlockComponent.module.scss';
import { classNames, Code } from '../../../../shared';
import { ArticleCodeBlock } from '../../model';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className = '', block } = props;

  return (
    <div className={classNames({ cls: cls.ArticleCodeBlockComponent, additional: [className] })}>
      <Code text={block.code} />
    </div>
  );
});
