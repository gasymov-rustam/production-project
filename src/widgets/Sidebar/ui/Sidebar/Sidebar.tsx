import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { LangSwitcher } from '../../../../features/LangSwitcher';
import { ThemeSwitcher } from '../../../../features/ThemeSwitcher';
import { Button, ButtonSize, ButtonTheme, HorizontalStack, VerticalStack, classNames } from '../../../../shared';
import { getSidebarItems } from '../../model';
import { SidebarItem } from '../SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className = '' } = props;
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () => sidebarItemsList?.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />),
    [collapsed, sidebarItemsList],
  );

  return (
    <aside
      data-testid="sidebar"
      className={classNames({
        cls: cls.Sidebar,
        mods: { [cls.collapsed]: collapsed },
        additional: [className],
      })}
    >
      <Button
        type="button"
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <VerticalStack role="navigation" gap="8" className={cls.items}>
        {itemsList}
      </VerticalStack>

      <HorizontalStack justify="center" max className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </HorizontalStack>
    </aside>
  );
});
