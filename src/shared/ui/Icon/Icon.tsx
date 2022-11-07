import { SVGProps, VFC, memo } from 'react';

import { classNames } from '../../lib';

import cls from './Icon.module.scss';

interface IconProps {
  Svg: VFC<SVGProps<SVGAElement>>;
  className?: string;
}

export const Icon = memo((props: IconProps) => {
  const { Svg, className = '' } = props;

  return <Svg className={classNames({ cls: cls.Icon, additional: [className] })} />;
});
