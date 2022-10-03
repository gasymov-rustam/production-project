import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../lib';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, theme, square, size = ButtonSize.M, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button
      type='button'
      className={classNames({ cls: cls.Button, additional: [className, cls[theme]], mods })}
      {...otherProps}
    >
      {children}
    </button>
  );
};
