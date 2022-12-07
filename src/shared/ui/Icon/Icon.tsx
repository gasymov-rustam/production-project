import { FC, PropsWithChildren, SVGProps, memo } from 'react';

import { classNames } from '../../lib';

import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGAElement> {
  Svg: PropsWithChildren<FC<SVGProps<SVGAElement>>>;
  className?: string;
  inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
  const { Svg, className = '', inverted, ...otherProps } = props;

  return (
    <Svg
      className={classNames({ cls: cls.Icon, mods: { [cls.inverted]: inverted }, additional: [className] })}
      {...otherProps}
    />
  );
});
