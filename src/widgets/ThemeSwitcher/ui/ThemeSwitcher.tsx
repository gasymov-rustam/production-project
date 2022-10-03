import { FC } from 'react';
import { Theme, useTheme } from '../../../app';
import { classNames, LightIcon, DarkIcon, Button, ButtonTheme } from '../../../shared';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { theme, toggleTheme } = useTheme();
  const { className } = props;

  return (
    <Button
      className={classNames({ additional: [className] })}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
