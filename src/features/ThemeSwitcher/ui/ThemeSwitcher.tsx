import { memo } from 'react';

import { Button, ButtonTheme, DarkIcon, LightIcon, Theme, classNames, useTheme } from '../../../shared';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const { className = '' } = props;

  return (
    <Button className={classNames({ additional: [className] })} theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
