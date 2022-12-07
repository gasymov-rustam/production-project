import { HTMLAttributes, ReactNode } from 'react';

import { classNames } from '../../lib';

import cls from './Card.module.scss';

export enum CardTheme {
  'NORMAL' = 'normal',
  'OUTLINED' = 'outlined',
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  theme?: CardTheme;
  fullWidth?: boolean;
}

export const Card = (props: CardProps) => {
  const { className = '', children, theme = CardTheme.NORMAL, fullWidth, ...otherProps } = props;

  return (
    <div
      className={classNames({
        cls: cls.Card,
        mods: { [cls.fullWidth]: fullWidth },
        additional: [className, cls[theme]],
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
};
