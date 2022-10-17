import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme, classNames } from '../../../../shared';
import type { SidebarItemType } from '../../model/items';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = ({ item, collapsed }) => {
  const { t } = useTranslation(item.namespace);

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames({ cls: cls.item, mods: { [cls.collapsed]: collapsed } })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
};
