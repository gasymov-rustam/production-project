import { memo } from 'react';
import { Theme, useTheme } from '../../../app';
import { classNames, LightIcon, DarkIcon, Button, ButtonTheme } from '../../../shared';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
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
});
