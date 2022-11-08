import { memo } from 'react';

import { Button, ButtonTheme, Icon, ListIcon, TiledIcon, classNames } from '../../../../shared';
import { ArticleView } from '../../model';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className = '', view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames({ cls: cls.ArticleViewSelector, additional: [className] })}>
      {viewTypes.map((viewType) => (
        <Button key={viewType.view} theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)}>
          <Icon Svg={viewType.icon} className={classNames({ mods: { [cls.selected]: viewType.view === view } })} />
        </Button>
      ))}
    </div>
  );
});
