import { memo } from 'react';

import { Article, ArticleList, ArticleView } from '../../../../entities/Article';
import { classNames } from '../../../../shared';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

type OmitMatch<T> = Omit<T, 'id'>;

export const createArticleArray = <T,>(length: number, article: OmitMatch<T>): OmitMatch<T>[] =>
  new Array(length).fill(0).map((_, idx) => ({ ...article, id: String(idx) }));

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className = '' } = props;

  return (
    <div className={classNames({ cls: cls.ArticlesPage, additional: [className] })}>
      <ArticleList articles={createArticleArray(16, []) as Article[]} view={ArticleView.SMALL} />
    </div>
  );
};

export default memo(ArticlesPage);
