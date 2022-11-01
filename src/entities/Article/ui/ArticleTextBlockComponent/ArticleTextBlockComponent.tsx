import { memo } from 'react';
import cls from './ArticleTextBlockComponent.module.scss';
import { classNames, Text, TextAlign } from '../../../../shared';
import { ArticleTextBlock } from '../../model';

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
