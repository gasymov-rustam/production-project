import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getScrollRestorationByPath, scrollRestorationActions } from '../../features/ScrollRestoration';
import { classNames, useAppDispatch, useInfiniteScroll, useInitialEffect, useThrottle } from '../../shared/lib';

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
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const currentScroll = useSelector(getScrollRestorationByPath(pathname));

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollRestorationActions.setScrollPosition({ position: e.currentTarget.scrollTop, path: pathname }));
  }, 500);

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = currentScroll;
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames({ cls: cls.PageWrapper, additional: [className] })}
      onScroll={onScroll}
    >
      {children}

      {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
    </section>
  );
};
