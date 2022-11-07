import { memo } from 'react';

import { Theme, useTheme } from '../../../app';
import { Button, ButtonTheme, DarkIcon, LightIcon, classNames } from '../../../shared';

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
