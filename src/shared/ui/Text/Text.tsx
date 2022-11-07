import { memo } from 'react';

import { classNames } from '../../lib';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo(
  ({
    className = '',
    title,
    text,
    size = TextSize.M,
    theme = TextTheme.PRIMARY,
    align = TextAlign.CENTER,
  }: TextProps) => (
    <div
      className={classNames({
        cls: cls.Text,
        additional: [className, cls[theme], cls[align], cls[size]],
      })}
    >
      {title && <div className={cls.title}>{title}</div>}
      {text && <div className={cls.text}>{text}</div>}
    </div>
  ),
);
