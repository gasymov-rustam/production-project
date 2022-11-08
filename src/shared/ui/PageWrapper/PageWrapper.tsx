import { MutableRefObject, ReactNode, useRef } from 'react';

import { classNames, useInfiniteScroll } from '../../lib';

import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

export const PageWrapper = (props: PageWrapperProps) => {
  const { className = '', children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames({ cls: cls.PageWrapper, additional: [className] })}>
      {children}

      <div ref={triggerRef} />
    </section>
  );
};
