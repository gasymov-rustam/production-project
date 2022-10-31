import { memo } from 'react';
import cls from './ArticleTextBlockComponent.module.scss';
import { classNames } from '../../../../shared';

interface ArticleTextBlockComponentProps {
  className?: string;
  // block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className = '' } = props;

  return (
    <div className={classNames({ cls: cls.ArticleTextBlockComponent, additional: [className] })}>
      {/* {block.title && <Text title={block.title} className={cls.title} />}
      {block.paragraphs.map((paragraph, index) => (
        <Text key={paragraph} text={paragraph} className={cls.paragraph} />
      ))} */}
    </div>
  );
});
