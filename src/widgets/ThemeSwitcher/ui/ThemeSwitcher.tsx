import { FC } from 'react';
import { Theme, useTheme } from '../../../app';
import {
  classNames, LightIcon, DarkIcon, Button, ThemeButton,
} from '../../../shared';
// import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { theme, toggleTheme } = useTheme();
  const { className } = props;

  return (
    <Button
      className={classNames({ additional: [className] })}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
