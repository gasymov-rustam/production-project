import { HTMLAttributeAnchorTarget, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';

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
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
  const { className = '', articles, isLoading, view = ArticleView.SMALL, target } = props;
  const { t } = useTranslation();
  const isBig = view === ArticleView.BIG;
  const itemsPerRow = isBig ? 1 : 3;
  const rowCount = useMemo(
    () => (isBig ? articles.length : Math.ceil(articles.length / itemsPerRow)),
    [articles.length, isBig, itemsPerRow],
  );

  const rowRender = useCallback(
    ({ index, key, style }: ListRowProps) => {
      const items = [];
      const fromIndex = index * itemsPerRow;
      const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

      for (let i = fromIndex; i < toIndex; i += 1) {
        items.push(
          <ArticleListItem article={articles[i]} view={view} target={target} key={`str${i}`} className={cls.card} />,
        );
      }

      return (
        <div key={key} style={style} className={cls.row}>
          {items}
        </div>
      );
    },
    [articles, itemsPerRow, target, view],
  );

  // const renderList = (article: Article) => (
  //   <ArticleListItem key={article.id} article={article} target={String(target)} view={view} className={cls.card} />
  // );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames({ cls: cls.ArticleList, additional: [className, cls[view]] })}>
        <Text text={t('ARTICLES IS NOT DEFINED!')} size={TextSize.L} />
      </div>
    );
  }

  return (
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
      {({ height, width, registerChild, onChildScroll, isScrolling, scrollTop }) => (
        <div ref={registerChild} className={classNames({ cls: cls.ArticleList, additional: [className, cls[view]] })}>
          <List
            height={height ?? 700}
            rowCount={rowCount}
            rowHeight={isBig ? 700 : 330}
            rowRenderer={rowRender}
            width={width ? width - 80 : 700}
            autoHeight
            onScroll={onChildScroll}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
          />
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});
