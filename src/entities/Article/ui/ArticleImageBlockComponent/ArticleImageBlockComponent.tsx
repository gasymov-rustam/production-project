import { memo } from 'react';
import cls from './ArticleImageBlockComponent.module.scss';
import { classNames, Text } from '../../../../shared';
import { ArticleImageBlock } from '../../model';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className = '', block } = props;

  return (
    <div className={classNames({ cls: cls.ArticleImageBlockComponent, additional: [className] })}>
      <img src={block.src} alt={block.title} className={cls.img} />

      {block.title && <Text text={block.title} />}
    </div>
  );
});
