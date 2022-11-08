import { ReactNode } from 'react';

import { classNames } from '../../lib';

import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
  className?: string;
  children?: ReactNode;
}

export const PageWrapper = (props: PageWrapperProps) => {
  const { className = '', children } = props;

  return <section className={classNames({ cls: cls.PageWrapper, additional: [className] })}>{children}</section>;
};
