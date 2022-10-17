import { memo, useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme, classNames } from '../../../../shared';
import { LangSwitcher } from '../../../LangSwitcher';
import { ThemeSwitcher } from '../../../ThemeSwitcher';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      SidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed]
  );

  return (
    <div
      data-testid='sidebar'
      className={classNames({
        cls: cls.Sidebar,
        mods: { [cls.collapsed]: collapsed },
        additional: [className],
      })}
    >
      <Button
        type='button'
        data-testid='sidebar-toggle'
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>{itemsList}</div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
});
