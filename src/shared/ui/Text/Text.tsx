import { classNames } from '../../lib';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = ({ className, title, text, theme = TextTheme.PRIMARY }: TextProps) => (
  <div className={classNames({ cls: cls.Text, additional: [className, cls[theme]] })}>
    {title && <div className={cls.title}>{title}</div>}
    {text && <div className={cls.text}>{text}</div>}
  </div>
);
