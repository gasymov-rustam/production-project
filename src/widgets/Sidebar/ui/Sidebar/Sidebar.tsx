import { FC, useState } from 'react';
import { classNames } from '../../../../shared';
import { LangSwitcher } from '../../../LangSwitcher';
import { ThemeSwitcher } from '../../../ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames({
        cls: cls.Sidebar,
        mods: { [cls.collapsed]: collapsed },
        additional: [className],
      })}
    >
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
      <button type="button" onClick={onToggle}>
        toggle
      </button>
    </div>
  );
};
