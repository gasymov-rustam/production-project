import { memo } from 'react';

import { Text, TextAlign, classNames } from '../../../../shared';
import { ArticleTextBlock } from '../../model';

import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className = '', block } = props;

  return (
    <div className={classNames({ cls: cls.ArticleTextBlockComponent, additional: [className] })}>
      {block.title && <Text align={TextAlign.LEFT} title={block.title} className={cls.title} />}

      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} align={TextAlign.LEFT} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
});
