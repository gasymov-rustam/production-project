import { HTMLAttributeAnchorTarget, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';

import { Text, TextSize, classNames } from '../../../../shared';
import { PAGE_ID } from '../../../../widgets/PageWrapper/PageWrapper';
import { Article, ArticleView } from '../../model';
import { ArticleListItem, ArticleListItemSkeleton } from '../ArticleListItem';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
  const { className = '', articles, isLoading, view = ArticleView.SMALL, target, virtualized = true } = props;
  const { t } = useTranslation();

  const renderVirtualList = useCallback(
    (data: Article) => (
      <ArticleListItem key={data.id} article={data} target={String(target)} view={view} className={cls.card} />
    ),
    [target, view],
  );

  const renderUsualList = useCallback(
    (articles: Article[]) => (
      <div className={cls[view]}>
        {articles?.map((article) => (
          <ArticleListItem
            key={article.id}
            article={article}
            target={String(target)}
            view={view}
            className={cls.card}
          />
        ))}
      </div>
    ),
    [target, view],
  );

  const list = useMemo(() => {
    const props = {
      data: articles,
      customScrollParent: document.getElementById(PAGE_ID) as HTMLElement,
      itemContent: (_: number, data: Article) => renderVirtualList(data),
    };

    return view === ArticleView.SMALL ? (
      <VirtuosoGrid listClassName={classNames({ additional: [className, cls[view]] })} {...props} />
    ) : (
      <Virtuoso className={classNames({ additional: [className, cls[view]] })} {...props} />
    );
  }, [articles, className, renderVirtualList, view]);

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames({ cls: cls.ArticleList, additional: [className, cls[view]] })}>
        <Text text={t('ARTICLES IS NOT DEFINED!')} size={TextSize.L} />
      </div>
    );
  }

  return (
    <>
      {virtualized ? list : renderUsualList(articles)}

      <div className={classNames({ cls: cls.loading, additional: [className, cls[view]] })}>
        {isLoading && getSkeletons(view)}
      </div>
    </>
  );
});
